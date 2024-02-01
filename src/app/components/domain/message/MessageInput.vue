<template>
  
  <div class="message-input stretch-wh">
    <RichTextEditor  @input="sendMessage"/>
    
    
  </div>
  
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { MessageService } from '@/modules/message/services/MessageService';
import { useProvider, useState } from '@/app/platform';
import { RoomStore } from '@/modules/room/store';
import RichTextEditor from '@/app/components/ui/RichTextEditor.vue';
import type { Message, RichText } from "@/modules/message/models/domain";

const [messageService] = useProvider([MessageService]);
const roomState = useState(RoomStore);
const props = defineProps<{
  message: Message;
}>();
var hello = 'Hello world';
const userMessage = ref({ tokens: [] });

const sendMessage = async (text: RichText) => {
  //console.log("sendMessage function called");

  if (roomState.currentRoom) {
    //console.log("Current Room:", roomState.currentRoom);

    try {
      //console.log("Sending message...");
      //console.log("User Message:", userMessage.value);

      // send the message
      await messageService.sendMessage({
        roomId: roomState.currentRoom?.id,
        text: text
      });

      console.log("Message sent successfully.");
      // Reset user input after sending the message
     // userMessage.value = { tokens: [] };
    } catch (error) {
      console.error("Error sending message:", error);
    }
  }
};


</script>

<style lang="scss" scoped>
@use "@/app/styles/var";

.message-input {
  border-top: 1px solid var.$color-light-gray;
  background-color: var.$color-light-gray;
}
</style>
