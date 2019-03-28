<template>
    <div>
        <h4>vue触发更新组件</h4>
        <p>props.info:{{info}}</p>
        <p>props.name:{{name}}</p>
        <p>props.list:{{list}}</p>
        <p>data.a:{{a}}</p>
        <p>
            <button @click="handleBChange">改变Data.b</button>
        </p>
    </div>
</template>

<script>
    export default {
        name: "PropsAndData",
        props:{
            info:Object,
            name:String,
            list:Array
        },
        data(){
            return {
                a:"hello",
                b:"world"
            }
        },
        updated() {
            console.log("触发 PropsAndData updated")
        },
        methods:{
            handleBChange(){
                this.b = "vue" + Date.now();
                console.log("data.b 发生了变化，但是并没有触发组件更新", this.b);
            }
        }
    }
</script>

<style scoped>

</style>