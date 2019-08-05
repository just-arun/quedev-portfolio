<template>
  <div class="education-container">
    <div class="education">
      <h1>{{iKnow.title}}</h1>
      <div class="container">
        <div class="content" v-for="(item, i) in iKnow.education" :key="i">
          <h4>{{item.one}}</h4>
          <h2>{{item.cource}}</h2>
          <p>{{item.two}}</p>
          <p>{{item.period}}</p>
        </div>
      </div>
    </div>
    <div class="my-skills">
      <h1>{{ mySkills.title }}</h1>
      <div class="skill-content" v-for="(item, i) in mySkills.items" :key="i">
        <h2>{{item.title}}</h2>
        <table>
          <tr v-for="(itm, j) in item.arr" :key="j">
            <td>{{itm.text}}</td>
            <td>
              <div class="level">
                  <span v-bind:style="{ width: (itm.level * 20) + '%' }"></span>
              </div>
            </td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      iKnow: {
        title: "What I know.",
        education: [
          {
            one: "Madras University",
            cource: "B.Sc(S/A)",
            two: "Computer Sciences",
            period: "2015 - 2018"
          },
          {
            one: "TN State Board",
            cource: "Bio Maths",
            two: "Biology",
            period: "2013 - 2015"
          },
          {
            one: "Matriculation School",
            cource: "Secondary Education",
            two: "General",
            period: "2003 - 2013"
          }
        ]
      },
      mySkills: {
        title: "My Skills",
        items: [
          {
            title: "FRONT END",
            arr: [
              {
                text: "HTML5/CSS3",
                level: 5
              },
              {
                text: "jQuery",
                level: 4
              },
              {
                text: "JavaScript",
                level: 5
              },
              {
                text: "VueJS",
                level: 4
              }
            ]
          },
          {
            title: "BACK END",
            arr: [
              {
                text: "NodeJS/express",
                level: 5
              },
              {
                text: "PHP",
                level: 4
              },
              {
                text: "GO",
                level: 3
              },
              {
                text: "MongoDB/mySql",
                level: 3
              }
            ]
          },
          {
            title: "GRAPHICS/OTHERS",
            arr: [
              {
                text: "GIMP",
                level: 5
              },
              {
                text: "INKSCAPE",
                level: 4
              },
              {
                text: "Logo Design",
                level: 4
              },
              {
                text: "Markting",
                level: 3
              }
            ]
          }
        ]
      }
    };
  }
};
</script>

<style>
</style>
