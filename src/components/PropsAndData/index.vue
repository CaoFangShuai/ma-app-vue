<template>
    <div>
        <h1>如何触发组件的更新</h1>
        <p>
            <button @click="handleChangeName">改变name</button>
            <button @click="handleChangeInfo">改变info</button>
            <button @click="handleChangeList">改变list</button>
        </p>
        <props-and-data :name="name" :info="info" :list="list"></props-and-data>
        <div>
            <instance-data :instancelist="instancelist"></instance-data>
            <button @click="handleChangeInstancelist">切换Instancelist</button>
        </div>
    </div>
</template>

<script>
    import PropsAndData from './PropsAndData';
    import InstanceData from './InstanceData'
    let name="word";
    export default {
        name: "index",
        components:{
            PropsAndData,
            InstanceData
        },
        data(){
            this.name=name;
            return{
                // name:'',
                info:{},
                // info:{
                //     number:1
                // },
                list:[],
               instancelist:[1,2,3,4,5,6,7]
            }
        },
        methods:{
            handleChangeName(){
                this.name="vue"+Date.now();
                console.log("name已经更新，但是没有触发组件的更新，更新的值为",this.name);
            },
            handleChangeInfo(){
                this.info.number+=1;
                console.log("name已经更新，但是没有触发组件的更新，更新的值为",this.info);

            },
            handleChangeList(){
                this.list.push(1,2,4);
                console.log("this.list 发生了变化，触发了子组件更新", this.list);
            },
            handleChangeInstancelist(){
                // this.instancelist[0]+=1;
                // console.log("instancelist已经更新，但是不会触发子组件的更新",...this.instancelist)
                this.$set(this.instancelist,0,"name")//第一种方法$set
               this.instancelist.splice(1,0,"age")//第一种方法 切割数组
                console.log("instancelist已经更新，但是会触发子组件的更新",...this.instancelist)
            }
        }
    }
</script>

<style scoped>

</style>