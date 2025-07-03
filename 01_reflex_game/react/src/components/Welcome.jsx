function Welcome({ setIsPlaying }) {
  const messages = {
    welcome: "Welcome to the Reflex Game!",
    slogan: "Only the fastest survive.",
    description:
      "Tap as fast as you can when the screen turns red. Your reaction time will be measured — the faster, the better!",
  };

  function handleClick() {
    setIsPlaying(true);
  }

  return (
    <div className="welcome">
      <h1 className="title">{messages.welcome}</h1>
      <h2 className="slogan">{messages.slogan}</h2>
      <p className="description">{messages.description}</p>
      <button className="play" onClick={handleClick}>
        Play
      </button>
    </div>
  );
}

export default Welcome;
