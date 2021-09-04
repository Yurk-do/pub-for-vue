<template>
  <div id="app">
    <section
      id="main-background-pages-container"
      :style="{ 'background-image': imagePath }"
    >
      <VueHeader :links="routes" />
      <section id="content-wrapper">
        <router-view />
      </section>
    </section>
    <section class="content pages"></section>
    <LoginForm v-if="loginFormIsActive" />
    <div id="test"></div>
    <footer id="footer">footer</footer>
  </div>
</template>
<script>
import VueHeader from "@/components/Header/VueHeader.vue";
import { routes } from "@/router/routesMainPages.js";
import { PATHS_BACKGROUND_IMAGES } from "@/store/constants/pathBackgroundForTopPartPages.js";
import LoginForm from "@/components/forms/LoginForm.vue";

export default {
  name: "App",
  components: { VueHeader, LoginForm },
  data() {
    return {
      routes,
      PATHS_BACKGROUND_IMAGES,
    };
  },
  computed: {
    imagePath() {
      return PATHS_BACKGROUND_IMAGES[this.$route.name];
    },
    loginFormIsActive() {
      return this.$store.state.loginForm;
    },
  },
};
</script>

<style lang="scss">
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}

article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}

* {
  box-sizing: border-box;
}

html,
body {
  background-image: url(./assets/images/home-bg.png);
  height: 100%;
}

#app {
  min-height: 100%;
  display: flex;
  flex-direction: column;
}

#main-background-pages-container {
  position: relative;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  color: white;
  height: 100vh;
  width: 100%;
}

#content-wrapper {
  flex: 1 1 auto;
}

#footer {
  color: white;
  font-size: 30px;
}
#test {
  height: 3000px;
}
</style>
