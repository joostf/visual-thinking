<script>
  import Breadcrumb from "$lib/atoms/breadcrumb.svelte"

</script>

<Breadcrumb titel="Over" bgc="var(--vtSec-DarkBlue)" />

<div class="content">
  <h1>Over het platform</h1>
  <p>
    “Hoe kan ik studenten meer laten tekenen en ze laten inzien dat een
    tekening een heel geschikt communicatiemiddel is?” vroeg Charley Muhren,
    docent aan de HvA en ontwerper van de tekenmethode Tekenen, spelen, delen,
    zich af voordat ze aan dit platform begon.
  </p>
  <p>
    Ze ontving een Comeniusbeurs voor haar plan om een platform te ontwikkelen
    waarmee studenten al aan het begin van hun studie zouden leren om tekenen
    te gebruiken als communicatiemiddel en heeft de afgelopen anderhalf jaar
    onderzocht welke tekenmethodes geschikt zouden zijn voor studenten en
    docenten om te gebruiken tijdens hun studie. Door de werkvormen te
    categoriseren aan de hand van leerdoelen die weer gekoppeld zijn aan de
    taxonomie van ‘Betekenisvol leren’ (Dee Fink, 2003), kunnen zowel
    studenten als docenten gemakkelijk zoeken in welke situatie en met welk
    doel een tekenmethode te gebruiken is.
  </p>
  <p>
    In de kennisclips wordt uitgelegd waarom tekenen voor bepaalde doelen goed
    te gebruiken is en wat de resultaten van de methodes kunnen zijn.
  </p>
  <p>
    In de mini-cursussen worden de basisprincipes van ‘visual thinking’
    uitgelegd en wordt verwezen naar andere visual thinkers en bronnen.
  </p>
  <em>Concept en onderzoek:</em> Charley Muhren<br />
  <em>Design research, interaction- en webdesign:</em> Elias Poolman
  <br />
  <em>Visuele identiteit en webdesign:</em> Ramon Boers <br />
  <em>Webdevelopment:</em> t.b.a.
</div>

<style>
div.content {
  margin-bottom: 40px;
  max-width: 700px;
  margin: 0 auto 2rem;
}



h1 {
  font-size: 3.157rem;
  font-family: var(--vtPrimaryFont);
  color: var(--vtDarkBlue);
  text-align: center;
}

em {
  font-weight: bold;
  font-style: normal;
}

p,
em {
  font-family: var(--vtSecondaryFont);
  line-height: 1.5rem;
  color: var(--vtDarkBlue);
}

/* tablet */
@media (min-width: 31em) and (max-width: 55em) {
  div.content {
    width: 80%;
  }
}

/* mobile */
@media (max-width: 31em) {
  h1 {
    font-size: 1.7rem;
  }
  div.content {
    width: 77%;
  }
}
</style>
