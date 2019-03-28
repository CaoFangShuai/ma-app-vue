<template>
    <div>
        <select :value="phoneInfo.areaCode" @change="handleAreaCodeChange">
            <option value="+86">+86</option>
            <option value="+60">+60</option>
        </select>
        <input type="number" :value="phoneInfo.phone" @change="TestPhone" placeholder="手机号" @input="handlePhoneInput">
        <input type="email" :value="zipCode" placeholder="邮编" @input="handleEmailInput">
    </div>
</template>

<script>
    export default {
        name: "PersonalInfo",
	    model:{
		    prop: "phoneInfo", // 默认 value
		    event: "change" // 默认 input
	    },
        props:{
            phoneInfo:Object,
            zipCode:String
        },
        data(){
            return {

            }
        },
	    methods:{
		    handleAreaCodeChange(e){
				this.$emit("change",{
					...this.phoneInfo,
					areaCode: e.target.value
				})
		    },
		    handlePhoneInput(e){

			    this.$emit("change",{
				    ...this.phoneInfo,
				    phone: e.target.value
			    })
		    },
		    handleEmailInput(e){
		    	this.$emit("update:email",e.target.value)
		    },
		    TestPhone(e){

			    if(this.checkPhone(e.target.value)){
				    alert("手机号码通过检测");
			    }else{
				    alert("手机号码有误，请重填");
				    this.phoneInfo.phone='';
			    }
		    },
		    checkPhone(phone){

			    if(!(/^1(3|4|5|7|8)\d{9}$/.test(phone))){

				    return false;
			    }else{

			    	return  true;
			    }
		    }
	    }
    }
</script>

<style scoped>

</style>
