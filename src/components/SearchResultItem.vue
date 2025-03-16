<script setup lang="ts">
  interface Props {
    data: {
      display_name: string;
      type: string;
      class: string;
    };
  }

  const props = defineProps<Props>();
</script>

<template>
  <div class="result-item">
    <div class="result-item__name">
      {{ props.data.display_name }}
    </div>
    <div class="result-item__type">{{ props.data.type }}, {{ props.data.class }}</div>
  </div>
</template>

<style lang="scss" scoped>
  .result-item {
    padding: $spacing-xs $spacing-md;
    margin: $spacing-xs 0;
    border-radius: $border-radius;
    background-color: #f0f0f0;
    width: 100%;

    &__type {
      color: $color-text-secondary;
      font-size: $text-sm;
    }
  }
</style>
