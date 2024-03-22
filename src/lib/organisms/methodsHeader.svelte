<script>
  export let data;
</script>

<header>
  <div>
    <h1>
      {#each data.methods as method}
        {method.title}
      {/each}
    </h1>
  </div>

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
</header>

<style>
  /* Header */
  header {
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

  li a[href^="/tekenmethodes/{method.slug}"] {
    font-weight: 800;
    text-decoration: underline;
    text-decoration-thickness: 0.2rem;
    text-underline-offset: 0.5rem;
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

  /* ----------------------------------------------- DESKTOP */

  @media (min-width: 74em) {
    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 1px !important;
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
  }

  /*------------------------------------------------------- RESPONSIVE TABLET GROOT ----*/
  @media (min-width: 45em) {
    h1 {
      padding-top: 25px;
      font-size: 3.157rem;
    }

    header {
      margin-top: -43px;
      margin-bottom: 30px;
    }
  }

  /*-------------------------------------------------------- RESPONSIVE TABLET MINI ---*/
  @media (min-width: 31em) {
    h1 {
      padding-top: 25px;
    }

    ul {
      transform: translateY(0);
    }

    header {
      margin-bottom: 30px;
    }
  }

  /*-------------------------------------------------------------- RESPONSIVE MOBILE --*/
  @media (max-width: 31em) {
    h1 {
      font-size: 1.7rem;
      padding-top: 25px;
    }

    ul {
      transform: translateY(0);
      justify-content: flex-start;
    }

    header {
      margin-top: -23px;
      margin-bottom: 30px;
    }
  }
</style>
