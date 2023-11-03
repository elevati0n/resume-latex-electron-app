const { ipcRenderer, dialog } = require('electron');
const fs = require('fs');

const sampleResume = {
   "resume":{
      "introduction":{
         "title": "Sean Flaherty",
         "listItems":[
            "Phone: 617-416-0781",
            "Email: seanadamflaherty@gmail.com",
            "Location: Boston, MA",
            "Portfolio: [Your Portfolio Link]"
         ]
      },
      "experience":[
         {
            "title": "Small Business Owner — Empire Mechanical Solutions, Inc — 2009 - 2017",
            "listItems":[
               "Successfully managed and operated a small automotive repair business while pursuing a college degree, serving a diverse client base.",
               "Conducted automotive repairs, maintenance, and inspections, consistently delivering high-quality service.",
               "Leveraged web and graphic design skills to create branding and marketing materials, establishing a strong brand identity.",
               "Efficiently sourced parts, managed contracts, and fostered lasting relationships with clients, ensuring satisfaction and a high repeat business rate."
            ],
            "achievements": []
         },
         {
            "title": "Senior Web Developer — Therefore Interactive — 2021 - 2023",
            "listItems":[
               "Led as a JavaScript Tech Lead for full-stack web development projects, collaborating with a diverse client base, including government form microsites and financial trading platforms.",
               "Architected modern web solutions, optimizing e-commerce systems and enhancing user experiences, using technologies like React, TypeScript, and JavaScript.",
               "Spearheaded the transition to a decoupled architecture, connecting CMS with modern Front-End frameworks (Gatsby, React, Vue, Next) for robust, accessible web experiences."
            ],
            "achievements": [
               "Improved website performance by optimizing code, resulting in a 25% decrease in page load times.",
               "Streamlined the integration of e-commerce systems, reducing processing times by 30%."
            ]
         },
         {
            "title": "Intermediate Web Developer — OPIN Digital — 2019 - 2021",
            "listItems":[
               "Specialized as a JavaScript expert and tech lead, providing company-wide JS training and advocating a component-based design approach.",
               "Achieved the highest billing developer for two years, serving 30-50+ clients annually.",
               "Applied advanced techniques to optimize and integrate distributed e-commerce systems, leveraging content management systems, async API calls, and custom modules."
            ],
            "achievements": [
               "Trained junior developers in React best practices, resulting in a 40% increase in project efficiency.",
               "Implemented custom modules that improved system performance by 20%."
            ]
         },
         {
            "title": "Junior Software Engineer — Black Duck Software — 2015-2016",
            "listItems":[
               "Upgraded Java Spring Framework to Java 8, enhancing web application performance.",
               "Identified and resolved runtime issues, implementing efficient solutions."
            ],
            "achievements": [
               "Upgraded Java Spring Framework, resulting in a 15% improvement in system response times."
            ]
         },
         {
            "title": "Jr Electromechanical Engineer — Rypos — 2014-2015",
            "listItems":[
               "Collaborated on integrating electromechanical components in distributed systems.",
               "Contributed to the design and testing of the next-generation model, including optical isolation control circuits."
            ],
            "achievements": [
               "Enhanced system reliability by 20% through the implementation of optical isolation control circuits."
            ]
         },
         {
            "title": "ASE Certified Dealership Technician — Herb Chambers Honda Infiniti — 2007 - 2010",
            "listItems":[
               "Performed vehicle maintenance and repair, specializing in electronic and engine performance.",
               "Held a licensed State (MA) Vehicle Safety and Emissions Inspector certification."
            ],
            "achievements": [
               "Achieved a 98% customer satisfaction rating for vehicle maintenance and repair services."
            ]
         }
      ],
      "education":[
         {
            "title": "Bachelor of Science in Computer Engineering — Minor in Computer Science",
            "listItems":[
               "Northeastern University — 2010 - 2018",
               "College of Electrical and Computer Engineering"
            ]
         }
      ],
      "skills":{
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
                  "Continuous Integration",
                  "Continuous Deployment Pipelines"
               ]
            }
         ]
      }
   }
}


const LATEX_START = `%-------------------------
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

\\newcommand{\\resumeSubheadingLong}[4]{
  \\vspace{-2pt}\\item
    \\begin{tabular*}{0.97\\textwidth}[t]{l@{\\extracolsep{\\fill}}r}
      \\textbf{#1} & #2 \\\\
      \\textit{\\small#3} & \\textit{\\small #4} \\\\
    \\end{tabular*}\\vspace{-7pt}
}

\\newcommand{\\resumeSubheading}[3]{
  \\vspace{-2pt}\\item
    \\begin{tabular*}{0.97\\textwidth}[t]{l@{\\extracolsep{\\fill}}r}
      \\textbf{#1} & #2 \\\\
      \\textit{\\small#3} \\\\
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

%-------------------------------------------
%%%%%%  RESUME STARTS HERE  %%%%%%%%%%%%%%%%%%%%%%%%%%%%


\\begin{document}`

const LATEX_END =`
% Your LaTeX document closing here
\\end{document}
`
// const makeLatexDoc = (data) =>
//   MathJax.tex2chtmlPromise(data).then((node) => {
//       const adaptor = MathJax.startup.adaptor;
//       //
//       //  If the --css option was specified, output the CSS,
//       //  Otherwise, output the typeset math as HTML
//       //
//
//       return adaptor.outerHTML(node);
//   })

let resumeData = null;
const fullDocument = (latexContent) => `${LATEX_START}${latexContent}${LATEX_END}`

document.getElementById('openJsonButton').addEventListener('click', () => {
  ipcRenderer.send('file-request');
});

const updateResume = (data) => {
  resumeData = data
  document.getElementById('jsonInput').value = data
}

const useSampleResume = () => {
  updateResume(JSON.stringify(sampleResume))
}

//upon receiving a file, process accordingly
ipcRenderer.on('file', (event, file) => {
  console.log('obtained file from main process: ' + file);
    fs.readFile(file, 'utf8', function (err, data) {
    if (err) return console.log(err);
    console.log(data)
    updateResume(data)
    // data is the contents of the text file we just read
  });
});

document.getElementById('useSampleResume').addEventListener('click', async () => {
  useSampleResume()
  document.getElementById('generateButton').click()
  // const jsonData = resumeData ?? document.getElementById('jsonInput').value;
  //
  // try {
  //   const resumeData = JSON.parse(jsonData);
  //
  //   // Generate the LaTeX resume using the entered resumeData
  //   const latexResume = generateLatexResume(resumeData);
  //
  //   // Render LaTeX content with MathJax
  //   renderLatexWithMathJax(latexResume);
  //
  //   // Send the LaTeX content to the main process
  //   ipcRenderer.send('generate-latex', latexResume);
  // } catch (error) {
  //   console.error('Error parsing JSON data:', error);
  //   alert('Please enter valid JSON data.');
  // }
});

document.getElementById('generateButton').addEventListener('click', async () => {
  const jsonData = resumeData ?? document.getElementById('jsonInput').value;

  try {
    const resumeData = JSON.parse(jsonData);

    // Generate the LaTeX resume using the entered resumeData
    const latexResume = generateLatexResume(resumeData);

    // Render LaTeX content with MathJax
    // renderLatexWithMathJax(latexResume);

    // Send the LaTeX content to the main process
    ipcRenderer.send('generate-latex', latexResume);
  } catch (error) {
    console.error('Error parsing JSON data:', error);
    alert('Please enter valid JSON data.');
  }
});

// Function to render LaTeX content with MathJax
async function renderLatexWithMathJax(latexContent) {


  // const latexHTML = await makeLatexDoc(fullDocument(latexContent))
  const adaptor = MathJax.startup.adaptor;
  // //
  // //  If the --css option was specified, output the CSS,
  // //  Otherwise, output the typeset math as HTML
  // //
  // if (true) {
  //     console.log(adaptor.textContent(MathJax.chtmlStylesheet()));
  // } else {
  // console.log(adaptor.outerHTML(node));
  const outputElement = document.getElementById('latexDisplay');
  outputElement.innerHTML = '';
  const codeNode = document.getElementById('latexCodeDisplay')
  codeNode.innerHTML = fullDocument(latexContent)
  MathJax.texReset();
  const node = await MathJax.tex2svgPromise(fullDocument(latexContent));
  outputElement.appendChild(node);
  // });
}


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

const generateSummarySection = (summary) => {
  const summarySection = `
%-----------SUMMARY-----------
\\section{Executive Summary}
\\resumeSubHeadingListStart
\\resumeSubheading
{JavaScript Tech Lead | Senior Front End Developer}{Computer Engineer}{Specializing in Enterprise Web Commerce Platform Integration}{react, gatsby, analytics, ndoe, async, vanilla}
\\resumeItemListStart
\\resumeItem{${summary}}
\\resumeItemListEnd
\\resumeSubHeadingListEnd
`;
  return summarySection;
};

const generateExperienceSection = (experience) => {
  const experienceSection = `
%-----------EXPERIENCE-----------
\\section{Experience}
\\resumeSubHeadingListStart
${experience.map((exp) => {
    return `
% ${exp.title}
\\resumeSubheading
{${exp.title}}
{${exp.listItems[exp.listItems.length - 1]}}
{${exp.listItems.slice(0, -1).join(" | ")}}
\\resumeItemListStart
${exp.listItems.map((item) => `\\resumeItem{${item}}`).join("\n")}
\\resumeItemListEnd
`;
  }).join("\n")}
\\resumeSubHeadingListEnd
`;
  return experienceSection;
};

const generateSkillsSection = (skills) => {
  const skillsSection = `
%-----------SKILLS-----------
\\section{Skills}
\\begin{itemize}[leftmargin=0.15in, label={}]
${skills.skillGroup.map((group) => {
    return `
    \\small{\\item{
    \\textbf{${group.title}}{${group.items.join(", ")}} \\
    }}`;
  }).join("\n")}
\\end{itemize}
`;
  return skillsSection;
};

const generateLatexResume = (resumeData) => {
  const {
    introduction,
    summary,
    experience,
    skills
  } = resumeData.resume;

  const introductionSection = generateIntroductionSection(introduction);
  const summarySection = generateSummarySection(summary);
  const experienceSection = generateExperienceSection(experience);
  const skillsSection = generateSkillsSection(skills);

  const latexResume = `
% Your LaTeX document preamble here

${introductionSection}
${summarySection}
${experienceSection}
${skillsSection}

% Your LaTeX document closing here
`;

  return latexResume;
};
