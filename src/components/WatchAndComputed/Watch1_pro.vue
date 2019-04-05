<template>
	<div>
		<h1 style="color: red;">习题 防抖函数</h1>
		<p style="color: red;">fullName过500ms后在更新</p>
		<p>{{fullName}}</p>
		<p>firstName: <input type="text" v-model="firstName"></p>
		<p> lastName: <input type="text" v-model="lastName"></p>
	</div>
</template>

<script>
	export default {
		name: "Watch1_pro",
		data(){
			return {
				firstName:'FOO',
				lastName:"Bar",
				fullName: "Foo Bar"
			}
		},
		watch:{
			firstName: function(val, oldVal) {
				clearTimeout(this.firstTimeout);
				this.firstTimeout=setTimeout (()=> {
					this.fullName=val+' '+this.lastName
				},500)
				console.log("new: %s, old: %s", val, oldVal);
			},
			lastName: function(val, oldVal) {
				clearTimeout(this.lastNameTimeout);
				this.lastNameTimeout=setTimeout (()=> {
					this.fullName=this.firstName +" "+val
				},500)
				console.log("new: %s, old: %s", val, oldVal);
			}
		}
	}
</script>

<style scoped>

</style>
