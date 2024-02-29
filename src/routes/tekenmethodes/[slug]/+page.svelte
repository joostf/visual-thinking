<script>
  import Header from "$lib/molecules/header.svelte";
  import Footer from "$lib/molecules/footer.svelte";
  export let data;
  console.log(data);
</script>

<Header />

<header>
  <a href="/tekenmethodes">
    <h4 class="line">
      <img class="arrows-line" src="/arrows.svg" alt="" />Overzicht
    </h4>
  </a>
</header>

<section class="nav-items">
  <section>
    <h1>
      {#each data.methods as method}
        {method?.title}
      {/each}
    </h1>
  </section>

  <nav>
    <ul>
      {#each data.methods as method}
        <li>
          <a href="/tekenmethodes/{method.slug}/beschrijving">
            <h2 class="bottom">Beschrijving</h2>
          </a>
        </li>
        <li>
          <a href="/tekenmethodes/{method.slug}/stappenplan">
            <h2>Stappenplan</h2>
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

<div class="section-wrapper">
  <section class="flex">
    {#each data.methods as method}
      <img class="template-url" src={method?.template?.url} alt="" />
    {/each}
    <p class="lowercase">
      {#each data.methods as method}
        {@html method?.description.html}
      {/each}
    </p>
  </section>
</div>

<Footer />

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

  .nav-items {
    margin-top: -34px;
    margin-bottom: 30px;
    background-color: var(--vtGrey-10);
  }

  .section-wrapper {
    max-width: 700px;
    margin: 0 auto;
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
    font-size: 1.157rem;
    font-family: var(--vtPrimaryFont);
    color: var(--vtDarkBlue);
    text-align: center;
  }

  h2 {
    color: var(--vtSec-DarkBlue);
    font-size: 20px;
    font-weight: 100;
  }

  h4 {
    font-size: 1rem;
    font-family: var(--vtPrimaryFont);
    line-height: 1.5rem;
    padding-left: 5px;
    color: var(--vtDarkBlue);
  }

  .lowercase {
    line-height: 1.5rem;
    margin-bottom: 20px;
  }

  .arrows-line {
    width: 36px;
    margin-right: 5px;
    transform: rotate(180deg);
  }

  section img {
    border: 1px solid var(--vtDarkBlue);
    width: 300px;
    height: auto;
  }

  .flex {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  .bottom {
    font-weight: 800;
    text-decoration: underline;
    text-decoration-thickness: 0.2rem;
    text-underline-offset: 0.5rem;
  }

  /*------------ RESPONSIVE DESKTOP --------------*/

  @media (min-width: 74em) {
    /* Aanpassen padding voor de .line-klasse */
    .line {
      padding-left: 9% !important;
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

    .section-wrapper {
      width: 80%;
    }

    section img {
      width: 900px;
      height: auto;
    }
  }

  /*------------ RESPONSIVE TABLET GROOT --------------*/
  @media (min-width: 45em) {
    /* Aanpassen van de breedte voor intro tekst 2 */

    h1 {
      padding-top: 25px;
      font-size: 3.157rem;
    }

    .section-wrapper {
      width: 80%;
    }

    section img {
      width: 600px;
      height: 370px;
    }

    .line {
      padding-left: 20%;
    }

    .nav-items {
      margin-top: -63px;
      margin-bottom: 30px;
    }
  }

  /*------------ RESPONSIVE TABLET MINI --------------*/
  @media (min-width: 31em) {
    .line {
      padding-left: 20%;
    }

    h1 {
      padding-top: 25px;
    }

    .section-wrapper {
      width: 77%;
    }

    ul {
      transform: translateY(0);
    }

    .nav-items {
      margin-top: -63px;
      margin-bottom: 30px;
    }
  }

  /*------------ RESPONSIVE  MOBILE --------------*/
  @media (max-width: 31em) {
    h1 {
      font-size: 1.7rem;
      padding-top: 25px;
    }
    ul {
      justify-content: flex-start;
    }
    .section-wrapper {
      width: 77%;
    }

    .line {
      padding-left: 11%;
    }

    ul {
      transform: translateY(0);
    }
  }
</style>
