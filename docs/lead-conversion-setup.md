# Lead submission and Google Ads test setup

Branch: testing/lead-redirect-and-batch-date. Do not deploy directly to main.

## Google Ads configuration (required before conversion testing)

Set the hosting build environment variable NEXT_PUBLIC_GOOGLE_ADS_LEAD_SEND_TO
using Mahesh's real event snippet, for example AW-930111032/REAL_CONVERSION_LABEL.
Do not use the example as a label. Rebuild after changing it. Without this variable,
the existing thank-you page tag stays intact but the new explicit event is inactive.
Enable enhanced conversions for the intended Google Ads action and accept its terms.
Inspect existing GTM/page-based conversion rules before enabling the new event:
use one counting strategy per lead to avoid duplicate counts. This is website lead
conversion tracking; offline qualified-lead imports are not implemented.

## Behaviour

Chatbot collects name, phone and email first, then course interest (buttons or typed),
an optional question and optional student status. It forwards the question appended
to course_interest, preserving the existing backend field schema. It does not answer
questions with AI. Every step is saved sequentially under the existing visitor ID.
On retry, unchanged acknowledged steps are skipped for this mounted widget.
Backend upsert/idempotency still needs verification; an ambiguous network failure
may mean a request saved even though the browser did not receive acknowledgement.

Enroll Now keeps the current Sheets then SalesMax destinations, with response checks.
It skips the already acknowledged Sheets request on retry. No new Ziro integration
has been assumed. HTTP 2xx with explicit JSON success:false, ok:false or error is
rejected; otherwise success relies on the existing endpoint response contract.

Both use a synchronous submission lock, keep inputs on error, and redirect only after
acknowledged saves. Watch Video retains its existing demo destination.

Optional, unchecked contact-matching consent controls enhanced data. Only normalized
SHA-256 contact hashes are held in sessionStorage for the thank-you navigation. They
expire after ten minutes and are consumed once before queuing the conversion. No
contact data is placed in query parameters or general Analytics events. Existing
site consent controls remain authoritative; this does not grant ad_storage consent.
Tracking/storage failures must not stop a successfully saved lead from redirecting.
A visitor-session ID is used for chatbot conversion deduplication; it is not a CRM
record ID. Duplicate protection across devices or cleared browser storage is not
claimed. The explicit Ads event is separate from existing page-based counting.

## Manual preview checks

- Submit each source; confirm actual CRM record and contact/course/question values.
- Block a CRM request, then retry; no thank-you on failure, inputs retained.
- Double-click submit: one active submission, with no duplicate backend writes.
- Test the chatbot on phone and laptop, long course names and free-text questions.
- Submit with and without matching consent and inspect Tag Assistant user_data.
- Confirm Google conversion destination and transaction_id, no raw contacts in URLs.
- Refresh thank-you or visit it directly: no additional new explicit conversion.
- Block storage/Google scripts: lead save and navigation must still work.
- Inspect existing GTM rules for duplicate conversion counting.

No live CRM writes or Google Ads account changes were performed during development.
