<template>
  <div class="game" :class="{ click }" @click="getReactionTime">
    <h2>{{ message }}</h2>
  </div>
</template>

<script>
export default {
  name: "Game",
  data() {
    return {
      message: "Click when the screen turns green!",
      reactionTime: 0,
      delay: null,
      interval: null,
      click: false,
    };
  },
  mounted() {
    this.delay = Math.floor(Math.random() * 5000) + 2000; // Random delay between 2 and 6 seconds
    setTimeout(() => {
      this.message = "Click now!";
      this.click = true;
      this.interval = setInterval(() => {
        this.reactionTime += 10;
      }, 10);
    }, this.delay);
  },

  methods: {
    getReactionTime() {
      clearInterval(this.interval);
      this.$emit("result", this.reactionTime);
    },
  },
};
</script>

<style>
.game {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 100;
  background: linear-gradient(
    to bottom right,
    var(--red-light-color) 0%,
    var(--red-color) 50%,
    var(--red-dark-color) 100%
  );
  background-size: 400% 400%;
  animation: waveBackground 5s ease infinite;
  color: var(--gray-dark-color);
}

@keyframes waveBackground {
  0% {
    background-position: 0% 0%;
  }
  50% {
    background-position: 100% 100%;
  }
  100% {
    background-position: 0% 0%;
  }
}

.game h2 {
  color: var(--gray-dark-color);
}
.game.click {
  background-color: var(--green-light-color);
  background-image: linear-gradient(
    to bottom right,
    var(--green-light-color) 0%,
    var(--green-color) 50%,
    var(--green-dark-color) 100%
  );
  animation: waveBackground 5s ease infinite;
}
</style>
