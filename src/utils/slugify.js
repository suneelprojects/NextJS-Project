export function slugify(title) {
  if (!title) return '';
  
  return title
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '') // Remove special characters except word chars, spaces, and -
    .replace(/[\s_-]+/g, '-') // Replace one or more spaces or _ or - with single -
    .replace(/^-+|-+$/g, ''); // Remove leading or trailing -
}
