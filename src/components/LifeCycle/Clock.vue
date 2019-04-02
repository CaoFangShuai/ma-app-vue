<template>
<div>
    {{log("渲染器渲染render")}}
    {{now}}
    <button @click="start1">{{ start ? "停止" : "开始" }}</button>
</div>
</template>
<script>
    import moment from "moment";
    export default {
        name: "Clock",
        data() {
            console.log("加载数据");
            this.moment =moment;
            this.log = window.console.log;
            return {
                start: false,
                now: moment(new Date()).format("YYYY-MM-DD HH:mm:ss"),
                message:'hello vue'
            }
        },
        watch:{
            start(){
                this.startClock();
            }
        },
        beforeCreate(){
            console.group('beforeCreate 实例创建前状态===============》');
            console.log("%c%s", "color:red" , "el     : " , this.$el); //undefined
            console.log("%c%s", "color:red","data   : " , this.$data); //undefined
            console.log("%c%s", "color:red","message: " , this.message)
        },
        created(){
            console.group('created 实例创建完毕状态===============》');
            console.log("%c%s", "color:red","el     : " , this.$el); //undefined
            console.log("%c%s", "color:red","data   : " , this.$data); //已被初始化
            console.log("%c%s", "color:red","message: " , this.message); //已被初始化
        },
        beforeMount: function () {
            console.group('beforeMount 实例挂载前状态===============》');
            console.log("%c%s", "color:red","el     : " , (this.$el)); //已被初始化
            console.log("%c%s", "color:red","data   : " , this.$data); //已被初始化
            console.log("%c%s", "color:red","message: " , this.message); //已被初始化
        },
        mounted(){
            console.group('mounted 实例挂载结束状态===============》');
            console.log("%c%s", "color:red","el     : " , this.$el); //已被初始化
            console.log(this.$el);
            console.log("%c%s", "color:red","data   : " , this.$data); //已被初始化
            console.log("%c%s", "color:red","message: " , this.message); //已被初始化
            this.startClock();
        },
        beforeUpdate() {
            console.group('beforeUpdate 更新前状态===============》');
            console.log("%c%s", "color:red","el     : " , this.$el);
            console.log(this.$el);
            console.log("%c%s", "color:red","data   : " , this.$data);
            console.log("%c%s", "color:red","message: " , this.message);
            console.log("数据更新之前");
        },
        updated() {
            console.log("数据更新之后");
        },
        beforeDestroy(){
            console.group('updated 更新完成状态===============》');
            console.log("%c%s", "color:red","el     : " , this.$el);
            console.log(this.$el);
            console.log("%c%s", "color:red","data   : " , this.$data);
            console.log("%c%s", "color:red","message: " , this.message);
            console.log("页面销毁之前")
        },
        beforeDestroy: function () {
            console.group('beforeDestroy 销毁前状态===============》');
            console.log("%c%s", "color:red","el     : " , this.$el);
            console.log(this.$el);
            console.log("%c%s", "color:red","data   : " , this.$data);
            console.log("%c%s", "color:red","message: " , this.message);
        },
        destroyed(){
            console.group('destroyed 销毁完成状态===============》');
            console.log("%c%s", "color:red","el     : " , this.$el);
            console.log(this.$el);
            console.log("%c%s", "color:red","data   : " , this.$data);
            console.log("%c%s", "color:red","message: " , this.message)
            console.log("页面销毁之后")
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
