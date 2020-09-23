<template>
  <div class="Nav">
    <nav class="navbar navbar-light">
      <a class="navbar-brand" href="/">
        <img src="@/assets/logo.png" alt="logo benyamin benshabat" />
        <span class="name">Benyamin Benshabat</span>
      </a>

      <div class="pages mx-xs-auto">
        <ul>
          <li v-for="(link, index) in links" :key="index">
            <router-link :to="link.url" class="mr-5 py-2 px-4 rounded-lg">
              {{ $t(link.text) }}
            </router-link>
          </li>
          <li>
            <select class="form-control" id="language" v-model="$i18n.locale">
              <option
                v-for="(lang, i) in langs"
                :key="`Lang${i}`"
                :value="lang.local"
                >{{ lang.icon }}</option
              >
            </select>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Nav",
  data: () => {
    return {
      links: [
        {
          url: "/",
          text: "title.about"
        },
        {
          url: "/contact",
          text: "title.contact"
        }
      ],

      langs: [
        {
          local: "fr-FR",
          icon: "🇫🇷 - French"
        },
        {
          local: "en-US",
          icon: "🇺🇸 - English"
        }
      ]
    };
  }
};
</script>

<style scoped lang="scss">
.Nav {
  top: 0;
  width: 100%;
  background: linear-gradient(180deg, var(--navy) 90%, var(--violet-light));

  img {
    width: 4rem;
    height: 3rem;
  }

  span {
    margin-left: 25px;
    color: var(--white);
  }

  .pages {
    ul {
      margin-top: 17px;

      li {
        margin: 10px 0px 0px 0px;
        list-style: none;
        display: inline;

        a {
          font-weight: bold;
          text-decoration: none;
          color: var(--white);

          &:hover {
            color: var(--blue-light);
          }

          &.router-link-exact-active {
            color: var(--blue-light);
          }
        }

        #language {
          width: 130px;
          display: inline;
        }
      }
    }
  }
}
</style>
