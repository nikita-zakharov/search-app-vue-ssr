// API docs https://nominatim.org/release-docs/latest/api/Search/

export interface SearchItemData {
  place_id: number;
  display_name: string;
  name: string;
  class: string;
  type: string;
  importance: number;
  lat: string;
  lon: string;
  licence: string;
  osm_id: number;
  osm_type: string;
}

const searchUrl = 'https://nominatim.openstreetmap.org/search';
const limit = 40; // Limit the maximum number of returned results. Cannot be more than 40.

async function search(query: string): Promise<SearchItemData[]> {
  try {
    const url = new URL(searchUrl);
    url.searchParams.append('q', query);
    url.searchParams.append('format', 'json');
    url.searchParams.append('limit', limit.toString());

    const response = await fetch(url.toString(), {});

    if (!response.ok) {
      throw new Error(`Ошибка HTTP: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Ошибка при выполнении запроса:', error);
    return [];
  }
}

export const nominatimApi = {
  search,
};
