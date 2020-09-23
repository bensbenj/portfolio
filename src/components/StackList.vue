<template>
  <section class="section-stack container rounded-lg">
    <div class="container pt-4 pb-4">
      <h1 id="stack">{{ $t("title.stack") }}</h1>
      <div class="container line"></div>
      <div class="row pt-4 pb-4">
        <div class="col-xs col-md mx-auto p-5 mb-4 rounded-lg stacks-card">
          <i>hover/click stack</i>
          <h3>
            <span v-if="!currentStack.name">💡<br /></span>
            <span v-if="!currentStack.name">🤔</span>
            <span id="stack-name" v-if="currentStack.name"
              >{{ currentStack.name }} ({{ currentStack.type }})</span
            >
          </h3>
          <div class="rank" v-if="currentStack.stars">
            <div
              class="stars"
              v-for="(stars, index) in currentStack.stars"
              :key="index"
            >
              <svg width="18px" height="18px" viewBox="0 0 120 122">
                <g stroke="none" stroke-width="1" fill-rule="evenodd">
                  <g id="star" transform="translate(0.000000, 1.000000)">
                    <path
                      d="M54.4537815,5 C57.3404585,-1.7367303 62.6542597,-1.74334132 65.5462185,5 L80.6722689,36 L112.941176,41 C120.552387,42.3065943 122.192309,47.5925791 116.97479,53 L92.7731092,77 L98.8235294,111 C100.077318,118.861594 95.7833089,122.138425 88.7394958,119 L59.4957983,102 L31.2605042,119 C24.2145848,122.138392 19.9193268,118.86886 21.1764706,111 L27.2268908,77 L3.02521008,53 C-2.18943383,47.5977238 -0.554617778,42.3066044 7.05882353,41 L39.3277311,36 L54.4537815,5 L54.4537815,5 Z"
                      id="filled_star"
                    ></path>
                  </g>
                </g>
              </svg>
            </div>
            <div
              class="stars-death"
              v-for="(stars, index) in 5 - currentStack.stars"
              :key="index + 5"
            >
              <svg width="18px" height="18px" viewBox="0 0 120 122">
                <g stroke="none" stroke-width="1" fill-rule="evenodd">
                  <g id="star" transform="translate(0.000000, 1.000000)">
                    <path
                      d="M54.4537815,5 C57.3404585,-1.7367303 62.6542597,-1.74334132 65.5462185,5 L80.6722689,36 L112.941176,41 C120.552387,42.3065943 122.192309,47.5925791 116.97479,53 L92.7731092,77 L98.8235294,111 C100.077318,118.861594 95.7833089,122.138425 88.7394958,119 L59.4957983,102 L31.2605042,119 C24.2145848,122.138392 19.9193268,118.86886 21.1764706,111 L27.2268908,77 L3.02521008,53 C-2.18943383,47.5977238 -0.554617778,42.3066044 7.05882353,41 L39.3277311,36 L54.4537815,5 L54.4537815,5 Z"
                      id="filled_star"
                    ></path>
                  </g>
                </g>
              </svg>
            </div>
            <div class="average pt-1">
              <b>{{ currentStack.stars * 20 }}%</b>
            </div>
          </div>
        </div>
        <div class="col-xs col-md stacks">
          <Stack :stack="stacks" id="stack" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import Stack from "@/components/common/Stack";

export default {
  name: "StackList",

  components: {
    Stack
  },

  computed: {
    ...mapGetters(["stacks", "currentStack"])
  }
};
</script>

<style scoped lang="scss">
.section-stack {
  display: flex;
  color: black;
  margin-bottom: 7rem;
  background: linear-gradient(
    180deg,
    var(--navy),
    var(--violet-dark),
    var(--violet),
    var(--violet-light)
  );

  #stack {
    color: var(--white);
  }

  .line {
    width: 22px;
    content: "";
    border-radius: 28px;
    margin-bottom: 1rem;
    border: var(--white) solid 2px;
  }

  .stacks-card {
    height: 190px;
    max-width: 448px;
    background: var(--white);
    box-shadow: var(--navy) 7px 7px 10px 0px;

    h3 {
      line-height: 1.3em;
      letter-spacing: 0.2px;
      text-transform: capitalize;

      #stack-name {
        color: var(--violet);
      }
    }

    .rank {
      display: flex;
      justify-content: center;

      .stars {
        fill: var(--gold);
        animation: stars 2s infinite;
      }
      .stars,
      .stars-death {
        margin-right: 1vw;
      }

      @keyframes stars {
        0%,
        100% {
          transform: scale(1);
        }
        50% {
          transform: scale(1.22);
        }
      }
    }
  }
}
</style>
