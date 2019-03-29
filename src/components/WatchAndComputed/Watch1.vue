<template>
	<div>
		<h4>侦听属性</h4>
		<p>{{fullName}}</p>
		<p>firstName: <input type="text" v-model="firstName"></p>
		<p> lastName: <input type="text" v-model="lastName"></p>
	</div>
</template>

<script>
	export default {
		name: "Watch1",
		data(){
			return {
				firstName:'FOO',
				lastName:"Bar",
				fullName: "Foo Bar"
			}
		},
		watch:{
			firstName(val){
				this.fullName=val +" "+this.lastName;
			},
			lastName(val){
				this.fullName=this.firstName+" "+val;
			}
		}
	}
</script>

<style scoped>

</style>
