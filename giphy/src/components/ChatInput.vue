<template>
    <div class="input-section">
        <form action="">
            <a @click="translateMessage"  class="sendbutton" ><i class="icon ion-md-send"></i></a>
            <textarea  v-model="messageText" type="text" name="command" placeholder="Enter Giphy command..."></textarea>
            
        </form>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class ChatInput extends Vue {
  messageText: string = "";

  constructor() {
    super();
  }
  translateMessage(): void {
    console.log(this.messageText);
  }
}
</script>

<style lang="less" scoped>
a.sendbutton {
  text-decoration: none;
  display: inline-block;
  position: absolute;
  right: 5%;
  top: 17%;
  background: #3c3838;
  padding: 2% 3%;
  border-radius: 97px;
  text-indent: 0px;
  cursor: pointer;
  &:hover {
    background: #7e6060;
  }
  .ion-md-send:before {
    content: "\f376";
    font-size: 24px;
    color: white;
    position: relative;
    left: 3px;
    top: 2px;
  }
}
form {
  position: relative;
}
.input-section {
  width: 100%;
  position: absolute;
  bottom: -70px;
  textarea {
    width: 100%;
    padding: 2% 0%;
    margin: 0%;
    text-indent: 4%;
    font-size: 14px;
    border: none;
    border-top: 1px solid #cecbd2;
    height: 48px;
    background: #e7e7e8;
    color: #675f5f;
    line-height: 3;
  }
}
</style>


