<template>
    <div>
        <h1>习题对手机号做验证</h1>
        <personakinfo v-model="phone"
                      :validate="validate"
                      message="手机号为空或不合法"
                      @phoneChange="phoneChange"
        ></personakinfo>{{phone}}
    </div>
</template>

<script>
    import Personakinfo from './PersonakInfo'
    export default {
        name: "index",
        components:{
            Personakinfo
        },
        data(){
            return{
                phone:""
            }
        },
        methods:{
            validate(phone=''){
                return phone && /^1[0-9]{10}$/.test(phone)
            },
            phoneChange(val){
                this.phone=val
            }
        }
    }
</script>

<style scoped>

</style>
