<template>
    <div>
        <h3>事件</h3>
        <p>name: {{ name || "--" }}</p>
        <div @click="handleDivClick">
            <p><input :value="name" @change="handleChange"></p>
            <p>
                <button @click="handleClick">重置成功</button>
                <button @click.stop="handleClick">重置失败</button>
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "EventDemo",
        props: {
            name: String
        },
        data() {
            return {
                info: ''
            }
        },
        methods: {
            handleChange(e) {
                this.$emit("change", e.target.value)
            },
            handleClick(e) {
                // 都会失败
                e.stopPropagation();
            },
            handleDivClick() {
                this.$emit("change", "");
            },
        }
    }
</script>

<style scoped>
    .mydiv {
        width: 300px;
        margin: 0 auto;

    }
</style>