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
            <all-basics-w />
        </div>
        <div>
            <TwoWay></TwoWay>
        </div>
        <div>
            <tow-way_w></tow-way_w>
        </div>
        <div>
            <dummy-dom></dummy-dom>
        </div>
        <div>
            <dummy-dom_w></dummy-dom_w>
        </div>
        <div>
            <props-and-data></props-and-data>
        </div>
	    <div>
		    <watch-and-computed />
	    </div>
        <div>
            <life-cycle></life-cycle>
        </div>
        <div>
            <directive />
        </div>
	    <div>
		    <provide-inject />
	    </div>
    </div>
</template>

<script>
    import TodoList from './components/TodoList.vue'
    import AllBasics from './components/Basics/AllBasics.vue'
    import AllBasicsW from './components/Basics_w/index.vue'
    import TwoWay from './components/Twoway/index.vue'
    import DummyDom from './components/DummyDom/index.vue'
    import  PropsAndData from './components/PropsAndData/index'
    import  WatchAndComputed from './components/WatchAndComputed/index'
    import LifeCycle from './components/LifeCycle/index'
    import directive from './components/directive/index'
    import ProvideInject from './components/ProvideInject'
    import DummyDom_w from  './components/DummyDom_w'
    import TowWay_w from  './components/TowWay_w'
    export default {
        name: 'app',
        components: {
            "TodoList": TodoList,
            AllBasics,
            AllBasicsW,
            TwoWay,
            TowWay_w,
            DummyDom,
            PropsAndData,
	        WatchAndComputed,
            LifeCycle,
            directive,
	        ProvideInject,
            DummyDom_w
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
        width: 1000px;
        margin: 0 auto;
        text-align: center;
        padding-bottom: 40px;
    }

    li {
        list-style: none;
    }
</style>
