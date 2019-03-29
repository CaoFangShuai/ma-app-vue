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
        <div>
            <dummy-dom></dummy-dom>
        </div>
        <div>
            <props-and-data></props-and-data>
        </div>
	    <div>
		    <watch-and-computed />
	    </div>
    </div>
</template>

<script>
    import TodoList from './components/TodoList.vue'
    import AllBasics from './components/Basics/AllBasics.vue'
    import TwoWay from './components/Twoway/index.vue'
    import DummyDom from './components/DummyDom/index.vue'
    import  PropsAndData from './components/PropsAndData/index'
    import  WatchAndComputed from './components/WatchAndComputed/index'
    export default {
        name: 'app',
        components: {
            "TodoList": TodoList,
            AllBasics,
            TwoWay,
            DummyDom,
            PropsAndData,
	        WatchAndComputed
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
