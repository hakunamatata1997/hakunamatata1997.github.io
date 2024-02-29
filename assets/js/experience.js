AOS.init();

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Data Scientist",
    cardImage: "assets/images/experience-page/pss.jpeg",
    place: "Pranathi Software Services, Hyderabad, IN",
    time: "(September 2023 - Present)",
    desp: "<li>Implemented a multi-language chatbot web application using Python, Flask, and JavaScript, enabling users to interact with the bot through both text and speech inputs.</li><li>Designed and actualized 'Intelligent Video Analytics for Efficiency Tracking' using Computer Vision technology for Work efficiency tracking, Shopping Mall Management, Manufacturing, and Warehousing.</li><li>Engineered a Document Parsing solution utilizing advanced OCR technology to accurately extract and process government ID information (PAN and Aadhar), resulting in a 40% reduction in manual data entry errors and saving 100+ hours monthly.</li><li>Spearheaded the creation and implementation of LLM models for Video Summarization, ASR, and NER, resulting in a 25% improvement in accuracy rates and a 30% reduction in processing time.</li><li>Built question-answering bots using Retrieval-Augmented Generation frameworks, efficiently utilizing vector stores and language models to provide accurate responses in less than 1 second 95% of the time.</li><li>Designed an Email Automation system that utilizes Mail API’s and LLM’s to efficiently understand the context of incoming mails and respond to them appropriately without human intervention, handling over 1,000 customer emails per day.</li>"
  },
  {
    title: "Data Scientist & Research Associate",
    cardImage: "assets/images/experience-page/randstad.jpeg",
    place: "Randstad, Client: Institute for Development and Research in Banking Technology(IDRBT), Hyderabad, IN",
    time: "(September 2021 - August 2023)",
    desp: "<li>Crafted 8 KNIME workflows using LIME, SHAP, and Counterfactual methods to explain black box models for Analytical Customer Relationship Management in Banking and Finance.</li><li>Conducted research on Variational Autoencoder which led to development of Chaotic Variational Autoencoder based One Class Classifier for Insurance Fraud Detection.</li><li>Guided over 10 practical lab sessions for banking professionals visiting the IDRBT for various programs.</li><li>Acquired, Cleaned, and Preprocessed over 15 datasets using machine learning methods to gain insights.</li><li>Collaborated with a leadership team of 4 to identify relevant questions and determine the best methods of collection, and research to increase knowledge and provide valuable contributions.</li><li>Completed more than 20 data models and conducted analysis to produce reports that showcase the outcomes and valuable insights obtained.</li><li>Conducted training for a group of 9 individuals from various banks on the comprehensive implementation of AI/ML models.</li><li>Deployed 3 End to End Machine Learning applications using Docker, Kubernetes and MLflow.</li><li>Facilitated the 'Advance AI/ML for Banks' program for a group of 6 individuals from diverse banking institutions.</li>"
  },
  {
    title: "Associate Analyst",
    cardImage: "assets/images/experience-page/globallogic2.png",
    place: "GlobalLogic, Hyderabad, IN",
    time: "(April 2021 - September 2021)",
    desp: "<li>Worked on Google Waymo project to tag images and videos for self-driving cars using 4 variations of cloud compute tools.</li><li>Presented 20+ findings and insights to senior management to establish best practices and guide analysis into action and results.</li>"
  },
  {
    title: "DevOps Engineer Intern",
    cardImage: "assets/images/experience-page/devops.jpeg",
    place: "DevOps Enabler&Co, Bengaluru, IN",
    time: "(January 2020 - June 2020)",
    desp: "<li>Designed and built 2 prototypes for CI/CD for a website using GCP, Git, Docker, Kubernetes, Jenkins and documented project design for reference and future use cases.</li>"
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400">
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "Volunteer",
    cardImage: "assets/images/experience-page/swecha.jpeg",
    description:
      "Part time volunteership for this organization which promotes FOSS technologies and I was included in mentoring for students through workshops, bootcamps conducted by the organization.",
  },
  {
    title: "Contributor",
    cardImage: "assets/images/experience-page/huggingface.png",
    description: "Contributing in finding bugs in libraried and also translating pages into local languages"
  },
  // {
  //   title: "PClub Summer Of Code 2020",
  //   cardImage: "assets/images/experience-page/3.jpg",
  //   description:
  //     "Mentoring for the projects Deep Pixel, AutoVaidya, Just Resume and Doc2pen.",
  // },
  // {
  //   title: "Hakin-Codes",
  //   cardImage: "assets/images/experience-page/4.jpg",
  //   description:
  //     "Mentoring for the open source projects Deeppixel, Awesome Developer Portfolios and Doc2Pen.",
  // },
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">

      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>

      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);
