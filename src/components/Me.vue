<template>
  <section class="section-me container">
    <div class="row">
      <div class="col-xs col-md mx-auto profil">
        <div class="background-sphere"></div>
        <img
          src="../assets/profil-ben.png"
          alt="profil ben"
          class="benyaminbenshabat"
        />
        <div class="foreground-sphere"></div>
      </div>
      <div class="col-xs col-md mt-md-5 pt-md-5 bio">
        <div>
          <p><i>Hello 👋</i></p>
          <p>{{ $t("bio.name") }},</p>
          <p>{{ $t("bio.work") }},</p>
          <p>{{ $t("bio.nationality") }},</p>
          <p>{{ $t("bio.diplome") }},</p>
          <p>{{ $t("bio.proverb") }},</p>
          <p>⬇️</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Me",
  mounted: () => {
    window.addEventListener("mousemove", onMouseMove);

    const benyaminbenshabat = document.querySelector(".benyaminbenshabat");
    const backgroundSphere = document.querySelector(".background-sphere");
    const foregroundSphere = document.querySelector(".foreground-sphere");

    function onMouseMove(e) {
      const movement =
        ((e.clientX - window.innerWidth / 2) / window.innerWidth) * 3;

      backgroundSphere.style.transform = `translate3d(calc(${movement} * 2vh), 0, 0)`;
      benyaminbenshabat.style.transform = `translate3d(calc(${-movement} * 4vh), 0, 0)`;
      foregroundSphere.style.transform = `translate3d(calc(${-movement} * 16vh), 0, 0)`;
    }
  }
};
</script>

<style lang="scss" scoped>
.section-me {
  height: 100vh;
  font-weight: bold;
  color: var(--navy);

  .profil {
    padding: 2rem;
    .background-sphere {
      z-index: 1;
      width: 30vw;
      height: 30vw;
      min-width: 300px;
      min-height: 300px;
      border-radius: 50%;
      position: relative;
      background: radial-gradient(
        white,
        var(--violet) 64%,
        var(--violet-dark) 70%
      );
    }
    img {
      top: 5rem;
      left: 9em;
      z-index: 2;
      width: 14vw;
      height: 21vw;
      min-width: 140px;
      min-height: 210px;
      border-radius: 5px;
      position: absolute;
      border: white solid 1px;
    }
    .foreground-sphere {
      width: 3em;
      z-index: 3;
      top: 20rem;
      left: 20rem;
      height: 3em;
      border-radius: 50%;
      position: absolute;
      background: var(--blue-light);
    }
  }

  @media (width: 500px) {
    .profil {
      padding-left: 5rem;
      margin-bottom: 5rem;
    }
  }

  @media (max-width: 500px) {
    margin-bottom: 5rem;
  }
}
</style>
