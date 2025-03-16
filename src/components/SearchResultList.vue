<script setup lang="ts">
  import { storeToRefs } from 'pinia';
  import { SearchItemData } from '@/api/nominatim';
  import { useSearchStore } from '@/store/search';
  import SearchResultItem from '@/components/SearchResultItem.vue';

  interface Props {
    data: SearchItemData[];
  }

  const props = defineProps<Props>();
  const searchStore = useSearchStore();
  const { loading, error } = storeToRefs(searchStore);
</script>

<template>
  <div v-if="loading" class="loading-text">Загрузка...</div>
  <div v-else>
    <ul class="results-list" v-if="props.data.length > 0">
      <span>Количество: {{ props.data.length }}</span>
      <li v-for="item in props.data" :key="item.place_id">
        <SearchResultItem :data="item" />
      </li>
    </ul>
    <p v-else>Список пуст</p>
  </div>
  <div v-if="error" class="error-text">{{ error }}</div>
</template>

<style lang="scss" scoped>
  .loading-text {
    margin: $spacing-sm;
    font-size: $text-lg;
  }

  .error-text {
    color: $color-error;
    font-size: $text-md;
  }

  .results-list {
    list-style: none;
    margin: $spacing-sm 0 0;
    padding: $spacing-md;
    border-radius: $border-radius;
    background-color: #fff;
    max-height: 400px;
    overflow-y: auto;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
</style>
