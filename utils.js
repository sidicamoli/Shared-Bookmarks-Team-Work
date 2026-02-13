export function sortBookmarksByDate(bookmarks) {
  return [...bookmarks].sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );
}

export function fixUrl(input) {
  let text = String(input).trim();

  if (!text) return null;

  if ((text.startsWith("http:") || text.startsWith("https:")) && !text.includes("://")) {
    text = text.replace(":", "://");
  }

  if (!text.startsWith("http://") && !text.startsWith("https://")) {
    text = `https://${text}`;
  }

  try {
    const url = new URL(text);

    if (url.protocol !== "http:" && url.protocol !== "https:") return null;

    const host = url.hostname;


    if (!host) return null;
    if (!host.includes(".")) return null;
    if (host.startsWith(".") || host.endsWith(".")) return null;

    return url.href;
  } catch {
    return null;
  }
}
