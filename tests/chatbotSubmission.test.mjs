import { readFile } from 'node:fs/promises';
import assert from 'node:assert/strict';
import test from 'node:test';
const source=await readFile(new URL('../src/components/ZiroChatWidget.jsx',import.meta.url),'utf8');
const body=source.split('  const submitEmail = async () => {')[1].split('\n  };')[0];
const AF=Object.getPrototypeOf(async function(){}).constructor;
const names=['submissionLock','data','isValidName','isValidIndianPhone','isValidEmail','setError','setSubmitting','question','postStep','savedSteps','prepareLeadConversion','matchingConsent','visitorIdRef','window'];
function fixture(failStep) {
 const lock={current:false}, saved={current:new Map()}, requests=[], events=[], errors=[];
 let fail=failStep;
 const fn=new AF(...names,body);
 const run=()=>fn(lock,{name:'Test User',phone:'9876543210',email:'a@b.com',course_interest:'AI',student_status:null},()=>true,()=>true,()=>true,e=>errors.push(e),()=>{},'Fees?',async(n,p)=>{requests.push(n); if(n===fail)return false; return true;},saved,async()=>events.push('tracking'),true,{current:'visitor'}, {location:{search:'?gclid=abc',assign:url=>events.push(url)}});
 return {run,requests,events,errors,recover:()=>{fail=null;}};
}
test('sequential writes complete before tracking and redirect; repeat click blocked',async()=>{
 const f=fixture(); await Promise.all([f.run(),f.run()]);
 assert.deepEqual(f.requests,[1,2,3,4,5]);
 assert.deepEqual(f.events,['tracking','/thank-you?gclid=abc']);
});
test('failed step prevents redirect; retry skips acknowledged unchanged steps',async()=>{
 const f=fixture(4); await f.run(); assert.deepEqual(f.events,[]); assert.ok(f.errors.at(-1));
 f.recover(); await f.run(); assert.deepEqual(f.requests,[1,2,3,4,4,5]); assert.equal(f.events.at(-1),'/thank-you?gclid=abc');
});
