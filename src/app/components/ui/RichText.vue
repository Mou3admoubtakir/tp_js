<script setup lang="ts">
import type { RichText } from "@/modules/message/models/domain";

defineProps<{
  text: RichText;
}>();
</script>

<template>
  <div class="rich-text">
    <template v-for="(token, i) in text.tokens" :key="i">
      <span v-if="token.type === 'rich'" v-html="token.value"></span>
      <span v-else>{{ token.value }}</span>
    </template>
  </div>
</template>
<<<<<<< HEAD

  <style scoped>
  .rich-text {
    display: flex;

    > div {
      white-space: pre;
    }
  }
  </style>
=======
<style scoped>
.rich-text {
  > div {
    white-space: pre-wrap;
  }
}
</style>
>>>>>>> 5629ba83282a2c34cc950be12200af0246327616
