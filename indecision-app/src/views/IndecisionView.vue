<template>
  <div class="bg-gray-100 h-screen flex flex-col max-w-lg mx-auto">
    <div class="bg-blue-500 p-4 text-white flex justify-between items-center">
      <span>Angie</span>
    </div>
    <!-- mensajes -->
    <ChatMesagges :messages="messages"/>
    <!-- caja de mensajes -->
    <MessageBox @send-messages="onMessage"/>
  </div>
</template>


<script setup lang="ts">
import ChatMesagges from '@/components/chat/ChatMesagges.vue';
import MessageBox from '@/components/chat/MessageBox.vue';
import { useChat } from '@/composables/useChat';

const {messages, onMessage} = useChat();

</script>