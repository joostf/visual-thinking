<script>
  import Header from "$lib/molecules/header.svelte";
  import Footer from "$lib/molecules/footer.svelte";

  export let data;

  // Variabele om de zichtbaarheid van stappenplan te regelen
  let toon = false;

  // Variabele voor de stappenplan knop
  let stappenplanButton;

  // Functie om stappenplan zichtbaarheid te toggelen
  function toonStappenplan() {
    toon = !toon;
  }

  // Uitvoeren bij het laden van de component
  function setup() {
    // Koppel stappenplanButton aan het DOM-element met id "stappenplanbutton"
    stappenplanButton = document.getElementById("stappenplanbutton");

    // Voeg klik eventlistener toe aan stappenplanButton
    stappenplanButton.addEventListener("click", toonStappenplan);
  }

  // Wordt uitgevoerd bij het sluiten van de component
  function teardown() {
    // Verwijder klik eventlistener om geheugenlekken te voorkomen
    stappenplanButton.removeEventListener("click", toonStappenplan);
  }
</script>

<Header />

<header>
  <a href="/tekenmethodes">
    <h4 class="line">
      <img
        class="arrows-line"
        src="/arrows.svg"
        alt="terug naar overzicht arrow button"
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
          <a href="/tekenmethodes/{method.slug}">
            <h2 class="bottom">Stappenplan</h2>
          </a>
        </li>
        <li>
          <a href="/tekenmethodes/{method.slug}/voorbeelden">
            <h2>Voorbeelden</h2>
          </a>
        </li>
      {/each}
    </ul>
  </nav>
</section>

<article class="grid">
  <section class="image-text">
    {#each data.methods as method}
      <img class="template-url" src={method?.template?.url} alt="icon" />
    {/each}

    <section class="flex-s">
      <section class="full-b">
        <div class="tags-b">
          <img class="icon" src="/icon1.svg" alt="icon" />
          {#each data.methods as method}
            {#each method.categories as category}
              <h3 class="tag">
                {@html category.title}
              </h3>
            {/each}
          {/each}
        </div>

        <div class="tags-b">
          <img class="icon" src="/icon2.svg" alt="icon" />
          <h3 class="tag">
            {#each data.methods as method}
              {method.material}
            {/each}
          </h3>
        </div>

        <div class="tags-b">
          <img class="icon" src="/icon3.svg" alt="icon" />
          <h3 class="tag">
            {#each data.methods as method}
              {method.duration}
            {/each}
          </h3>
        </div>

        <div class="tags-b">
          <img class="icon" src="/icon4.svg" alt="icon" />
          <h3 class="tag">Charley Muhren</h3>
        </div>
      </section>
    </section>
  </section>
  <section class="steps">
    <!-- {console.log(data)} -->
    {#each data.methods as method}
      {#each method.steps as step}
        <details class="accordion-item">
          <summary class="step-title">{step.title}</summary>
          <div class="accordion-content">
            <!-- {#each step.visual as visual} -->
            
            {#if step.visual[0]}
            <div class="step-visual">
              <img src={step.visual[0].url} alt="image_voorbeeld" />
            </div>
          {/if}
          
            <!-- {/each} -->

            {#if typeof step.description === "object"}
              <p class="step-description">{@html step.description.html}</p>
            {:else}
              <p>{step.description}</p>
            {/if}
          </div>
        </details>
      {/each}
    {/each}
  </section>
</article>

<Footer />

<style>
  /* Header */
  .line {
    display: flex;
    align-items: center;
    height: 30px;
    text-transform: uppercase;
    background-color: var(--vtYellow);
    color: var(--vtWhite);
    font-family: var(--vtPrimaryFont);
    font-size: 0.9rem;
    padding-left: 9%;
    margin-top: 0%;
  }

  .nav-items {
    margin-top: -34px;
    margin-bottom: 30px;
    background-color: var(--vtGrey-10);
    /* height: 15rem; */
  }

  /* img binnen de steps */

.step-visual img {
  width: 100%;
  height: 100%;
}

  nav {
    margin-bottom: 83px;
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
    /* align-items: center; */
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
    font-size: 20px;
    font-weight: 100;
  }

  .arrows-line {
    width: 36px;
    margin-right: 5px;
    transform: rotate(180deg);
  }

  .bottom {
    font-weight: 800;
    text-decoration: underline;
    text-decoration-thickness: 0.2rem;
    text-underline-offset: 0.5rem;
  }

  /* Grid -Article */

  .grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
    padding-bottom: 20px;
    max-width: 80%;
    margin: 0 auto;
  }

  .image-text,
  .steps {
    width: 100%;
  }

  .template-url {
    max-width: 100%;
    height: auto;
  }

  .flex-s {
    width: 100%;
  }

  .full-b {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .tags-b {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 10px;
  }

  .template-url {
    border: 2px solid var(--vtDarkBlue);
  }

  /* tags styling */

  .tag {
    background-color: var(--vtYellow-80);
    color: var(--vtDarkBlue);
    font-family: var(--vtPrimaryFont);
    font-size: 0.7rem;
    padding: 0.5rem;
    padding-left: 0.7rem;
    padding-right: 0.7rem;
    margin-left: 0.8rem;
    max-width: fit-content;
  }

  .icon {
    width: 50px;
    height: 55px;
  }

  /* Accordion styling */

  .accordion-item {
    margin-bottom: 5px;
    width: 100%;
    overflow: hidden;
  }

  .step-title {
    background-color: var(--vtDarkBlue);
    color: var(--vtWhite);
    padding: 10px;
    cursor: pointer;
    user-select: none;
  }

  .step-title:hover {
    background-color: var(--vtYellow-80);
    color: black;
  }

  .accordion-content {
    padding: 10px;
    background-color: #fff;
    border: 1px solid #ccc;
  }

  .step-description {
    margin: 0;
  }

  /* ----------------------------------------------- DESKTOP */

  @media (min-width: 68em) {
    .line {
      padding-left: 9% !important;
    }

    .nav-items {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin-top: -24px !important;
      margin-bottom: 60px;
      padding-left: 6rem;
      padding-right: 6rem;
      max-height: fit-content;
    }

    nav {
      margin-left: auto;
    }

    ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    li {
      margin-bottom: 10px;
    }

    /* Accordion  */

    .grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
      max-width: 80%;
      margin: 0 auto;
    }

    .accordion-item {
      margin-bottom: 5px;
      width: 100%;
      overflow: hidden;
    }

    .accordion-content {
      padding: 10px;
      background-color: #fff;
    }

    .step-description {
      margin: 0;
    }

    .tag {
    font-size: 0.9rem;
  }
  }

  /*------------------------------------------------------- RESPONSIVE TABLET GROOT ----*/
  @media (min-width: 45em) {
    h1 {
      padding-top: 25px;
      font-size: 3.157rem;
    }
    .line {
      padding-left: 20%;
    }

    .nav-items {
      margin-top: -63px;
      margin-bottom: 30px;
    }

    .tag {
    font-size: 0.9rem;
  }
  }

  /*-------------------------------------------------------- RESPONSIVE TABLET MINI ---*/
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

    .tag {
    font-size: 0.9rem;
  }
  }

  /*-------------------------------------------------------------- RESPONSIVE MOBILE --*/
  @media (max-width: 31em) {
    h1 {
      font-size: 1.7rem;
      padding-top: 25px;
    }


    .line {
      padding-left: 11%;
    }

    ul {
      transform: translateY(0);
      justify-content: flex-start;
    }

    .nav-items {
      margin-top: -34px;
      margin-bottom: 30px;
    }
  }
</style>
