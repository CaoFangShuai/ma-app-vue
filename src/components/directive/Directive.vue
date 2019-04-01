<template>
    <div>
        <h2>内置指令</h2>
        <h3>v-text</h3>
        <div v-text="'hello vue'">hello world</div>
        <h3>v-html</h3>
        <div v-html="'<span style=&quot;color: red&quot;>hello vue</span>'"></div>
        <h3>v-show</h3>
        <div v-show="show">hello vue</div>
        <button @click="show = !show">change show</button>
        <h3>v-if v-else v-else-if</h3>
        <div v-if="number===1">hello vue{{number}}</div>
        <div v-else-if="number===2">hello cao{{number}}</div>
        <div v-else>hello world{{number}}</div>
        <button @click="()=>number++">number++</button>
        <h3>v-for</h3>
        <table>
            <tr v-for="item in list" :key="item">
                <td v-for="item1 in list1">{{item}}x{{item1}}={{item*item1}}</td>
            </tr>
        </table>
        <h3>v-on</h3>
        <button @click="()=>number++">number++</button>
        <h3>v-model</h3>
        <p>{{message}}</p>
        <input type="text" v-model="message">
        <h3>v-pre</h3>
        <div v-pre>{{ this will not be compiled }}</div>
        <h3>v-once</h3>
        <div v-once>{{ number }}</div>
    </div>
</template>

<script>

    export default {
        name: "Directive",
        data() {
            return {
                show: true,
                number: -1,
                list: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                message: "",
            }
        },
        computed: {
            list1() {
                return [1, 2, 3, 4, 5, 6, 7, 8, 9]
            },

        },
        methods: {
            handleNameinput(e) {
                console.log(e)
                // this.name=e
            }
        }
    }
</script>

<style scoped>

</style>