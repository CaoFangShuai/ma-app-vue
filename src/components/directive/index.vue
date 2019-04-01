<template>
    <div>
        <h1>指令集合</h1>
        <directive />
        <customer-directives />
    </div>
</template>

<script>
    import Directive from "./Directive"
    import CustomerDirectives from  "./CustomerDirectives"
    export default {
        name: "index",
        components:{
            Directive,
            CustomerDirectives
        }
    }
</script>

<style scoped>

</style>