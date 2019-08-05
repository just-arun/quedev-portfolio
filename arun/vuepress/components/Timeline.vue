<template>
    <section class="time-line-container">
        <h1>Where I've been</h1>
        <div class="time-line">
            <ul>
                <li v-for="(item, i) in timeLineItems" :key="i">
                    <h3>{{ item.title }} {{i+1}}</h3>
                    <div class="time-map">{{ item.timePeriod }}</div>
                    <p> {{ item.description }} </p>
                </li>
            </ul>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            timeLineItems: [
                {
                    title: "TNC College",
                    description: `
                    I Did my Bachular of Software application course in TNC College, which gave me a piece of mind on what, when and how to do. to get a better future and i took participate in NSS for a wile.
                    `,
                    timePeriod: "2015 - 2018"
                },
                {
                    title: "Freelancing",
                    description: `
                    I started my freelancing work at the last year of my college. and got few customers but sill strugling to gain a decent amount of money, as the days passed by I started to make my won job in the form of blogging
                    `,
                    timePeriod: "2017 - 2018"
                },
                {
                    title: "WeKanCode",
                    description: `
                    I joined wecan code company after two years of freelancing as i thought that it would be a good idea to go to a job so that it could enhanse my knowledge in this field and could learn more stuffs, and luckyli i got a job in a energy rich company call weKanCode
                    `,
                    timePeriod: "2019 - present"
                },
                {
                    title: "High School",
                    description: `
                    i have choosen Bio-Maths at my highschool and spend a fare time with it and made an lasting impression on my teachers and mates 
                    and i have learned many important stuffs on the way through
                    `,
                    timePeriod: "2013 - 2015"
                },
            ]
        }
    },
}
</script>

<style>

</style>
