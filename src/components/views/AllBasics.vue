<template>
	<props-demo
			name="name"
			:type="type"
			:on-change="handleProrChange"
	></props-demo>
</template>
<script>
	import PropsDemo from '@/components/views/PropsDemo.vue'
	export default {
		name: "AllBasics",
		components:{
			PropsDemo
		},
		data(){
			return {
				type:'warning',
			}
		},
		methods:{
			handleProrChange(val){
				this.type=val
			}
		}
	}
</script>

<style scoped>

</style>
