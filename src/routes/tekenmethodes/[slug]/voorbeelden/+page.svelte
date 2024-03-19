<script>
  import Header from "$lib/molecules/header.svelte";
  import Footer from "$lib/molecules/footer.svelte";
  import { onMount } from "svelte";

  export let data;

  onMount(() => {
    var prevButton = document.getElementById("button-prev-1");

    prevButton.addEventListener("click", function () {
      var el = document.querySelector("#carrousel-js .carrousel");
      el.scrollBy({ left: -1 * el.offsetWidth - 15 });
    });

    var nextButton = document.getElementById("button-next-1");

    nextButton.addEventListener("click", function () {
      var el = document.querySelector("#carrousel-js .carrousel");
      el.scrollBy({ left: el.offsetWidth + 15 });
    });
  });
</script>

<Header />

<header>
  <a href="/tekenmethodes">
    <h4 class="line">
      <img
        class="arrows-line"
        src="/arrows.svg"
        alt="terug_naar_overzicht_arrow"
      />Overzicht
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

<section class="images-buttons">
  <div class="nav-btn-right">
    <div id="button-prev-1" class="carousel-btn prev-btn">
      <button class="icon icon-right">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
          ><path
            d="M15.293 3.293 6.586 12l8.707 8.707 1.414-1.414L9.414 12l7.293-7.293-1.414-1.414z"
          /></svg
        >
      </button>
    </div>
    <div id="button-next-1" class="carousel-btn next-btn">
      <button class="icon icon-right">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
          ><path
            d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z"
          /></svg
        >
      </button>
    </div>
  </div>

  <div id="carrousel-js">
    <div class="carrousel" id="scrollbar">
      {#each data.methods as method}
        {#if method.examples.length > 0}
          {#each method.examples as example}
            <img class="carrousel-img" src={example.url} alt="Example Slide" />
          {/each}
        {:else}
          <p class="carrousel-missing">Geen voorbeelden</p>
        {/if}
      {/each}
    </div>
  </div>
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

  .carrousel {
    display: flex;
    align-items: center;
    max-width: 600px;
    gap: 15px;
    justify-content: space-between;
    margin-bottom: 20px;
    overflow: auto;
    scroll-behavior: smooth;
    scroll-snap-type: x mandatory;
    scroll-snap-align: center;
  }

  .images-buttons {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }

  .carrousel-img {
    width: 600px;
    height: auto;
  }

  .nav-btn-right {
    display: -webkit-flex;
    width: 100%;
    padding: 10px;
    justify-content: center;
  }

  .icon-right:hover {
    background-color: var(--vtYellow);
    transition: 0.2s;
  }

  .carousel-btn {
    border-radius: 23px;
    border: 1px solid var(--vtYellow);
    cursor: pointer;
  }

  .next-btn {
    margin-inline-start: 15px;
  }

  .icon {
    height: 45px;
    width: 45px;
    border-radius: 30px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-align-items: center;
    -webkit-box-align: center;
    border: none;
  }

  /* text als er geen voorbeelden zijn */
  .carrousel-missing {
    font-size: 2.5rem;
    margin: 0 auto;
    margin-bottom: 20rem;
    font-family: var(--vtPrimaryFont);
    color: var(--vtDarkBlue);
  }

  /* Scrollbar */



  #scrollbar::-webkit-scrollbar {
    width: 10px;
    /* height: 7px; */
    background-color: none;
  }

  #scrollbar::-webkit-scrollbar-thumb {
    background-color: var(--vtYellow);
    background-image: -webkit-linear-gradient(
      45deg,
      rgba(255, 255, 255, 0.2) 25%,
      transparent 25%,
      transparent 50%,
      rgba(255, 255, 255, 0.2) 50%,
      rgba(255, 255, 255, 0.2) 75%,
      transparent 75%,
      transparent
    );
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

    .carrousel {
      max-width: 600px;
      gap: 15px;
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

    .carrousel {
      max-width: 300px;
      gap: 15px;
    }

    .carrousel-img {
      width: 300px;
      height: auto;
    }

    .carrousel-missing {
      font-size: 1.4rem;
      padding: 20px;
    }
  }
</style>
