<template>
 
  <div class="appbody">
     <Header title="Remi Okeowo"></Header>
     <ChatMessage />
     <ChatInput />
     
       
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Header from "./Header.vue";
import ChatMessage from './ChatMessage.vue';
import ChatInput from './ChatInput.vue';

@Component({
  components: {
    Header,
    ChatMessage,
    ChatInput
  }
})
export default class ChatApp extends Vue {
  @Prop() private msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.appbody {
  background: white;
  height: 100%;
}

</style>
