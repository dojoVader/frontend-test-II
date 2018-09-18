<template>
    <div class="header">
        {{ title }}
    </div>
</template>

<style scoped lang="less">
div.header {
 width: 100%;
    border-bottom: 1px solid #d8d8d8;
    padding: 4% 0% 4% 0%;
    text-align: left;
    text-indent: 4%;
    font-size: 0.9em;
    background: #b5afbd;
    color: #434344;
    font-weight: bold;
}
</style>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Header extends Vue {
    @Prop() public title?:string;
    
    constructor(){
        super();
    
    }
}
</script>
