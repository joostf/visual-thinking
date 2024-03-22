<script>
  export let titel;
  export let url;
  export let bgc;
</script>

<div class="breadcrumb" style="--bgc:{bgc}">
  {#if url}
    <a href="{url}">{titel}</a>
  {:else}
    <span>{titel}</span>
  {/if}
</div>
<style>
  div {
    background-color: var(--bgc);
  }
  /* MOBILE - STYLING */
  a,span {
    font-weight: bold;
    text-transform: uppercase;
    /* background-color: var(--vtDarkBlue); */
    color: var(--vtWhite);
    font-family: var(--vtPrimaryFont);
    font-size: 0.9rem;
    padding-left: 9%;
    padding-top: 0.2rem;
    padding-bottom: 0.2rem;
    margin-top: 0%;
    width: 100vw;
    display: flex;
    align-items: center;
    text-decoration:none;
  }

  a:hover {
    text-decoration: underline;
  }

  /* tablet */
  @media (min-width: 31em) and (max-width: 70em) {
    a, span {
      padding-left: 20%;
    }
  }

  /* mobile */
  @media (max-width: 31em) {
    a, span {
      padding-left: 11%;
    }
  }
</style>
