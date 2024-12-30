<template>
	<div class="inner">
		<h2>Typescript -- 接口</h2>
		<h3>人的信息 {{ p }}</h3>
		<h3>人们的信息 {{ ps }}</h3>
	</div>
</template>

<script setup lang="ts" name="Interfaces">
import { type Person } from '@/types'

let p: Person = {
	id: '123',
	name: '123',
	age: 18,
}
let ps: Array<Person> = [{
	id: '123',
	name: '123',
	age: 18,
}]
// console.log(p)
</script>

<style scoped>
.inner {
	background-color: #aaa;
	box-shadow: 0 0 10px;
	border-radius: 10px;
	padding: 20px;
	/* margin-right: 20px; */
}
</style>