import { nominatimApi } from '@/api/nominatim';
import { useSearchStore } from '@/store/search';

const defaultErrorMessage = 'Ошибка при выполнении поиска';

const search = async (query: string) => {
  const searchStore = useSearchStore();

  if (!query.trim()) {
    return;
  }

  try {
    searchStore.setLoading(true);
    const result = await nominatimApi.search(query);
    searchStore.setResults(result);
  } catch (error) {
    console.error(defaultErrorMessage, error);
    searchStore.setError(defaultErrorMessage);
  } finally {
    searchStore.setLoading(false);
  }
};

const clearResults = () => {
  const searchStore = useSearchStore();
  searchStore.clearResults();
};

export function useSearchService() {
  return { search, clearResults };
}
