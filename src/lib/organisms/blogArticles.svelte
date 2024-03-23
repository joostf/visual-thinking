<script>
  import Breadcrumb from "../atoms/breadcrumb.svelte";
  export let data;
</script>

<Breadcrumb titel="Artikelen" bgc="var(--vtDarkBlue)" />

<header>
  {#each data.introTeksts as intro}
    <h1>{intro.title}</h1>
    <p>{intro.description.text}</p>
  {/each}
</header>

<div class="grid">
  {#each data.artikelenHomepages as article}
    <article>
      <a href="/artikelen/{article.pageName}">
      <img src={article.img.url} alt="artikelen" />
      <h2>{article.title}</h2>
      <!-- <p class="text">{article.description}</p> -->
    </a>
  </article>
  {/each}
</div>

<style>
  header {
    max-width: 700px;
    width: 77%;
    margin: 0 auto;
  }

  .grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
    justify-items: center;
  }

  h1 {
    font-size: 1.7rem;
    text-align: center;
  }
  a > img {
    width: 100%;
    height: 335px;
    border: 2px solid var(--vtDarkBlue);
  }  


    a {
    text-decoration: none; 
    width: 30px;
    cursor: pointer; 
    }

  article{
    padding: 10px;
    max-width: 400px;
  }

  h2 {
    font-family: var(--vtPrimaryFont);
    color: var(--vtDarkBlue);
    margin-top: -3px;
    font-size: 20px;
  }


  /* TABLET - STYLING */
  @media screen and (min-width: 768px) {   
     header {
      max-width: 700px;
      width: 80%;
    }

    h1{
      font-size: 3.157rem;
    }

    .grid {
      grid-template-columns: repeat(2, 1fr); 
    }
  
  }


  /* DESKTOP - STYLING */
  @media screen and (min-width: 1024px) {
    header {
      max-width: 700px;
      width: 80%;
    }
    .grid {
      grid-template-columns: repeat(3, 1fr); 
    }

    img:hover{
      border: 3px solid var(--vtDarkBlue);
    }

 
  }
</style>
