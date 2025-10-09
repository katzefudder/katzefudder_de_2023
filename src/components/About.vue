<script>
import Reference from "@/components/Reference.vue";
export default {
  name: "About",
  components: {Reference},
}
</script>

<template>
  <!-- Contact begin -->
  <div id="about">
    <div class="container">
      <h3>About me</h3>
      <div class="row">
        <div class="col-md-6">
          <div class="section-title">
            <img src="@/assets/about.jpg" class="img-responsive pull-left" alt="Foto Florian Dehn">
            <p>Florian Dehn</p>
            <p><i class="fa-solid fa-user-graduate"></i> Dipl. Wirtschaftsinformatiker (FH) - BSc Business Information Systems equivalent</p>
            <p>Software Engineer with a strong focus on cloud based infrastructure and software development</p>
            <p>Photographer for <a href="https://chuc.de" target="_blank">Chuc Fotografie</a> and <a href="https://ec-bn.de" target="_blank">EC Bad
              Nauheim</a> in <a href="https://www.del-2.org" target="_blank">DEL2</a> (Germany's Second Ice Hockey League)
            </p>
            <p>&nbsp;</p>
            <div class="enum">
              <h3>Private Projects</h3>
              <ul>
                <li><a href="https://chuc.de" target="_blank">chuc.de</a> - Gallery/Portfolio with technical workflow support</li>
                <li><a href="https://pixplace.de" target="_blank">Pixplace</a> - picture database for <a href="https://www.del-2.org" target="_blank">DEL2</a></li>
              </ul>
            </div>
            <p>&nbsp;</p>
            <div class="enum">
              <h3>Publications / Articles / imagery used</h3>
              <ul>
                <li>
                  <p>
                    Leica Fotografie International - LFI added some of my photos to their ever growing list of <strong>Leica Mastershots</strong>
                  </p>
                  <ul>
                    <FlickrGallery user-id="60401789%40N06" api-key="50b2c88d16b7d6765f8c2f9b9bce844f" method="flickr.photos.search" tags="websitelfi" :useNavigation=false></FlickrGallery>
                  </ul>
                </li>
                <li>
                  <p>
                    <a href="https://www.pavilionbooks.com/authors/ted-bruning/" target="_blank">Ted Bruning</a> uses one of my photos in his book <a href="https://www.amazon.com/English-Whisky-journey-grain-glass/dp/0008621551" target="_blank">Scotch Whisky: The Essential Guide</a> on page 110-111
                  </p>
                  <ul>
                      <FlickrGallery user-id="60401789%40N06" api-key="50b2c88d16b7d6765f8c2f9b9bce844f" method="flickr.photos.search" tags="websitewhiskyguide" :useNavigation=false></FlickrGallery>
                    </ul>
                </li>
                <li>
                  <a href="https://www.heise.de/news/Vom-Sommer-von-Schlangen-und-von-Sportliebhabern-Die-Bilder-der-Woche-KW-47-10179259.html" target="_blank">Vom Sommer, von Schlangen und von Sportliebhabern</a> Photos of the week (47, 2024) on heise.de
                </li>
                <li>
                  <a href="https://www.heise.de/news/Menschen-und-ihre-Eigenarten-Die-Bilder-der-Woche-KW-34-9852743.html" target="_blank">Menschen und ihre Eigenarten</a> Photos of the week (34, 2024) on heise.de
                </li>
                <li>
                  <a href="https://www.heise.de/news/Monochrom-bleibt-zeitlos-schoen-Die-Bilder-der-Woche-KW21-9066607.html" target="_blank">Monochrom bleibt zeitlos schön</a> Photos of the week (21, 2023) on heise.de
                </li>
                <li>
                  <a href="https://www.heise.de/news/Eine-ganze-Woche-in-Schwarz-Weiss-Die-Bilder-der-Woche-KW-34-9284961.html" target="_blank">Eine ganze Woche in Schwarz-Weiß: Die Bilder der Woche</a> Photos of the week (34, 2023) on heise.de
                </li>
                <li>
                  <a href="https://www.heise.de/news/Die-Leere-und-ihr-Gegengewicht-Die-Bilder-der-Woche-KW-1-9588580.html" target="_blank">Die Leere und ihr Gegengewicht</a> Photos of the week (1, 2024) on heise.de
                </li>
                <li>
                  <a href="https://www.heise.de/news/Natuerlich-und-artifiziell-Die-Bilder-der-Woche-KW-13-9670152.html" target="_blank">Natürlich und artifiziell</a> Photos of the week (13, 2024) on heise.de
                </li>
                <li>
                  <a href="https://www.heise.de/news/So-wirken-Licht-und-Schatten-Die-Bilder-der-Woche-KW-19-9714204.html" target="_blank">Monochrom bleibt zeitlos schön</a> Photos of the week (19, 2024) on heise.de
                </li>

                <li>
                  <a href="https://www.eishockeynews.de" target="_blank">Eishockeynews</a> also uses some of my photos
                  <ul>
                    <Reference link="https://www.eishockeynews.de/artikel/2024/10/23/schanner-wird-mit-der-marke-bauer-hockey-exklusiver-ausstattungspartner-der-del2-auf-sportdeutschlandtv/c2a1bade-edbb-4432-90f6-595a16f3618d.html">
                      Schanner wird mit der Marke BAUER Hockey exklusiver Ausstattungspartner der DEL2 auf Sportdeutschland.TV
                    </Reference>
                  </ul>
                </li>
                
                <li>
                  <a href="https://dosbnewmedia.de" target="_blank">DOSB New Media</a> uses some of my photos for their service, e.g. sportdeutschland.tv
                  <ul>
                    <Reference link="https://dosbnewmedia.de/news/die-schanner-eishockeyartikel-gmbh-co-kg-wird-mit-ihrer-marke-bauer-hockey-der-exklusive-ausstattungspartner-der-del2-auf-sportdeutschland-tv">
                      Die Schanner Eishockeyartikel GmbH + Co. KG wird mit ihrer Marke BAUER Hockey der exklusive Ausstattungspartner der DEL2 auf Sportdeutschland.TV
                    </Reference>
                  </ul>
                </li>
                   
                <li>
                  <a href="https://www.del-2.org" target="_blank">DEL 2</a> uses some of my photos in their publications as well as on social media (in German language):
                  <ul>
                    <Reference link="https://www.del-2.org/news/6-spieltag-bad-nauheim,-freiburg-und-co-wollen-sechs-punkte-wochenende_9097">
                      6. Spieltag: Bad Nauheim, Freiburg und Co. wollen sechs Punkte-Wochenende
                    </Reference>
                    <Reference link="https://www.del-2.org/news/mike-pellegrims-verlasst-bad-nauheim_8694">
                      Mike Pellegrims verlässt Bad Nauheim
                    </Reference>
                    <Reference link="https://del-2.org/news/start-der-testspiele-und-livestreams-auf-sportdeutschlandtv_8385">
                      Start der Testspiele und Livestreams auf Sportdeutschland.TV
                    </Reference>
                    <Reference link="https://www.del-2.org/news/harry-lange-und-bad-nauheim-gehen-getrennte-wege_8047">
                      Harry Lange und Bad Nauheim gehen getrennte Wege
                    </Reference>
                   
                  </ul>
                </li>
                <li>
                  Other sources that use my imagery
                  <ul>
                    <Reference link="https://www.mittelhessen.de/sport/weitere-sportarten/weitere-sportarten-wetzlar/ec-bad-nauheim-holt-einen-weiteren-torhueter-4730785">
                      EC Bad Nauheim holt einen weiteren Torhüter
                    </Reference>
                    <Reference link="https://www.wetterauer-zeitung.de/sport/ec-bad-nauheim/ec-bad-nauheim-im-scheinwerferlicht-93872125.html">
                      EC Bad Nauheim: Im Scheinwerferlicht
                    </Reference>
                    <Reference link="https://www.wetterauer-zeitung.de/sport/ec-bad-nauheim/ec-bad-nauheim-del2-meistermacher-kommt-93694684.html">
                      EC Bad Nauheim: DEL2-Meistermacher kommt
                    </Reference>
                    <Reference link="https://ec-bn.de/heute-in-der-wz-beamtenstatus-gegen-eishockeyspirit/">
                      Heute in der WZ: Beamtenstatus gegen Eishockeyspirit
                    </Reference>
                    <Reference link="https://ec-bn.de/hiobsbotschaft-christopher-fischer-faellt-lange-aus/">
                      Hiobsbotschaft: Christopher Fischer fällt lange aus
                    </Reference>
                    <Reference link="https://www.fnp.de/sport/lokalsport/ec-bad-nauheim-mit-paukenschlag-in-die-sommerpause-93627300.html">
                      EC Bad Nauheim: Mit Paukenschlag in die Sommerpause
                    </Reference>
                    <Reference link="https://www.fnp.de/sport/lokalsport/ec-badnauheim-parker-bowles-bleibt-ein-teufel-93569895.html">
                      EC Bad Nauheim: Parker Bowles bleibt ein Teufel
                    </Reference>
                    <Reference link="https://www.fnp.de/sport/lokalsport/ec-bad-nauheim-vom-bundestrainer-einem-neuen-promi-fan-und-einem-comeback-93524300.html">
                      EC Bad Nauheim: Vom Bundestrainer, einem neuen Promi-Fan und einem Comeback
                    </Reference>
                    <Reference link="https://www.stiftung-kupb.de/veranstaltungen/bildnachlese-plakate-transparente/">
                      Butzbach steht auf gegen Rechtsextremismus
                    </Reference>
                    <Reference link="https://www.wetterauer-zeitung.de/sport/ec-bad-nauheim/adam-mitchell-neuer-trainer-seine-laufbahn-seine-plaene-92890981.html">
                      Adam Mitchell neuer Trainer: Seine Laufbahn, seine Pläne
                    </Reference>
                    <Reference link="https://ec-bn.de/harry-lange-geht-rich-chernomaz-uebernimmt/">
                      Harry Lange geht – Rich Chernomaz übernimmt!
                    </Reference>
                    <Reference link="https://ec-bn.de/impressionen-vom-media-day/">
                      EC Bad Nauheim: Impressionen vom Media-Day
                    </Reference>
                    <Reference link="https://www.wetterauer-zeitung.de/sport/ec-bad-nauheim/ec-bad-nauheim-zwischen-flughafen-foto-shooting-und-medizin-check-92447554.html">
                      EC Bad Nauheim: Zwischen Flughafen, Foto-Shooting und Medizin-Check
                    </Reference>
                    <Reference link="https://www.itms.com/de/gesellschaftliches-engagement-erfolgreich-kommunizieren/">
                      ITMS - Gesellschaftliches Engagement erfolgreich kommunizieren
                    </Reference>
                  </ul>
                </li>
                <Reference link="https://hausberghexe.de/workshops/">
                  Conni Dietrich (Hausberghexe) uses some of my photographs
                </Reference>
              </ul>
            </div>
            <div class="social">
              <p>Find me here on social media, happy to connect and hearing from you</p>
              <ul>
                <li>
                  <a href="https://hessen.social/@katzefudder" rel="me" target="_blank">
                    <font-awesome-icon icon="fa-brands fa-mastodon" />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/katzefudder/" target="_blank">
                    <font-awesome-icon icon="fa-brands fa-instagram" />
                  </a>
                </li>
                <li>
                  <a href="https://www.flickr.com/photos/katzenfutter/" target="_blank">
                    <font-awesome-icon icon="fa-brands fa-flickr" />
                  </a>
                </li>
                <li>
                  <a href="https://github.com/katzefudder" target="_blank">
                    <font-awesome-icon icon="fa-brands fa-github" />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/floriandehn/" target="_blank">
                    <font-awesome-icon icon="fa-brands fa-linkedin" />
                  </a>
                </li>
                <li>
                  <a href="https://www.behance.net/floriandehn" target="_blank">
                    <font-awesome-icon icon="fa-brands fa-behance" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Contact end -->
</template>
