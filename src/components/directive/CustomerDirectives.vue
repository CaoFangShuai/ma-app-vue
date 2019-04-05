<template>
    <div>
        <h2>自定义组件</h2>
        <button @click="show = !show">{{show?"销毁":"显示"}}</button>
        <div v-if="show">
            <button  v-append-text="`hello ${number}`" @click="()=>number++"></button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CustomerDirectives",
        data(){
            return{
                show:true,
                number:1
            }
        },
        directives: {
            appendText: {
                bind() {
                    console.log("自定义组件开始建立");
                },
                inserted(el, binding) {
                    el.appendChild(document.createTextNode(binding.value));
                    console.log("插入自定义组件", el, binding);
                },
                update() {
                    console.log("更新自定义组件");
                },
                componentUpdated(el, binding) {
                    el.removeChild(el.childNodes[el.childNodes.length - 1]);
                    el.appendChild(document.createTextNode(binding.value));
                    console.log("更新自定义组件完毕");
                },
                unbind() {
                    console.log("自定义组件销毁");
                }
            }
        },
    }
</script>

<style scoped>

</style>
