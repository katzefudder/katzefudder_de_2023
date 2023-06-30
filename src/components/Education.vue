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
          title="Studium Wirtschaftsinformatik"
          link="https://www.thm.de"
          position="Dipl. Wirtschaftsinformatiker (FH)"
          description="Academic Studies: Business Information Systems"
          :job-tags="['Software Engineering']"
      >
      </JobItem>
      <JobItem
          date="September 2003 - May 2004"
          title="Fachoberschule KBS Bad Nauheim"
          link="https://www.bsg-bn.de"
          position="Fachhochschulreife Wirtschaft & Verwaltung"
          description="Advanced technical college entrance qualification"
          :job-tags="[]"
      >
      </JobItem>
      <JobItem
          date="September 1998 - June 2001"
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