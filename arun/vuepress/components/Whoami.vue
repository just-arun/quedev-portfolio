<template>
  <div class="who-am-i">
    <div class="one">
      <h1>{{whooAmI.title}}</h1>
      <p>{{ whooAmI.para }}</p>
    </div>
    <div class="two">
      <div class="h1"></div>
      <table>
        <tr class="list" v-for="(item, i) in whooAmI.address" :key="i">
          <td>{{item.title}}</td>
          <td>{{item.content}}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      whooAmI: {
        title: "who am I.",
        para: `
                I'm a self thought programmer, full-stack developer at WeKanCode, specializes in Vue and NodeJs,can create an profesional looking UI and complex API logics with minimal effort, i always consider my self as an student, welcomes new challenges and consider that as an way to learn and improve my skill as an programer.
                `,
        address: [
          { title: "LOCATION", content: "India" },
          { title: "EMAIL", content: "arunberry47@gmail.com" },
          { title: "PHONE", content: "(+91)8248 60 2899" },
          { title: "SLACK", content: "arunv@wekancode.com" }
        ]
      }
    };
  }
};
</script>

<style>
</style>
