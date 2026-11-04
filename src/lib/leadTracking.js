// Only hashed matching data crosses the thank-you navigation; never put contacts in URLs.
const KEY = 'sp_pending_lead_conversion';
const MAX_AGE = 10 * 60 * 1000;
export function normalizePhone(value) {
  const digits = value.replace(/\D/g, '');
  return /^[6-9]\d{9}$/.test(digits) ? `+91${digits}` : /^91[6-9]\d{9}$/.test(digits) ? `+${digits}` : '';
}
async function hash(value) {
  const digest = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(value));
  return Array.from(new Uint8Array(digest), b => b.toString(16).padStart(2, '0')).join('');
}
export async function prepareLeadConversion({ email, phone, source, consent, id }) {
  try {
    const userData = {};
    if (consent) {
      let normalizedEmail = email.trim().toLowerCase();
      const [local, domain] = normalizedEmail.split('@');
      if (domain === 'gmail.com' || domain === 'googlemail.com') normalizedEmail = `${local.replace(/\./g, '')}@${domain}`;
      const normalizedPhone = normalizePhone(phone);
      if (normalizedEmail) userData.sha256_email_address = await hash(normalizedEmail);
      if (normalizedPhone) userData.sha256_phone_number = await hash(normalizedPhone);
    }
    sessionStorage.setItem(KEY, JSON.stringify({ id, source, userData, createdAt: Date.now() }));
  } catch { /* Tracking must never prevent CRM success or navigation. */ }
}
export function trackSavedLead() {
  const destination = process.env.NEXT_PUBLIC_GOOGLE_ADS_LEAD_SEND_TO;
  if (!/^AW-\d+\/[A-Za-z0-9_-]+$/.test(destination || '') || typeof window.gtag !== 'function') return;
  try {
    const raw = sessionStorage.getItem(KEY);
    if (!raw) return;
    const lead = JSON.parse(raw);
    if (!lead.id || Date.now() - lead.createdAt > MAX_AGE) { sessionStorage.removeItem(KEY); return; }
    // Consume before dispatch so refresh / repeated Script readiness cannot count twice.
    sessionStorage.removeItem(KEY);
    window.gtag('set', 'user_data', lead.userData);
    window.gtag('event', 'conversion', { send_to: destination, transaction_id: lead.id });
    window.gtag('set', 'user_data', {});
  } catch { /* Storage or analytics may be unavailable. */ }
}
export async function requireSavedResponse(response) {
  if (!response.ok) throw new Error('Save request failed');
  if ((response.headers.get('content-type') || '').includes('application/json')) {
    const result = await response.json();
    if (result?.success === false || result?.ok === false || result?.error) throw new Error('Save was rejected');
  }
}
