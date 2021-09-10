<template>
  <div class="container">
    <div class="game-area">
      <div class="flash"></div>

      <div class="blue-fall-row">
        <div class="block fall1"></div>
        <div class="block fall2"></div>
        <div class="block fall3"></div>
        <div class="block fall4"></div>
      </div>

      <div class="yellow-row">
        <div class="block y1"></div>
        <div class="block y2"></div>
        <div class="block y3"></div>
        <div class="block y4"></div>
      </div>

      <div class="blue-stay-row">
        <div class="block stay1"></div>
        <div class="block stay2"></div>
        <div class="block stay3"></div>
      </div>

      <div class="red-row">
        <div class="block r1"></div>
        <div class="block r2"></div>
        <div class="block r3"></div>
        <div class="block r4"></div>
      </div>
    </div>
    <div class="message">
      <h1>Leveling up...</h1>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
$parts: 6;
$angle: 360;
$cake: $angle/$parts;
body {
  background-color: #000;
  //width: 100vw;
  height: 100vh;
  overflow: hidden;
}
.wrapper {
  height: 100vh;
  position: relative;
  top: 50%;
  > div {
    animation: 0.8s rotate linear forwards infinite;
    > div {
      height: 100px;
      width: 100px;
      border-radius: 50%;
      position: absolute;
      top: -52px;
      right: -100%;
      left: -100%;
      margin: 0 auto;
      mix-blend-mode: screen;
      transform-origin: center center;
      border-width: 2px;
      border-style: solid;
      @for $i from 1 to $parts + 1 {
        &:nth-child(#{$i}) {
          transform: rotate(($cake * $i) + deg) scale(1) translateY(0rem);
          border-color: hsl($i * $cake, 100%, 60%);
          animation: 1.2 +
            $parts *
            0.1s
            flying +
            ($i)
            ((0.1 * $i) - 0.1s)
            forwards
            infinite;
        }
      }
    }
  }
}
@for $i from 1 to $parts + 1 {
  @keyframes flying#{$i} {
    0% {
      width: 100px;
      transform: rotate(($cake * ($i)) + deg) scale(1) translateY(0rem);
      border-width: 2px;
    }
    25% {
      width: 120px;
      transform: rotate(($cake * ($i)) + deg) scale(1.5) translateY(0.2rem);
      border-width: 5px;
    }
    50% {
      width: 100px;
      transform: rotate(($cake * ($i)) + deg) scale(1) translateY(0rem);
      border-width: 2px;
    }
  }
}
@keyframes rotate {
  to {
    transform: rotate(360deg);
  }
}
</style>
