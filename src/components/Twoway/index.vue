<template>
    <div>
        <h3>双向绑定单向数据流</h3>
        <PersonalInfo v-model="phoneInfo" :zip-code.sync="zipCode"></PersonalInfo>
        <!--<PersonalInfo></PersonalInfo>-->
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
        data(){
            return {
                phoneInfo: {
                    areaCode: "+86",
                    phone: ""
                },
                zipCode: ""
            }
        }
    }
</script>

<style scoped>

</style>