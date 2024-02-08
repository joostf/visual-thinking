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

  .lineintro{
    border-top:1px solid var(--vtDarkBlue) ;
    width: 35rem;
  }

  /* Header styling */
  h1 {
    font-size: 3.157rem;
    font-family: var(--vtPrimaryFont);
    color: var(--vtDarkBlue);
    line-height: 3rem;
    text-align: center;
  }

  h2 {
    font-size: 2rem;
    font-family: var(--vtPrimaryFont);
    line-height: 1.5rem;
    color: var(--vtDarkBlue);
    margin-left: 1.5em;
    margin-right: 1.5em;
  }

  h3 {
    font-size: 1.2rem;
    font-family: var(--vtSecondaryFont);
    line-height: 1.5rem;
  }

  .bold {
    font-weight: 800;
    text-decoration: underline;
    text-decoration-thickness: 0.2rem;
    text-underline-offset: 0.5rem;
  }

  /* Kennisclip teksten */
  p {
    text-align: left;
    line-height: 1.5rem;
    font-family: var(--vtSecondaryFont);
    font-size: 1rem;
    margin-left: auto;
    margin-right: auto;
    max-width: 40em;
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
      padding-left: 2.5em;
      padding-right: 2.5em;
    }
  }

  /* mobile */
  @media (max-width: 31em) {
    .line {
      padding-left: 11% !important;
    }

    h1 {
      font-size: 1.157em !important
    }

    p {
      padding-left: 2rem;
      padding-right: 2rem;

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
