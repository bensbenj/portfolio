<template>
  <section class="section-recommandation">
    <h1 id="reference">{{ $t("title.reference") }}</h1>
    <div class="line container"></div>
    <div class="blop">
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path
          fill="#7630d9"
          d="M23.8,-32.6C35.7,-24.2,53.5,-23.7,60.8,-16.2C68.1,-8.8,64.9,5.6,57.5,15.6C50,25.6,38.4,31.2,28.1,31.6C17.8,32,8.9,27.3,-0.9,28.6C-10.8,29.9,-21.5,37.2,-28.6,35.7C-35.7,34.2,-39.1,24,-36.8,15.6C-34.4,7.2,-26.4,0.6,-24.9,-9.4C-23.4,-19.4,-28.5,-32.9,-25.5,-44.2C-22.4,-55.6,-11.2,-64.9,-2.6,-61.2C6,-57.6,11.9,-41.1,23.8,-32.6Z"
          transform="translate(100 100)"
        />
      </svg>
    </div>

    <div class="carrousel">
      <input type="radio" name="slides" id="radio-1" />
      <input type="radio" name="slides" id="radio-2" checked />
      <input type="radio" name="slides" id="radio-3" />
      <input type="radio" name="slides" id="radio-4" />
      <ul class="slides">
        <li class="slide">
          <p>
            <q>
              I used to work with Benjamin on many projects. He is fully
              committed and understands the needs very quickly. He is highly
              skilled with frameworks nodejs and angularjs and also very
              proactive. It was a pleasure to work with him. He has a great team
              spirit and a good relationship.
            </q>
            <span class="author">
              <img
                alt="profil linkedin"
                src="https://media-exp1.licdn.com/dms/image/C5603AQFFsaJkPaItuQ/profile-displayphoto-shrink_100_100/0/1588232588205?e=1612396800&v=beta&t=xMD9gEqBm_sDnoJizYRAOfRDTIB_kgMNCg8XEbFZKzw"
              />
              <a
                >Lea Zaghdoun - Customer Success Manager - Account Manager at
                Lili5</a
              >
            </span>
          </p>
        </li>
        <li class="slide">
          <p>
            <q>
              Benyamin came to work with us with a data-scientist background.
              Very quickly, he became obsessed with web development and
              Javascript particularly. After an intensive formation were he
              learned JS deeply, he was assigned to create, along with me, our
              pivotal Admin based on the MEAN Stack. We build the foundation of
              a very powerful tool, allowing us to grow at fast pace. [...]
            </q>
            <span class="author">
              <img
                alt="profil linkedin"
                src="https://media-exp1.licdn.com/dms/image/C5603AQFwCb8vM4sEKA/profile-displayphoto-shrink_100_100/0?e=1612396800&v=beta&t=I00kYTw1k-8418GnYHNNc8nPpsGrXFUTPo82M760bqY"
              />
              <a>Simon ARAZI - Co-Founder & CTO @ Depanneo</a>
            </span>
          </p>
        </li>
        <li class="slide">
          <p>
            <q>
              J'ai eu l'occasion de collaborer avec Benjamin sur un projet
              commun entre nos 2 sociétés. Il a fait un travail remarquable et
              très efficace alors même qu'il était junior. L'avenir est très
              prometteur pour ce jeune collaborateurs pleins de ressources.
            </q>
            <span class="author">
              <img
                alt="profil linkedin"
                src="https://media-exp1.licdn.com/dms/image/C4D03AQEIGZDkVZZVsA/profile-displayphoto-shrink_100_100/0?e=1612396800&v=beta&t=p4DUW0vSIRqia1uvXPXTCtrQVRZhyhTuwP8yChRcTkU"
              />
              <a
                >Vanessa Sonigo-Rozenbaumas - Conseil en stratégie commerciale
                et recrutement</a
              >
            </span>
          </p>
        </li>
        <li class="slide">
          <p>
            <q>This is awesome. You need help with your project?</q>
            <span class="author">
              <img alt="logo" src="@/assets/space/rocket.svg" />
              <a href="/contact">{{ $t("title.contact") }}</a>
            </span>
          </p>
        </li>
      </ul>
      <div class="slidesNavigation">
        <label for="radio-1" id="dotForRadio-1"></label>
        <label for="radio-2" id="dotForRadio-2"></label>
        <label for="radio-3" id="dotForRadio-3"></label>
        <label for="radio-4" id="dotForRadio-4"></label>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Reference",

  mounted() {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 1500) {
        let oneTime = false;
        do {
          document.getElementsByClassName("carrousel")[0].style.display =
            "block";
        } while (oneTime);
      }
    });
  }
};
</script>

<style scoped lang="scss">
.section-recommandation {
  .line {
    width: 22px;
    content: "";
    border-radius: 28px;
    border: var(--violet-light) solid 2px;
  }

  .blop {
    right: 10rem;
    position: absolute;
    svg {
      opacity: 0.5;
      width: 400px;
    }
  }

  .carrousel {
    height: 55vh;
    margin: auto;
    display: none;
    max-width: 750px;
    overflow: hidden;
    position: relative;
    text-align: center;
    background: transparent;
    animation: slide 0.7s ease-in;

    .author {
      cursor: default;
    }
  }

  @keyframes slide {
    0% {
      transform: skewX(53deg) translateX(-500px);
    }
    60% {
      transform: translateX(0px);
    }
    70% {
      transform: skewX(0deg) translateX(30px);
    }
    80% {
      transform: skewX(0) translateX(0);
    }
    90% {
      transform: skewX(-5deg);
    }
    100% {
      transform: skewX(0deg);
    }
  }

  .carrousel .slides {
    left: 0;
    width: 400%;
    padding-left: 0;
    padding-top: 1em;
    overflow: hidden;
    list-style: none;
    position: relative;
    transition: transform 0.5s;
    -o-transition: transform 0.5s;
    -moz-transition: transform 0.5s;
    -webkit-transition: transform 0.5s;
  }
  .carrousel .slides li {
    width: 25%;
    float: left;
    height: 300px;
    padding: 11px;
    position: relative;
  }
  .carrousel li p {
    margin-top: 0;
  }
  .carrousel li q {
    margin: auto;
    max-width: 90%;
    font-weight: bold;
    color: var(--navy);
  }
  .carrousel li img {
    width: 3em;
    height: 3em;
    object-fit: cover;
    border-radius: 50%;
    margin-left: -1.5em;
    margin-right: 0.5em;
    vertical-align: middle;
  }
  .carrousel li span.author {
    display: block;
    margin-top: 0.5em;
    a {
      color: var(--navy);
      &:hover {
        color: var(--violet-light);
      }
    }
  }
  .carrousel .slidesNavigation {
    left: 50%;
    bottom: 1rem;
    width: 104px;
    display: block;
    list-style: none;
    position: absolute;
    text-align: center;
    margin-left: -52px;
  }
  .carrousel input {
    display: none;
  }
  .carrousel .slidesNavigation label {
    float: left;
    margin: 6px;
    width: 10px;
    height: 10px;
    opacity: 0.5;
    font-size: 0;
    display: block;
    border-radius: 50%;
    -webkit-border-radius: 50%;
    background-color: var(--grey);
  }
  /* You have to repeat this with each slide
  TODO: make it easier with SCSS
  25% movement 100/slides-num
  */
  #radio-1:checked ~ .slides {
    transform: translateX(0%);
  }
  #radio-2:checked ~ .slides {
    transform: translateX(-25%);
  }
  #radio-3:checked ~ .slides {
    transform: translateX(-50%);
  }
  #radio-4:checked ~ .slides {
    transform: translateX(-75%);
  }

  .carrousel .slidesNavigation label:hover {
    cursor: pointer;
  }
  /* You have to repeat this with each slide/dot */
  .carrousel #radio-1:checked ~ .slidesNavigation label#dotForRadio-1,
  .carrousel #radio-2:checked ~ .slidesNavigation label#dotForRadio-2,
  .carrousel #radio-3:checked ~ .slidesNavigation label#dotForRadio-3,
  .carrousel #radio-4:checked ~ .slidesNavigation label#dotForRadio-4 {
    opacity: 1;
    background: var(--violet-light);
  }

  @media (max-width: 480px) {
    .carrousel li p {
      padding-left: 0.5em;
      padding-right: 0.5em;
    }
    .carrousel li img {
      width: 2em;
      height: 2em;
      margin-left: -1em;
      margin-right: 0.25em;
    }
  }
}
</style>
