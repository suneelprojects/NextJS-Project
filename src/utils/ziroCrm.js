// utils/ziroCrm.js
// Centralized helper to submit leads to Ziro Digital CRM (same service & schema as ZiroChatWidget)

const ZIRO_ENDPOINT = "https://auth.ziro.digital/functions/v1/website-chat-progress-save";
const ZIRO_BRANCH = "socialprachar";
const LS_VISITOR_KEY = "ziro_chat_visitor_id";
const LS_ATTRIBUTION_KEY = "ziro_first_touch_attribution";

function uuidv4() {
  if (typeof crypto !== "undefined") {
    if (crypto.randomUUID) return crypto.randomUUID();
    if (crypto.getRandomValues) {
      const b = new Uint8Array(16);
      crypto.getRandomValues(b);
      b[6] = (b[6] & 0x0f) | 0x40;
      b[8] = (b[8] & 0x3f) | 0x80;
      const h = Array.from(b, (x) => x.toString(16).padStart(2, "0"));
      return `${h.slice(0, 4).join("")}-${h.slice(4, 6).join("")}-${h
        .slice(6, 8)
        .join("")}-${h.slice(8, 10).join("")}-${h.slice(10, 16).join("")}`;
    }
  }
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (ch) => {
    const r = (Math.random() * 16) | 0;
    const v = ch === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

export function getOrCreateVisitorId() {
  if (typeof window === "undefined") return uuidv4();
  try {
    const existing = localStorage.getItem(LS_VISITOR_KEY);
    if (existing && /^[0-9a-f-]{36}$/i.test(existing)) return existing;
  } catch {
    /* ignore blocked storage */
  }
  const fresh = uuidv4();
  try {
    localStorage.setItem(LS_VISITOR_KEY, fresh);
  } catch {
    /* ignore blocked storage */
  }
  return fresh;
}

function safeStorageGet(key) {
  if (typeof window === "undefined") return null;
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}

function safeStorageSet(key, value) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(key, value);
  } catch {
    // ignore
  }
}

export function readUtm() {
  if (typeof window === "undefined") {
    return {
      source_page: "/",
      page_url: null,
      referrer_url: null,
      utm_source: null,
      utm_medium: null,
      utm_campaign: null,
      utm_term: null,
      utm_content: null,
      utm_adgroup: null,
      gclid: null,
      gbraid: null,
      wbraid: null,
    };
  }

  const params = new URLSearchParams(window.location.search);

  const current = {
    source_page: window.location.pathname || "/",
    page_url: window.location.href || null,
    referrer_url: document.referrer || null,

    utm_source: params.get("utm_source"),
    utm_medium: params.get("utm_medium"),
    utm_campaign: params.get("utm_campaign"),

    utm_term:
      params.get("utm_term") ||
      params.get("keyword") ||
      params.get("term") ||
      params.get("search_term") ||
      params.get("searchterm"),

    utm_content: params.get("utm_content"),

    utm_adgroup:
      params.get("utm_adgroup") ||
      params.get("adgroup"),

    gclid: params.get("gclid"),
    gbraid: params.get("gbraid"),
    wbraid: params.get("wbraid"),
  };

  let firstTouch = {};
  try {
    const saved = safeStorageGet(LS_ATTRIBUTION_KEY);
    firstTouch = saved ? JSON.parse(saved) : {};
  } catch {
    firstTouch = {};
  }

  if (firstTouch.source_page || firstTouch.page_url) {
    delete firstTouch.source_page;
    delete firstTouch.page_url;
    safeStorageSet(LS_ATTRIBUTION_KEY, JSON.stringify(firstTouch));
  }

  const hasCurrentCampaignParams = Boolean(
    current.utm_source ||
    current.utm_medium ||
    current.utm_campaign ||
    current.utm_term ||
    current.utm_content ||
    current.utm_adgroup ||
    current.gclid ||
    current.gbraid ||
    current.wbraid
  );

  const hasSavedCampaignParams = Boolean(
    firstTouch.utm_source ||
    firstTouch.utm_medium ||
    firstTouch.utm_campaign ||
    firstTouch.utm_term ||
    firstTouch.utm_content ||
    firstTouch.utm_adgroup ||
    firstTouch.gclid ||
    firstTouch.gbraid ||
    firstTouch.wbraid
  );

  if (!safeStorageGet(LS_ATTRIBUTION_KEY) || (hasCurrentCampaignParams && !hasSavedCampaignParams)) {
    const newTouch = {
      landing_page_url: current.page_url,
      referrer_url: firstTouch.referrer_url || current.referrer_url,

      utm_source: current.utm_source || firstTouch.utm_source || null,
      utm_medium: current.utm_medium || firstTouch.utm_medium || null,
      utm_campaign: current.utm_campaign || firstTouch.utm_campaign || null,
      utm_term: current.utm_term || firstTouch.utm_term || null,
      utm_content: current.utm_content || firstTouch.utm_content || null,
      utm_adgroup: current.utm_adgroup || firstTouch.utm_adgroup || null,

      gclid: current.gclid || firstTouch.gclid || null,
      gbraid: current.gbraid || firstTouch.gbraid || null,
      wbraid: current.wbraid || firstTouch.wbraid || null,
    };
    safeStorageSet(LS_ATTRIBUTION_KEY, JSON.stringify(newTouch));
    firstTouch = newTouch;
  }

  return {
    source_page: current.source_page,
    page_url: current.page_url,
    referrer_url: firstTouch.referrer_url || current.referrer_url,

    utm_source: firstTouch.utm_source || current.utm_source,
    utm_medium: firstTouch.utm_medium || current.utm_medium,
    utm_campaign: firstTouch.utm_campaign || current.utm_campaign,
    utm_term: firstTouch.utm_term || current.utm_term,
    utm_content: firstTouch.utm_content || current.utm_content,
    utm_adgroup: firstTouch.utm_adgroup || current.utm_adgroup,

    gclid: firstTouch.gclid || current.gclid,
    gbraid: firstTouch.gbraid || current.gbraid,
    wbraid: firstTouch.wbraid || current.wbraid,
  };
}

/**
 * Submit lead details to Ziro Digital CRM in the same schema as ZiroChatWidget.
 *
 * @param {Object} leadData Form data (e.g. { name, phone, email, course, ... })
 * @param {Object} [options] Optional overrides: { step, branch, formType }
 * @returns {Promise<{ ok: boolean, status: number, data?: any }>}
 */
export async function submitToZiroCrm(leadData, options = {}) {
  try {
    const visitorSessionId = getOrCreateVisitorId();
    const context = readUtm();

    const normalizedData = {
      name: leadData.name || leadData.fullName || "",
      phone: (leadData.phone || leadData.mobile || "").toString().replace(/\D/g, ""),
      email: (leadData.email || "").toString().trim().toLowerCase(),
      course_interest: leadData.course_interest || leadData.course || leadData.Course || "",
      ...leadData,
      form_type: options.formType || leadData.formType || leadData.form_type || "Website Form",
      submitted_at: new Date().toISOString(),
    };

    const payload = {
      visitor_session_id: visitorSessionId,
      step: options.step || 5,
      data: normalizedData,
      context,
      branch: options.branch || ZIRO_BRANCH,
    };

    console.log("🚀 Submitting lead to Ziro Digital CRM:", payload);

    const response = await fetch(options.endpoint || ZIRO_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    console.log("✅ Ziro Digital CRM Response:", response.status);
    return { ok: response.ok, status: response.status };
  } catch (error) {
    console.warn("⚠️ Ziro Digital CRM Submission Failed:", error);
    return { ok: false, status: 0, error };
  }
}
