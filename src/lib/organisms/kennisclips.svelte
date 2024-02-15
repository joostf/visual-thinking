<script>
  let index = 0;

  export let data;
  console.log(data);

  const nextButton = () => {
    index = index + 1;
  };

  const previousButton = () => {
    index = index - 1;
  };
</script>

<header>
  <section>
    <h4 class="line">Kennisclips</h4>
  </section>
</header>

<section>
  <section class="clips-container">
    <button on:click={previousButton} aria-label="Vorige Video">
      <img
        class="left-arrow"
        src="./arrows_black.svg"
        alt="Knop met pijl naar vorige video"
        loading="lazy"
      />
    </button>

    <iframe
      class="youtubelink"
      title="kennisclips"
      src={data.categories[index].youTubeLink}
    ></iframe>

    <button on:click={nextButton} aria-label="Volgende Video">
      <img
        class="right-arrow"
        src="./arrows_black.svg"
        alt="Knop met pijl naar volgende video"
        loading="lazy"
      />
    </button>
  </section>

  <section class="text-container">
    <h1>{data.categories[index].title}</h1>
    <p>{@html data.categories[index].content.html}</p>
  </section>
</section>

<style>
  /* line in header */
  .line {
    text-transform: uppercase;
    background-color: var(--vtSec-LightBlue);
    color: var(--vtWhite);
    font-family: var(--vtPrimaryFont);
    font-size: 0.9rem;
    padding-left: 9%;
    padding-top: 0.2rem;
    padding-bottom: 0.2rem;
    margin-top: 0%;
    width: 100vw;
    display: flex;
    margin-bottom: 0;
    align-items: center;
  }

  /* Header styling */
  h1 {
    font-size: 3.157rem;
    font-family: var(--vtPrimaryFont);
    color: var(--vtDarkBlue);
    text-align: center;
  }

  /* Kennisclip teksten */
  p {
    line-height: 1.5rem;
    font-family: var(--vtSecondaryFont);
    margin: 0 auto;
    max-width: 700px;
    text-transform: none;
    padding-bottom: 3em;
  }

  /* clips */
  .clips-container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 3.3em;
    background-color: var(--vtGrey-10);
  }

  /* buttons */
  button {
    background-color: transparent;
    border: transparent;
    padding: 2em;
  }

  .right-arrow {
    cursor: pointer;
    border: none;
  }

  .left-arrow {
    cursor: pointer;
    transform: rotate(180deg);
  }

  /* responsive clips */
  iframe {
    aspect-ratio: 16 / 9;
    width: 100%;
    height: auto;
    transition: opacity 0.3s ease-in;
  }

  /* tablet */
  @media (min-width: 31em) and (max-width: 55em) {
    .line {
      padding-left: 19.5% !important;
    }

    h1 {
      font-size: 2.1em !important;
    }

    p {
      width: 80%;
    }
  }

  /* mobile */
  @media (max-width: 31em) {
    .line {
      padding-left: 11% !important;
    }

    h1 {
      font-size: 1.157em !important;
    }

    p {
      width: 77%;
    }

    button {
      padding: 0.6em;
    }
  }

  /* desktop */
  @media screen and (min-width: 1120px) {
    .youtubelink {
      width: 884px;
      height: 497px;
    }
  }
</style>
