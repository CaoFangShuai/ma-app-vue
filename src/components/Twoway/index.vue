<template>
    <div>
        <h1>双向绑定单向数据流</h1>
        <PersonalInfo v-model="phoneInfo"
                      :zip-code="zipCode"
                      @update:email="val => (zipCode = val)"
                      :validate="validate"
                      message="手机号为空或不合法"
        ></PersonalInfo>
        <PersonalInfo :phone-info="phoneInfo"
                      :zip-code="zipCode"
                      :validate="validate"
                      message="手机号为空或不合法"
                      @change="val => (phoneInfo = val)"
                      @update:email="val => (zipCode = val)"></PersonalInfo>
        phoneInfo： {{ phoneInfo }}
        <br/>
        zipCode： {{ zipCode }}
    </div>
</template>

<script>
    import PersonalInfo from './PersonalInfo.vue'

    export default {
        name: "index",
        components: {
            PersonalInfo
        },
        data() {
            return {
                phoneInfo: {
                    areaCode: "+86",
                    phone: ""
                },
                zipCode: ""
            }
        },
        methods: {
            validate(phone = "") {
                return phone && /^1[0-9]{10}$/.test(phone);
            },

        }
    }
</script>

<style scoped>

</style>
