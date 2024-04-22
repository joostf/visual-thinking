<script>
    import { page } from "$app/stores";

    export let data;

    let filter;
    $: filter = $page.url.searchParams.get("categorie");
</script>

<section>
    <h2 id="methodes">Filter op categorie</h2>

    <ul>
    {#each data as category}
      <li>
        <a href="?categorie={category.slug}#methodes" class:active={filter == category.slug}>
            {@html category.icon}
            {category.title}
        </a>
      </li>
    {/each}
    </ul>
</section>
  
<style>
  h2 {
      font-size: 1em;
      padding-bottom: 1rem;
  }
  ul {
      list-style: none;
      margin-top: -1.7rem;
      margin-bottom: 0;
      padding-left: 0;
      display: flex;
      gap: 0.5rem;
      overflow-x: auto;
  }

  li a {
      display: flex;
      white-space: nowrap;
      padding: 10px;
      border: 1px solid transparent;
      align-items: center;
      transition: 0.25s;
  }

  li a:hover,
  li a:focus-visible,
  li a.active {
      border-color: var(--vtGrey);
      background: var(--vtGrey-10);
  }

  @media screen and (min-width: 36em) {

  }
</style>