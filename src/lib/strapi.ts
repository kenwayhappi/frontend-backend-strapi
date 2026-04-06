const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';

export async function fetchStrapi(endpoint: string) {
  try {
    const response = await fetch(`${STRAPI_URL}/api/${endpoint}?populate=*`, {
      next: { revalidate: 60 }, // ISR
    });
    if (!response.ok) return null;
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching ${endpoint}:`, error);
    return null;
  }
}

/**
 * Strapi v5 blocks (Rich Text) extraction helper
 */
export function getStrapiText(blocks: any[] | null | undefined): string {
  if (!blocks || !Array.isArray(blocks)) return "";
  return blocks
    .map((block: any) => {
      if (block.children && Array.isArray(block.children)) {
        return block.children.map((child: any) => child.text).join("");
      }
      return "";
    })
    .join("\n");
}
