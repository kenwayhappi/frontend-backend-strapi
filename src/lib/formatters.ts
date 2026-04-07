export function getStrapiText(data: any): string {
  if (!data) return "";

  // Cas 1 : Format String
  if (typeof data === 'string') return data;

  // Cas 2 : Blocs JSON (Array v5)
  if (Array.isArray(data)) {
    return data
      .map((block: any) => {
        if (block.type === 'paragraph' || block.children) {
          return block.children
            .map((child: any) => child.text || "")
            .join("");
        }
        return "";
      })
      .join("\n");
  }

  // Cas 3 : Objet riche spécifique
  if (typeof data === 'object' && data.text) {
    return data.text;
  }

  return "";
}

export function getStrapiImageUrl(media: any): string | undefined {
  if (!media) return undefined;
  
  if (Array.isArray(media)) {
    if (media.length === 0) return undefined;
    const firstMedia = media[0];
    return firstMedia?.url || firstMedia?.formats?.large?.url || firstMedia?.formats?.medium?.url;
  }
  
  if (media.data) {
    const dataObj = Array.isArray(media.data) ? media.data[0] : media.data;
    if (dataObj?.attributes?.url) return dataObj.attributes.url;
  }
  
  return media.url || media.formats?.large?.url || media.formats?.medium?.url;
}
