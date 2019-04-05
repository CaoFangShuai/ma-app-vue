<template>
	<div>
		<h4 style="color: red;"><p>习题一</p>子组件为什么不可以修改父组件传过来的Prop，如果修改了 Vue是如何监控并且给出警告的</h4>
		info:{{info}}
		<input :value="info.name" @input="handleChange"  />
		<button @click="handleChangeInfo1">修改info1{{info1}}</button>
	</div>
</template>

<script>
	import proxy from './Proxy'
	export default {
		name: "Proxy",
		props: {
			info:{
				type:Object
			},
			info1:{
				type:String,
				default:"cao"
			}
		},
		created() {
			this.temp = { name: "" };
			Object.keys(this.temp).forEach(key => {
			  proxy(this.info, this.temp, key);
			});
		},
		methods: {
			handleChange(e) {
				this.info.name = e.target.value;
				this.$forceUpdate();//刷新当前ui
				this.$emit("changeInfo", e.target.value);//传递给父组件值
			},
			handleChangeInfo1(){
			//	修改父组件传过来的info1
				this.info1="fang"//报错
				// this.$forceUpdate();
			}
		}
	}
</script>

<style scoped>

</style>
