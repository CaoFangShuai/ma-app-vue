<template>
	<div>
		<h1>计算属性和侦听器</h1>
		<computed />
		<watch />
		<div>
			<h4>侦听器vs计算属性</h4>
			<watch1 />
			<computed1 />
		</div>
		<div>
			<h4>防抖版</h4>
			<Watch1_pro></Watch1_pro>
		</div>

	</div>
</template>

<script>
	import Computed from  './Computed'
	import Watch from  './Watch'
	import watch1 from './Watch1.vue'
	import Computed1 from './Computed1'
	import Watch1_pro from './Watch1_pro'
	export default {
		name: "index",
		components:{
			Computed,
			Watch,
			watch1,
			Computed1,
			Watch1_pro
		}
	}
</script>

<style scoped>

</style>
