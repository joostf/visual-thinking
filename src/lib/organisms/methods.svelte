<script>
  import Breadcrumb from "$lib/atoms/breadcrumb.svelte";
  import IconResearch from "$lib/atoms/icons/iconResearch.svelte";
  import IconOrganise from "$lib/atoms/icons/iconOrganise.svelte";
  import IconLearnAboutYourself from "$lib/atoms/icons/iconLearnAboutYourself.svelte";
  import IconLearnAboutOthers from "$lib/atoms/icons/IconLearnAboutOthers.svelte";
  import IconCommunicate from "$lib/atoms/icons/IconCommunicate.svelte";
  import IconCreativeThinking from "$lib/atoms/icons/IconCreativeThinking.svelte";

  export let data;
</script>

<Breadcrumb titel="Tekenmethodes" bgc="var(--vtYellow)" />

<header>
  <h1>Tekenmethodes</h1>
  <p>
    Visual thinking helpt bij het ordenen van informatie. Complexe ideeën worden
    zo gemakkelijker te begrijpen en te delen met anderen. Docent en onderzoeker
    Charley Muhren verzamelde meer dan 40 methodes om visual thinking toe te
    passen. Deze methodes zijn hier ondergebracht zodat jij ze kunt gebruiken om
    je creativiteit en productiviteit te vergroten. Wil je meer weten over
    visual thinking? Heb je suggesties of vragen?
  </p>
  <p>Neem dan contact op met Charley.</p>
</header>

<h2>Categorieën</h2>

<ul>
  <li>
    <a href="?selectedCategoryId=clbm28czo0kny0bw3tl71hnq4#touch"><IconResearch /> Onderzoeken en begrijpen</a>
  </li>
  <li>
    <a href="?selectedCategoryId=clbm2bwei0ku90bw26jca93on#touch"><IconOrganise /> Organiseren en plannen</a>
  </li>
  <li>
    <a href="?selectedCategoryId=clbm2cfuj0kt40bw30fo6ow2j#touch"><IconLearnAboutOthers /> Leren over anderen</a>
  </li>
  <li>
    <a href="?selectedCategoryId=clbm298dc0kpu0bw3weflzwvw#touch"><IconLearnAboutYourself /> Leren over jezelf</a>
  </li>
  <li>
    <a href="?selectedCategoryId=clbm2c6zs0kst0aw18ja2oafj#touch"><IconCommunicate /> Communiceren en presenteren</a>
  </li>
  <li>
    <a href="?selectedCategoryId=clbm2bnf20kqw0aw159269x9i#touch"><IconCreativeThinking />Creatief denken</a>
  </li>
</ul>

<div class="grid">
  {#if data && data.methods && data.methods.length > 0}
    {#each data.methods as method, index}
      <article class="methods-container" data-index={index}>
        <a href="/tekenmethodes/{method.slug}">
          {#if method.template && method.template.url}
            <picture>
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
          <h2>{method.title}</h2>
        </a>
      </article>
    {/each}
  {/if}
</div>

<style>
  header {
    max-width: 43.75em;
    width: 77%;
    margin: 0 auto;
  }

  h1 {
    font-size: 1.7rem;
    text-align: center;
  }

  h2 {
    font-family: var(--vtPrimaryFont);
    color: var(--vtDarkBlue);
    font-size: 1.7rem;
    margin: 2.1rem;
  }

  ul {
    list-style: none;
    margin-top: -1.7rem;
    margin-bottom: 0;
    display:flex;
    gap:.5rem;
    overflow-x:auto;
    
  }

  li a {
    display:flex;
    white-space: nowrap;
    padding: 10px;
    border:1px solid transparent;
    align-items:center;
    transition:.25s
  }

  li a:hover,
  li a:focus-visible {
    border-color: var(--vtGrey);
    background: var(--vtGrey-10);    
  }

  a {
    text-decoration: none;
    color: black;
    margin-bottom: 5px;
  }

  article {
    display: flex;
    padding: 1rem;
    flex-direction: column;
    transition: 0.25s;
    border: 1px solid #ccc;
  }


  article:hover,
  article:focus-visible {
    border-color: var(--vtYellow);
    outline: none;
  }

  .grid h2 {
    font-family: var(--vtPrimaryFont);
    color: var(--vtDarkBlue);
    font-size: 19px;
    font-weight: 400;
    margin: 0;
  }

  .grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
    padding: 20px;
  }

  article img {
    width: 100%;
    height: auto;
  }

  @media screen and (min-width: 36em) {
    h1 {
      font-size: 3.157rem;
    }

    h2 {
      font-size: 2rem;
    }
    
    .grid {
      grid-template-columns: repeat(2, 1fr);
    }

    ul {
      flex-wrap:wrap;
    }
  }

  @media screen and (min-width: 60em) {
    .grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }
</style>
