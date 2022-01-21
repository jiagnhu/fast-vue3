<!--
 * @GitHub: https://github.com/MaleWeb/vvtp
 * @version: 
 * @Author: 扫地盲僧
 * @Date: 2022-01-19 16:19:27
 * @LastEditors: BlindMonk
 * @LastEditTime: 2022-01-21 19:37:38
-->
<script setup lang="ts">
import { useSettingsOutsideStore } from './store/modules/settings'
console.log(useSettingsOutsideStore().title, '测试全局store')
</script>
<template>
  <h1 class="text-9xl text-center mt-20">Hello FastVue3</h1>
  <p class="text-base font-Blimone text-center mt-5">
    <a href="https://github.com/MaleWeb/vvtp" target="__bank">@扫地盲僧</a>
  </p>
</template>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #f0f0f0;
}
</style>
