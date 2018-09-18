<template>
<div>
     <GiphyResult   />

      <div class="input-section">
        <div class="message-loader" v-if="isLoading === true">
            <img src="./../assets/tenor.svg" />
        </div>
        <form action="">
            <a @click="translateMessage" :class="{'disabled': isLoading}"  class="sendbutton" ><i class="icon ion-md-send"></i></a>
            <textarea  v-model="messageText" type="text" name="command" placeholder="Enter Giphy command..."></textarea>
            
        </form>
    </div>
</div>
  
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import GiphyService from "./services/GiphyService";
import GiphyResult from "./GiphyResult.vue";
import CONFIG from "@/config";

@Component({
  components: {
    GiphyResult
  }
})
export default class ChatInput extends Vue {
  messageText: string = "";
  gifResults: Array<Object> = [];
  public isLoading: boolean = false;

  constructor() {
    super();
  }

  mounted(){
      this.$root.$on(CONFIG.EVENTS.CLEAR_CHAT,()=>{
          this.messageText = "";
      })
  }

  beforeMount() {
    this.isLoading = false;
  }

  translateMessage(): void {
    this.isLoading = true;
    GiphyService.translate(this.messageText)
      .then(
        response => {
          this.$root.$emit(CONFIG.EVENTS.RESULT_FETCHED, response.data);
        },
        error => {
          console.log(error);
        }
      )
      .then(() => {
        this.isLoading = false;
      });
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
  &.disabled {
    background: grey;
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
.message-loader {
  width: 51px;
  background: #6f6b6b;
  padding: 0.5%;
  border-radius: 30px;
  margin-bottom: 2%;
  position: relative;
  left: 2%;
  img {
    width: 100%;
    height: 11px;
  }
}

.input-section {
  width: 100%;
  position: absolute;
  bottom: -5px;
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


