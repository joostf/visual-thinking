<script>
  import BlogButton from "../atoms/blogButton.svelte";
  import Breadcrumb from "../atoms/breadcrumb.svelte";
  export let data;
</script>

<Breadcrumb titel="Artikelen" bgc="var(--vtDarkBlue)" />

<!-- INTRO DATA - CONTENT -->
<header class="intro">
  {#each data.introTeksts as intro}
    <h1 class="introtitel2">{intro.title}</h1>
    <p class="introtext2">{intro.description.text}</p>
  {/each}
</header>

<!-- BORDERS - BUTTON - ARTIKELEN DATA - CONTENT -->
<div class="grid">
  {#each data.artikelenHomepages as article}
    <article>
      <a href="/artikelen/{article.pageName}">
      <img src={article.img.url} alt="artikelen" />
      <h2>{article.title}</h2>
      <!-- <p class="text">{article.description}</p> -->
    </a>
      <!-- <BlogButton page="/artikelen/{article.pageName}" /> -->
    </article>
  {/each}
</div>

<style>
  header {
    max-width: 700px;
    width: 77%;
    margin: 0 auto;
  }

  h1 {
    font-size: 1.7rem;
    text-align: center;
  }

  img {
    border: 2px solid var(--vtDarkBlue);
  } 

  .grid {
    display: grid;
    grid-template-columns: auto;
    align-items: center;
    justify-items: center;
    padding: 40px;
    justify-content: center;
    margin-bottom: 20px;
    gap: 2em;
  }

  /* article {
    height: 30em;
    width: 16em;
    border: 4px solid var(--vtYellow);
    border-radius: 0.5em;
  } */

  img {
    width: 100%;

    /* border-top-right-radius: 1em;
    border-top-left-radius: 1em; */
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
