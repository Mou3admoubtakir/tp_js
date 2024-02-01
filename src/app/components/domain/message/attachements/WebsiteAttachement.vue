<script setup lang="ts">
import { useProvider } from "@/app/platform";
import { ref, onMounted } from "vue";
import { HtmlOgParser } from "@/modules/infrastructure/HtmlOgParser";
import type { WebsiteMessageAttachement } from "@/modules/message/models/domain";

interface WebsiteMetadata {
  domain: string;
  title?: string;
  description?: string;
  imageUrl?: string;
}

const [ogParser] = useProvider([HtmlOgParser]);

const props = defineProps<{
  attachement: WebsiteMessageAttachement;
}>();

const metadata = ref<WebsiteMetadata | null>(null);

onMounted(async () => {
  // Fetch metadata when the component is mounted
  metadata.value = await fetchMetadata(props.attachement.url);
});

// Function to fetch metadata using HtmlOgParser
const fetchMetadata = async (url: string): Promise<WebsiteMetadata | null> => {
  try {
    const parsedMetadata = await ogParser.parse(url);

    // Check if parsedMetadata is not null before accessing properties
    if (parsedMetadata) {
      console.log("site url dectected")
      return {
        domain: parsedMetadata.domain || parsedMetadata.domain || "",
        title: parsedMetadata.title || "",
        description: parsedMetadata.description || "",
        imageUrl: parsedMetadata.imageUrl || "",
      };
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error fetching website metadata:", error);
    return null;
  }
};
</script>

<template>
  <div v-if="metadata" class="website-attachement light-card">
    <div class="website-attachement-domain">{{ metadata.domain }}</div>

    <div class="website-attachement-title">{{ metadata.title }}</div>

    <div class="website-attachement-description">{{ metadata.description }}</div>

    <div v-if="metadata.imageUrl" class="website-attachement-image">
      <img :src="metadata.imageUrl" alt="Website Preview" />
    </div>
  </div>
  <div v-else>
    <!-- Handle loading or error state -->
    Loading metadata...
  </div>
</template>

<style lang="scss" scoped>
@use "sass:map";
@use "@/app/styles/var";

.website-attachement {
  max-width: 450px;
  .website-attachement-domain {
    font-size: 14px;
    color: var.$color-dark-gray;
  }
  .website-attachement-image {
    max-width: 350px;
    margin-top: map-get(var.$spaces, "2xs");
    img {
      width: 100%;
      display: block;
    }
  }
}
</style>
