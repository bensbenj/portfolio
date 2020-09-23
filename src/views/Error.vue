<template>
  <div class="error">
    <h1 contenteditable>
      4
      <div class="shine-3"></div>
      <div class="shine-4"></div>
    </h1>
    <h1 style="left:71.2%;" contenteditable>
      4
      <div class="shine-3"></div>
      <div class="shine-4"></div>
    </h1>
    <div class="stars-container">
      <div class="stars">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div class="stars">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div class="stars">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div class="stars">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div class="stars">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div class="stars-2"></div>
      <div class="stars-2"></div>
      <div class="stars-2"></div>
      <div class="stars-2"></div>
      <div class="stars-2"></div>
      <div class="stars-2"></div>
    </div>

    <div class="moon"></div>

    <div class="planet-container">
      <div class="planet-ring2"></div>
      <div class="planet"></div>
      <div class="shine"></div>
      <div class="shine-2"></div>
      <div class="planet-ring"></div>
      <div class="planet-crater"></div>
    </div>

    <div class="meteor-container">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>

    <div class="meteor-container-2">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>

    <div class="meteor-container-3">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>

    <div class="meteor-container-4">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Error"
};
</script>

<style scoped lang="scss">
.error {
  position: relative;
  height: 100vh;
  background: linear-gradient(20deg, var(--navy), var(--violet-light));
  .planet-container {
    left: 42%;
    width: 200px;
    height: 200px;
    padding: 20px;
    position: absolute;
    border-radius: 50%;
    transition: all 0.2s ease;
    animation: planet-moving 2s ease infinite;
    -webkit-animation: planet-moving 2s ease infinite;
    background: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4gPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJncmFkIiBncmFkaWVudFVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgeDE9IjAuMTU4NDk0IiB5MT0iLTAuMDkxNTA2IiB4Mj0iMC44NDE1MDYiIHkyPSIxLjA5MTUwNiI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2Y5MDI2ZCIvPjxzdG9wIG9mZnNldD0iNTAlIiBzdG9wLWNvbG9yPSIjMDAwMDAwIiBzdG9wLW9wYWNpdHk9IjAuMCIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzAwMDAwMCIgc3RvcC1vcGFjaXR5PSIwLjAiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyYWQpIiAvPjwvc3ZnPiA=");
    background: linear-gradient(
      150deg,
      var(--pink),
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0)
    );
    .shine {
      top: 53px;
      left: 38px;
      width: 2px;
      height: 0px;
      position: absolute;
      border-radius: 48%;
      transform: rotate(-45deg);
      -webkit-transform: rotate(-45deg);
      border-left: 25px solid transparent;
      border-right: 25px solid transparent;
      border-bottom: 3px solid transparent;
      border-top: 15px solid var(--pink-light);
      &::after {
        content: "";
        top: -16px;
        left: -78px;
        width: 160px;
        height: 160px;
        position: absolute;
        border-radius: 50%;
        background: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4gPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJncmFkIiBncmFkaWVudFVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgeDE9IjAuNjAwNTgyIiB5MT0iLTAuMDcwNDI4IiB4Mj0iMC4zOTk0MTgiIHkyPSIxLjA3MDQyOCI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzAwMDAwMCIgc3RvcC1vcGFjaXR5PSIwLjAiLz48c3RvcCBvZmZzZXQ9IjUwJSIgc3RvcC1jb2xvcj0iIzAwMDAwMCIgc3RvcC1vcGFjaXR5PSIwLjAiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiMwMDAwMDAiIHN0b3Atb3BhY2l0eT0iMC4wIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmFkKSIgLz48L3N2Zz4g");
        background: linear-gradient(
          190deg,
          rgba(0, 0, 0, 0),
          rgba(0, 0, 0, 0),
          rgba(0, 0, 0, 0)
        );
      }
    }
    .shine-2 {
      top: 68px;
      width: 10px;
      height: 20px;
      left: 45.5px;
      position: absolute;
      border-radius: 50%;
      background: transparent;
      transform: rotate(-55deg);
      -webkit-transform: rotate(-55deg);
      &::after {
        top: 68px;
        top: 9px;
        width: 10px;
        content: "";
        height: 20px;
        width: 12px;
        height: 10px;
        left: 43.5px;
        left: 45.5px;
        border-radius: 50%;
        position: absolute;
        background: transparent;
        transform: rotate(206deg);
        transform: rotate(-55deg);
        -webkit-transform: rotate(206deg);
        -webkit-transform: rotate(-55deg);
      }
      &::before {
        content: "";
        left: 60px;
        top: 24px;
        width: 14px;
        height: 10px;
        position: absolute;
        border-radius: 200px;
        transform: rotate(40deg);
        background: var(--pink-light);
        -webkit-transform: rotate(40deg);
      }
    }
    h1 {
      .shine-3 {
        &::after {
          top: 9px;
          top: 68px;
          content: "";
          width: 12px;
          left: 43.5px;
          height: 10px;
          border-radius: 50%;
          position: absolute;
          background: transparent;
          transform: rotate(206deg);
          -webkit-transform: rotate(206deg);
        }
      }
      .shine-4 {
        &::after {
          position: absolute;
          width: 10px;
          height: 20px;
          background: transparent;
          border-radius: 50%;
          top: 68px;
          left: 45.5px;
          -webkit-transform: rotate(-55deg);
          transform: rotate(-55deg);
          content: "";
          top: 9px;
          left: 43.5px;
          -webkit-transform: rotate(206deg);
          transform: rotate(206deg);
          width: 12px;
          height: 10px;
        }
      }
    }
    .planet-ring {
      width: 300px;
      height: 40px;
      position: absolute;
      border-top: 10px solid transparent;
      border-bottom: 10px solid var(--pink);
      border-left: 10px solid var(--pink);
      border-right: 10px solid var(--pink);
      border-radius: 100%;
      left: -40px;
      -webkit-transform: rotate(-30deg);
      transform: rotate(-30deg);
      top: 80px;
    }
    .planet-ring2 {
      width: 300px;
      height: 40px;
      position: absolute;
      border-top: 10px solid transparent;
      border-bottom: 10px solid var(--pink);
      border-left: 10px solid var(--pink);
      border-right: 10px solid var(--pink);
      border-radius: 100%;
      left: -40px;
      -webkit-transform: rotate(-30deg);
      transform: rotate(-30deg);
      top: 80px;
      border-top: 10px solid var(--pink);
      z-index: -1;
    }
    .planet {
      width: 200px;
      height: 200px;
      background: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4gPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJncmFkIiBncmFkaWVudFVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgeDE9IjAuMTU4NDk0IiB5MT0iLTAuMDkxNTA2IiB4Mj0iMC44NDE1MDYiIHkyPSIxLjA5MTUwNiI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2Y5MDI2ZCIvPjxzdG9wIG9mZnNldD0iNTAlIiBzdG9wLWNvbG9yPSIjNzMwZjhlIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMDAwMDAwIiBzdG9wLW9wYWNpdHk9IjAuMCIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JhZCkiIC8+PC9zdmc+IA==");
      background: linear-gradient(
        150deg,
        var(--pink),
        var(--pink-dark),
        rgba(0, 0, 0, 0)
      );
      border-radius: 100px;
    }
  }
  h1 {
    .planet-container {
      .shine-3 {
        &::after {
          position: absolute;
          width: 10px;
          height: 20px;
          background: transparent;
          border-radius: 50%;
          top: 68px;
          left: 45.5px;
          -webkit-transform: rotate(-55deg);
          transform: rotate(-55deg);
          content: "";
          top: 9px;
          left: 43.5px;
          -webkit-transform: rotate(206deg);
          transform: rotate(206deg);
          width: 12px;
          height: 10px;
        }
      }
      .shine-4 {
        &::after {
          position: absolute;
          width: 10px;
          height: 20px;
          background: transparent;
          border-radius: 50%;
          top: 68px;
          left: 45.5px;
          -webkit-transform: rotate(-55deg);
          transform: rotate(-55deg);
          content: "";
          top: 9px;
          left: 43.5px;
          -webkit-transform: rotate(206deg);
          transform: rotate(206deg);
          width: 12px;
          height: 10px;
        }
      }
    }
    -webkit-animation: planet-moving 3s ease infinite;
    animation: planet-moving 3s ease infinite;
    transition: all 0.2s ease;
    padding-bottom: 100px;
    padding-right: 60px;
    width: 120px;
    height: 100px;
    font-family: "Varela Round", sans-serif;
    font-size: 16vw;
    text-align: center;
    line-height: 0.85;
    margin-top: 7.6%;
    left: 31%;
    -webkit-transform: translate(-55%, -55%);
    transform: translate(-55%, -55%);
    position: absolute;
    color: #6e81e3;
    text-shadow: -1px -1px 0 var(--black), 1px -1px 0 var(--black),
      -1px 1px 0 var(--black), 1px 1px 0 var(--black),
      1px 0px 0px var(--pink-dark), 0px 1px 0px var(--pink-dark),
      2px 1px 0px var(--pink-dark), 1px 2px 0px var(--pink-dark),
      3px 2px 0px var(--pink-dark), 2px 3px 0px var(--pink-dark),
      4px 3px 0px var(--pink-dark), 3px 4px 0px var(--pink-dark),
      5px 4px 0px var(--pink-dark), 3px 5px 0px var(--black),
      6px 5px 0px var(--black), -1px 2px 0 var(--black), 0 3px 0 var(--black),
      1px 4px 0 var(--black), 2px 5px 0px var(--black), 2px -1px 0 var(--black),
      3px 0 0 var(--black), 4px 1px 0 var(--black), 5px 2px 0px var(--black),
      6px 3px 0 var(--black), 7px 4px 0 var(--black), 5px 5px 20px var(--pink);
    &:after {
      content: "";
      position: absolute;
      overflow: hidden;
      left: -33px;
      width: 101%;
      top: 39px;
      z-index: 5;
      -webkit-transform: rotate(-52deg);
      transform: rotate(-52deg);
      background-image: linear-gradient(
        190deg,
        var(--pink),
        rgba(0, 0, 0, 0),
        rgba(0, 0, 0, 0)
      );
      border-radius: 155px;
      height: 33%;
    }
    .shine-3 {
      position: absolute;
      width: 10px;
      height: 20px;
      background: transparent;
      border-radius: 50%;
      top: 70px;
      left: 45.5px;
      -webkit-transform: rotate(-73deg);
      transform: rotate(-73deg);
      &::after {
        content: "";
        top: 9px;
        left: 43.5px;
        -webkit-transform: rotate(206deg);
        transform: rotate(206deg);
        width: 12px;
        height: 10px;
      }
      &::before {
        content: "";
        position: absolute;
        height: 9px;
        width: 11px;
        background-color: #bdc5f2;
        border-radius: 200px;
        top: 24px;
        left: 60px;
        -webkit-transform: rotate(24deg);
        transform: rotate(24deg);
      }
    }
    .shine-4 {
      position: absolute;
      width: 20px;
      height: 65px;
      background: transparent;
      border-radius: 50%;
      top: 75px;
      left: 45.5px;
      -webkit-transform: rotate(-73deg);
      transform: rotate(-73deg);
      &::after {
        content: "";
        top: 9px;
        left: 43.5px;
        -webkit-transform: rotate(206deg);
        transform: rotate(206deg);
        width: 12px;
        height: 10px;
      }
      &::before {
        content: "";
        position: absolute;
        height: 9px;
        width: 26px;
        background-color: #bdc5f2;
        border-radius: 200px;
        top: 24px;
        left: 60px;
        -webkit-transform: rotate(23deg);
        transform: rotate(23deg);
      }
    }
  }
  .stars-container {
    position: absolute;
    width: 50%;
    height: 50%;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    .stars {
      width: 170px;
      top: 140px;
      position: relative;
      left: 220px;
      div {
        &:nth-child(1) {
          width: 20px;
          position: relative;
          height: 6px;
          border-radius: 100%;
          background: #fff;
          -webkit-animation: twinkle-width 1s ease infinite;
          animation: twinkle-width 1s ease infinite;
        }
        &:nth-child(2) {
          width: 6px;
          height: 20px;
          top: -5px;
          position: absolute;
          background: #fff;
          border-radius: 100%;
          left: 7px;
          top: -7px;
          -webkit-transform-origin: middle;
          transform-origin: middle;
          -webkit-animation: twinkle-height 1s ease infinite;
          animation: twinkle-height 1s ease infinite;
        }
        &:nth-child(3) {
          background: #fff;
          content: "";
          position: absolute;
          width: 10px;
          height: 10px;
          left: 5px;
          top: -2px;
          border-radius: 100px;
        }
        &:nth-child(4) {
          background: #fff;
          content: "";
          position: absolute;
          width: 25px;
          height: 30px;
          left: 5px;
          top: -3px;
          border-radius: 100px;
        }
      }
      &:nth-child(2) {
        position: relative;
        -webkit-transform: scale(0.8);
        transform: scale(0.8);
        top: 20px;
        left: 0px;
        div {
          -webkit-animation-delay: 0.7s;
          animation-delay: 0.7s;
        }
      }
      &:nth-child(3) {
        position: relative;
        -webkit-transform: scale(0.6);
        transform: scale(0.6);
        top: -10px;
        left: 150px;
        div {
          -webkit-animation-delay: 0.5s;
          animation-delay: 0.5s;
        }
      }
      &:nth-child(4) {
        position: relative;
        -webkit-transform: scale(0.4);
        transform: scale(0.4);
        top: -50px;
        left: 350px;
        div {
          -webkit-animation-delay: 0.9s;
          animation-delay: 0.9s;
        }
      }
      &:nth-child(5) {
        position: relative;
        -webkit-transform: scale(0.7);
        transform: scale(0.7);
        top: 20px;
        left: 560px;
        div {
          -webkit-animation-delay: 0.7s;
          animation-delay: 0.7s;
        }
      }
    }
    .stars-2 {
      border-radius: 100%;
      position: absolute;
      -webkit-animation: twinkle 0.5s ease infinite;
      animation: twinkle 0.5s ease infinite;
      &:nth-child(5) {
        width: 10px;
        height: 10px;
        background: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4gPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJncmFkIiBncmFkaWVudFVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgeDE9IjAuMCIgeTE9IjAuNSIgeDI9IjEuMCIgeTI9IjAuNSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzczMGY4ZSIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzAwMDAwMCIgc3RvcC1vcGFjaXR5PSIwLjAiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyYWQpIiAvPjwvc3ZnPiA=");
        background: linear-gradient(to right, #730f8e, rgba(0, 0, 0, 0));
        left: 150px;
        top: 120px;
        -webkit-animation-delay: 0.2s;
        animation-delay: 0.2s;
      }
      &:nth-child(6) {
        width: 10px;
        height: 10px;
        background: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4gPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJncmFkIiBncmFkaWVudFVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgeDE9IjAuMCIgeTE9IjAuNSIgeDI9IjEuMCIgeTI9IjAuNSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzAwMDAwMCIgc3RvcC1vcGFjaXR5PSIwLjAiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNlYTMyODEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyYWQpIiAvPjwvc3ZnPiA=");
        background: linear-gradient(to right, rgba(0, 0, 0, 0), #ea3281);
        left: 420px;
        top: -50px;
      }
      &:nth-child(7) {
        width: 8px;
        height: 8px;
        background: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4gPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJncmFkIiBncmFkaWVudFVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgeDE9IjAuMCIgeTE9IjAuNSIgeDI9IjEuMCIgeTI9IjAuNSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzAwMDAwMCIgc3RvcC1vcGFjaXR5PSIwLjAiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiM3MzBmOGUiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyYWQpIiAvPjwvc3ZnPiA=");
        background: linear-gradient(to right, rgba(0, 0, 0, 0), #730f8e);
        left: 350px;
        top: -70px;
        -webkit-animation-delay: 0.8s;
        animation-delay: 0.8s;
        -webkit-animation-duration: 1s;
        animation-duration: 1s;
      }
      &:nth-child(8) {
        width: 9px;
        height: 9px;
        background: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4gPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJncmFkIiBncmFkaWVudFVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgeDE9IjAuMCIgeTE9IjAuNSIgeDI9IjEuMCIgeTI9IjAuNSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzAwMDAwMCIgc3RvcC1vcGFjaXR5PSIwLjAiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiM2ZTgxZTMiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyYWQpIiAvPjwvc3ZnPiA=");
        background: linear-gradient(to right, rgba(0, 0, 0, 0), #6e81e3);
        left: 520px;
        top: 160px;
        -webkit-animation-delay: 0.9s;
        animation-delay: 0.9s;
        -webkit-animation-duration: 1.1s;
        animation-duration: 1.1s;
      }
      &:nth-child(9) {
        width: 8.3px;
        height: 8.3px;
        background: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4gPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJncmFkIiBncmFkaWVudFVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgeDE9IjAuMCIgeTE9IjAuNSIgeDI9IjEuMCIgeTI9IjAuNSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzAwMDAwMCIgc3RvcC1vcGFjaXR5PSIwLjAiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiM2ZTgxZTMiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyYWQpIiAvPjwvc3ZnPiA=");
        background: linear-gradient(to right, rgba(0, 0, 0, 0), #6e81e3);
        left: 80px;
        top: -30px;
        -webkit-animation-delay: 0.9s;
        animation-delay: 0.9s;
        -webkit-animation-duration: 1.1s;
        animation-duration: 1.1s;
      }
      &:nth-child(10) {
        width: 8.9px;
        height: 8.9px;
        background: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4gPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJncmFkIiBncmFkaWVudFVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgeDE9IjAuMCIgeTE9IjAuNSIgeDI9IjEuMCIgeTI9IjAuNSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzAwMDAwMCIgc3RvcC1vcGFjaXR5PSIwLjAiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiM3MzBmOGUiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyYWQpIiAvPjwvc3ZnPiA=");
        background: linear-gradient(to right, rgba(0, 0, 0, 0), #730f8e);
        left: 750px;
        top: 20px;
        -webkit-animation-delay: 0.7s;
        animation-delay: 0.7s;
        -webkit-animation-duration: 1.5s;
        animation-duration: 1.5s;
      }
    }
  }
  .meteor-container {
    position: absolute;
    width: auto;
    height: auto;
    top: 800px;
    left: 550px;
    z-index: -1;
    -webkit-animation: meteor-drop 7.3s ease-in infinite;
    animation: meteor-drop 7.3s ease-in infinite;
    -webkit-animation-delay: 1.6s;
    animation-delay: 1.6s;
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
    opacity: 0;
    div {
      transition: all 0.3s ease-in;
      &:nth-child(1) {
        background: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4gPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJncmFkIiBncmFkaWVudFVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgeDE9IjAuNSIgeTE9IjEuMCIgeDI9IjAuNSIgeTI9IjAuMCI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzczMGY4ZSIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzAwMDAwMCIgc3RvcC1vcGFjaXR5PSIwLjAiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyYWQpIiAvPjwvc3ZnPiA=");
        background: linear-gradient(to top, #730f8e, rgba(0, 0, 0, 0));
        height: 150px;
        width: 20px;
        border-radius: 100px;
        opacity: 0.8;
        position: absolute;
        left: -5.5px;
        top: -96px;
        z-index: -2;
      }
      &:nth-child(2) {
        width: 12px;
        height: 100px;
        background: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4gPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJncmFkIiBncmFkaWVudFVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgeDE9IjAuNSIgeTE9IjEuMCIgeDI9IjAuNSIgeTI9IjAuMCI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2Y5MDI2ZCIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzAwMDAwMCIgc3RvcC1vcGFjaXR5PSIwLjAiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyYWQpIiAvPjwvc3ZnPiA=");
        background: linear-gradient(to top, #f9026d, rgba(0, 0, 0, 0));
        border-radius: 500px;
        position: absolute;
        opacity: 0.8;
        left: -1.5px;
        top: -53px;
      }
      &:nth-child(3) {
        width: 8px;
        height: 8px;
        background: #fedc01;
        border-radius: 100px;
        top: 35px;
        position: absolute;
        z-index: 2;
      }
      &:nth-child(4) {
        width: 0;
        height: 0;
        border-left: 4px solid transparent;
        border-right: 5px solid transparent;
        border-bottom: 30px solid #fedc01;
        z-index: 1;
        top: 8px;
        position: absolute;
      }
    }
  }
  .meteor-container-2 {
    position: absolute;
    width: auto;
    height: auto;
    top: 900px;
    left: 650px;
    -webkit-animation: meteor-drop2 8.5s ease-n infinite;
    animation: meteor-drop2 8.5s ease-in infinite;
    -webkit-animation-delay: 4.5s;
    animation-delay: 4.5s;
    -webkit-transform: rotate(45deg) scale(0.9);
    transform: rotate(45deg) scale(0.9);
    opacity: 0;
    div {
      transition: all 0.3s ease-in;
      &:nth-child(1) {
        background: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4gPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJncmFkIiBncmFkaWVudFVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgeDE9IjAuNSIgeTE9IjEuMCIgeDI9IjAuNSIgeTI9IjAuMCI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzczMGY4ZSIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzAwMDAwMCIgc3RvcC1vcGFjaXR5PSIwLjAiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyYWQpIiAvPjwvc3ZnPiA=");
        background: linear-gradient(to top, #730f8e, rgba(0, 0, 0, 0));
        height: 150px;
        width: 20px;
        border-radius: 100px;
        opacity: 0.8;
        position: absolute;
        left: -5.5px;
        top: -96px;
        z-index: -2;
      }
      &:nth-child(2) {
        width: 12px;
        height: 100px;
        background: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4gPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJncmFkIiBncmFkaWVudFVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgeDE9IjAuNSIgeTE9IjEuMCIgeDI9IjAuNSIgeTI9IjAuMCI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2Y5MDI2ZCIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzAwMDAwMCIgc3RvcC1vcGFjaXR5PSIwLjAiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyYWQpIiAvPjwvc3ZnPiA=");
        background: linear-gradient(to top, #f9026d, rgba(0, 0, 0, 0));
        border-radius: 500px;
        position: absolute;
        opacity: 0.8;
        left: -1.5px;
        top: -53px;
      }
      &:nth-child(3) {
        width: 8px;
        height: 8px;
        background: #fedc01;
        border-radius: 100px;
        top: 35px;
        position: absolute;
        z-index: 2;
      }
      &:nth-child(4) {
        width: 0;
        height: 0;
        border-left: 4px solid transparent;
        border-right: 5px solid transparent;
        border-bottom: 30px solid #fedc01;
        z-index: 1;
        top: 8px;
        position: absolute;
      }
    }
  }
  .meteor-container-3 {
    position: absolute;
    width: auto;
    height: auto;
    top: 900px;
    left: 650px;
    z-index: -1;
    -webkit-animation: meteor-drop3 10.5s ease-in infinite;
    animation: meteor-drop3 10.5s ease-in infinite;
    -webkit-animation-delay: 2.9s;
    animation-delay: 2.9s;
    -webkit-transform: rotate(45deg) scale(0.9);
    transform: rotate(45deg) scale(0.9);
    opacity: 0;
    div {
      transition: all 0.3s ease-in;
      &:nth-child(1) {
        background: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4gPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJncmFkIiBncmFkaWVudFVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgeDE9IjAuNSIgeTE9IjEuMCIgeDI9IjAuNSIgeTI9IjAuMCI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzczMGY4ZSIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzAwMDAwMCIgc3RvcC1vcGFjaXR5PSIwLjAiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyYWQpIiAvPjwvc3ZnPiA=");
        background: linear-gradient(to top, #730f8e, rgba(0, 0, 0, 0));
        height: 150px;
        width: 20px;
        border-radius: 100px;
        opacity: 0.8;
        position: absolute;
        left: -5.5px;
        top: -96px;
        z-index: -2;
      }
      &:nth-child(2) {
        width: 12px;
        height: 100px;
        background: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4gPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJncmFkIiBncmFkaWVudFVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgeDE9IjAuNSIgeTE9IjEuMCIgeDI9IjAuNSIgeTI9IjAuMCI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2Y5MDI2ZCIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzAwMDAwMCIgc3RvcC1vcGFjaXR5PSIwLjAiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyYWQpIiAvPjwvc3ZnPiA=");
        background: linear-gradient(to top, #f9026d, rgba(0, 0, 0, 0));
        border-radius: 500px;
        position: absolute;
        opacity: 0.8;
        left: -1.5px;
        top: -53px;
      }
      &:nth-child(3) {
        width: 8px;
        height: 8px;
        background: #fedc01;
        border-radius: 100px;
        top: 35px;
        position: absolute;
        z-index: 2;
      }
      &:nth-child(4) {
        width: 0;
        height: 0;
        border-left: 4px solid transparent;
        border-right: 5px solid transparent;
        border-bottom: 30px solid #fedc01;
        z-index: 1;
        top: 8px;
        position: absolute;
      }
    }
  }
  .meteor-container-4 {
    position: absolute;
    width: auto;
    height: auto;
    top: 900px;
    left: 650px;
    -webkit-animation: meteor-drop4 9.5s ease-in infinite;
    animation: meteor-drop4 9.5s ease-in infinite;
    -webkit-animation-delay: 0.7s;
    animation-delay: 0.7s;
    -webkit-transform: rotate(45deg) scale(0.9);
    transform: rotate(45deg) scale(0.9);
    opacity: 0;
    div {
      transition: all 0.3s ease-in;
      &:nth-child(1) {
        background: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4gPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJncmFkIiBncmFkaWVudFVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgeDE9IjAuNSIgeTE9IjEuMCIgeDI9IjAuNSIgeTI9IjAuMCI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzczMGY4ZSIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzAwMDAwMCIgc3RvcC1vcGFjaXR5PSIwLjAiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyYWQpIiAvPjwvc3ZnPiA=");
        background: linear-gradient(to top, #730f8e, rgba(0, 0, 0, 0));
        height: 150px;
        width: 20px;
        border-radius: 100px;
        opacity: 0.8;
        position: absolute;
        left: -5.5px;
        top: -96px;
        z-index: -2;
      }
      &:nth-child(2) {
        width: 12px;
        height: 100px;
        background: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4gPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJncmFkIiBncmFkaWVudFVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgeDE9IjAuNSIgeTE9IjEuMCIgeDI9IjAuNSIgeTI9IjAuMCI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2Y5MDI2ZCIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzAwMDAwMCIgc3RvcC1vcGFjaXR5PSIwLjAiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyYWQpIiAvPjwvc3ZnPiA=");
        background: linear-gradient(to top, #f9026d, rgba(0, 0, 0, 0));
        border-radius: 500px;
        position: absolute;
        opacity: 0.8;
        left: -1.5px;
        top: -53px;
      }
      &:nth-child(3) {
        width: 8px;
        height: 8px;
        background: #fedc01;
        border-radius: 100px;
        top: 35px;
        position: absolute;
        z-index: 2;
      }
      &:nth-child(4) {
        width: 0;
        height: 0;
        border-left: 4px solid transparent;
        border-right: 5px solid transparent;
        border-bottom: 30px solid #fedc01;
        z-index: 1;
        top: 8px;
        position: absolute;
      }
    }
  }
  .moon {
    box-shadow: -10px -10px 150px #f9026d, 2px 2px 250px #000, 5px 5px 50px #000,
      -5px -1px 10px #181743;
    width: 80px;
    height: 80px;
    border-radius: 100%;
    background: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4gPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJncmFkIiBncmFkaWVudFVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgeDE9IjAuMTU4NDk0IiB5MT0iLTAuMDkxNTA2IiB4Mj0iMC44NDE1MDYiIHkyPSIxLjA5MTUwNiI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2EzN2RjZSIvPjxzdG9wIG9mZnNldD0iNTUlIiBzdG9wLWNvbG9yPSIjNmU4MWUzIi8+PHN0b3Agb2Zmc2V0PSI5OCUiIHN0b3AtY29sb3I9IiM1ZjIwOTMiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyYWQpIiAvPjwvc3ZnPiA=");
    background-image: linear-gradient(
      150deg,
      #a37dce,
      #6e81e3 55%,
      #5f2093 98%
    );
    position: absolute;
    top: 30%;
    left: 35%;
    -webkit-animation: planet-moving2 2s ease infinite;
    animation: planet-moving2 2s ease infinite;
    -webkit-animation-delay: 0.5s;
    animation-delay: 0.5s;
  }

  @-webkit-keyframes animationName {
    0% {
      opacity: 0;
      top: 50px;
      left: 1350px;
    }
    50% {
      opacity: 1;
    }
    100% {
      left: 750px;
      top: 650px;
      opacity: 0;
    }
  }
  @-webkit-keyframes meteor-drop {
    0% {
      opacity: 0;
      top: 50px;
      left: 1350px;
    }
    10% {
      opacity: 1;
    }
    16%,
    100% {
      left: 750px;
      top: 650px;
      opacity: 0;
    }
  }
  @keyframes meteor-drop {
    0% {
      opacity: 0;
      top: 50px;
      left: 1350px;
    }
    10% {
      opacity: 1;
    }
    16%,
    100% {
      left: 750px;
      top: 650px;
      opacity: 0;
    }
  }
  @-webkit-keyframes animationName {
    0% {
      opacity: 0;
      top: 150px;
      left: 1650px;
    }
    50% {
      opacity: 1;
    }
    100% {
      left: 1150px;
      top: 650px;
      opacity: 0;
    }
  }
  @-webkit-keyframes meteor-drop2 {
    0% {
      opacity: 0;
      top: 150px;
      left: 1650px;
    }
    10% {
      opacity: 1;
    }
    21%,
    100% {
      left: 1150px;
      top: 650px;
      opacity: 0;
    }
  }
  @keyframes meteor-drop2 {
    0% {
      opacity: 0;
      top: 150px;
      left: 1650px;
    }
    10% {
      opacity: 1;
    }
    21%,
    100% {
      left: 1150px;
      top: 650px;
      opacity: 0;
    }
  }
  @-webkit-keyframes animationName {
    0% {
      opacity: 0;
      top: 50px;
      left: 790px;
    }
    50% {
      opacity: 1;
    }
    100% {
      left: 190px;
      top: 650px;
      opacity: 0;
    }
  }
  @-webkit-keyframes meteor-drop3 {
    0% {
      opacity: 0;
      top: 50px;
      left: 790px;
    }
    10% {
      opacity: 1;
    }
    21%,
    100% {
      left: 190px;
      top: 650px;
      opacity: 0;
    }
  }
  @keyframes meteor-drop3 {
    0% {
      opacity: 0;
      top: 50px;
      left: 790px;
    }
    10% {
      opacity: 1;
    }
    21%,
    100% {
      left: 190px;
      top: 650px;
      opacity: 0;
    }
  }
  @-webkit-keyframes animationName {
    0% {
      opacity: 0;
      top: 30px;
      left: 500px;
    }
    50% {
      opacity: 1;
    }
    100% {
      left: 0px;
      top: 530px;
      opacity: 0;
    }
  }
  @-webkit-keyframes meteor-drop4 {
    0% {
      opacity: 0;
      top: 30px;
      left: 500px;
    }
    10% {
      opacity: 1;
    }
    19%,
    100% {
      left: 0px;
      top: 530px;
      opacity: 0;
    }
  }
  @keyframes meteor-drop4 {
    0% {
      opacity: 0;
      top: 30px;
      left: 500px;
    }
    10% {
      opacity: 1;
    }
    19%,
    100% {
      left: 0px;
      top: 530px;
      opacity: 0;
    }
  }
  @-webkit-keyframes animationName {
    0% {
      top: 30%;
    }
    50% {
      top: 31%;
    }
    100% {
      top: 30%;
    }
  }
  @-webkit-keyframes planet-moving {
    0% {
      top: 30%;
    }
    50% {
      top: 31%;
    }
    100% {
      top: 30%;
    }
  }
  @keyframes planet-moving {
    0% {
      top: 30%;
    }
    50% {
      top: 31%;
    }
    100% {
      top: 30%;
    }
  }
  @-webkit-keyframes animationName {
    0% {
      top: 30%;
    }
    50% {
      top: 31%;
    }
    100% {
      top: 30%;
    }
  }
  @-webkit-keyframes planet-moving2 {
    0% {
      top: 30%;
    }
    50% {
      top: 31%;
    }
    100% {
      top: 30%;
    }
  }
  @keyframes planet-moving2 {
    0% {
      top: 30%;
    }
    50% {
      top: 31%;
    }
    100% {
      top: 30%;
    }
  }
  @-webkit-keyframes animationName {
    0% {
      height: 20px;
      top: -7px;
    }
    50% {
      height: 10px;
      top: -3px;
    }
    100% {
      height: 20px;
      top: -7px;
    }
  }
  @-webkit-keyframes twinkle-height {
    0% {
      height: 20px;
      top: -7px;
    }
    50% {
      height: 10px;
      top: -3px;
    }
    100% {
      height: 20px;
      top: -7px;
    }
  }
  @keyframes twinkle-height {
    0% {
      height: 20px;
      top: -7px;
    }
    50% {
      height: 10px;
      top: -3px;
    }
    100% {
      height: 20px;
      top: -7px;
    }
  }
  @-webkit-keyframes animationName {
    0% {
      width: 20px;
      left: 0px;
    }
    50% {
      width: 10px;
      left: 5px;
    }
    100% {
      width: 20px;
      left: 0px;
    }
  }
  @-webkit-keyframes twinkle-width {
    0% {
      width: 20px;
      left: 0px;
    }
    50% {
      width: 10px;
      left: 5px;
    }
    100% {
      width: 20px;
      left: 0px;
    }
  }
  @keyframes twinkle-width {
    0% {
      width: 20px;
      left: 0px;
    }
    50% {
      width: 10px;
      left: 5px;
    }
    100% {
      width: 20px;
      left: 0px;
    }
  }
  @-webkit-keyframes animationName {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
  @-webkit-keyframes twinkle {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
  @keyframes twinkle {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
}
</style>
