<template>
  <div id="app">
    <Nav />
    <div id="content">
      <router-view />
      <hr class="container mt-5" />
    </div>
    <Whatsapp />
    <Footer />
  </div>
</template>

<script>
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Whatsapp from "@/components/Whatsapp";

export default {
  name: "app",

  components: {
    Nav,
    Whatsapp,
    Footer
  }
};
</script>

<style lang="scss">
:root {
  --white: #f2f2f2;
  --grey: #a3a3a3;
  --grey-light: #fafafa;
  --black: #000000;
  --blue-light: #6e81e3;
  --navy: #221959;
  --violet-dark: #3e328c;
  --violet: #542ea6;
  --violet-light: #7630d9;
  --pink-dark: #730f8e;
  --pink: #f9026d;
  --pink-light: #eb6db4;
  --gold: #f3c80f;
  --green: #25d366;
}

::-moz-selection {
  color: var(--white);
  background: var(--navy);
}

::selection {
  color: var(--white);
  background: var(--navy);
}

#app {
  text-align: center;
  color: var(--navy);
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: Avenir, Helvetica, Arial, sans-serif;

  #content {
    min-height: calc(100vh - 73px - 200px);
  }

  input,
  button,
  select,
  textarea {
    box-shadow: none;

    &:focus {
      border: var(--violet) 1px solid;
    }
  }

  hr {
    border: var(--violet) 1px solid;
    width: 80%;
  }
}
</style>
