<template>
    <div class="main-layout">
        <menu :class="{'menu-active': navTriger}" @click="navTriger = !navTriger"></menu>
        <NavDrawer v-bind:navTriger="navTriger" v-on:navTrigerF="navTrigerF()" /> 
        <Content/>
    </div>
</template>

<script>
export default {
    data() {
        return {
            navTriger: false
        }
    },
    methods: {
        navTrigerF(){
            this.navTriger = false;
        }
    },
}
</script>

<style>

</style>
