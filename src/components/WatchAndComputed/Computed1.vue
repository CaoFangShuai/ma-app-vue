<template>
	<div>
		<h4>计算属性</h4>
		<p>{{fullName}}</p>
		<p>firstName: <input type="text" v-model="firstName"></p>
		<p> lastName: <input type="text" v-model="lastName"></p>
	</div>
</template>

<script>
	export default {
		name: "Computed1",
		data(){
			return {
				firstName:'FOO',
				lastName:"Bar",
			}
		},
		computed: {
			fullName: function() {
				return this.firstName + " " + this.lastName;
			}
		},
/*		watch: {
			fullName: function(val, oldVal) {
				console.log("new: %s, old: %s", val, oldVal);
			}
		}*/
	}
</script>

<style scoped>

</style>
