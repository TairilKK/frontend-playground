<template>
  <div class="welcome">
    <h1 class="title">{{ welcome }}</h1>
    <h2 class="slogan">{{ slogan }}</h2>
    <p class="description">{{ description }}<br /></p>
    <button class="play" @click="handleClick">Play</button>
  </div>
</template>

<script>
export default {
  name: "Welcome",
  data() {
    return {
      welcome: "Welcome to the Reflex Game!",
      slogan: "Only the fastest survive.",
      description:
        "Tap as fast as you can when the screen turns red. Your reaction time will be measured — the faster, the better!",
    };
  },
  methods: {
    handleClick() {
      this.$emit("playGame");
    },
  },
};
</script>

<style>
.title {
  margin-bottom: 2rem;
}
.welcome {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
}
.welcome .slogan {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  font-style: italic;
}
.welcome .description {
  display: inline-block;
  width: 70%;
  text-align: center;
}

.welcome .play {
  margin-top: 2rem;
  padding: 1rem 5rem;
  border: none;
  border-radius: 1.5rem;
  background-color: var(--green-color);
  transition: all 100ms;
  font-size: 1.2rem;
}

.welcome .play:hover {
  background-color: var(--green-dark-color);
  cursor: pointer;
}
</style>
