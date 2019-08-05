<template>
  <div class="contact-form">
    <div class="thanks-msg" :class="{'thanks-msg-active': thanks}">
      thanks mate
    </div>
    <div class="describe">
      <div>
        <h2>{{content.title}}</h2>
        <p>{{ content.description }}</p>
        <div class="icons">
          <a :href="con.link" v-for="(con, i) in content.icons" :key="i">
            <i :class="con.ico"></i>
          </a>
        </div>
      </div>
    </div>
    <form @submit.prevent="sendMail()">
      <input id="email" placeholder="Email address" type="text" v-model="email" />
      <textarea rows="8" id="body" placeholder="Your message" v-model="subject"></textarea>
      <button type="submit">SUBMIT</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      subject: "",
      thanks: false,
      content: {
        title: "Contact Me",
        description: `
          I Could Create an website which with Cutting edge technoledges
          and could provide an simple user experence
          `,
        icons: [
          { ico: "fab fa-twitter", link: "" },
          { ico: "fab fa-github", link: "" },
          { ico: "fab fa-slack", link: "" }
        ]
      }
    };
  },
  methods: {
    sendMail() {
      this.thanks = true;
      setTimeout(() => {
        this.thanks = false;
      }, 2000);
      this.email = '';
      this.subject = '';
    }
  }
};
</script>

<style>
</style>
