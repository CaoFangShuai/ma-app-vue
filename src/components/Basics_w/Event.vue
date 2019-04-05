<template>
    <div>
        <h4 style="color: red;"><p>习题二</p>this.$emit的返回值是什么</h4>
        <p>name: {{ name || "--" }}</p>
        <div>
            <p><input :value="name" @change="handleChange"></p>
            <p  @click="handleDivClick">
                <button @click="handleClick">重置成功</button>
                <button @click.stop="handleClick">重置失败</button>
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Event",
        props: {
            name: String
        },
        data() {
            return {}
        },
        methods: {
            handleChange(e) {
                const res = this.$emit("change", e.target.value, val => {
                    console.log(val);
                });
                console.log(res, res === this);
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
