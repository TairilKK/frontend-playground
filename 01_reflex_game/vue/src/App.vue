<template>
  <Welcome @playGame="startGame" />
  <p>{{ result }}</p>
  <Game v-if="isPlaying" @result="endGame" />
</template>

<script>
import Game from "./components/Game.vue";
import Welcome from "./components/Welcome.vue";

export default {
  name: "App",
  components: {
    Welcome,
    Game,
  },
  data() {
    return {
      isPlaying: false,
      result: null,
    };
  },
  methods: {
    startGame() {
      this.isPlaying = true;
    },
    endGame(reactionTime) {
      this.isPlaying = false;
      this.result =
        reactionTime > 0
          ? `Your reaction time is: ${reactionTime} ms`
          : "Wait for the green box to appear!";
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  font-family: "Mako", sans-serif;
  font-weight: 400;
  font-style: normal;
}

:root {
  --red-light-color: #ff7f7f; /* Light Red */
  --red-color: #ff6347; /* Red */
  --red-dark-color: #c62828; /* Dark Red */
  --green-light-color: #90ee90; /* Light Green */
  --green-color: #4caf50; /* Green */
  --green-dark-color: #388e3c; /* Dark Green */
  --gray-light-color: #eee; /* Light Gray */
  --gray-dark-color: #333; /* Dark Gray */
}

#app {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--gray-light-color);
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Wellfleet", serif;
  font-weight: 400;
  color: #333;
}

h1 {
  font-size: 3rem;
}

p {
  font-size: 1rem;
}
</style>
