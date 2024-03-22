<script>
  import { slide } from "svelte/transition";
  import Breadcrumb from "$lib/atoms/breadcrumb.svelte";
  export let data;
</script>

<Breadcrumb titel="Minicursussen" bgc="var(--vtRed)" />

<div>


  {#if data.minicursussen && data.minicursussen.slides}
    {#each data.minicursussen.slides as slide, index}

    <header>
      {#if slide.type == "quote"}
      <h1>{slide.title}</h1>
    {/if}
    </header>

      <div class="slides">
        {#if slide.type == "image"}
          <p>{slide.content.text}</p>
        {/if}
      </div>
    {/each}
  {/if}
</div>

<style>
  div h1 {
    margin: 1rem;
  }

  .slides {
    display: flex;
    align-items: center;
    line-height: 1.5;
    margin: 1rem;
    padding: 1rem;
    border: 2px solid var(--vtDarkBlue);
  }
</style>
