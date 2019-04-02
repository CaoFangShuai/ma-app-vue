<template>
	<div class="border">
		<h2>A结点</h2>
<!--		<button @click="()=>changeColor()">改变颜色</button>-->
		<button @click="() => changeColor()">改变color</button>
		<ChildrenB />
		<ChildrenC />
		<ChildrenD />
	</div>
</template>

<script>
	import ChildrenB from "./ChildrenB";
	import ChildrenC from "./ChildrenC";
	import ChildrenD from "./ChildrenD";
	export default {
		name: "ChildrenA",
		components:{
			ChildrenB,
			ChildrenC,
			ChildrenD
		},
		provide() {
			return {
				theme: this.color
			}
		},
		data() {
			return {
				color: "blue"
			}
		},
		methods: {
			changeColor(color) {
				console.log(color)
				if(color){
					this.theme.color=color;
				}else{
					this.theme.color=this.theme.color==="blue"?"red":"blue"
				}
			}
		}
	}
</script>

<style scoped>

</style>
