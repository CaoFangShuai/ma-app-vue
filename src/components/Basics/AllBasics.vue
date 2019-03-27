<template>
    <div>
        <h1>三大属性</h1>
        <props-demo
                name="name"
                :type="type"
                :on-change="handleProrChange"
        ></props-demo>
        <event-demo
                :name="name"
                @change="handleEventChange"
        ></event-demo>
        <slot-demo>
            <p>default slot</p>
            <template v-slot:title>
                title slot
            </template>
            <template v-slot:title>
                title slot1
            </template>
            <template v-slot:item="props">
                <p>item slot-scope {{ props }}</p>
            </template>
        </slot-demo>
    </div>
</template>
<script>
    import PropsDemo from '@/components/Basics/Props.vue'
    import EventDemo from '@/components/Basics/Event.vue'
    import SlotDemo from './Slot.vue'

    export default {
        name: "AllBasics",
        components: {
            PropsDemo,
            EventDemo,
            SlotDemo
        },
        data() {
            return {
                type: 'warning',
                name: ""
            }
        },
        methods: {
            handleProrChange(val) {
                this.type = val
            },
            handleEventChange(val) {
                this.name = val;
            },
        }
    }
</script>

<style scoped>

</style>
