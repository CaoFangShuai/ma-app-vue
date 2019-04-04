<template>
    <div class="border2">
        <input  v-model="phone" type="number">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "Children",
        data(){
            return{
                phone:""
            }
        }
    }
</script>

<style scoped>

</style>
