<script>
  import Header from "$lib/molecules/header.svelte";
  import Footer from "$lib/molecules/footer.svelte";

  export let data;


</script>

<Header />

<header>
  <a href="/tekenmethodes">
    <h4 class="line">
      <img class="arrows-line" src="/arrows.svg" alt="terug_naar_overzicht_arrow" />Overzicht
    </h4>
  </a>
</header>

<section class="nav-items">
  <section>
    <h1>
      {#each data.methods as method}
        {method.title}
      {/each}
    </h1>
  </section>

  <nav>
    <ul>
      {#each data.methods as method}
        <li>
          <a href="/tekenmethodes/{method.slug}">
            <h2>Beschrijving</h2>
          </a>
        </li>
        <li>
          <a href="/tekenmethodes/{method.slug}/stappenplan">
            <h2>Stappenplan</h2>
          </a>
        </li>
        <li>
          <a href="/tekenmethodes/{method.slug}/voorbeelden">
            <h2 class="bottom">Voorbeelden</h2>
          </a>
        </li>
      {/each}
    </ul>
  </nav>
  
</section>

<section class="carousel">
  <!-- {#if data.methods.some((method) => method.examples.length > 0)}
    <button class="carousel-button carousel-button-left">
      <img src="/arrow.svg" alt="Left Carousel Arrow" />
    </button>
  {/if} -->
  <div class="carousel-container">
    <ul class="carousel-list">
      {#each data.methods as method}
        {#if method.examples.length > 0}
          {#each method.examples as example}
            <li class="carousel-slide current-slide">
              <img class="carousel-img" src={example.url} alt="Example Slide" />
            </li>
          {/each}
        {:else}
          <li class="carousel-slide Missing-pic">Op dit moment zijn er geen voorbeelden</li>
        {/if}
      {/each}
    </ul>
  </div>
  <!-- {#if data.methods.some((method) => method.examples.length > 0)}
    <button class="carousel-button carousel-button-right">
      <img src="/arrows_black.svg" alt="Right Carousel Arrow" />
    </button>
  {/if} -->
</section>


<Footer />

<style>
  .line {
    display: flex;
    height: 30px;
    text-transform: uppercase;
    background-color: var(--vtYellow);
    color: var(--vtWhite);
    font-family: var(--vtPrimaryFont);
    font-size: 0.9rem;
    padding-left: 9%;
    margin-top: 0%;
    align-items: center;
  }

  .nav-items {
    margin-top: -34px;
    margin-bottom: 30px;
    background-color: var(--vtGrey-10);
  }

  ul {
    justify-content: center;
    overflow-y: hidden;
    transition: transform 0.3s ease;
  }

  a {
    text-decoration: none;
    list-style: none;
    cursor: pointer;
  }

  nav ul {
    display: flex;
    list-style: none;
  }

  nav li {
    padding-right: 10px;
    padding-left: 10px;
    text-transform: uppercase;
    font-family: var(--vtPrimaryFont);
  }

  h1 {
    font-size: 3.157rem;
    font-family: var(--vtPrimaryFont);
    color: var(--vtDarkBlue);
    text-align: center;
  }

  h2 {
    color: var(--vtSec-DarkBlue);
    font-family: var(--vtPrimaryFont);
    font-size: 20px;
    font-weight: 100;
  }

  .bottom {
    font-weight: 800;
    text-decoration: underline;
    text-decoration-thickness: 0.2rem;
    text-underline-offset: 0.5rem;
  }

  .arrows-line {
    width: 36px;
    margin-right: 5px;
    transform: rotate(180deg);
  }

   /* Carousel */

   .carousel-img {
    width: 400px;
    height: auto;
    border: 1px solid var(--vtDarkBlue);
  }

  .carousel-container {
    width: 100%;
    overflow-x: auto;
    white-space: nowrap;
  }

  .carousel-list {
    display: flex;
    list-style: none;
    justify-content: flex-start;
    align-items: center;
  }

  .carousel-slide {
    margin-right: 40px;
  }

  .Missing-pic {
    padding-bottom: 10rem;
    font-family: var(--vtPrimaryFont);
    color: var(--vtDarkBlue);
  }


  /*------------------------------------------------ DESKTOP ---*/
  @media (min-width: 74em) {
    .line {
      padding-left: 9% !important ;
    }

    .nav-items {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: -24px !important;
      margin-bottom: 60px;
      padding-left: 9%;
      padding-right: 9%;
    }

    h1 {
      margin-top: auto;
      margin-bottom: 30px;
      text-align: start;
      max-width: 800px;
    }

    nav ul {
      display: flex;
      list-style: none;
    }


    .Missing-pic {
    font-size: 2rem;    
    padding-bottom: 10rem;
    font-family: var(--vtPrimaryFont);
    color: var(--vtDarkBlue);
  }

  }





  /*-------------------------------------------------------  TABLET GROOT ---*/

  @media (min-width: 45em) {
    .line {
      padding-left: 20%;
    }

    .nav-items {
      margin-bottom: 30px;
      /* height: 20rem; */
    }

    .nav-items {
      margin-top: -63px;
      margin-bottom: 30px;
    }

   
  }

  /*----------------------------------------- RESPONSIVE TABLET MINI ----*/
  @media (min-width: 31em) {
    .line {
      padding-left: 20%;
    }

    h1 {
      padding-top: 25px;
    }

    ul {
      transform: translateY(0);
    }

    .nav-items {
      margin-top: -63px;
      margin-bottom: 30px;
    }


  }

  /*------------------------------------ MOBILE---*/
  @media (max-width: 31em) {
    .line {
      padding-left: 11%;
    }

    ul {
      transform: translateY(0);

      justify-content: flex-start;
    }

    h1 {
      font-size: 1.7rem;
      padding-top: 25px;
    }

    .Missing-pic {
    font-size: 1rem;    
  }

  }
</style>
