<template>
    <div id="app">
        <input type="text" v-model="info">
        <button @click="handleClick">添加</button>
        <ul>
            <todo-list v-for="item in list" :key="item">
                <template v-slot:item="propsCheck">
                    <span :style="{fontSize:'20px',color:propsCheck.checked?'red':'blue'}">{{item}}</span>
                </template>
            </todo-list>
        </ul>
        <div>
            <all-basics></all-basics>
        </div>
        <div>
            <TwoWay></TwoWay>
        </div>
    </div>
</template>

<script>
    import TodoList from './components/TodoList.vue'
    import AllBasics from './components/Basics/AllBasics.vue'
    import TwoWay from './components/Twoway/index.vue'

    export default {
        name: 'app',
        components: {
            "TodoList": TodoList,
            AllBasics,
            TwoWay
        },
        data() {
            return {
                info: "",
                list: [],
            }
        },
        methods: {
            handleClick() {
                // console.log(this.info)
                if (this.info != '') {
                    this.list.push(this.info);
                    this.info = '';
                }
            },

        }
    }
</script>

<style>
    #app {
        width: 500px;
        margin: 0 auto;
        text-align: center;
        padding-bottom: 40px;
    }

    li {
        list-style: none;
    }
</style>
