<template>
    <div>
        {{group("渲染器渲染render=======>",this.$el,this.$data)}}
        {{now}}
        <button @click="start1">{{ start ? "停止" : "开始" }}</button>
    </div>
</template>
<script>
    import moment from "moment";

    export default {
        name: "Clock",
        data() {
            console.group("加载数据=====>");
            console.log("%c%s", "color:red", "el     : ", this.$el); //undefined
            console.log("%c%s", "color:red", "data   : ", this.$data); //undefined
            this.moment = moment;
            this.group = window.console.group;
            this.log = window.console.log;
            return {
                start: false,
                now: moment(new Date()).format("YYYY-MM-DD HH:mm:ss"),
                message: 'hello vue'
            }
        },
        watch: {
            start() {
                this.startClock();
            }
        },
        beforeCreate() {
            console.group('beforeCreate 实例创建前状态===============》');
            console.log("%c%s", "color:red", "el     : ", this.$el); //undefined
            console.log("%c%s", "color:red", "data   : ", this.$data); //undefined
        },
        created() {
            console.group('created 实例创建完毕状态===============》');
            console.log("%c%s", "color:red", "el     : ", this.$el); //undefined
            console.log("%c%s", "color:red", "data   : ", this.$data); //已被初始化
            //已被初始化
        },
        beforeMount: function () {
            console.group('beforeMount 实例挂载前状态===============》');
            console.log("%c%s", "color:red", "el     : ", (this.$el)); //已被初始化
            console.log("%c%s", "color:red", "data   : ", this.$data); //已被初始化
            //已被初始化
        },
        mounted() {
            console.group('mounted 实例挂载结束状态===============》');
            console.log("%c%s", "color:red", "el     : ", this.$el); //已被初始化
            console.log("%c%s", "color:red", "data   : ", this.$data); //已被初始化
            //已被初始化
            this.startClock();
        },
        beforeUpdate() {
            console.group('beforeUpdate 数据更新前状态===============》');
            console.log("%c%s", "color:red", "el     : ", this.$el);
            console.log("%c%s", "color:red", "data   : ", this.$data);
        },
        updated() {
            console.group("updated 数据更新完成状态=====>");
            console.log("%c%s", "color:red", "el     : ", this.$el);
            console.log("%c%s", "color:red", "data   : ", this.$data);
        },
        beforeDestroy() {
            console.group('beforeDestroy页面销毁之前状态===============》');
            console.log("%c%s", "color:red", "el     : ", this.$el);
            console.log("%c%s", "color:red", "data   : ", this.$data);
        },
        destroyed() {
            console.group('destroyed 销毁完成状态===============》');
            console.log("%c%s", "color:red", "el     : ", this.$el);
            console.log("%c%s", "color:red", "data   : ", this.$data);
        },
        methods: {
            startClock() {
                clearInterval(this.clockInterval);
                if (this.start) {
                    this.clockInterval = setInterval(() => {
                        this.now = moment(new Date()).format("YYYY-MM-DD HH:mm:ss");
                    }, 1000)
                }
            },
            start1() {
                if (this.start) {
                    this.start = false;
                } else {
                    this.start = true;
                }
            }
        }
    }
</script>

<style scoped>

</style>
