<script setup lang="ts">
import RichTextComponent from "@/app/components/ui/RichText.vue";
import BgImage from "../../ui/BgImage.vue";
import { useProvider } from "@/app/platform";
import { MessageService } from "@/modules/message/services/MessageService";
import type { Message, RichText } from "@/modules/message/models/domain";
import { DateTime } from "luxon";

const props = defineProps<{
  message: Message;
}>();

const [messageService] = useProvider([MessageService]);


const formatDate = (date: Date) => {
  return DateTime.fromJSDate(date).toLocaleString(DateTime.DATETIME_SHORT);
};
console.log('Message Component: Text', props.message.text);
</script>

<template>
  <div class="message">
    <div class="message-actions">
    
    </div>

    <bg-image class="message-user-photo" src="" />

    <div class="message-content">
      <div class="message-title">
        <small class="message-date">{{ formatDate(message.creationDate) }}</small>
      </div>

    
      <RichTextComponent :text="message.text" />
    </div>
    
  </div>
</template>

<style lang="scss">
@use "sass:map";
@use "@/app/styles/var";

.message {
  margin: 0;
  padding: map-get(var.$spaces, "xs") map-get(var.$spaces, "s");
  display: flex;
  align-items: center;
  position: relative;

  &:hover {
    background-color: var.$color-lighter-gray;

    .message-actions {
      display: block;
    }
  }

  .message-actions {
    position: absolute;
    display: none;
    top: 0;
    right: 0;
    padding: map-get(var.$spaces, "xs") map-get(var.$spaces, "s");
    z-index: 10;
  }

  .message-user-photo {
    height: 40px;
    width: 40px;
    align-self: flex-start;
  }

  .message-title {
    font-weight: bold;

    .message-date {
      font-weight: normal;
      font-size: 12px;
    }
  }

  .message-content {
    padding-left: map-get(var.$spaces, "xs");
  }
}
</style>

