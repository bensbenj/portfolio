import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    stacks: [
      {
        stars: 5,
        name: "vueJS",
        type: "frontend",
        url: "vueJS.png"
      },
      {
        stars: 3,
        name: "angularJS",
        type: "frontend",
        url: "angularJS.png"
      },
      {
        stars: 3,
        name: "html5",
        type: "frontend",
        url: "html5.png"
      },
      {
        stars: 3,
        name: "css3",
        type: "frontend",
        url: "css3.png"
      },
      {
        stars: 4,
        name: "sass",
        type: "frontend",
        url: "sass.png"
      },
      {
        stars: 3,
        name: "bootstrap",
        type: "frontend",
        url: "bootstrap.png"
      },
      {
        stars: 5,
        name: "nodeJS",
        type: "backend",
        url: "nodeJS.png"
      },
      {
        stars: 3,
        name: "java",
        type: "backend",
        url: "java.png"
      },
      {
        stars: 3,
        name: "typescript",
        type: "backend",
        url: "typescript.png"
      },
      {
        stars: 4,
        name: "mongoDB",
        type: "database",
        url: "mongoDB.png"
      },
      {
        stars: 4,
        name: "mySQL",
        type: "database",
        url: "mySQL.png"
      }
    ],

    currentStack: {
      stars: 0,
      name: "",
      type: "",
      url: ""
    },

    experiences: [
      {
        url: "https://www.depanneo.com",
        company: "Depanneo",
        technos: ["AngularJS", "NodeJS", "MongoDB"],
        timeNumber: "+2",
        time: "time.years",
        logo:
          "https://pbs.twimg.com/profile_images/1166660634899099655/SkrTy_I4_400x400.jpg",
        info:
          "Depanneo est une platform B2C spécialisé dans le domaine du dépannage en France 🇫🇷. J'ai été charger du développement from scratch du CRM ainsi que d'une webApp pour nos partenaires"
      },
      {
        url: "https://www.squadded.co",
        company: "Squadded",
        technos: ["ReactJS", "VueJS", "NodeJS", "Typescript", "MongoDB"],
        timeNumber: "4",
        time: "time.month",
        logo:
          "https://images-platform.99static.com/z2bV4-niyhLFxwBqABhDRCv3g30=/200x200:1800x1800/500x500/top/smart/99designs-contests-attachments/110/110475/attachment_110475215",
        info:
          "Squadded - social shopping, est un widget qui s'intègre au site e-commerce. 🛍"
      }
    ]
  },

  mutations: {
    SET_CURRENT_STACK(state, stack) {
      state.currentStack = { ...stack };
    }
  },

  actions: {
    setCurrentStack: (context, stack) => {
      context.commit("SET_CURRENT_STACK", stack);
    }
  },

  getters: {
    stacks: state => state.stacks,
    currentStack: state => state.currentStack,
    experiences: state => state.experiences
  },

  modules: {}
});
