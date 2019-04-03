<template>
    <div>
        <h4><p>习题三</p>相同名称的插槽是替换还是合并</h4>
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
