<template>
    <div>

        <h1>Vue和Jsx的对比</h1>
        <AnchoredHeading1 :level="1">hello vue</AnchoredHeading1>
        <AnchoredHeading2 :level="2">hello jsx</AnchoredHeading2>
        <AnchoredHeading3 :level="3">hello js</AnchoredHeading3>
        <VNodes :vnodes="getAnchoredHeading(4)"></VNodes>
        <p>正常：{{msg}}</p>
        <VNodes :vnodes="getSpanMsg()"></VNodes>
    </div>
</template>

<script>
    import AnchoredHeading1 from './AnchoredHeading.vue';
    import AnchoredHeading2 from './AnchoredHeading.jsx';
    import AnchoredHeading3 from './AnchoredHeading.js';

    export default {
        name: "index",
        components:{
            AnchoredHeading1,
            AnchoredHeading2,
            AnchoredHeading3,
            VNodes:{
                functional:true,
                render:(h,ctx)=>{
                    return ctx.props.vnodes;
                }
            }
        },
        data(){
            return{
                msg:"hello word"
            }
        },
        methods:{
            getAnchoredHeading(level){
                const Tag=`h${level}`;
                return <Tag>Hello 自定义组件</Tag>;
            },
            getSpanMsg(){
                return <p>自定义组件：hello word</p>
            }
        }
    }
</script>

<style scoped>

</style>
