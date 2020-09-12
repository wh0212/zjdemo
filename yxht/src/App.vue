<template>
    <div id="app">
        <router-view v-if="isRouter"></router-view>
    </div>
</template>

<script>
export default {
    provide(){
        return {
            reload:this.reload
        }
    },
    data () {
        return {
            isRouter:true
        }
    },
    methods: {
        reload(){
            this.isRouter=false;
            this.$nextTick(function(){
                this.isRouter=true
            })
        }
    }
}
</script>

<style>
    @import "./assets/css/main.css";
    @import "./assets/css/color-dark.css";     /*深色主题*/
    /*@import "./assets/css/theme-green/color-green.css";   浅绿色主题*/
</style>