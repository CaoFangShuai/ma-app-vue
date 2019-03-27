<template>
    <div>
        <h3>插槽</h3>
        <slot/>
        <slot name="title"></slot>
        <slot name="item" v-bind=" { vlaue:'vue' } "></slot>

    </div>
</template>

<script>
    export default {
        name: "SlotDemo"
    }
</script>

<style scoped>

</style>