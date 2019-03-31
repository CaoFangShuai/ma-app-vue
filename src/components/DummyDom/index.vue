<template>
    <div>
        <h1>虚拟DOM怎么更新</h1>
        <ChildrenA1 />
        <ChildrenA2 />
        <ChildrenA3 />
        <ChildrenA4 />
        <ChildrenA5 />
        <ChildrenA6 />
        <ChildrenA7 />
    </div>
</template>

<script>
    import ChildrenA1 from "./ChildrenA1";
    import ChildrenA2 from "./ChildrenA2";
    import ChildrenA3 from "./ChildrenA3";
    import ChildrenA4 from "./ChildrenA4";
    import ChildrenA5 from "./ChildrenA5";
    import ChildrenA6 from "./ChildrenA6";
    import ChildrenA7 from "./ChildrenA7";
    export default {
        name: "index",
        components: {
            ChildrenA1,
            ChildrenA2,
            ChildrenA3,
            ChildrenA4,
            ChildrenA5,
            ChildrenA6,
            ChildrenA7
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