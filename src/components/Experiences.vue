<template>
  <section class="section-experiences container">
    <h1 id="experiences">{{ $t("title.experience") }}</h1>
    <div class="container line"></div>
    <div class="row">
      <div
        class="col-lg-6 col-md-6 col-sm-12 col-12 mt-4"
        v-for="(experience, index) in experiences"
        :key="index"
      >
        <Project :project="experience" />
      </div>
    </div>
  </section>
</template>

<script>
import Project from "@/components/common/Project";
import { mapGetters } from "vuex";

export default {
  name: "Team",

  components: {
    Project
  },

  computed: {
    ...mapGetters(["experiences"])
  }
};
</script>

<style scoped lang="scss">
.section-experiences {
  margin-bottom: 10rem;
  .line {
    width: 22px;
    content: "";
    margin-bottom: 1rem;
    border-radius: 28px;
    border: var(--violet-light) solid 2px;
  }
}
</style>
