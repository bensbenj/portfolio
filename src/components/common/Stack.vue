<template>
  <div class="strip">
    <div
      class="stack-logo mb-4"
      :class="index % 3 === 2 ? 'two' : index % 3 === 1 ? 'one' : 'zero'"
      v-for="(_stack, index) in stack"
      :key="index"
      @mouseover="swapStack(_stack)"
    >
      <img :src="getImage(_stack.url)" :alt="_stack.name" />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Stack",

  props: {
    stack: {}
  },

  computed: {
    ...mapState(["currentStack"])
  },

  methods: {
    getImage(url) {
      return require("@/assets/stacks/" + url);
    },
    swapStack(stack) {
      this.$store.dispatch("setCurrentStack", stack);
    }
  },

  mounted() {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 400) {
        let oneTime = false;
        do {
          document.getElementsByClassName("stack-logo").forEach(stackLogo => {
            stackLogo.style.display = "flex";
          });
        } while (oneTime);
      }
    });
  }
};
</script>

<style scoped lang="scss">
.strip {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  -webkit-flex-wrap: wrap;

  .stack-logo {
    z-index: 1;
    width: 80px;
    height: 80px;
    display: none;
    cursor: pointer;
    transition: 0.7s;
    margin-left: 10px;
    position: relative;
    align-items: center;
    border-radius: 100px;
    justify-content: center;
    background-color: white;
    box-shadow: var(--violet-dark) 0px 0px 8px 3px;

    img {
      width: 50%;
      height: auto;
    }

    &:hover {
      z-index: 2;
      transform: scale(1.5);
      box-shadow: var(--violet-light) 0px 0px 6px 1px;
      img {
        opacity: 1;
      }
    }
  }

  .two {
    animation: bubble 7s, bubble1 7s;
    animation-timing-function: linear;
  }
  .one {
    animation: bubble 5s, bubble2 5s;
    animation-timing-function: ease;
  }
  .zero {
    animation: bubble 6s, bubble3 6s;
    animation-timing-function: ease-in-out;
  }

  @keyframes bubble {
    from {
      left: 40%;
    }
    to {
      left: 0%;
    }
  }

  @keyframes bubble1 {
    0% {
      top: -100px;
    }
    25% {
      top: 0px;
    }
    50% {
      top: -100px;
    }
    75% {
      top: 150px;
    }
    100% {
      top: 0px;
    }
  }

  @keyframes bubble2 {
    0% {
      top: 0px;
    }
    25% {
      top: -50px;
    }
    50% {
      top: 75px;
    }
    75% {
      top: -50px;
    }
    100% {
      top: 0px;
    }
  }

  @keyframes bubble3 {
    0% {
      top: 0px;
    }
    25% {
      top: -100px;
    }
    50% {
      top: 150px;
    }
    75% {
      top: -100px;
    }
    100% {
      top: 0px;
    }
  }
}
</style>
