<script>
export default {
  name: "SiteHeader",
  methods: {
    async downloadCV(pdfUrl) {
      const link = document.createElement('a')
      link.href = pdfUrl
      link.download = pdfUrl
      link.click()
      URL.revokeObjectURL(link.href)
    },
  }
}
</script>

<template>
  <header id="header">
    <div class="intro">
      <div class="overlay">
        <div class="container">
          <div class="row">
            <div class="col-xs-12 col-md-8">
              <div class="intro-text">
                <h1 class="glow">Florian Dehn</h1>
                <h2 class="glow">Software Engineer & Photographer</h2>
                <h3 class="glow">from Butzbach, Hesse (Germany)</h3>
                <ul>
                  <li><a href="#portfolio" >Professional Summary</a></li>
                  <li><a href="#contact" >About me</a></li>
                  <li><a href="#gallery" >Gallery</a></li>
                  <li><a href="javascript:void()" @click="downloadCV('lebenslauf_cv_florian_dehn.pdf')" >Download CV in German</a></li>
                  <li><a href="javascript:void()" @click="downloadCV('lebenslauf_cv_florian_dehn_en.pdf')" >Download CV in English</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>