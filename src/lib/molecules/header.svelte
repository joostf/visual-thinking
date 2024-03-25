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
    z-index:1
  }
  a.logo img {
    width:60px
  }

  nav {
    --horizontal-spacing:1rem;
    padding:1rem 1rem 1rem 3.5rem;
    margin-left:1rem;
    position: relative;
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
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 80%);
  }

  nav::after {
    left:auto;
    right:0;
    background: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 50%);
  }

  ul {
    list-style-type: none;
    display: flex;
    color: var(--vtDarkBlue);
    font-family: var(--vtPrimaryFont);
    font-weight: 700;
    padding:1em;
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

    nav::before,
    nav::after {
      display:none;
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
