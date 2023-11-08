<template>
  <!-- Portfolio begin -->
  <div id="portfolio">
    <div class="container">
      <!-- Summary Start -->
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
      <!-- Summary End -->
      <JobItem
          date="since August 2023"
          title="Otto Group"
          link="https://www.ottogroup.com"
          position="Permanent position: DevOps"
          description="Providing DevOps experience and know-how to use AWS' products to build, run and maintain an internal product"
          :jobTags="['AWS', 'ECS Fargate', 'Lambda', 'Cloudwatch', 'IAM', 'VPC', 'EC2', 'SNS', 'SQS', 'Route53' ,'Terraform', 'Grafana', 'GitHub Actions', 'Dependabot', 'Python', 'GoCD', 'wiz.io', 'backstage.io']"
      >
      </JobItem>
      <JobItem
          date="March 2023 - July 2023"
          title="Union Investment - Union IT-Services Gesellschaft mbH"
          link="https://www.union-investment.de"
          position="Freelance position: DevOps"
          description="Maintaining a monolithic PHP application and a React based frontend at scale"
          :jobTags="['Microsoft Azure', 'Microsoft Azure DevOps', 'Azure App Service', 'Azure API Management', 'Azure Storage', 'PHP', 'Jira', 'Linux', 'Container', 'Kubernetes', 'Terraform', 'Terragrunt', 'Helm', 'nginx',
               'openresty', 'Prometheus', 'Alertmanager', 'Harbor', 'Software Architecture', 'Totara', 'React']"
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
          :jobTags="['Photography', 'Nikon', 'Nikon Z 9', 'Nikon D850', 'Nikon Z 6', 'Leica', 'Leica M11']"
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
          link="https://www.klarna.com"
          position="Permanent position: Engineering Manager"
          description="Leading a team of 6, setting up and supporting Klarna's internal Artifact Management Platform"
          :jobTags="['JFrog Artifactory', 'JFrog Xray', 'PostgreSQL', 'People Leadership', 'Scrum', 'Kanban', 'Scrumban', 'DevOps', 'TCP/IP', 'Management', 'GO', 'Python', 'AWS', 'Terraform', 'Ansible', 'Redis', 'Splunk', 'Memcache', 'Packer', 'Serverless', 'Linux', 'Docker', 'Shell', 'Jenkins', 'High-Availability', 'nginx', 'openresty', 'Jira', 'Bitbucket', 'Datadog', 'OpsGenie', 'Prometheus', 'Grafana', 'Graphite']"
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
      <JobItem
          date="April 2011 - December 2013"
          title="SOFORT AG"
          link="https://www.klarna.com/sofort/"
          position="Permanent position: Software Developer"
          description="Software Development PHP, developing plugins for e-commerce systems like Shopware, XT Commerce, Magento"
          :jobTags="['PHP', 'PHPUnit', 'Apache', 'Linux', 'HTML', 'JavaScript']"
      >
      </JobItem>
      <JobItem
          date="April 2010 - March 2011"
          title="Die Interaktiven GmbH & CO. KG"
          link="https://www.die-interaktiven.de"
          position="Permanent position: Web Developer"
          description="Websites, TYPO3"
          :jobTags="['PHP', 'TYPO3', 'Typoscript', 'Git', 'Apache', 'HTML', 'JavaScript']"
      >
      </JobItem>
      <JobItem
          date="September 2009 - March 2010"
          title="icjobs, jobbörse.com"
          link="http://jobbörse.com"
          position="Permanent position: Software Developer"
          description="Software Development PHP"
          :jobTags="['PHP']"
      >
      </JobItem>
    </div>
  </div>
  <!-- Portfolio end -->
</template>

<script>
import JobItem from "@/components/JobItem.vue";
export default {
  name: "Portfolio",
  components: {JobItem},
}
</script>