// utils/htmlProcessor.js (client)
import DOMPurify from 'dompurify';

export function parseFullHtml(rawHtml) {
  if (!rawHtml) return { bodyHtml: '', title: '', metaDescription: '', firstImage: '' };

  const parser = new DOMParser();
  const doc = parser.parseFromString(rawHtml, 'text/html');

  const title = (doc.querySelector('title')?.textContent || doc.querySelector('h1')?.textContent || '').trim();
  const metaDescription = doc.querySelector('meta[name="description"]')?.getAttribute('content') || '';
  const firstImg = doc.querySelector('img')?.src || '';

  // get body innerHTML (if <body> exists) else try entire document's innerHTML
  const bodyHtml = doc.body ? doc.body.innerHTML : rawHtml;

  // sanitize (client-side). Keep tags you need (tables, images, links etc.)
  const clean = DOMPurify.sanitize(bodyHtml, {
    ALLOWED_TAGS: [
      'h1','h2','h3','h4','h5','h6','p','a','ul','ol','li','img','strong','em','table','thead','tbody','tr','th','td','blockquote','pre','code','hr','br','div','span'
    ],
    ALLOWED_ATTR: ['href','src','alt','title','width','height','style','target','rel'],
  });

  return { bodyHtml: clean, title, metaDescription, firstImg };
}
