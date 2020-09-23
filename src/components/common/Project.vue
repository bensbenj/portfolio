<template>
  <div class="project">
    <div class="main-project">
      <div class="my-card">
        <div class="card-front">
          <img :src="project.logo" :alt="project.company" />
          <div class="line-card">
            <div class="time">
              <span>{{ project.timeNumber }} {{ $t(project.time) }}</span>
            </div>
          </div>
          <div class="container technos">
            <b-badge
              pill
              v-for="(techno, index) in project.technos"
              :key="index"
            >
              {{ techno }}
            </b-badge>
          </div>
        </div>

        <div class="card-back">
          <p>
            {{ project.info }}
          </p>
          <a :href="project.url">🔗{{ project.company }}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Project",
  props: {
    project: Object
  }
};
</script>

<style scoped lang="scss">
.project {
  top: 60%;
  position: relative;
  cursor: pointer;

  .main-project {
    top: 50%;
    left: 50%;
    width: 250px;
    height: 320px;
    background: none;
    position: relative;
    transform: translate(-50%, -50%);

    .my-card {
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      position: relative;
      border-radius: 10px;
      transition: all 0.8s ease;
      transform-style: preserve-3d;
      box-shadow: var(--grey) 1px 1px 5px 0px;

      &:hover {
        transform: scale(1.1) rotateY(180deg);
      }

      .card-front {
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        position: relative;
        border-radius: 10px;
        backface-visibility: hidden;
        -webkit-backface-visibility: hidden;
        background-color: var(--white);

        img {
          width: 100%;
          height: 11rem;
          object-fit: cover;
          border-radius: 9px 9px 0px 0px;
        }

        .line-card {
          border: var(--blue-light) solid 1px;

          .time {
            top: 165px;
            left: 5rem;
            width: 37%;
            color: white;
            position: absolute;
            border-radius: 20px;
            background: var(--blue-light);
            animation: pulse 3s 700ms infinite;
          }

          @keyframes pulse {
            0% {
              transform: scale(1);
              box-shadow: 0 0 0 0 rgba(#6e81e3, 0.7);
            }

            70% {
              transform: scale(1);
              box-shadow: 0 0 0 10px rgba(#7b8cdf, 0);
            }

            100% {
              transform: scale(1);
              box-shadow: 0 0 0 0 rgba(#8997dd, 0);
            }
          }
        }

        .technos {
          margin-top: 4rem;
          .badge {
            margin: 2px;
            color: var(--grey-light);
            background-color: var(--blue-light);
          }
        }
      }

      .card-back {
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        color: #333;
        padding: 2rem;
        overflow: hidden;
        text-align: center;
        position: absolute;
        border-radius: 10px;
        transform: rotateY(180deg);
        backface-visibility: hidden;
        -webkit-backface-visibility: hidden;
        background: var(--grey-light);
      }
    }
  }
}
</style>
