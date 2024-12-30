<template>
	<div class="inner">
		<h2>响应式测试 -- reactive</h2>
		<h4>姓名：{{ annt.name }}</h4>
		<h4>爱好：{{ annt.hobby }}</h4>
		<h4>年龄：{{ annt.age }}</h4>
		<h4>地址：{{ annt.address }}</h4>
		<h4>电话：{{ annt.tel }}</h4>
		<button @click="grow">生日快乐</button>
		<button @click="migrate">迁移</button>
	</div>
</template>

<script setup lang="ts" name="Reactive">
import { reactive, ref } from "vue";

let annt = reactive({
	name: '淑芬',
	hobby: [
		'唱',
		'跳',
		'rap',
	],
	age: 18,
	address: '上海市浦东新区',
	tel: 13411111111
})

function grow() {
	annt.age++
	console.log(annt)
}

function migrate() {
	annt.address = '上海市浦西区'

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