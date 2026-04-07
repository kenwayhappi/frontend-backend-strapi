const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://127.0.0.1:1337';

export async function fetchStrapi(endpoint: string) {
  try {
    const url = new URL(`${STRAPI_URL}/api/${endpoint}`);
    url.searchParams.append('populate', '*');
    url.searchParams.append('status', 'published');

    const response = await fetch(url.toString(), {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      cache: 'no-store',
    });

    if (!response.ok) return null;
    const res = await response.json();

    // --- FILTRE ANTI-DOUBLONS INTELLIGENT ---
    if (res && res.data && Array.isArray(res.data)) {
      const uniqueData = [];
      const seenItems = new Set();

      for (const item of res.data) {
        // On essaie de trouver un identifiant textuel (nom ou title)
        // On vérifie dans item (v5) et item.attributes (v4)
        const name = item.nom || item.title || item.attributes?.nom || item.attributes?.title;

        // Si on a un nom, on l'utilise pour filtrer, sinon on utilise l'ID unique
        const uniqueKey = name ? name.toLowerCase().trim() : item.id.toString();

        if (!seenItems.has(uniqueKey)) {
          seenItems.add(uniqueKey);
          uniqueData.push(item);
        }
      }
      res.data = uniqueData;
    }

    return res;
  } catch (error) {
    console.error(`Erreur fetch ${endpoint}:`, error);
    return null;
  }
}

// Formatters ont été déplacés vers @/lib/formatters.ts pour forcer Next.js à recompiler.