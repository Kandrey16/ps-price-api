export function normalizeImageSize(url, size = 306) {
  if (!url) return null;

  return url.replace(/w=\d+/i, `w=${size}`).replace(/h=\d+/i, `h=${size}`);
}
