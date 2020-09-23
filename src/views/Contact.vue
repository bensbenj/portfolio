<template>
  <div class="contact container mt-4">
    <h1 id="contact">{{ $t("title.contact") }}</h1>
    <div class="container ligne"></div>
    <div class="jumbotron mt-4">
      <h3>{{ $t("contact.subtitle") }}😉</h3>
      <div class="row">
        <div class="col-md mt-3 rocket-power">
          <img src="@/assets/space/rocket.svg" alt="rocket" class="rocket" />
        </div>
        <div class="col mt-3">
          <form @submit.prevent="send">
            <b-input
              type="email"
              name="email"
              id="email"
              class="form-control mb-3"
              :state="validation"
              v-model="email"
              placeholder="Email"
            />
            <b-input
              type="text"
              name="name"
              id="text"
              v-model="name"
              class="form-control mb-3"
              placeholder="Nom"
            />
            <textarea
              name="message"
              cols="30"
              rows="10"
              v-model="message"
              class="form-control mb-5"
              placeholder="Message"
            ></textarea>
            <button
              class="btn"
              type="submit"
              @mouseleave="stop"
              @click="
                start();
                send();
              "
            >
              {{ $t("send") }} !
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import emailjs from "emailjs-com";
export default {
  name: "Contact",

  data() {
    return {
      email: "",
      name: "",
      message: ""
    };
  },

  computed: {
    ...mapGetters(["stacks", "currentStack"]),

    validation() {
      if (this.email) {
        let emailRegex = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/;
        return emailRegex.test(this.email);
      }
      return null;
    }
  },

  methods: {
    start() {
      if (this.validation) {
        this.$confetti.start();
      }
    },

    stop() {
      this.$confetti.stop();
    },

    go() {
      document.getElementById("rocket").animate;
    },

    send(e) {
      if (this.validation) {
        emailjs
          .sendForm(
            "service_zt7wwqy", //window.process.env.EMAIL_ID,
            "template_ud0tic7", // process.env.TEMPLATE_ID,
            e.target,
            "user_locjTmYtxEob24JGjRFI2" //process.env.USER_ID
          )
          .then(
            result => {
              console.log("SUCCESS!", result.status, result.text);
            },
            error => {
              console.log("FAILED...", error);
            }
          );
      }
    }
  }
};
</script>

<style scoped lang="scss">
.contact {
  .ligne {
    width: 22px;
    content: "";
    border-radius: 28px;
    border: var(--violet-light) solid 2px;
  }

  .jumbotron {
    background: linear-gradient(200deg, var(--navy), var(--blue-light));
    color: var(--white);
    border-radius: 20px;

    input {
      height: 3rem;
    }

    input,
    textarea {
      border-radius: 10px;
    }

    .rocket-power {
      padding-top: 9vh;

      .rocket {
        width: 60%;
        cursor: pointer;
        &:hover {
          animation: shake 0.5s;
          animation-iteration-count: infinite;
        }
      }
    }

    @keyframes shake {
      0% {
        transform: translate(1px, 1px) rotate(0deg);
      }
      10% {
        transform: translate(-1px, -2px) rotate(-1deg);
      }
      20% {
        transform: translate(-3px, 0px) rotate(1deg);
      }
      30% {
        transform: translate(3px, 2px) rotate(0deg);
      }
      40% {
        transform: translate(1px, -1px) rotate(1deg);
      }
      50% {
        transform: translate(-1px, 2px) rotate(-1deg);
      }
      60% {
        transform: translate(-3px, 1px) rotate(0deg);
      }
      70% {
        transform: translate(3px, 1px) rotate(-1deg);
      }
      80% {
        transform: translate(-1px, -1px) rotate(1deg);
      }
      90% {
        transform: translate(1px, 2px) rotate(0deg);
      }
      100% {
        transform: translate(1px, -2px) rotate(-1deg);
      }
    }

    .btn {
      color: var(--navy);
      border-radius: 10px;
      transform: scale(1);
      background-color: var(--white);
      animation: pulse 3s infinite;

      @keyframes pulse {
        0% {
          transform: scale(1);
          box-shadow: 0 0 0 0 rgba(#ffffff, 0.7);
        }

        70% {
          transform: scale(1);
          box-shadow: 0 0 0 10px rgba(#ffffff, 0);
        }

        100% {
          transform: scale(1);
          box-shadow: 0 0 0 0 rgba(#ffffff, 0);
        }
      }
    }
  }
}
</style>
