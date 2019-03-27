<template>
    <div>
        <select :value="phoneInfo.areaCode">
            <option value="+86">+86</option>
            <option value="+60">+60</option>
        </select>
        <input type="number" :value="phoneInfo.phone" placeholder="手机号">
        <input type="email" :value="zipCode" placeholder="邮编">
    </div>
</template>

<script>
    export default {
        name: "PersonalInfo",
        props:{
            phoneInfo:Object,
            zipCode:String
        },
        data(){
            return {

            }
        }
    }
</script>

<style scoped>

</style>