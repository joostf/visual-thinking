<section>
  <nav class="footer">
    <a href="/">
      <img
        src="/visual-thinking-logo-footer.svg"
        class="logo-footer"
        alt="footer-logo"
      />
    </a>

    <ul class="footer-menu">
      <li><a href="/over">Over</a></li>
      <li><a href="/artikelen">Artikelen</a></li>
      <li><a href="/tekenmethodes">Tekenmethodes</a></li>
      <li><a href="/kennisclips">Kennisclips</a></li>
    </ul>

    <div>
      <h4>Socials</h4>
      <ul class="social-media">
        <li>
          <a href="https://www.instagram.com/charley_muhren/">
            <img src="/instagram.svg" alt="instagram" class="icon" />
            <span>Instagram</span>
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/playlist?list=PLjrep0WCM97y9fznRYBVVKyDkzlT9fWEa"
          >
            <img src="/youtube.svg" alt="youtube" class="icon" />
            <span>Youtube</span>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/charleymuhren/">
            <img src="/iconmonstr-linkedin-3.svg" alt="linkedIn" class="icon" />
            <span>LinkedIn</span>
          </a>
        </li>
      </ul>
    </div>
  </nav>
</section>

<style>
  :root {
    --vtPrimaryFont: "rigid-square", sans-serif;
    --vtSecondaryFont: "yrsa", serif;
    --vtDarkBlue: #090940;
  }

  .footer {
    background-color: rgb(240, 240, 240);
    font-family: var(--vtPrimaryFont);
    grid-template-columns: 1fr;
    padding: 20px;
    line-height: 1.6;
    text-align: center;
  }

 
  .social-media {
    list-style: none;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .social-media li {
    text-align: center;
    margin: 0 10px;
  }

  .social-media a{
    display: flex;
  }

  a {
    text-decoration: none;
    color: var(--vtDarkBlue);
    align-items: center;
  }



  ul {
    margin-left: -20px;
  }

  li {
    list-style-type: none;
  }

  span {
    margin-left: 5px;
    font-size: 14px;
    color: #555;
  }

  .icon {
    width: 26px;
    height: 26px;
    margin: 0 2px 0 0;
  }

  img {
    margin: 0;
  }

  @media (min-width: 768px) {
    .footer {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }

    .social-media {
      margin: 0 auto;
      text-align: left;
    }

    .footer-menu {
      display: none;
    }

    .logo-footer {
      height: auto;
      width: 70%;
      padding-top: 20px;
    }

    .icon {
      width: 30px;
      height: 30px;
    }

  }
</style>
