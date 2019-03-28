<template>
    <div>
        <h4>引用类型怎么更新</h4>
        <ul>
            <li v-for="item in instancelist" :key="item">{{item}}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "InstanceData",
        props:{
            instancelist:Array
        },
        data() {
            return {}
        }
    }
</script>

<style scoped>

</style>