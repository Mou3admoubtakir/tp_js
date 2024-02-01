<script setup lang="ts">
import ImageAttachement from "./attachements/ImageAttachement.vue";
import YoutubeAttachement from "./attachements/YoutubeAttachement.vue";
import VideoAttachement from "./attachements/VideoAttachement.vue";
import WebsiteAttachement from "./attachements/WebsiteAttachement.vue";
import type { MessageAttachement, YoutubeMessageAttachement } from "@/modules/message/models/domain";

defineProps<{
  attachements: MessageAttachement[];
  attachementYoutube: YoutubeMessageAttachement;
}>();

const getAttachementComponent = (attachement: MessageAttachement) => {
  switch (attachement.type) {
    case "youtube":
      return YoutubeAttachement;
    case "website":
      return WebsiteAttachement;
    case "video":
      return VideoAttachement;
    case "image":
      return ImageAttachement;
    default:
      return null;
  }
};

</script>

<template>
  <div class="message-attachements">
    <template v-for="(attachement, i) in attachements" :key="i">
      <!-- TODO: pe -->
      <component :is="getAttachementComponent(attachement)" :attachement="attachement" />
    </template>
  </div>
</template>
<style lang="scss">
@use "sass:map";
@use "@/app/styles/var";

.message-attachements {
  padding-top: map-get(var.$spaces, "2xs");
  display: flex;
  flex-wrap: wrap;
  gap: map-get(var.$spaces, "2xs");
}
</style>
