<template>
    <div>
        <h1 style="color: red;">为什么不能用index作为key</h1>
        <ChildrenA></ChildrenA>
        <ChildrenB></ChildrenB>
    </div>
</template>

<script>
    import ChildrenA from './ChildrenA'
    import ChildrenB from './ChildrenB'
    export default {
        name: "index",
        components:{
            ChildrenA,
            ChildrenB
        }
    }
</script>

<style scoped>
    .border,
    .border1,
    .border2 {
        border: 1px solid #000;
        padding: 10px 0;
        margin: 10px 10px 0;
    }
    .border1 {
        border-color: #ccc;
    }
    .border2 {
        border-color: #eee;
    }
</style>
