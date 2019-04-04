<template>
    <div class="boder2">
        <h2>用index做key</h2>
        <Children v-for="key in list" :key="key">
           <button @click="handleDelete(key)">key:{{key}}</button>
        </Children>
        {{list}}
        <button @click="handleAdd">添加</button>
    </div>
</template>

<script>
    import Children from './Children'
    let key=0;
    export default {
        name: "ChildrenA",
        components: {
            Children
        },
        data(){
            return{
                list:[]
            }
        },
        methods:{
            handleDelete(key){

                const index=this.list.findIndex((k) => {
                    return k===key;
                })
                console.log(index)
                this.list.splice(index,1)
            },
            handleAdd(){
                this.list.push(key++)
            }
        }
    }
</script>

<style scoped>

</style>
