<script>
  import BlogButton from "./blogButton.svelte";
  export let data;
</script>

<!-- INTRO DATA - CONTENT -->
<section class="intro">
  {#each data.introTeksts as intro}
    <h1 class="introtitel2">{intro.title}</h1>
    <p class="introtext2">{intro.description.text}</p>
  {/each}
</section>

<!-- BORDERS - BUTTON - ARTIKELEN DATA - CONTENT -->
<section class="grid">
  {#each data.artikelenHomepages as artikelenHomepages}
    <article>
      <img src={artikelenHomepages.img.url} alt="artikelen" />
      <h2>{artikelenHomepages.title}</h2>
      <p class="text">{artikelenHomepages.description}</p>

      <BlogButton page="/artikelen/{artikelenHomepages.pageName}" />
    </article>
  {/each}
</section>

<style>
  /* MOBILE - STYLING */
  /* INTRO - STYLING */

  /* Center the intro section with a max width of 700px */
  .intro {
    max-width: 700px;
    width: 77%;
    margin: 0 auto;
  }

  /* Style for intro text */
  .introtitel2 {
    font-size: 1.7rem;
    text-align: center;
  }

  /* BORDER - CONTENT - STYLING */
  .grid {
    display: grid;
    grid-template-columns: auto;
    align-items: center;
    justify-items: center;
    padding: 40px;
    justify-content: center;
    margin-bottom: 40px;
    gap: 2em;
  }

  article {
    height: 30em;
    width: 16em;
    border: 4px solid var(--vtYellow);
    border-radius: 0.5em;
  }

  img {
    width: 100%;
    height: 40%;
    border-top-right-radius: 1em;
    border-top-left-radius: 1em;
  }

  h2 {
    font-family: var(--vtPrimaryFont);
    color: var(--vtDarkBlue);
    line-height: 1.2em;
    margin-top: 0em;
    padding: 0.6em;
    font-size: 20px;
    margin-left: 0.3em;
    height: 12%;
    display: flex;
    align-items: end;
  }

  .text {
    font-family: var(--vtSecondaryFont);
    font-size: 17px;
    line-height: 1.5em;
    padding: 1em;
    margin-top: -2em;
    height: 26%;
  }

  /* TABLET - STYLING */
  @media screen and (min-width: 768px) {   
     .intro {
      max-width: 700px;
      width: 80%;
    }

    .introtitel2{
      font-size: 3.157rem;
    }

    .grid {
      grid-template-columns: 1fr 1fr;
      margin-bottom: 40px;
      max-width: fit-content;
      margin: auto;
    }
  }

  /* DESKTOP - STYLING */
  @media screen and (min-width: 1120px) {
    .intro {
      max-width: 700px;
      width: 80%;
    }

    .grid {
      grid-template-columns: 1fr 1fr 1fr;
      padding-left: 7em;
      padding-right: 7em;
      margin-bottom: 40px;
  
    }
  }
</style>
