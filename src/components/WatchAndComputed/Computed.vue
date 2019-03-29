<template>
	<div>
		<h4>计算属性</h4>
		<p>反转字符串1-computed "{{reversedMessage1}}"</p>
		<p>反转字符串2-自定义方法 "{{reversedMessage2()}}"</p>
		<p>now</p>
		<input type="text" v-model="message">
	</div>
</template>

<script>
	export default {
		name: "Computed",
		data(){
			return{
				message:'hello vue'
			}
		},
		computed:{
			reversedMessage1(){
				console.log("执行reversedMessage1");
				return this.message.split("").reverse().join("");
			},
			now: function() {
				return Date.now();
			}
		},
		methods:{

			reversedMessage2(){
				console.log("执行reversedMessage2");
				return this.message.split("").reverse().join("");
			}
		}
	}
</script>

<style scoped>

</style>
