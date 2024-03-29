<script>
  let active = false;
</script>

<a href="/" class="logo"><img src="/vtHBO-v1.0-Logo_1.svg"  alt="Visual Thinking Logo" /></a>

<nav>
  <ul>
    <li><a href="/tekenmethodes">Tekenmethodes</a></li>
    <li><a href="/over">Over</a></li>
    <li><a href="/minicursussen">Minicursussen</a></li>
    <li><a href="/kennisclips">Kennisclips</a></li>
    <li><a href="/artikelen">Artikelen</a></li>
    <li><a href="/tekenruimte">Tekenruimte</a></li>
  </ul>
</nav>

<style>
  a {
    --background:var(--vtYellow);
    color: var(--vtDarkBlue);
    text-decoration: none;
    cursor: pointer;
    font-size: clamp(.8rem, -1.5rem + 8vw, 1rem);
    padding:.25rem;
    transition:.25s
  }

  a:hover,
  a:focus-visible {
    background: var(--background);
    outline:none;
  }

  a.logo {
    --background:var(--vtDarkBlue);
    padding:1rem .25rem 0;
    margin-top:-.75rem;
    position:absolute;
    top:1rem;
    left:1rem;
    z-index:1;
  }

  a.logo:hover,
  a.logo:focus-visible {
    background: none;
    outline:none;
    scale:1.1
  }

  a.logo img {
    width:60px
  }

  nav {
    --horizontal-spacing:1rem;
    padding:1rem 1rem 1rem 3.5rem;
    position: relative;
    overflow: hidden;
  }

  nav::before,
  nav::after {
    content:"";
    position:absolute;
    top:0;
    left:3.5rem;
    width: 3rem;
    height: 100%;

    background: rgb(255,255,255);
    background: linear-gradient(90deg, rgba(255,255,255,1) 40%, rgba(255,255,255,0) 100%);
  }

  nav::after {
    left:auto;
    right:-1rem;
    background: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 50%);
  }

  ul {
    list-style-type: none;
    display: flex;
    color: var(--vtDarkBlue);
    font-family: var(--vtPrimaryFont);
    font-weight: 700;
    padding:1em;
    margin: 0 1rem 0 1rem;
    align-items: center;
    gap:4vw;
    overflow-x:auto;
    scrollbar-width:0;
    width:100%;
  }

  @media (min-width: 72.5em) {
    a.logo {
      position: absolute;
      z-index:1;
      left:calc(50% - 40px);
      top:.5rem;
    }

    a.logo img {
      width:80px
    }

    nav {
      --horizontal-spacing:10vw;
      padding-left:1rem;
    }

    nav::before,
    nav::after {
      display:none;
    }

    ul {
      --spacing-logo:6rem;
      justify-content: center;
    }

    li:nth-of-type(3) {
      margin-right: var(--spacing-logo);
    }

    li:nth-of-type(4) {
      margin-left: var(--spacing-logo);
    }

    
  }
</style>
