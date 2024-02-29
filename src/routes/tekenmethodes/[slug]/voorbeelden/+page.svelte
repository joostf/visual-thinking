<script>
  import Header from "$lib/molecules/header.svelte";
  import Footer from "$lib/molecules/footer.svelte";

  export let data;

  // Log het voorbeeld van de eerste methode in de console
  console.log(data.methods[0].examples);

  // Importeer de onMount functie van Svelte om code uit te voeren na het renderen
  import { onMount } from "svelte";

  // Voer code uit na het renderen van de component
  onMount(() => {
    // Selecteer het element met de class 'carousel-list'
    const track = document.querySelector(".carousel-list");

    // Maak een array van slides uit de children van het 'track'-element
    const slides = Array.from(track.children);

    // Selecteer de knoppen voor vorige en volgende slides
    const nextButton = document.querySelector(".carousel-button-right");
    const prevButton = document.querySelector(".carousel-button-left");

    // Bepaal de breedte van een slide
    const slideWidth = slides[0].getBoundingClientRect().width;

    // Functie om de positie van een slide in te stellen op basis van de index
    const setSlidePosition = (slide, index) => {
      slide.style.left = slideWidth * index + "px";
    };

    // Stel de positie in voor elke slide
    slides.forEach(setSlidePosition);

    // Functie om naar een specifieke slide te verplaatsen
    const moveToSlide = (currentSlide, targetSlide) => {
      track.style.transform = "translateX(-" + targetSlide.style.left + ")";
      currentSlide.classList.remove("current-slide");
      targetSlide.classList.add("current-slide");
    };

    // Voeg een eventlistener toe aan de knop voor vorige slide
    prevButton.addEventListener("click", () => {
      const currentSlide = track.querySelector(".current-slide");
      const prevSlide = currentSlide.previousElementSibling;

      if (prevSlide) {
        moveToSlide(currentSlide, prevSlide);
      }
    });

    // Voeg een eventlistener toe aan de knop voor volgende slide
    nextButton.addEventListener("click", () => {
      const currentSlide = track.querySelector(".current-slide");
      const nextSlide = currentSlide.nextElementSibling;

      if (nextSlide) {
        moveToSlide(currentSlide, nextSlide);
      }
    });
  });
</script>

<Header />

<header>
  <a href="/tekenmethodes">
    <h4 class="line">
      <img class="arrows-line" src="/arrows.svg" alt="arrow-icon" />Overzicht
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
  {#if data.methods.some((method) => method.examples.length > 0)}
    <button class="carousel-button-left">
      <img src="/arrow.svg" alt="" />
    </button>
  {/if}
  <section class="carousel-container">
    <ul class="carousel-list">
      {#each data.methods as method}
        {#if method.examples.length > 0}
          {#each method.examples as example}
            <li class="carousel-slide current-slide">
              <img class="carousel-img" src={example.url} alt="" />
            </li>
          {/each}
        {:else}
          <li class="Missing-pic">Geen voorbeelden op dit moment</li>
        {/if}
      {/each}
    </ul>
  </section>
  {#if data.methods.some((method) => method.examples.length > 0)}
    <button class="carousel-button-right">
      <img src="/arrows_black.svg" alt="" />
    </button>
  {/if}
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

  .Missing-pic {
    font-size: 2rem;
    font-family: var(--vtPrimaryFont);
    color: var(--vtDarkBlue);
    text-align: center;
    /* margin-top: 0; */
  }

  .nav-items {
    margin-top: -34px;
    margin-bottom: 30px;
    background-color: var(--vtGrey-10);
  }

  a {
    text-decoration: none;
    cursor: pointer;
    color: var(--vtWhite);
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
    align-items: center;
    list-style: none;
  }

  nav li {
    padding-right: 10px;
    padding-left: 10px;
    /* font-size: 1rem; */
    text-transform: uppercase;
    font-family: var(--vtPrimaryFont);
  }

  h1 {
    /* background-color: var(--vtGrey); */
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

  .carousel-button-left,
  .carousel-button-right {
    width: 72px;
    height: 66px;
    transform: rotate(90deg);
    border: none;
  }

  .arrows-line {
    width: 36px;
    margin-right: 5px;
    transform: rotate(180deg);
  }

  /*------------------------------------------------ DESKTOP ---*/
  @media (min-width: 68em) {
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
      padding-left: 9% !important;
      margin-bottom: 30px;
      max-width: 800px;
    }

    nav ul {
      display: flex;
      list-style: none;
    }

    .carousel-container {
      height: 100%;
      margin-top: 5em;
    }

    .Missing-pic {
      font-size: 2rem;
      font-family: var(--vtPrimaryFont);
      color: var(--vtDarkBlue);
      text-align: center;
      margin-top: 0rem;
    }
  }

  /* CAROUSEL */
  .carousel {
    position: relative;
    height: 27.5rem;
    width: 100%;
    margin: 0 auto;
  }

  .carousel-img {
    z-index: 1;
  }

  .carousel-container {
    height: 100%;
    position: relative;
    overflow: hidden;
  }

  .carousel-list {
    padding: 0;
    margin: 0;
    list-style: none;
    position: relative;
    height: 100%;
    transition: transform 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .carousel-slide {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .carousel-button-left,
  .carousel-button-right {
    position: absolute;
    top: 50%;
    background: center;
    border: 0;
    cursor: pointer;
    z-index: 1;
    padding: 0.5rem;
  }

  .carousel-button-left:active,
  .carousel-button-right:active {
    animation-name: big;
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
    animation-duration: 0.2s;
    animation-iteration-count: 1;
  }

  .carousel-button-right {
    right: 0%;
    margin-right: 4rem;
  }

  .carousel-button-left {
    margin-left: 4rem;
  }

  .carousel-button-left img {
    transform: rotate(90deg);
  }

  .carousel-button-right img {
    transform: rotate(270deg);
    width: 25px;
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

    .carousel-button-right {
      margin-right: 1rem;
      margin-top: -12.5em;
    }

    .carousel-button-left {
      margin-left: 1rem;
      margin-top: -12.5em;
    }

    .carousel-container {
      margin-top: 6em;
      height: 50%;
      position: relative;
      overflow: hidden;
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

    .carousel-button-right {
      margin-right: 1rem;
      margin-top: -12.5em;
    }

    .carousel-button-left {
      margin-left: 1rem;
      margin-top: -12.5em;
    }

    .carousel-container {
      margin-top: 6em;
      height: 50%;
      position: relative;
      overflow: hidden;
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

    .carousel-button-right {
      margin-right: 5rem;
      margin-top: 5em;
      z-index: 2;
    }

    .carousel-button-left {
      margin-left: 5rem;
      margin-top: 5em;
      z-index: 2;
    }

    .carousel-container {
      margin-top: 5em;
      height: 50%;
      position: relative;
      overflow: hidden;
    }


  }
</style>
