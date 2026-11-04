import { readFile } from 'node:fs/promises';
import assert from 'node:assert/strict';
import test from 'node:test';
const code = await readFile(new URL('../src/lib/leadTracking.js', import.meta.url), 'utf8');
const { normalizePhone, requireSavedResponse, prepareLeadConversion, trackSavedLead } = await import(`data:text/javascript;base64,${Buffer.from(code).toString('base64')}`);
const records = new Map();
globalThis.sessionStorage = { getItem: k => records.get(k) || null, setItem: (k,v) => records.set(k,v), removeItem: k => records.delete(k) };
const calls = [];
globalThis.window = { gtag: (...args) => calls.push(args) };
process.env.NEXT_PUBLIC_GOOGLE_ADS_LEAD_SEND_TO = 'AW-930111032/test_label';
test('normalizes Indian phone formats and rejects malformed numbers', () => {
 assert.equal(normalizePhone('9876543210'), '+919876543210');
 assert.equal(normalizePhone('+91 98765 43210'), '+919876543210');
 assert.equal(normalizePhone('123'), '');
});
test('rejects HTTP and explicit application failures', async () => {
 for (const response of [new Response('',{status:500}),Response.json({success:false}),Response.json({error:'rejected'}),Response.json({ok:false})]) await assert.rejects(requireSavedResponse(response));
 await requireSavedResponse(Response.json({success:true}));
 await requireSavedResponse(new Response(null,{status:204}));
});
test('hashes normalized contacts, consumes once, and omits raw PII', async () => {
 await prepareLeadConversion({email:' Test.User@gmail.com ',phone:'9876543210',source:'chatbot',consent:true,id:'lead-1'});
 const raw=[...records.values()][0];
 assert.ok(!raw.includes('gmail') && !raw.includes('9876543210'));
 const pending=JSON.parse(raw);
 assert.match(pending.userData.sha256_email_address,/^[a-f0-9]{64}$/);
 trackSavedLead(); trackSavedLead();
 assert.equal(calls.filter(c=>c[0]==='event').length,1);
 assert.equal(calls.find(c=>c[0]==='event')[2].transaction_id,'lead-1');
});
test('without consent no contact hashes are retained; missing label does not dispatch', async () => {
 await prepareLeadConversion({email:'test@example.com',phone:'9876543210',source:'enroll_now',consent:false,id:'lead-2'});
 assert.deepEqual(JSON.parse([...records.values()][0]).userData,{});
 delete process.env.NEXT_PUBLIC_GOOGLE_ADS_LEAD_SEND_TO;
 const count=calls.length; trackSavedLead(); assert.equal(calls.length,count);
});
test('blocked storage never rejects successful lead preparation', async () => {
 globalThis.sessionStorage.setItem=()=>{throw Error('blocked')};
 await prepareLeadConversion({email:'a@b.com',phone:'9876543210',consent:false,id:'lead-3'});
});
