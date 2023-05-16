<template>
  <header id="header">
    <div class="intro">
      <div class="overlay">
        <div class="container">
          <div class="row">
            <div class="col-xs-12 col-md-8">
              <div class="intro-text">
                <h1 class="glow">Florian Dehn</h1>
                <h2 class="glow">Freelance Software Engineer & Photographer</h2>
                <h3 class="glow">from Butzbach, Hesse (Germany)</h3>
                <a href="#portfolio" class="btn btn-custom btn-lg page-scroll glow">Professional Summary</a>
                <a href="#contact" class="btn btn-custom btn-lg page-scroll glow">About me</a>
                <a href="#flickr" class="btn btn-custom btn-lg page-scroll glow">Gallery</a>
                <a href="/lebenslauf_cv_florian_dehn.pdf" target="_blank" class="btn btn-custom btn-lg page-scroll glow">Lebenslauf / CV (in German only)</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  <!-- Portfolio begin -->
  <div id="portfolio">
    <div class="container">
      <div class="row">
        <div class="section-title">
          <h2>Professional Summary</h2>
          <span class="summary">
            <p>
              Florian Dehn is a highly skilled and experienced software engineer with expertise in a wide range of programming languages and platforms,
              including PHP, Python, Go and JavaScript.
              He is an expert in software architecture, design patterns, and agile methodologies, enabling him to develop and deliver high-quality software products.
            </p>
            <p>
              In addition to his software engineering skills, Florian is also an accomplished photographer with a passion for capturing striking and evocative images. He has extensive experience in sports, portrait, and landscape photography.
            </p>
            <p>
              With his broad skillset and experience, Florian is well-equipped to take on any software engineering or photography project and deliver outstanding results.
              His expertise in software development and photography, combined with his ability to effectively communicate technical concepts to non-technical stakeholders, make him a valuable asset to any team.
            </p>
            <p>© by ChatGPT</p>
          </span>
        </div>
      </div>
        <JobItem
            date="Since March 2023"
            title="Union Investment - Union IT-Services Gesellschaft mbH"
            link="https://www.union-investment.de"
            position="Freelance position: DevOps"
            description="Creating Pipelines for deploying and maintaining a monolithic PHP application and a React based frontend at scale"
            :jobTags="['Microsoft Azure', 'Microsoft Azure DevOps', 'Azure App Service', 'Linux', 'Container', 'Kubernetes', 'Terraform', 'Terragrunt', 'Helm', 'nginx',
               'openresty', 'Software Architecture', 'Totara', 'React']"
        >
        </JobItem>
        <JobItem
            date="March 2022 until February 2023"
            title="Union Investment - Union IT-Services Gesellschaft mbH"
            link="https://www.union-investment.de"
            position="Freelance position: Cloud Consulting"
            description="Functional and technical consulting, migrating on-premise assets to cloud Infrastructure"
            :jobTags="['Microsoft Azure', 'Microsoft Azure DevOps', 'Azure App Service', 'Linux', 'Container', 'Kubernetes', 'Terraform', 'Terragrunt', 'Helm', 'nginx',
             'openresty', 'Loki', 'Prometheus', 'Grafana', 'Software Architecture', 'Consulting']"
        >
        </JobItem>
        <JobItem
            date="Since 2013"
            title="Photographer - DEL 2: Second German Ice Hockey League"
            link="https://www.del-2.org/fotografen/"
            position="Voluntary position: Photographer for EC Bad Nauheim"
            description="Photography at the ice rink: reportage, portraits, action"
            :jobTags="['Photography', 'Nikon', 'Nikon Z 9', 'Nikon D850', 'Nikon Z 6']"
        >
        </JobItem>
        <JobItem
            date="February 2021 until March 2022"
            title="Digitale Kumpel GmbH"
            link="https://www.digitale-kumpel.ruhr/"
            position="Permanent position: Software Engineer"
            description="One of the core developers working to create an e-commerce startup using DevOps principles, lean and agile methodologies. Using open source projects and products and combining these to create a platform (based on AWS) for small and mid-sized companies and enabling these to create their flexible, reliable and scalale e-commerce solution"
            :jobTags="['AWS', 'AWS ECS Fargate', 'Terraform', 'Terragrunt', 'Prometheus', 'Grafana', 'Shopware', 'Elasticsearch']"
        >
        </JobItem>
        <JobItem
            date="July 2020 until December 2020"
            title="DB Systel GmbH"
            link="https://www.dbsystel.de/"
            position="Permanent position: DevOps Engineer"
            description="Providing DevOps experience and know-how to use AWS' products to build, run and maintain an internal product to enable customers to create and share media and content"
            :jobTags="['AWS', 'Terraform', 'CloudFormation', 'Packer', 'Ansible', 'Prometheus', 'Alertmanager', 'Thanos', 'Grafana', 'dotCMS', 'Docker', 'Elasticsearch', 'Jira', 'GitLab', 'Linux', 'Shell']"
        >
        </JobItem>
        <JobItem
            date="February 2020 - June 2020"
            title="Jarltech Europe GmbH"
            link="https://www.jarltech.com/"
            position="Permanent position: DevOps Engineer"
            description="Consulting the company's CIO and the engineering team regarding best practices in Software Development, DevOps Principles and Security"
            :jobTags="['PHP', 'PHPUnit', 'Laravel', 'MySQL', 'Apache', 'Ansible', 'Docker', 'Linux', 'GitLab', 'Shell', 'Web Security']"
        >
        </JobItem>
        <JobItem
            date="September 2017 - January 2020"
            title="Klarna Bank AB"
            link="https://www.klarna.com/sofort/"
            position="Permanent position: Engineering Manager"
            description="Consulting the company's CIO and the engineering team regarding best practices in Software Development, DevOps Principles and Security"
            :jobTags="['JFrog Artifactory', 'JFrog Xray', 'PostgreSQL', 'People Leadership', 'Management', 'GO', 'Python', 'AWS', 'Terraform', 'Ansible', 'Redis', 'Splunk', 'Memcache', 'Packer', 'Serverless', 'Linux', 'Docker', 'Shell', 'Jenkins', 'High-Availability', 'nginx', 'openresty', 'Jira', 'Bitbucket', 'Datadog', 'OpsGenie', 'Prometheus', 'Grafana', 'Graphite']"
        >
        </JobItem>
        <JobItem
            date="June 2015 - August 2017"
            title="Klarna Bank AB"
            link="https://www.klarna.com/sofort/"
            position="Permanent position: Senior Software Engineer"
            description="Quality Assurance, Performance Testing, Software Quality and providing support to the engineering teams delivering Klarna's 'Sofortüberweisung'"
            :jobTags="['PHP', 'PHPUnit', 'Behat', 'Java', 'Groovy', 'JMeter', 'Redis', 'Selenium', 'Apache', 'MySQL', 'Jenkins', 'Ansible', 'Linux', 'Shell', 'Docker', 'Grafana', 'Graphite']"
        >
        </JobItem>
        <JobItem
            date="January 2014 - May 2015"
            title="wdv Gesellschaft für Medien & Kommunikation mbH & Co. KG"
            link="https://www.wdv.de/"
            position="Permanent position: Software Developer TYPO3"
            description="Development and support of large scale websites in a small, but highly motivated team"
            :jobTags="['PHP', 'CakePHP', 'Laravel', 'JavaScript', 'TYPO3', 'Typoscript', 'Apache', 'Vagrant', 'Jenkins', 'Ansible', 'Shell']"
        >
        </JobItem>
    </div>
  </div>
  <!-- Portfolio end -->

  <!-- Tag Cloud begin -->
  <TagCloud>

  </TagCloud>
  <!-- Tag Cloud end -->

  <!-- Contact begin -->
  <div id="contact">
    <div class="container">
      <h3>About me</h3>
      <div class="row">
        <div class="col-md-6">
          <div class="section-title">
            <img src="@/assets/about.jpg" class="img-responsive pull-left" alt="Foto Florian Dehn">
            <p>Florian Dehn</p>
            <p>Dipl. Wirtschaftsinformatiker (FH) - BSc Business Information Systems equivalent</p>
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
              <h3>Publications / Articles</h3>
              <ul>
                <li>
                  My photo of the year 2019 on <a href="https://kwerfeldein.de/2020/01/08/eure-wichtigsten-fotos-2019/" target="_blank">Kwerfeldein.de</a>
                </li>
                <li>
                  Zeiss Career uses one of my photos, taken with the Zeiss Distagon T* 25mm f2.8 ZF.2 on Social Media
                  <a href="https://www.facebook.com/zeisskarriere/photos/pb.193384437386261.-2207520000../4210219679036030/?type=3&theater" target="_blank">Facebook</a>
                  <a href="https://www.instagram.com/p/CP5pfRNhVb8/" target="_blank">Instagram</a>
                </li>
                <li>
                  <a href="https://www.del-2.org" target="_blank">DEL 2</a> uses some of my photos in their publications as well as on social media (in German language):
                  <ul>
                    <li><a href="https://www.del-2.org/news/tobias-worle-beendet-karriere_7419" target="_blank">Tobias Wörle beendet Karriere</a></li>
                    <li><a href="https://www.del-2.org/nachrichten/del2/6569-hessen-derby_zum_samstagabend/" target="_blank">Hessen-Derby zum Samstagabend</a></li>
                    <li><a href="https://www.del-2.org/nachrichten/del2/6358-naechstes_hessen-derby_steigt.html" target="_blank">Nächstes Hessen-Derby steigt…</a></li>
                    <li><a href="https://www.del-2.org/nachrichten/del2/6449-auf_in_den_34_spieltag/" target="_blank">Auf in den 34. Spieltag</a></li>
                    <li><a href="https://www.del-2.org/nachrichten/del2/6518-kenney_morrison_spielt_weiterhin_im_falken-trikot/" target="_blank">Kenney Morrison spielt weiterhin im Falken-Trikot</a></li>
                    <li><a href="https://www.del-2.org/news/weitere-vertragsverlangerung-in-bad-nauheim_7657" target="_blank">Weitere Vertragsverlängerung in Bad Nauheim</a></li>
                  </ul>
                </li>
                <li>
                  Other sources
                  <ul>
                    <li><a href="https://www.heilbronner-falken.de/simon-thiel-erleidet-schaedelhirntrauma/9450/" target="_blank">Simon Thiel erleidet Schädelhirntrauma</a></li>
                    <li><a href="https://www.ehcf.de/news/article/philipp-wachter-traegt-das-trikot-der-woelfe/" target="_blank">Philipp Wachter trägt das Trikot der Wölfe</a></li>
                  </ul>
                </li>
                <li><a href="https://hausberghexe.de/workshops/" target="_blank">Conni Dietrich, Hausberghexe</a> uses some of my photographs</li>
              </ul>
            </div>
            <div class="social">
              <p>Find me on:</p>
              <ul>
                <li>
                  <a href="https://twitter.com/katzefudder" target="_blank">
                    <font-awesome-icon icon="fa-brands fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="https://www.flickr.com/photos/katzenfutter/" target="_blank">
                    <font-awesome-icon icon="fa-brands fa-flickr" />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/floriandehn/" target="_blank">
                    <font-awesome-icon icon="fa-brands fa-linkedin" />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/katzefudder/" target="_blank">
                    <font-awesome-icon icon="fa-brands fa-instagram" />
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
        <div class="col-md-5 offset-md-1">
          <div class="section-title">
            <p>Enquiries of any sort go to <strong><a href="mailto:spam@katzefudder.de">spam@katzefudder.de</a></strong></p>
            <p><strong>!!! Recruiters: Please don't bother me, thank you !!!</strong></p>
            <p>All photographs are copyright protected and must not be used without permission.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Contact end -->

  <!-- Gallery begin -->
  <div id="photos">
    <SimpleGallery :useNavigation=false></SimpleGallery>
  </div>
  <!-- Gallery end -->

  <div id="footer">
    <div class="container">
      <p>Made in Hessen =^.^= {{ new Date().getFullYear() }}, Florian Dehn, Feldbornstrasse 2, 35510 Butzbach</p>
      <p>No Cookies, no server-side processing, or analyzed nor stored logs - just a plain VueJS App</p>
    </div>
  </div>
</template>


<script>
import SimpleGallery from '@/components/Gallery.vue';
import JobItem from "@/components/JobItem.vue";
import TagCloud from "@/components/TagCloud.vue";

export default {
  name: 'katzefudder.de',
  components: {
    TagCloud,
    JobItem,
    SimpleGallery,
  },
};
</script>