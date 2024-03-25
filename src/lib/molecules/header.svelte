<script>
  let active = false;
</script>

<a href="/" class="logo"><img src="/vtHBO-v1.0-Logo_1.svg"  alt="Visual Thinking" /></a>

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
    color: var(--vtDarkBlue);
    text-decoration: none;
    cursor: pointer;
    font-size: clamp(.8rem, -1.5rem + 8vw, 1rem);
  }

  a:hover {
    text-decoration: underline;
  }

  a.logo {
    position:absolute;
    top:1rem;
    left:1rem;
    width:40px;
  }
  a.logo img {
    width:60px
  }

  nav {
    --horizontal-spacing:1rem;
    padding:2rem 1rem 1rem 3.5rem;
  }

  ul {
    list-style-type: none;
    display: flex;
    color: var(--vtDarkBlue);
    font-family: var(--vtPrimaryFont);
    font-weight: 700;
    padding: 0 1rem 1em;
    margin: 0;
    align-items: center;
    gap:4vw;
    overflow-x:auto;
    width:100%;
  }

  /* tablet */
  @media (min-width: 72.5em) {
    a.logo {
      position: absolute;
      z-index:1;
      left:calc(50% - 40px)
    }
    a.logo img {
      width:80px
    }
    nav {
      --horizontal-spacing:10vw;
      padding-left:1rem;
    }

    ul {
      justify-content: center;
    }

    li:nth-of-type(3) {
      margin-right: 60px;
    }
    li:nth-of-type(4) {
      margin-left: 60px;
    }

    
  }
</style>
