<script>
  import { onMount } from "svelte";

  export let data;

  console.log(data);

  // Dit is een variabele om de geselecteerde categorie-ID bij te houden
  let selectedCategoryId = null;

  // Voer code uit na het renderen van de component
  onMount(() => {
    // Haal de queryparameters op uit de URL
    const queryParams = new URLSearchParams(window.location.search);

    // Haal de waarde op van de 'filter' queryparameter
    const filterParam = queryParams.get("filter");

    console.log(selectedCategoryId);

    // Controleer of er een filterparameter is en wijs deze toe aan de variabele
    if (filterParam) {
      selectedCategoryId = filterParam;
    }
  });

  // Definieer een functie om methoden te filteren op basis van de geselecteerde categorie
  function filterMethodsByCategory() {
    // Als er geen categorie is geselecteerd, retourneer alle methoden
    if (selectedCategoryId === null) {
      return data.methods;
    } else {
      // Filter methoden op basis van de geselecteerde categorie-ID
      return data.methods.filter((method) =>
        method.categories.some((category) => category.id === selectedCategoryId)
      );
    }
  }
</script>

<header>
  <h4 class="line">Tekenmethodes</h4>
</header>

<section class="intro">
  <article class="intro-text">
    <h1>Tekenmethodes</h1>
    <p class="lowercase">
      Welkom op onze pagina over Visual Thinking! Visual Thinking is een super
      toffe manier om informatie te begrijpen, te ordenen en te delen met
      anderen door middel van plaatjes in plaats van alleen maar woorden. Dit
      maakt het gemakkelijker om complexe ideeën te begrijpen en te delen met
      anderen. <br />
      <br />
      Op deze pagina vind je verschillende Visual Thinking tekenmethodes die je kunt
      gebruiken om je creativiteit en productiviteit te vergroten. Of je nu een student
      bent, of gewoon geïnteresseerd bent in Visual Thinking, wij hebben de juiste
      tools en technieken voor jou. <br />
      <br />
      Hier vind je ook een heleboel tips en trucs voor het gebruik van Visual Thinking
      in je dagelijks leven en je studie. Dus waar wacht je nog op? Ontdek vandaag
      nog de kracht van Visual Thinking en maak je ideeën visueel!
    </p>
  </article>
</section>

<section class="categories-mobile">
  <label for="touch"><span id="menu-icon">Categorieën</span></label>
  <img src="/arrow-down.svg" alt="" class="arrow-down" />
  <input type="checkbox" id="touch" />
  <ul class="slide">
    <li class="categorie-name">
      <img src="/onderzoeken-en-begrijpen.svg" alt="" class="img-categorie" />
      <a href="?selectedCategoryId=clbm28czo0kny0bw3tl71hnq4#touch"
        >Onderzoeken en begrijpen</a
      >
    </li>
    <li class="categorie-name">
      <img src="/organiseren-en-plannen.svg" alt="" class="img-categorie" />
      <a href="?selectedCategoryId=clbm2bwei0ku90bw26jca93on#touch"
        >Organiseren en plannen</a
      >
    </li>
    <li class="categorie-name">
      <img src="/leren-over-anderen.svg" alt="" class="img-categorie" />
      <a href="?selectedCategoryId=clbm2cfuj0kt40bw30fo6ow2j#touch"
        >Leren over anderen</a
      >
    </li>
    <li class="categorie-name">
      <img src="/leren-over-jezelf.svg" alt="" class="img-categorie" />
      <a href="?selectedCategoryId=clbm298dc0kpu0bw3weflzwvw#touch"
        >Leren over jezelf</a
      >
    </li>
    <li class="categorie-name">
      <img src="/communiceren.svg" alt="" class="img-categorie" />
      <a href="?selectedCategoryId=clbm2c6zs0kst0aw18ja2oafj#touch"
        >Communiceren en presenteren</a
      >
    </li>
    <li class="categorie-name">
      <img src="/creatief.svg" alt="" class="img-categorie" />
      <a href="?selectedCategoryId=clbm2bnf20kqw0aw159269x9i#touch"
        >Creatief denken</a
      >
    </li>
  </ul>
</section>

<section class="categories">
  <section class="categories-container">
    <ul class="categorie-names">
      <li class="categorie-name">
        <img src="/onderzoeken-en-begrijpen.svg" alt="" class="img-categorie" />
        <a href="?selectedCategoryId=clbm28czo0kny0bw3tl71hnq4#touch"
          >Onderzoeken en begrijpen</a
        >
      </li>
      <li class="categorie-name">
        <img src="/organiseren-en-plannen.svg" alt="" class="img-categorie" />
        <a href="?selectedCategoryId=clbm2bwei0ku90bw26jca93on#touch"
          >Organiseren en plannen</a
        >
      </li>
      <li class="categorie-name">
        <img src="/leren-over-anderen.svg" alt="" class="img-categorie" />
        <a href="?selectedCategoryId=clbm2cfuj0kt40bw30fo6ow2j#touch"
          >Leren over anderen</a
        >
      </li>
      <li class="categorie-name">
        <img src="/leren-over-jezelf.svg" alt="" class="img-categorie" />
        <a href="?selectedCategoryId=clbm298dc0kpu0bw3weflzwvw#touch"
          >Leren over jezelf</a
        >
      </li>
      <li class="categorie-name">
        <img src="/communiceren.svg" alt="" class="img-categorie" />
        <a href="?selectedCategoryId=clbm2c6zs0kst0aw18ja2oafj#touch"
          >Communiceren en presenteren</a
        >
      </li>
      <li class="categorie-name">
        <img src="/creatief.svg" alt="" class="img-categorie" />
        <a href="?selectedCategoryId=clbm2bnf20kqw0aw159269x9i#touch"
          >Creatief denken</a
        >
      </li>
    </ul>
  </section>
</section>

<section class="tekenmethodes-main">
  <section class="methods">
    {#if data && data.methods && data.methods.length > 0}
      {#each data.methods as method, index}
        <section class="method-container" data-index={index}>
          <a href="/tekenmethodes/{method.slug}" class="link-detail-page">
            {#if method.template && method.template.url}
              <picture>
                <source
                  type="image/webp"
                  srcset={method.template.url}
                  class={method.categories[0].title.replaceAll(" ", "-")}
                />
                <img
                  src={method.template.url.replace(":webp", ":png")}
                  alt={"Voorbeeld van " + method.title}
                  class={method.categories[0].title.replaceAll(" ", "-")}
                />
              </picture>
            {:else}
              <img
                class={method.categories[0].title.replaceAll(" ", "-")}
                src="/placeholder.webp"
                alt="Placeholder"
              />
            {/if}
            <section class="methods-titles">
              <h2>{method.title}</h2>
            </section>
          </a>
        </section>
      {/each}
    {/if}
  </section>
</section>

<style>
  /* Header */
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
  }

  h1 {
    font-size: 3.157rem;
    font-family: var(--vtPrimaryFont);
    color: var(--vtDarkBlue);
    text-align: center;
  }

  h2 {
    color: var(--vtDarkBlue);
    font-size: 20px;
  }

  h4 {
    font-size: 1rem;
    font-family: var(--vtPrimaryFont);
    line-height: 1.5rem;
    color: var(--vtDarkBlue);
  }

  /* Intro Styling */
  .intro {
    display: flex;
    align-items: center;
    margin-bottom: 40px;
  }

  .intro-text {
    max-width: 700px;
    margin: 0 auto;
  }

  /* Link Styling */
  a {
    text-decoration: none;
    cursor: pointer;
    color: var(--vtWhite);
  }

  .a {
    color: var(--vtDarkBlue);
  }

  /* Image Styling */
  .img {
    width: 290px;
    height: 210px;
  }

  /* Arrow Stling */
  .arrows {
    margin-bottom: -7%;
  }

  /* Category Styling */
  .categorien {
    display: flex;
    flex-direction: column;
  }

  .categorie {
    max-width: 100%;
    display: flex;
    flex-direction: column;
    margin: 2em 2.05em;
  }

  /* teken Methods Styling */
  .tekenmethodes-main {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    margin-top: 40px;
  }

  /* P tag styling  */

  .lowercase {
    line-height: 1.5rem;
    margin-bottom: 20px;
  }

  /* Dropdown Menu Styling */
  .categories {
    display: none;
  }

  li a {
    text-decoration: none;
    color: var(--vtDarkBlue);
    font-family: var(--vtPrimaryFont);
    font-size: 16px;
    padding-left: 20px;
  }

  li a:hover {
    color: var(--vtLightBlue);
  }

  li a:active {
    color: var(--vtDarkBlue);
    font-weight: 600;
  }

  .active {
    font-weight: 700;
  }

  .slide {
    clear: both;
    width: 100%;
    height: 0px;
    overflow: hidden;
    transition: height 0.4s ease;
    margin-top: -2em;
  }

  .slide li {
    display: flex;
    align-items: center;
    padding: 10px;
  }

  .categories-mobile {
    width: 100%;
    background: var(--vtGrey);
    margin: 10px auto;
    margin-bottom: 20px;
  }

  .categories-mobile span {
    padding: 20px;
    background: var(--vtGrey);
    color: var(--vtDarkBlue);
    font-size: 20px;
    cursor: pointer;
    display: block;
    font-family: var(--vtPrimaryFont);
    font-weight: 800;
  }

  #touch {
    position: absolute;
    opacity: 0;
    height: auto;
  }

  #touch:checked + .slide {
    height: auto;
  }

  /* Methods Styles */
  .methods {
    display: flex;
    margin-bottom: 20px;
    gap: 20px;
    flex-wrap: wrap;
    justify-content: center;
  }

  .method-container img {
    width: 300px;
  }

  .methods-titles {
    width: 90%;
    margin-top: -0.7em;
  }

  .methods-titles:hover {
    white-space: unset;
    text-overflow: unset;
  }

  .detail-main {
    margin: 2rem 0;
  }

  /*------------ RESPONSIVE DESKTOP --------------*/
  @media (min-width: 68em) {
    /* Aanpassen padding voor de .line-klasse */
    .line {
      padding-left: 9% !important;
    }

    /* Verbergen van het mobiele categoriemenu */
    .categories-mobile {
      display: none;
    }

    /* Weergeven van het grid voor de categorieënsectie */
    .categories {
      display: grid !important;
      grid: ". category ." 2fr / 1fr 6fr 1fr;
      /* margin-bottom: 50px; */
    }

    /* Aanpassen van het gridgebied voor de categorieëncontainer */
    .categories-container {
      grid-area: category;
    }

    /* Stijl voor links binnen lijstitems */
    li a {
      text-decoration: none;
      color: var(--vtDarkBlue);
      font-family: var(--vtPrimaryFont);
      font-size: 20px !important;
      /* padding-left: 40px !important; */
      gap: 20px;
    }

    /* Stijl voor lijstitems binnen de categorieën */
    .categorie-names li {
      display: flex;
      align-items: center;
      /* Eventueel uitlijnen van het centrum van de inhoud */
      /* justify-content:center; */
      list-style: none;
      width: 100%;
      flex: 0 0 calc(33.33% - 60px);
      margin-bottom: 2em;
    }

    /* Stijl voor de categorieëncontainer */
    .categorie-names {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      padding: inherit;
      /* Eventueel margineer de onderkant met 40px */
      /* margin-bottom: 40px; */
    }

    /* Stijl voor het categorieëngrid */
    .categorien {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-column-gap: 8rem;
      grid-row-gap: 3rem;
      max-width: 100%;
      margin: 0 4.1rem;
      align-items: center;
    }

    /* Stijl voor de lagere sectie */
    .lower {
      margin: 3em 0;
    }

    /* Stijlen voor de tekenmethoden sectie */
    .tekenmethodes-main {
      display: grid;
      grid: ". methods ." 1fr / 0.75fr 3fr 0.75fr;
      grid-auto-flow: dense;
      margin-bottom: 40px;
    }

    /* Stijlen voor het methoden-grid */
    .methods {
      grid-area: methods;
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
      grid-gap: 25px;
    }

    /* Stijlen voor de afbeeldingen in de methoden */
    .methods img {
      width: 100%;
      height: auto;
      border: 1px solid var(--vtDarkBlue);
    }

    /* Stijlen voor de titels in de methoden */
    .methods-titles h2 {
      font-family: var(--vtPrimaryFont);
      font-size: 20px;
      color: var(--vtDarkBlue);
    }
  }

  /*------------ RESPONSIVE TABLET GROOT --------------*/
  @media (min-width: 45em) {
    /* Aanpassen van de breedte voor intro tekst 2 */
    .intro-text {
      width: 80%;
    }
    .line {
      padding-left: 20%;
    }
    /*---CATEGORIEËN---*/
    .categorien {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-column-gap: 5rem;
      grid-row-gap: 2rem;
      max-width: 100%;
      margin: 0 2.05rem;
    }

    /* Aanpassen van marges voor categorie items */
    .categorie {
      margin: 0;
    }

    /* Verbergen van het categorieënmenu */
    .categories {
      display: none;
    }

    /* Aanpassen van stijl voor links binnen lijstitems */
    li a {
      text-decoration: none;
      color: var(--vtDarkBlue);
      font-family: var(--vtPrimaryFont);
      font-size: 18px;
      padding-left: 20px;
      /* Eventueel aanpassen van rechter padding */
      /* padding-right: 1em; */
    }

    /*---METHODEN---*/
    .tekenmethodes-main {
      display: grid;
      grid: ". methods ." 1fr / 0.5fr 3fr 0.5fr;
      grid-auto-flow: dense;
      margin-bottom: 40px;
      margin-left: 0em;
    }

    /* Aanpassen van het grid voor methoden sectie */
    .methods {
      grid-area: methods;
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      grid-gap: 25px;
    }

    /* Aanpassen van stijl voor afbeeldingen in methoden */
    .methods img {
      width: 100%;
      height: auto;
      border: 1px solid var(--vtDarkBlue);
    }
  }

  /*------------ RESPONSIVE TABLET MINI --------------*/
  @media (min-width: 31em) {
    /* Aanpassen van stijl voor kop in intro tekst 2 */
    .intro-text h1 {
      /* font-size: 1.7rem; */
      text-align: center;
    }

    /* Aanpassen van de breedte voor intro tekst 2 */
    .intro-text {
      width: 80%;
    }
    .line {
      padding-left: 20%;
    }

    /* Aanpassen van stijl voor arrow */
    .arrow-down {
      width: 15px;
      float: right;
      margin-right: 1em;
      margin-top: -2.2em;
    }

    /* Aanpassen van stijl voor afbeeldingen in methoden */
    .methods img {
      border: 1px solid var(--vtDarkBlue);
    }

    /* Aanpassen van stijl voor navigatie-lijstitems */
    nav ul li {
      display: inline-block;
      padding-right: 30px;
      padding-top: 5px;
      color: var(--vtDarkBlue);
      font: var(--vtMenuFont);
    }

    /* Aanpassen van de marge voor de .line-klasse */
    /* .line {
      padding-left: 20%;
    } */

    /* Verbergen van het dropdownmenu */
    .categories {
      display: none;
    }

    /* Aanpassen van stijl voor links binnen lijstitems */
    li a {
      text-decoration: none;
      color: var(--vtDarkBlue);
      font-family: var(--vtPrimaryFont);
      font-size: 18px;
      padding-left: 20px;
    }
  }

  /*------------ RESPONSIVE  MOBILE --------------*/
  @media (max-width: 31em) {
    .intro-text {
      width: 77%;
    }

    .intro-text h1 {
      font-size: 1.7rem;
      text-align: center;
    }

    .arrow-down {
      width: 15px;
      float: right;
      margin-right: 1em;
      margin-top: -2.2em;
    }

    .line {
      padding-left: 11%;
    }

    .methods img {
      border: 1px solid var(--vtDarkBlue);
    }

    .slide {
      margin-top: 0px;
      padding-left: 10px;
    }

  }
</style>
