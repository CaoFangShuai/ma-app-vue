<template>
    <div>
        <select :value="phoneInfo.areaCode" @change="handleAreaCodeChange">
            <option value="+86">+86</option>
            <option value="+60">+60</option>
        </select>
        <input type="number" :value="phoneInfo.phone"  placeholder="手机号" @input="handlePhoneInput">
        <input type="email" :value="zipCode" placeholder="邮编" @input="handleEmailInput">
        <span v-if="showMessage" style="color: red;">{{ message }}</span>
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
            zipCode:String,
            validate: Function,
            required: Boolean,
            message:String
        },
        data(){
            return {
                showMessage: false
            }
        },
        watch:{
           "phoneInfo.phone"(val){
               this.handleValidate(val)
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
            handleValidate(val) {
                const res = this.validate(val);
                this.showMessage = !res;
            }
	    }
    }
</script>

<style scoped>

</style>
