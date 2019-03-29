<template>
	<div>
		<h4>侦听器</h4>
		<p>{{$data}}</p>
		<button @click="()=>(a+=1)">a+1</button>
	</div>
</template>

<script>
	export default {
		name: "Watch",
		data(){
			return {
				a:1,
				b:{
					c:4,d:5
				},
				e:{
					f:{
						g:6
					}
				},
				h:[]

			}
		},
		watch:{
			a(val,oldval){
				this.b.c+=1;
				console.log("a new %s,old %s",val,oldval)
			},
			"b.c"(val,oldVal){
				this.b.d += 1;
				console.log("b.c new: %s, old: %s", val, oldVal);
			},
			"b.d"(val, oldVal){
				this.e.f.g += 1;
				console.log("e.f.g new: %s, old: %s", val, oldVal);
			},
			e:{
				handler(val,oldVal){
					this.h.push("😄");
					console.log("e new: %s, old: %s", val, oldVal);

				},
				deep:true
			},
			h(val, oldVal) {
				console.log("h new: %s, old: %s", val, oldVal);
			}
		}
	}
</script>

<style scoped>

</style>
