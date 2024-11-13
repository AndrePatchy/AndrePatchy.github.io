<template>
  <div class="wrapper">
    <section id="about-me">
        <div class="about-me-card">
          <h1 class="decorated">About Myself</h1>
          <p>I believe that every day is a new life, because life brings opportunities, so every day is a new opportunity to be better than yesterday. The following timeline shows what I've been doing:</p>
          <img src="../assets/timeline.png" class="responsive">
          <div class="buttonContainer">
            <div class="centerButton">
              <button class="button-54" role="button" @click="openCV">Download my CV</button>
            </div>
          </div>
        </div>
    </section>
    <section id="projects" class="project-class">
      <h1 class="decorated">Projects</h1>
          <!-- Global toggle checkbox -->
          <label class="toggle-description">
            <input type="checkbox" v-model="showDescriptions">
            <span>{{ showDescriptions ? 'Hide' : 'Show' }}</span> project details
          </label>
          <!-- Project Divison -->
          <div v-for="(project, index) in projects" :key="index"
            :class="['project half', (selectedProject === index || showDescriptions) ? 'shown-description' : 'hide-description']"
            @click="toggleDescriptions(index)">
            <div>
              <div class="title">{{ project.title }}</div>
                <div class="type">{{ project.type }} -
                  <a :href="project.reportLink" target="_blank">Report</a> |
                  <a :href="project.codeRepo" target="_blank">Code Repo</a>
                </div>
              <span :class="(selectedProject === index || showDescriptions) ? 'shown' : 'hidden'">
                <div class="description">{{ project.description }}</div>
                <div class="roles"><strong>Roles:</strong>{{ project.roles }}</div>
                <div class="technology"><strong>Technology:</strong> {{ project.technology }}</div>
              </span>
          </div>
          </div>
    </section>
  </div>
</template>
<script>
export default {
  name: 'SectionContentWrapper',
  data () {
    return {
      selectedProject: null,
      showDescriptions: false,
      projects: [
        {
          title: 'Predictive Analysis of Customer Response',
          type: 'Machine Learning',
          reportLink: 'https://andrepatchy.github.io/reports/DSML_202223_Predictive_Group21_Report.pdf',
          codeRepo: 'https://github.com/AndrePatchy/nova-ims/tree/main/Machine%20Learning/Supervised%20Learning',
          description: 'This project uses supervised machine learning models, including Neural Networks, Support Vector Machines, and Logistic Regression, to predict which customers are most likely to respond to Spice Alley’s new product campaign. By analyzing customer value, behavior, channel preferences, and demographics, the project aims to help Spice Alley allocate resources efficiently toward high-potential buyers.',
          roles: 'Data Scientist',
          technology: 'Jupyter Notebook, Numpy, Pandas, Seaborn, Scipy, Scikit-learn, Git'
        },
        {
          title: 'Curbing Employee Attrition',
          type: 'Machine Learning',
          reportLink: 'https://andrepatchy.github.io/reports/EDSB23X.pdf',
          codeRepo: 'https://github.com/AndrePatchy/nova-ims/tree/main/Machine%20Learning/Curbing%20Employee%20Attrition',
          description: 'The project aims to predict employee attrition by assessing the likelihood that individuals with certain characteristics may leave their current roles. A model was developed to identify potential departures, providing early warnings to enable targeted retention efforts.',
          roles: 'Data Scientist',
          technology: 'Jupyter Notebook, Numpy, Pandas, Seaborn, Scipy, Scikit-learn, Git'
        },
        {
          title: 'Customer Profiling',
          type: 'Machine Learning',
          reportLink: 'https://andrepatchy.github.io/reports/profiling.pdf',
          codeRepo: 'https://github.com/AndrePatchy/nova-ims/tree/main/Machine%20Learning/Unsupervised%20Learning',
          description: 'The project focuses on identifying variables essential for differentiating customer consumption behaviors. Detailed data analysis will reveal patterns and trends that guide effective customer segmentation.',
          roles: 'Data Analyst, Scientist',
          technology: 'Jupyter Notebook, Numpy, Pandas, Seaborn, Scipy, Scikit-learn, Git'
        },
        {
          title: 'Web Scrapping 2 Portuguese Retailers Websites',
          type: 'Data Engineering',
          reportLink: 'https://andrepatchy.github.io/reports/scrape.pdf',
          codeRepo: 'https://github.com/AndrePatchy/nova-ims/tree/main/python/webscrapping_project/scripts',
          description: 'This project compares prices of 25 essential items for the Food Baskets Program across two Portuguese retailers, collecting data on 16,866 products. After initial extraction and cleaning, the data was filtered down to 3,639 observations for analysis and further refined to 1,236 observations to help inform consumers about products available in both retailers.',
          roles: 'Data Engineer, Analyst',
          technology: 'Jupyter Notebook, Numpy, Pandas, Selenium, Beautiful soup, lxml, Git'
        },
        {
          title: 'Diabetic Retinopathy with Convolutional Neural Networks',
          type: 'Deep Learning',
          reportLink: 'https://andrepatchy.github.io/reports/cnn_report.pdf',
          codeRepo: 'https://github.com/AndrePatchy/nova-ims/tree/main/Machine%20Learning/Deep%20Learning/CNN',
          description: 'This project aims to evaluate the efficacy of Convolutional Neural Networks (CNNs) in diagnosing diabetic retinopathy using a Kaggle’s dataset.',
          roles: 'Data Scientist',
          technology: 'Jupyter Notebook, TensorFlow, Scikit-learn, matplotlib, Numpy'
        },
        {
          title: 'Black Friday Online Auction SQL script',
          type: 'T-SQL',
          reportLink: 'https://andrepatchy.github.io/reports/sql_report.pdf',
          codeRepo: 'https://github.com/AndrePatchy/nova-ims/tree/main/t-sql',
          description: 'This project aims to develop a script to support the Online Transaction Processing (OLTP) system, which includes designing an auction schema and creating stored procedures for managing auction functionalities such as adding products, placing bids, removing items, updating auction statuses, and generating bidding history lists.',
          roles: 'Data Engineer',
          technology: 'T-SQL, Azure, Git'
        },
        {
          title: 'Libft',
          type: 'Software Development',
          reportLink: 'https://github.com/AndrePatchy/Libft/blob/main/Subject/en_subject_libft.pdf',
          codeRepo: 'https://github.com/AndrePatchy/Libft',
          description: 'This project aims to develop your own C library with 43 standard functions.',
          roles: 'Software Engineer',
          technology: 'C, Vim, Git'
        },
        {
          title: 'Get_next_line',
          type: 'Software Development',
          reportLink: 'https://github.com/AndrePatchy/Get_next_line/blob/main/Subject/en.subject.get_next_line.pdf',
          codeRepo: 'https://github.com/AndrePatchy/Get_next_line',
          description: ' This project aims to develop a program that reads a line from the file descriptor.',
          roles: 'Software Engineer',
          technology: 'C, Vim, Git'
        },
        {
          title: 'Ft_printf',
          type: 'Software Development',
          reportLink: 'https://github.com/AndrePatchy/ft_printf/blob/main/en.subject.printf.pdf',
          codeRepo: 'https://github.com/AndrePatchy/ft_printf',
          description: 'This project aims to recreate the printf C function.',
          roles: 'Software Engineer',
          technology: 'C, Vim, Git'
        },
        {
          title: 'Born2beRoot',
          type: 'System Administration',
          description: 'This project is anintroduction to the world of virtualization and Linux systems.',
          roles: 'System Administrator',
          technology: 'Shell Script, Linux'
        }
      ]
    }
  },
  methods: {
    openCV () {
      window.open('/cv_andre.pdf', '_blank')
    },
    toggleDescriptions (index) {
      this.selectedProject = this.selectedProject === index ? null : index
    }
  }
}
</script>
<style scoped lang="scss">
a:link,
a:visited,
a:hover,
a:active {
  color:black;
}
.decorated{
border-top: 4px solid black;
border-bottom: 4px solid black;
margin-top: 100px;
margin-bottom: 25px;
}
h1 {
  padding: 1.5rem 1.5rem;
  font-size: 30px;
  font-weight: bold;
  line-height: 1.3;
  text-align: left;
  letter-spacing: 3px;
}
p {
  text-align: left;
  margin-left: 70px;
  margin-right: 70px;
  line-height: 1.5;
}
.about-me-card img {
  display:block;
  margin: 0 auto;
  width: 70%;
}
.buttonContainer {
  position: relative;
  height: 100px;
}
.centerButton {
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.button-54 {
  margin-top: 50px;
  font-size: 16px;
  letter-spacing: 2px;
  text-decoration: none;
  text-transform: uppercase;
  color: #000;
  cursor: pointer;
  border: 3px solid;
  padding: 0.25em 0.5em;
  box-shadow: 1px 1px 0px 0px, 2px 2px 0px 0px, 3px 3px 0px 0px, 4px 4px 0px 0px, 5px 5px 0px 0px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}
.wrapper {
  max-width: 1403px;
  margin: 0px auto;
  padding: 20px;
}
.toggle-description {
  display: block;
  margin: 0px 0px 15px 70px;
  text-align: left;
}
.input[type="checkbox"] {
  box-sizing: border-box;
  padding: 0;
}
.input {
  line-height: normal;
}
.hide-description {
  min-height: 150px;
}
.project {
  position:relative;
  display: inline-flex;
  align-items: center;
  border: 2px solid black;
  border-radius: 6px;
  margin: 0px 10px 10px 0px;
  padding: 22px 14px;
  box-shadow: 1px 1px 8px black;
  vertical-align: top;
}
.half {
  width: calc(50% - 10px);
}
#projects .project div {
  width: 100%;
  margin: 0px 10px 0px 10px;
}
.project .type {
  position: relative;
  font-size: 16px;
  line-height: 1.4;
  z-index: 10;
}
.project .description, .project .roles, .project .technology {
  padding: 0px 10px 0px 0px;
  font-size: 15px;
  line-height: 1.4;
}
.hidden {
  line-height: 0.0;
  opacity: 0.0;
  overflow: hidden;
}
.hidden, .shown {
  transition: 0.4s ease-out all;
}
.project .hidden .description, .project .hidden .roles, .project .hidden .technology, .project .shown .description, .project .shown .roles, .project .shown .technology{
  transition: 0.4s ease-out all;
}
.project .hidden .description, .project .hidden .roles, .project .hidden .technology {
  padding: 0px;
  line-height: 0.0;
  opacity: 0.0;
}
</style>
