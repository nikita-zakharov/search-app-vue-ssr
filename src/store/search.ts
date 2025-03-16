import { defineStore } from 'pinia';
import { SearchItemData } from '@/api/nominatim';

interface State {
  loading: boolean;
  error: null | string;
  results: SearchItemData[];
}

export const useSearchStore = defineStore('search', {
  state: (): State => ({
    loading: false,
    error: null,
    results: [],
  }),
  actions: {
    setLoading(isLoading: boolean) {
      this.loading = isLoading;
    },
    setError(errorMessage: string) {
      this.error = errorMessage;
    },
    setResults(results: SearchItemData[]) {
      this.results = results;
    },
    clearResults() {
      this.results = [];
    },
    resetError() {
      this.error = null;
    },
  },
});
