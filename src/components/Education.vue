<template>
  <div id="education">
    <div class="container">
      <div class="row">
        <div class="section-title">
          <h2>Education</h2>
        </div>
      </div>
      <JobItem
          date="September 2004 - September 2009"
          logo="thm"
          title="Studium Wirtschaftsinformatik"
          link="https://www.thm.de"
          position="Dipl. Wirtschaftsinformatiker (FH)"
          description="Academic Studies: Business Information Systems"
          addDescription="Final Thesis (in German): Konzeption und technische Implementierung eines Unternehmensintranets mit Hilfe der OpenText Web Solutions Suite und Integration in das SAP NetWaever Portal"
          :job-tags="['Software Engineering']"
      >
      </JobItem>
      <JobItem
          date="September 2003 - May 2004"
          logo="bsg"
          title="Fachoberschule KBS Bad Nauheim"
          link="https://www.bsg-bn.de"
          position="Fachhochschulreife Wirtschaft & Verwaltung"
          description="Advanced technical college entrance qualification"
          :job-tags="[]"
      >
      </JobItem>
      <JobItem
          date="September 1998 - June 2001"
          logo="metro"
          title="Ausbildung zum Groß- und Außenhandelskaufmann"
          link="https://www.metro.de"
          position="Kaufmann im Groß- und Außenhandel (IHK)"
          description="Apprenticeship as Wholesaler"
          :job-tags="[]"
      >
      </JobItem>
    </div>
  </div>
</template>

<script>
import JobItem from "@/components/JobItem.vue";
export default {
  name: "Education",
  components: {JobItem},
}
</script>