<template>
    <div class="inner">
        <h2>Vue 2.x 演示</h2>
        <h4>姓名：{{ name }}</h4>
        <h4>爱好：{{ hobby }}</h4>
        <h4>年龄：{{ age }}</h4>
        <h4>地址：{{ address }}</h4>
        <h4>电话：{{ tel }}</h4>
        <button @click="grow">生日快乐</button>
    </div>
</template>

<script lang="ts">

// vue2的写法
export default {
    name: 'Demo2',
    data() {
        return {
            name: '淑芬',
            hobby: [
                '唱',
                '跳',
                'rap',
            ],
            age: 18,
            address: '上海市浦东新区',
            tel: 13411111111
        }
    },
    methods: {
        grow() {
            this.age++
        }
    },
    computed() {

    }
}

</script>

<style scoped>
.inner {
    background-color: #aaa;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
    margin-right: 20px;
}
</style>