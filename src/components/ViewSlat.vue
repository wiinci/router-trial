<template>
<div>
    <h1>SLAT</h1>
</div>
</template>

<script>
import Vue from 'vue'
import SlatReadme from '@/assets/slat/readme.md'
import ComponentView from '@/components/ComponentView'
import Slat from '@/assets/slat/Slat'

Vue.component('component-view', ComponentView)
Vue.component('slat', Slat)

new Vue({
    el: '#page',
    render: h => h(SlatReadme)
});
</script>
