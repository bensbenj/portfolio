<template>
  <div class="footer">
    <div class="container">
      <div class="row mb-5">
        <div
          class="col-lg-3 col-md-6 col-sm-6 col-12 mb-sm-3 text-lg-left footer-section-logo"
        >
          <img src="@/assets/logo.png" alt="logo benyamin benshabat" />
          <span class="companyName">
            Benyamin Benshabat
          </span>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-6 col-12 footer-section-menu">
          <ul>
            <li v-for="(link, index) in links" :key="index">
              <router-link :to="link.url">{{ $t(link.text) }}</router-link>
            </li>
          </ul>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-6 col-12 footer-section-link">
          <ul>
            <li v-for="(social, index) in socials" :key="index">
              <a :href="social.url" target="_blank">
                <i :class="social.icon" class="fa-2x"></i>
              </a>
            </li>
          </ul>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-6 col-12 footer-section-contact">
          📩
          <a href="mailto:benyaminbenshabat@gmail.com" target="_blank"
            >benyaminbenshabat@gmail.com</a
          >
        </div>
      </div>
      <div>
        <p>
          Copyright &copy; {{ new Date().getFullYear() }} Benyamin Benshabat -
          Digital Agency. -
          <a href="/mention-legale" target="_blank" rel="noopener noreferrer"
            >CGV</a
          >
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
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

      socials: [
        {
          url: "https://linkedin.com/in/benyaminbenshabat",
          icon: "fab fa-linkedin"
        },
        {
          url: "https://twitter.com/ben_bensabat",
          icon: "fab fa-twitter"
        },
        {
          url: "https://github.com/bensbenj",
          icon: "fab fa-github"
        },
        {
          url: "https://stackoverflow.com/users/7128787/bensbenj",
          icon: "fab fa-stack-overflow"
        }
      ],

      emailSubscrite: ""
    };
  }
};
</script>

<style lang="scss" scoped>
.footer {
  bottom: 0;
  z-index: 0;
  width: 100%;
  height: 100%;
  color: var(--navy);
  font-weight: bold;
  position: relative;
  padding: 2rem 1rem;

  img {
    width: 4rem;
    height: 3rem;
  }

  a {
    color: var(--navy);
  }

  .footer-section-logo {
    .companyName {
      color: var(--navy);
    }
  }

  .footer-section-menu {
    ul {
      list-style: none;
      padding-inline-end: 40px;
      a {
        &:hover {
          color: var(--blue-light);
        }
      }
    }
  }

  .footer-section-link {
    ul {
      list-style: none;
      padding-inline-end: 22px;
      li {
        padding: 0 15px 0 0;
        display: inline-block;
        i {
          &:hover {
            color: var(--blue-light);
          }
        }
      }
    }
  }

  .footer-section-contact {
    a {
      font-size: 15px;
      &:hover {
        color: var(--blue-light);
      }
    }
  }
}
</style>
