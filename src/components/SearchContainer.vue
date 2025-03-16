<script setup lang="ts">
  import { storeToRefs } from 'pinia';
  import { useSearchStore } from '@/store/search';
  import SearchInput from '@/components/SearchInput.vue';
  import SearchResultList from '@/components/SearchResultList.vue';

  const searchStore = useSearchStore();
  const { results } = storeToRefs(searchStore);
</script>

<template>
  <div class="search-container">
    <h1 class="search-title">Поиск мест по описанию или адресу</h1>
    <SearchInput />
    <SearchResultList :data="results" />
  </div>
</template>

<style lang="scss" scoped>
  .search-container {
    max-width: 650px;
    margin: $spacing-lg auto;
  }

  .search-title {
    text-align: center;
  }
</style>
