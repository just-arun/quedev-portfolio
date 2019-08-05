<template>
    <aside :class="{'aside-active': navTriger}">
        <span v-if="navTriger" @click="$emit('navTrigerF')" class="close">&Cross;</span>
        <div class="aside-header" :class="{ 'aside-header-active': navTriger }">
            <h1>AV</h1>
            <h3>Arun V</h3>
            <p> full-stack developer </p>
        </div>
        <nav :class="{'nav-active': navTriger}" >
            <ul>
                <li @click="$emit('navTrigerF')" v-for="(item, i) in NavLink" :key="i">
                    <router-link :to="item.to">{{item.text}}</router-link>
                </li>
            </ul>
        </nav>
    </aside>
</template>

<script>
export default {
    props: ['navTriger'],
    data() {
        return {
            NavLink: [
                { text: 'Home', to: '/' },
                { text: 'About', to: '/about/' },
                { text: 'TimeLine', to: '/timeline/' },
                { text: 'What I Know', to: '/what-i-know/' },
                { text: 'Contact', to: '/contact/' },
            ]
        }
    },
}
</script>

<style>

</style>
