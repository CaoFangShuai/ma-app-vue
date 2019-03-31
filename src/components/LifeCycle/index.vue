<template>
    <div>
        <h1>生命周期钩子</h1>
        <button @click="destroyClock = !destroyClock">
            {{destroyClock?"加载时钟":"销毁时钟"}}
        </button>
        <Clock v-if="!destroyClock" />
        <h3>函数式组件</h3>
        <Functional :name="name" />
        <TempVars :var1="`hello ${name}`"
                  :var2="destroyClock? 'hello vue':'hello world'"
                  var3="sss"
        >
            <template v-slot="{ var1, var2,var3 }">
                <p>{{ var1 }}</p>
                <p>{{ var2 }}</p>
                <p>{{ var3 }}</p>
            </template>
        </TempVars>

    </div>
</template>

<script>
    import Clock from "./Clock"
    import Functional from './Functional';
    import TempVars from './TempVars'
    export default {
        name: "index",
        components:{
            Clock,
            Functional,
            TempVars
        },
        data(){
         return {
             destroyClock:false,
             name:'vue'
         }
        }
    }
</script>

<style scoped>

</style>