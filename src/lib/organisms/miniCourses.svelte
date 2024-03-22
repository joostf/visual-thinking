<script>
  import Breadcrumb from "$lib/atoms/breadcrumb.svelte"
  export let data;
</script>

<Breadcrumb titel="Minicursussen" bgc="var(--vtRed)" />

<article>
  <header>
    <h1>Minicursussen</h1>
    <p>Maak een keuze uit een van de vier minicursussen</p>
  </header>

  <ul>
    <li>
      <a href="/minicursussen/{data.request.minicursussenPaginas[2].slug}" class="highlight"><span>{data.request.minicursussenPaginas[2].title}</span></a>
    </li>
    <li>
      <a href="/minicursussen/{data.request.minicursussenPaginas[0].slug}" class="highlight"><span>{data.request.minicursussenPaginas[0].title}<span></a>
    </li>
    <li>
      <a href="/minicursussen/{data.request.minicursussenPaginas[3].slug}" class="highlight"><span>{data.request.minicursussenPaginas[3].title}</span></a>
    </li>
    <li>
      <a href="/minicursussen/{data.request.minicursussenPaginas[1].slug}" class="highlight"><span>{data.request.minicursussenPaginas[1].title}</span></a>
    </li>
  </ul>
</article>

<style>
  article {
    max-width: 80em;
    position: relative;
    color: #090940;
    padding: 1rem 0;
    margin: 0 auto;
    margin-bottom: 3rem;
  }

  header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem;
  }

  h1 {
    font-size: 1.777rem;
    margin: 0;
    text-align: center;
    max-width: 35rem;
  }

  p {
    text-align: center;
    max-width: 12rem;
  }

  ul li a {
    clip-path: polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%);
    background: var(--vtRed);
    /*   aspect-ratio: 1 / 1; */
    display: grid;
    text-decoration: none;
    color: inherit;
    padding: 2rem 0;
    text-align: center;
    font-size: 20px;
    font-weight: bold;
    height: 100%;
    font-family: var(--vtPrimaryFont);

  }
  ul li a.highlight {
    color: #fff;
  }

  ul li a span {
    place-self: center;
  }

  ul {
    --gap: 3rem;
    --size: 12em;

    --tx: 0.365;
    --ch: 0.74;

    --cc: 1;
    --rc: 4;

    display: grid;
    grid-template-columns: repeat(var(--cc), var(--size));
    grid-template-rows: repeat(
      var(--rc),
      calc(var(--size) * var(--ch) + var(--gap) * 1)
    );
    justify-content: center;

    list-style: none;
    padding: 0;
    width: 100%;

    align-items: stretch;
    gap: var(--gap);
  }

  ul li {
    width: var(--size);
    height: calc(var(--size) * 1.1);
  }

  @media (width > 35rem) {
    ul {
      --rc: 2;
      --cc: 2;
    }
    h1 {
    font-size: 3.157rem;
  }
  }

  @media (width > 60em) {
    ul {
      --gap: 2rem;
      --size: 14em;

      --tx: 0.55;
      --ch: 0.71;

      --cc: 4;
      --rc: 2;
      margin-top: -21vh;
    }
    
    ul li a:hover {
    /* background-color: var(--vtSec-Red); */
    transform: scale(1.1);
  }

    p{
      top: 20%;
    }

    ul li:nth-of-type(1) {
      grid-column-start: 1;
      grid-row-start: 1;
      transform: translateX(calc(var(--size) * var(--tx)));
    }

    ul li:nth-of-type(2) {
      grid-column-start: 4;
      grid-row-start: 1;
      transform: translateX(calc(var(--size) * var(--tx) * -1));
    }

    ul li:nth-of-type(3) {
      grid-column-start: 2;
      grid-row-start: 2;
      transform: translateX(0);
    }

    ul li:nth-of-type(4) {
      grid-column-start: 3;
      grid-row-start: 2;
      transform: translateX(0);
    }
  }
</style>
