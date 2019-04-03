<template>
    <div>
        <Proxy :info="info" :info1="info1" @changeInfo="handleProxyChange"></Proxy>
        <Event :name="name" @change="handleEventChange"/>

        <Slot>
            <p>2.6新语法是替换</p>
            <p>default slot</p>
            <template v-slot:title>slot title</template>
            <template v-slot:title>new slot title</template>
            <template v-slot:item="props">
                <p>item slot-scope {{ props }}</p>
            </template>
            <template v-slot:item="props">
                <p>new item slot-scope {{ props }}</p>
            </template>
        </Slot>
        <Slot>
            <p>2.5旧语法是对于普通插槽是合并对于具名插槽是替换</p>
            <p>slot title</p>
            <p slot="title">title slot1</p>
            <p slot="title">new title slot2</p>
            <p slot="item" slot-scope="props">item slot-scope {{ props }}</p>
            <p slot="item" slot-scope="props">new item slot-scope {{ props }}</p>
        </Slot>
    </div>
</template>
<script>
    import Proxy from './Proxy.vue'
    import Event from './Event'
    import Slot from "./Slot"

    export default {
        components: {
            Proxy,
            Event,
            Slot
        },
        data() {
            return {
                info: {},
                info1: "cao",
                name: "",
            }
        },
        methods: {
            handleProxyChange(val) {
                window.isUpdatingChildComponent = true;
                this.info.name = val;
                this.info = {name: val};//重新赋值
            },
            handleEventChange(val, callback) {
                this.name = val;
                callback("hello");
                // return "hello";
            }
        }
    }
</script>

<style scoped>

</style>
