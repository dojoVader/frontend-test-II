<template>
<div class="gif-result" v-if="result.images != null">
    <div class="close-control">
    <a @click="clear">X</a>
</div>

    <div>

            <div class="image-set">
                <a @click="pushConversation(result)">
                <img v-bind:src="result.images.preview_gif.url">
                </a>
            </div>
            
        <div class="clearfix"></div>
    </div>
</div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { IGiphyResult } from "./services/GiphyService";
import CONFIG from "@/config";

@Component
export default class GiphyResult extends Vue {
  public result?: any;
  constructor() {
    super();
  }

  clear(){
    this.result.images = null;
    this.$root.$emit(CONFIG.EVENTS.CLEAR_CHAT);
  }

  pushConversation(image: any) {

    this.$root.$emit(CONFIG.EVENTS.ADD_CONVERSATION, {
        id: image.id,
        url: image.images.downsized.url
    });
  }

  data() {
    return {
      result: this.result
    };
  }
  
  beforeMount() {

    this.result = {
      images: null
    };
   
  }

  mounted() {
    this.$root.$on(CONFIG.EVENTS.RESULT_FETCHED, (input: any) => {
      this.$set(this, "result", input.data);
    });

    
  }
}
</script>

<style lang="less">
.close-control {
  display: inline-block;
  width: auto;
  height: auto;
  background: #3c3838;
  padding: 2% 3%;
  position: absolute;
  right: 6%;
  a {
    font-weight: bold;
    text-decoration: none;
    cursor: pointer;
    color: white;
  }
}
.gif-result {
  position: absolute;
  bottom: 66px;
  padding: 2% 2%;
  background: #6a459aba;
  width: 100%;
  height: auto;
  .image-set {
    height: 100px;
    width: 100px;
    margin-bottom: 2%;
    float: left;
    margin-right: 2%;

    img {
      width: 100%;
      height: 100%;
      cursor:pointer;
    }
  }
}
</style>
