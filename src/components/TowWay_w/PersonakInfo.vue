<template>
    <div>
        <input type="text" :value="phone" @input="updatePhone">{{phone}}
        <span v-if="showMessage" style="color: red;">{{message}}</span>
    </div>
</template>

<script>
    export default {
        name: "PersonakInfo",
        props:{
            phone:{
                type:String,
            },
            message:{
                type: String
            },
            validate:Function
        },
        model:{
            prop:"phone"
        },
        watch:{
            phone:function(val) {
                this.handleValidate(val)
            }
        },
        data(){
            return{
                showMessage:false,
            }
        },
        methods:{
            updatePhone(e){
                this.$emit("phoneChange",e.target.value)
            },
            handleValidate(val){
                console.log(this)
                const res = this.validate(val);
                this.showMessage = !res;
            }
        }
    }
</script>

<style scoped>

</style>
