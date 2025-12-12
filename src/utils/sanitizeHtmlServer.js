import sanitizeHtml from 'sanitize-html';

export function sanitizeBlogHtml(html = '') {
  return sanitizeHtml(html, {
    allowedTags: sanitizeHtml.defaults.allowedTags.concat([
      'img',
      'table',
      'thead',
      'tbody',
      'tr',
      'th',
      'td'
    ]),
    allowedAttributes: {
      ...sanitizeHtml.defaults.allowedAttributes,
      img: ['src', 'alt', 'title', 'width', 'height', 'style'],
      a: ['href', 'target', 'rel', 'title'],
      '*': ['style']
    },
    allowedSchemesByTag: {
      img: ['http', 'https', 'data']
    }
  });
}
