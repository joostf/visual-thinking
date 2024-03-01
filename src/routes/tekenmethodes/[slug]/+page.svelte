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
      <img
        class="arrows-line"
        src="/arrows.svg"
        alt="terug_naar_overzicht_arrow"
      />Overzicht
    </h4>
  </a>
</header>

<section class="nav-items">
  <section class="title">
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

<section class="section-wrapper">
  {#each data.methods as method}
    <img src={method?.template?.url} alt="template_image" />
  {/each}

  <p>
    {#each data.methods as method}
      {@html method?.description.html}
    {/each}
  </p>
</section>

<Footer />

<style>
  /* header */
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

  .arrows-line {
    width: 36px;
    margin-right: 5px;
    transform: rotate(180deg);
  }

  /* nav items */

  .nav-items {
    margin-top: -34px;
    margin-bottom: 30px;
    background-color: var(--vtGrey-10);
    /* height: 15rem; */
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

  /* li styling */

  .bottom {
    font-weight: 800;
    text-decoration: underline;
    text-decoration-thickness: 0.2rem;
    text-underline-offset: 0.5rem;
  }

  /* H1,2,4 styling */

  h1 {
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

  h4 {
    font-size: 1rem;
    font-family: var(--vtPrimaryFont);
    line-height: 1.5rem;
    padding-left: 5px;
    color: var(--vtDarkBlue);
  }

  /* Section's & wrapper styling */

  section img {
    border: 1px solid var(--vtDarkBlue);
    width: 100%;
    height: auto;
  }

  .section-wrapper {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
    padding-bottom: 20px;
    max-width: 80%;
    margin: 0 auto;
    margin-bottom: 20px;
  }

  /*------------ RESPONSIVE DESKTOP --------------*/

  @media (min-width: 74em) {
    /* header */
    .line {
      padding-left: 9% !important;
    }

    /*  nav items */

    .nav-items {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: -24px !important;
      margin-bottom: 60px;
      padding-left: 9%;
      padding-right: 9%;
    }

    nav ul {
      display: flex;
      list-style: none;
    }

    h1 {
      margin-top: auto;
      margin-bottom: 30px;
      text-align: start;
      max-width: 800px;
    }

    /* section wrapper */

    .section-wrapper {
      display: grid;
      grid-template-columns: 1fr 1fr;
      justify-content: center;
    }

    /* .section-wrapper p{
      margin-right: 20px;
    } */

    .section-wrapper {
      max-width: 80%;
    }
  }

  /*------------ RESPONSIVE TABLET GROOT --------------*/
  @media (min-width: 45em) {
    .line {
      padding-left: 20%;
    }

    .nav-items {
      margin-top: -63px;
      margin-bottom: 30px;
    }

    h1 {
      padding-top: 25px;
      font-size: 3.157rem;
    }

    .section-wrapper img {
      height: auto;
    }
  }

  /*------------ RESPONSIVE TABLET MINI --------------*/
  @media (min-width: 31em) {
    .line {
      padding-left: 20%;
    }
    ul {
      transform: translateY(0);
    }

    .nav-items {
      margin-top: -63px; /* ?? */
      margin-bottom: 30px;
    }

    h1 {
      padding-top: 25px;
    }
  }

  /*------------ RESPONSIVE  MOBILE --------------*/
  @media (max-width: 31em) {
    .line {
      padding-left: 11%;
    }

    .nav-items {
      margin-top: -34px;
      margin-bottom: 30px;
    }

    ul {
      transform: translateY(0);
      justify-content: flex-start;
    }

    h1 {
      font-size: 1.7rem;
      padding-top: 25px;
    }
  }
</style>
