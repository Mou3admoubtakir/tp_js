<script lang="ts" setup>
import Message from "@/app/components/domain/message/Message.vue";
import { useProvider, useState, useStore } from "@/app/platform";
import { MessageService } from "@/modules/message/services/MessageService";
import { MessageStore } from "@/modules/message/store";
import { watch, ref } from "vue";
import type { Room } from "@/modules/room/models/domain/Room";
import { useIntersectionObserver } from "@vueuse/core";

const props = defineProps<{ room: Room }>();
const state = useState(MessageStore);
const store = useStore(MessageStore);
const [messageService] = useProvider([MessageService]);


const top = ref<HTMLDivElement | null>(null);


const container = ref<HTMLDivElement | null>(null);


const root = ref<HTMLDivElement | null>(null);

watch(
  () => props.room,
  async (newRoom, oldRoom) => {
    if (newRoom.id !== oldRoom.id) {
      store.reset();
      await messageService.fetchMore(newRoom.id);
      root.value?.scrollTo(0, root.value?.scrollHeight);
    }
  }
);
</script>


<template>
  <div class="room stretch-wh" ref="root">
    <div class="room-container" ref="container">
      <div ref="top"></div>
      <Message v-for="message in state.currentRoomMessages" :key="message.id" :message="message" />
    </div>
  </div>
</template>


<style lang="scss" scoped>
.room {
  display: flex;
  flex-direction: column-reverse;
  overflow-y: auto;
}
.room-container {
  display: flex;
  flex-direction: column-reverse;
}
</style>
