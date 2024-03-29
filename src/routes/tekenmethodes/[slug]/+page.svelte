<script>
  import Breadcrumb from "$lib/atoms/breadcrumb.svelte"
  import MethodsHeader from "$lib/organisms/methodsHeader.svelte";

  export let data;
</script>

<Breadcrumb
  titel="Overzicht"
  url="/tekenmethodes"
  bgc="var(--vtYellow)"
/>

<MethodsHeader {data} />


<section class="section-wrapper">
  {#each data.methods as method}
    <img src={method?.template?.url} alt="template_image" loading="lazy" />
  {/each}

  <p>
    {#each data.methods as method}
      {@html method?.description.html}
    {/each}
  </p>
</section>



<style>

  /* Section's & wrapper styling */
  .section-wrapper {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
    padding-bottom: 20px;
    max-width: 80%;
    margin: 0 auto;
    margin-bottom: 20px;
  }

  section img {
    border: 1px solid var(--vtDarkBlue);
    width: 100%;
    height: auto;
  }

  p {
    margin-top: -26px; 
  }
  
  /*------------ RESPONSIVE DESKTOP --------------*/

  @media (min-width: 74em) {

    /* section wrapper */
    .section-wrapper {
      display: grid;
      grid-template-columns: 1fr 1fr;
      justify-content: center;
    }
    .section-wrapper {
      max-width: 80%;
    }
  }

  /*------------ RESPONSIVE TABLET GROOT --------------*/
  @media (min-width: 45em) {
    .section-wrapper img {
      height: auto;
    }
  }

</style>
