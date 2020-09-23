import Vue from "vue";
import VueI18n from "vue-i18n";
import en from "../locales/en-US.json";
import fr from "../locales/fr-FR.json";

Vue.use(VueI18n);

var locale = navigator.language;

export const i18n = new VueI18n({
  fallbackLocale: "fr",
  local: locale,
  messages: {
    fr,
    en
  }
});
