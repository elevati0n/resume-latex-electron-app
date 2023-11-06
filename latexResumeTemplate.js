// const { sampleResumeJson } = require("./sampleResumeJson");
const summarySectionSample = `% ----------- SUMMARY-----------
\\section{Executive Summary }
\\resumeSubHeadingListStart
\\resumeSubheading
{JavaScript Tech Lead | Senior Front End Developer}{Computer Engineer}{Specializing in Enterprise Web Commerce Platform Integration}{react, gatsby, analytics, ndoe, async, vanilla}
\\resumeItemListStart
\\resumeItem{Strong background in building modern, responsive websites and single page web applications, achieving complex interactivity, enhancing user experiences,  accessibility and integrating enterprise systems}
\\resumeItem{Experienced in optimizing and integrating e-commerce systems, streamlining processes, and creating user-friendly, accessible web components.  Clean, readable, maintainable code | Excels at mentoring junior developers}
\\resumeItemListEnd
\\resumeSubHeadingListEnd`

const sampleResumeJson = {
  "resume": {
    "introduction": {
      "title": "Sean Flaherty",
      "listItems": [
        "Phone: 617-416-0781",
        "Email: seanadamflaherty@gmail.com",
        "Location: Boston, MA",
        "Portfolio: [Your Portfolio Link]"
      ]
    },
    "experience": [
      {
        "title": "Senior Web Developer",
        "company": "Therefore Interactive",
        "dates": "2021 - 2023",
        "location": "Toronto, ON",
        "listItems": [
          "Led as a JavaScript Tech Lead for full-stack web development projects, collaborating with a diverse client base, including government form microsites and financial trading platforms.",
          "Architected modern web solutions, optimizing e-commerce systems and enhancing user experiences, using technologies like React, TypeScript, and Gatsby.",
          "Spearheaded the transition to a decoupled architecture, connecting CMS with modern Front-End frameworks (Gatsby, React, Vue, Next) for robust, accessible web experiences.",
        ]
      },
      {
        "title": "Intermediate Web Developer",
        "company": "OPIN Digital",
        "dates": "2019 - 2021",
        "location": "Ottawa, ON",
        "listItems": [
          "Specialized as a JavaScript expert and tech lead, providing company-wide JS training and advocating a component-based design approach.",
          "Achieved the highest billing developer for two years, serving 30-50+ clients annually.",
          "Applied advanced techniques to optimize and integrate distributed e-commerce systems, leveraging content management systems, async API calls, and custom modules.",
        ]
      },
      {
        "title": "Junior Software Engineer — Black Duck Software — ",
        "company": " Black Duck Software",
        "location": "Boston, MA",
        "dates": "2015-2016",
        "listItems": [
          "Upgraded Java Spring Framework to Java 8, enhancing web application performance.",
          "Identified and resolved runtime issues, implementing efficient solutions.",
          "Upgraded Java Spring Framework, resulting in a 15\\% improvement in system response times."
        ]
      },
    ],
    "otherExperience": [
      {
        "title": "Jr Electromechanical Engineer —  — 2014-2015",
        "company": " Rypos",
        "location": "Boston, MA",
        "dates": "2014-2015",
        "listItems": [
          "Collaborated on integrating electromechanical components in distributed systems.",
          "Contributed to the design and testing of the next-generation model, including optical isolation control circuits.",
          "Enhanced system reliability by 20\\% through the implementation of optical isolation control circuits."
        ]
      },
      {
        "title": "Small Business Owner — Empire Mechanical Solutions, Inc — 2009 - 2017",
        "company": "Empire Mechanical Solutions, Inc",
        "dates": "2009 - 2017",
        "location": "Boston, MA",
        "listItems": [
          "Successfully managed and operated a small automotive repair business while pursuing a college degree, serving a diverse client base.",
          "Leveraged web and graphic design skills to create branding and marketing materials, establishing a strong brand identity.",
          "Efficiently sourced parts, managed contracts, and fostered lasting relationships with clients, ensuring satisfaction and a high repeat business rate."
        ]
      },
      {
        "title": "ASE Certified Dealership Technician",
        "location": "Boston, MA",
        "company": "Herb Chambers Honda Infiniti",
        "dates": "2007 - 2010",
        "listItems": [
          "Performed vehicle maintenance and repair, specializing in electronic and engine performance.",
          "Held a licensed State (MA) Vehicle Safety and Emissions Inspector certification."
        ]
      }
    ],
    "education": [
      {
        "title": "Bachelor of Science in Computer Engineering — Minor in Computer Science",
        "company": "Northeastern University",
        "dates": "Class of 2018",
        "location": "Boston, MA",
        "listItems": [
          "College of Electrical and Computer Engineering"
        ]
      }
    ],
    "skills": {
      "skillGroup": [
        {
          "title": "General",
          "items": [
            "Enterprise Systems Architecture",
            "Dev Ops",
            "Full Stack Web Development",
            "Accessible Design",
            "Test Driven Development",
            "Troubleshooting",
            "Problem Solving",
            "Teaching",
            "Mentoring",
            "Technical Writing"
          ]
        },
        {
          "title": "Web Application Development",
          "items": [
            "JavaScript Technical Lead",
            "E-Commerce Integration",
            "Clean, Readable Code"
          ]
        },
        {
          "title": "Languages",
          "items": [
            "JavaScript",
            "TypeScript",
            "React",
            "Python",
            "EScript",
            "Node.Js",
            "Java",
            "Verilog",
            "PHP",
            "HTML",
            "CSS",
            "SCSS",
            "Ruby",
            "C",
            "C++",
            "Python"
          ]
        },
        {
          "title": "Technologies",
          "items": [
            "React 18",
            "Gatsby",
            "Redux",
            "Gitlab",
            "Vue.Js",
            "Express",
            "Apollo",
            "Django",
            "Next",
            "Electron",
            "GraphQL",
            "Spring",
            "Webpack",
            "Angular",
            "Electron",
            "Linux",
            "Debian",
            "Ruby On Rails",
            "BASH",
            "Shell Scripting",
            "Docker",
            "Jira",
            "Google Analytics",
            "Solr",
            "Continuous Integration, Continuous Deployment Pipelines"
          ]
        }
      ]
    }
  }
};
// exports.sampleResumeJson = sampleResumeJson;

const generalSection = ({ title, sectionData }) => {
  const sectionStart = `
%-----------${title}-----------
\\section{${title}}
\\resumeSubHeadingListStart`;

  const sectionEnd = `\\resumeSubHeadingListEnd`

  return `${sectionStart}
${sectionData}
${sectionEnd}`
}

const ResumeBuiler = ({ resume }) => {
  console.dir(resume)
  // Define the generateLatexResume function and other necessary functions here
  const generateIntroductionSection = (introduction) => {
    const { title, listItems } = introduction;
    const formattedTitle = `\\textbf{\\Huge \\scshape ${title}}`;
    const formattedListItems = listItems.map((item) => `\\small ${item}`).join(" $|$\n    ");
    const introductionSection = `
%----------HEADING----------
\\begin{center}
    ${formattedTitle} \\\\ \\vspace{1pt}
    ${formattedListItems}
    \\vspace{1pt}
\\end{center}
`;
    return introductionSection;
  };



  // const generateSummarySection = ({ title = '', listItems = [] } = {}) => {
  //   const resumeSummary = `\\resumeSubheading
  //     ${title}
  //     ${listItems}`
  //   return resumeSummary;
  // };

  const generateExperienceSection = (experience = [], title = 'Experience') => {
    console.log(experience);
    const experienceSection = `${experience.map((exp) => {
      return `% ${exp.title}
\\resumeSubheading
{${exp.title}}
{${exp.location}}
{${exp.company}}
{${exp.dates}}
\\resumeItemListStart
${exp.listItems.map((item) => `\\resumeItem{${item}}`).join("\n")}
\\resumeItemListEnd`;
    }).join("\n")
      }`;
    return experienceSection;
  };

  const generateSkillsSection = (skills = []) => {
    const skillsSection = `\\begin{ itemize } [leftmargin = 0.15in, label = {}]
${skills.skillGroup.map((group) => {
      return `\\small{\\item{
\\textbf{${group.title}}{${group.items.join(", ")}} \\
}}`;
    }).join("\n")
      }
\\end{ itemize } `;
    return skillsSection;
  };

  const {
    introduction, summary, experience, otherExperience, skills, education
  } = resume;

  const introductionSection = generateIntroductionSection(introduction);
  // const summarySection = generateSummarySection(summary);
  const experienceSection = generateExperienceSection(experience);
  const experienceOtherSection = generateExperienceSection(otherExperience, 'Other Experience');
  const skillsSection = generateSkillsSection(skills);
  const educationSection = generateExperienceSection(education, "Education")

  return {
    introduction: introductionSection,
    summary: summarySectionSample,
    experience: experienceSection,
    otherExperience: experienceOtherSection,
    education: educationSection,
    skills: skillsSection,
    introductionSection,
  }
};

const latexResumeTemplate = ({ resumeData }) => {
  const latexStart = `%-------------------------
%-------------------------
% Resume in Latex
% Author : Jake Gutierrez
% Based off of: https://github.com/sb2nov/resume
% License : MIT
%------------------------

\\documentclass[letterpaper,11pt]{article}

\\usepackage{latexsym}
\\usepackage[empty]{fullpage}
\\usepackage{titlesec}
\\usepackage{marvosym}
\\usepackage[usenames,dvipsnames]{color}
\\usepackage{verbatim}
\\usepackage{enumitem}
\\usepackage[hidelinks]{hyperref}
\\usepackage{fancyhdr}
\\usepackage[english]{babel}
\\usepackage{tabularx}
\\input{glyphtounicode}


%----------FONT OPTIONS----------
% sans-serif
% \\usepackage[sfdefault]{FiraSans}
% \\usepackage[sfdefault]{roboto}
% \\usepackage[sfdefault]{noto-sans}
% \\usepackage[default]{sourcesanspro}

% serif
% \\usepackage{CormorantGaramond}
% \\usepackage{charter}


\\pagestyle{fancy}
\\fancyhf{} % clear all header and footer fields
\\fancyfoot{}
\\renewcommand{\\headrulewidth}{0pt}
\\renewcommand{\\footrulewidth}{0pt}

% Adjust margins
\\addtolength{\\oddsidemargin}{-0.5in}
\\addtolength{\\evensidemargin}{-0.5in}
\\addtolength{\\textwidth}{1in}
\\addtolength{\\topmargin}{-.5in}
\\addtolength{\\textheight}{1.0in}

\\urlstyle{same}

\\raggedbottom
\\raggedright
\\setlength{\\tabcolsep}{0in}

% Sections formatting
\\titleformat{\\section}{
  \\vspace{-4pt}\\scshape\\raggedright\\large
}{}{0em}{}[\\color{black}\\titlerule \\vspace{-5pt}]

% Ensure that generate pdf is machine readable/ATS parsable
\\pdfgentounicode=1

%-------------------------
% Custom commands
\\newcommand{\\resumeItem}[1]{
  \\item\\small{
    {#1 \\vspace{-2pt}}
  }
}

\\newcommand{\\resumeSubheading}[4]{
  \\vspace{-2pt}\\item
    \\begin{tabular*}{0.97\\textwidth}[t]{l@{\\extracolsep{\\fill}}r}
      \\textbf{#1} & #2 \\\\
      \\textit{\\small#3} & \\textit{\\small #4} \\\\
    \\end{tabular*}\\vspace{-7pt}
}

\\newcommand{\\resumeSubSubheading}[2]{
    \\item
    \\begin{tabular*}{0.97\\textwidth}{l@{\\extracolsep{\\fill}}r}
      \\textit{\\small#1} & \\textit{\\small #2} \\\\
    \\end{tabular*}\\vspace{-7pt}
}

\\newcommand{\\resumeProjectHeading}[2]{
    \\item
    \\begin{tabular*}{0.97\\textwidth}{l@{\\extracolsep{\\fill}}r}
      \\small#1 & #2 \\\\
    \\end{tabular*}\\vspace{-7pt}
}

\\newcommand{\\resumeSubItem}[1]{\\resumeItem{#1}\\vspace{-4pt}}

\\renewcommand\\labelitemii{$\\vcenter{\\hbox{\\tiny$\\bullet$}}$}

\\newcommand{\\resumeSubHeadingListStart}{\\begin{itemize}[leftmargin=0.15in, label={}]}
\\newcommand{\\resumeSubHeadingListEnd}{\\end{itemize}}
\\newcommand{\\resumeItemListStart}{\\begin{itemize}}
\\newcommand{\\resumeItemListEnd}{\\end{itemize}\\vspace{-5pt}}

%-------------------------------------------`;

  const resumeBody = `
%%%%%%  RESUME STARTS HERE  %%%%%%%%%%%%%%%%%%%%%%%%%%%%
\\begin{document}`;

  const latexEnd = `
%-------------------------------------------
\\end{document}`;


  return `${latexStart}
${resumeBody}
${resumeData}
${latexEnd}`
}


const latexResumeBodyBuilder = (resume) => {
  const {
    introduction,
    // summary,
    experience,
    otherExperience,
    education,
    skills
  } = resume

  const summaryLine1 = `{JavaScript Tech Lead | Senior Front End Developer}{Computer Engineer}{Specializing in Enterprise Web Commerce Platform Integration}{react, gatsby, analytics, ndoe, async, vanilla}`
  const summaryListItems = `\\resumeItemListStart
\\resumeItem{Strong background in building modern, responsive websites and single page web applications, achieving complex interactivity, enhancing user experiences,  accessibility and integrating enterprise systems}
\\resumeItem{Experienced in optimizing and integrating e-commerce systems, streamlining processes, and creating user-friendly, accessible web components.  Clean, readable, maintainable code | Excels at mentoring junior developers}
\\resumeItemListEnd`


  const resumeHeading = `
% ----------HEADING----------
\\begin{center}
\\textbf{\\Huge \\scshape Sean Flaherty} \\\\ \\vspace{1pt}
\\small 617 - 416 -0781 $ | $ \\href{mailto:seanadamflaherty @gmail.com} {\\underline{seanadamflaherty @gmail.com}} $ | $
\\href{https://sean-flaherty-resume.netlify.app/}{\\underline{Curriculum Vitae | Gatsby + React}} $|$ Boston, MA
\\end{center}`;

  const resumeSummary = `
% ----------- SUMMARY-----------
\\section{Executive Summary }
\\resumeSubHeadingListStart
\\resumeSubheading
${summaryLine1}
${summaryListItems}
\\resumeSubHeadingListEnd`;


  const resumeExperience = generalSection({
    title: "Experience", sectionData: experience
  })


  const resumeEducation = generalSection({
    title: "Education", sectionData: education
  })

  const resumeOtherExperience = generalSection({
    title: "Other Experience", sectionData: otherExperience
  })

  // const resumeSkills = generalSection({
  //   title: "Skills", sectionData: skills
  // })

  const resumeSkills = `
\\section{Skills}
\\begin{itemize}[leftmargin=0.15in, label={}]
    \\small{\\item{
    \\textbf{General}{: Enterprise Systems Architecture, Dev Ops, Full Stack Web Development, Accessible Design, Test Driven Development, Troubleshooting, Problem Solving, Teaching, Mentoring, Technical Writing} \\\\
    \\textbf{Web Application Development}{: JavaScript Technical Lead, E-Commerce Integration, Clean, Readable Code} \\\\
    \\textbf{Languages}{: JavaScript, EScript, TypeScript, Node.Js, Java, Verilog, PHP, HTML, CSS, SCSS, Ruby, C, C++, Python } \\\\
    \\textbf{Technologies}{: React 18, Gatsby, Redux, Gitlab, Vue.Js, Express, Apollo, Django, Next, GraphQL, Spring, Webpack, Angular, Electron, Linux, Debian, Ruby On Rails, BASH, Shell Scripting, Docker, Jira, Google Analytics, Solr, Continuous Integration, Continuous Deployment Pipelines}
    }}
\\end{itemize} `


  return `${resumeHeading}
${resumeSummary}
${resumeExperience}
${resumeEducation}
${resumeSkills}
${resumeOtherExperience}`
}


const sampleResume = () => {
  const summaryLine1 = `{JavaScript Tech Lead | Senior Front End Developer } {Computer Engineer } { Specializing in Enterprise Web Commerce Platform Integration } { react, gatsby, analytics, ndoe, async, vanilla } `
  const summaryListItems = `\\resumeItemListStart
\\resumeItem{Strong background in building modern, responsive websites and single page web applications, achieving complex interactivity, enhancing user experiences, accessibility and integrating enterprise systems }
\\resumeItem{ Experienced in optimizing and integrating e - commerce systems, streamlining processes, and creating user - friendly, accessible web components.Clean, readable, maintainable code | Excels at mentoring junior developers }
\\resumeItemListEnd`




  const resumeSummary = `% ----------- SUMMARY-----------
\\section{Executive Summary }
\\resumeSubHeadingListStart
\\resumeSubheading
${summaryLine1}
${summaryListItems}
\\resumeSubHeadingListEnd`;

  const resumeExperience = generalSection({
    title: "Experience", sectionData: `\\resumeSubheading
{Senior Web Developer | Software Engineer }
{Therefore Interactive | 2021 - 2023 }
{JavaScript Tech Lead: Full - stack Web Developer and Software Architect } { Toronto, ON }
\\resumeItemListStart
\\resumeItem{Utilized React, advanced JavaScript, async API calls for complex web components, including a government form microsites, financial trading platforms, banks, etc.}
\\resumeItem{Architected modern web solutions for 100 + diverse clients focusing on distributed e - commerce systems }
\\resumeItem{Implemented decoupling architecture and RESTful principles to connect CMS with modern Front - End frameworks(Gatsby, React, Vue, Next) for robust, accessible web experiences.}
\\resumeItemListEnd

  % Intermediate Web Developer
\\resumeSubheading
{Intermediate Web Developer | Software Engineer }
{OPIN Digital | 2019 - 2021 }
{JavaScript Tech Lead: Full - stack Web Developer } { Ottawa, ON }
\\resumeItemListStart
\\resumeItem{ Specialized as a JavaScript expert and tech lead, providing company - wide JS training and promoting a component - based design approach.Highest billing Developer for two years, 30 - 50 + clients per year }
\\resumeItem{Applied advanced techniques to optimize and integrate distributed e - commerce systems, leveraging content management systems, async API calls, custom modules, JSON: API, and GraphQL }
\\resumeItemListEnd`
  })


  const resumeEducation = generalSection({
    title: "Education", sectionData: `\\resumeSubheading
{Computer Engineer - Minor in Computer Science }
{Northeastern University | 2010 - 2018 }
{College of Electrical and Computer Engineering } {Class of 2018 }
\\resumeItemListStart
\\resumeItem{Bachelor of Science in Computer Engineering | Minor in Computer Science }
\\resumeItemListEnd`
  })
  const resumeOtherExperience = generalSection({
    title: "Other Experience", sectionData: `\\resumeSubheading
{Junior Software Engineer }
{Black Duck Software | 2015 - 2016 }
{ Co - op AGILE team member upgrading Java Spring Framework } { Burlington, MA }
\\resumeItemListStart
\\resumeItem{Upgraded Java Spring Framework to Java 8 for WebApp Vulnerability}
\\resumeItem{ Identified \\(O(n ^ 2) \\) runtime(slow) client - facing Java decompression; implemented solution algorithm: \\(O(n \\log n) \\) }
\\resumeItem{Earned an honorable mention in a Hackathon for modernizing OpenHub forums using Ruby on Rails }
\\resumeItemListEnd

\\resumeSubheading
{Jr Electromechanical Engineer }
{ Rypos | 2014 - 2015 }
{ Co - op: Design, Repair and Testing of various electromechanical components } { Holliston, MA }
\\resumeItemListStart
\\resumeItem{Collaborated on the integration of electromechanical components in distributed systems, gaining experience in networked units and control circuit design }
\\resumeItem{Collaborated on the design of, and tests for the next generation model, using optical isolation control circuits }
\\resumeItem{Converted stand - alone embedded system into multiple networked units over RS - 485 }
\\resumeItemListEnd

\\resumeSubheading
{ASE Certified Dealership Technician } {Herb Chambers Honda Infiniti | 2007 - 2010 }
{Automotive Technician | Electronic and Engine Performance Specialist }
{ Boston, MA }
\\resumeItemListStart
\\resumeItem{Performed vehicle maintenance and repair | Licensed State(MA) Vehicle Safety and Emissions Inspector }
\\resumeItemListEnd
  `})

  const resumeSkills = `% ----------- SKILLS-----------
\\section{ Skills }
\\begin{ itemize } [leftmargin = 0.15in, label = {}]
\\small{
  \\item{
    \\textbf{ General } {: Enterprise Systems Architecture, Dev Ops, Full Stack Web Development, Accessible Design, Test Driven Development, Troubleshooting, Problem Solving, Teaching, Mentoring, Technical Writing } 
    \\textbf{Web Application Development } {: JavaScript Technical Lead, E - Commerce Integration, Clean, Readable Code } 
    \\textbf{ Languages } {: JavaScript, EScript, TypeScript, Node.Js, Java, Verilog, PHP, HTML, CSS, SCSS, Ruby, C, C++, Python } 
    \\textbf{ Technologies } {: React 18, Gatsby, Redux, Gitlab, Vue.Js, Express, Apollo, Django, Next, GraphQL, Spring, Webpack, Angular, Electron, Linux, Debian, Ruby On Rails, BASH, Shell Scripting, Docker, Jira, Google Analytics, Solr, Continuous Integration, Continuous Deployment Pipelines }
  }
}
\\end{ itemize } `
  return `${resumeHeading}
${resumeSummary}
${resumeExperience}
${resumeEducation}
${resumeOtherExperience}
${resumeSkills} `
}

console.log(latexResumeTemplate({ resumeData: latexResumeBodyBuilder(ResumeBuiler(sampleResumeJson)) }))




// exports.LatexResumeBuilder = LatexResumeBuilder;
// exports.default = ResumeBuiler
