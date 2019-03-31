<template>
<div>
    {{log("render")}}
    {{now}}
    <button @click="start1">{{ start ? "停止" : "开始" }}</button>
</div>
</template>
<script>
    import moment from "moment";
    export default {
        name: "Clock",
        data() {
            console.log("data");
            this.moment =moment;
            this.log = window.console.log;
            return {
                start: false,
                now: moment(new Date()).format("YYYY-MM-DD HH:mm:ss"),
            }
        },
        watch:{
            start(){
                this.startClock();
            }
        },
        beforeCreate(){
          console.log("beforeCreate");
        },
        created(){
            console.log("created")
        },
        mounted(){
            console.log("mounted挂载完成时钟开始走");
            this.startClock();
        },
        beforeUpdate() {
            console.log("beforeUpdate");
        },
        updated() {
            console.log("updated");
        },
        beforeDestroy(){
            console.log("beforeDestroy")
        },
        destroyed(){
            console.log("destroyed")
        },
        methods:{
            startClock(){
                clearInterval(this.clockInterval);
                if(this.start){
                    this.clockInterval=setInterval(()=>{
                        this.now=moment(new Date()).format("YYYY-MM-DD HH:mm:ss");
                    },1000)
                }
            },
            start1(){
                if(this.start){
                    this.start=false;
                }else{
                    this.start=true;
                }
            }
        }
    }
</script>

<style scoped>

</style>