<script setup lang="ts">
  import { ref } from 'vue';
  import debounce from 'lodash.debounce';
  import { useSearchService } from '@/services/searchService';

  const inputText = ref('');
  const searchService = useSearchService();
  const debouncedSearch = debounce(() => searchService.search(inputText.value), 500);

  function onInputChange(e: Event) {
    const value = (e.target as HTMLInputElement).value.trim();
    inputText.value = value;
    if (!value) {
      searchService.clearResults();
    } else {
      debouncedSearch();
    }
  }
</script>

<template>
  <input
    type="text"
    class="search-input"
    @input="onInputChange"
    :value="inputText"
    placeholder="Введите название места..."
  />
</template>

<style lang="scss" scoped>
  $primary-color: #007bff;
  $hover-color: #0056b3;

  .search-input {
    width: 100%;
    padding: $spacing-sm $spacing-md;
    font-size: $text-md;
    color: $color-text-primary;
    background-color: #fff;
    border: 2px solid #ddd;
    border-radius: $border-radius;
    outline: none;
    transition:
      border-color $transition-speed,
      box-shadow $transition-speed;

    &:focus {
      border-color: $primary-color;
      box-shadow: 0 0 8px rgba($primary-color, 0.5);
    }

    &::placeholder {
      color: #aaa;
    }
  }
</style>
