const ResumeBuiler = (resumeData) => {

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

  %-------------------------------------------
  `;

    const resumeBody = `%%%%%%  RESUME STARTS HERE  %%%%%%%%%%%%%%%%%%%%%%%%%%%%
  \\begin{document}
  `;

    const resumeHeading = `
  %----------HEADING----------
  \\begin{center}
      \\textbf{\\Huge \\scshape Sean Flaherty} \\\\ \\vspace{1pt}
      \\small 617-416-0781 $|$ \\href{mailto:seanadamflaherty@gmail.com}{\\underline{seanadamflaherty@gmail.com}} $|$
      \\href{https://sean-flaherty-resume.netlify.app/}{\\underline{Curriculum Vitae | Gatsby + React}} $|$
      Boston, MA
  \\end{center}
  `;

    const resumeSummary = `
  %-----------SUMMARY-----------
  \\section{Executive Summary}
  \\resumeSubHeadingListStart
  \\resumeSubheading
  ${summaryLine1}
  ${summaryListItems}
  \\resumeSubHeadingListEnd`;

    const resumeExperience = `

  %-----------EXPERIENCE-----------
  \\section{Experience}
  \\resumeSubHeadingListStart
  % Senior Web Developer
  \\resumeSubheading
  {Senior Web Developer | Software Engineer}
  {Therefore Interactive | 2021 - 2023}
  {JavaScript Tech Lead: Full-stack Web Developer and Software Architect}{Toronto, ON}
  \\resumeItemListStart
  \\resumeItem{Utilized React, advanced JavaScript, async API calls for complex web components, including a government form microsites, financial trading platforms, banks, etc.}
  \\resumeItem{Architected modern web solutions for 100+ diverse clients focusing on distributed e-commerce systems}
  \\resumeItem{Implemented decoupling architecture and RESTful principles to connect CMS with modern Front-End frameworks (Gatsby, React, Vue, Next) for robust, accessible web experiences.}
  \\resumeItemListEnd

  % Intermediate Web Developer
  \\resumeSubheading
  {Intermediate Web Developer | Software Engineer}
  {OPIN Digital | 2019 - 2021}
  {JavaScript Tech Lead: Full-stack Web Developer}{Ottawa, ON}
  \\resumeItemListStart
  \\resumeItem{Specialized as a JavaScript expert and tech lead, providing company-wide JS training and promoting a component-based design approach. Highest billing Developer for two years, 30-50+ clients per year}
  \\resumeItem{Applied advanced techniques to optimize and integrate distributed e-commerce systems, leveraging content management systems, async API calls, custom modules, JSON:API, and GraphQL}
  \\resumeItemListEnd
  \\resumeSubHeadingListEnd
  `;


    const resumeEducation = `%-----------EDUCATION-----------
  \\section{Education}
  \\resumeSubHeadingListStart

  \\resumeSubheading
  {Computer Engineer - Minor in Computer Science}
  {Northeastern University | 2010 - 2018}
  {College of Electrical and Computer Engineering}{Class of 2018}
  \\resumeItemListStart
  \\resumeItem{Bachelor of Science in Computer Engineering  | Minor in Computer Science}
  \\resumeItemListEnd

  \\resumeSubHeadingListEnd
  `;
    const resumeOtherExperience = `
  %-----------EXPERIENCE-----------
  \\section{Other Experience}
  \\resumeSubHeadingListStart

  \\resumeSubheading
  {Junior Software Engineer}
  {Black Duck Software | 2015-2016}
  {Co-op AGILE team member upgrading Java Spring Framework}{Burlington, MA}
  \\resumeItemListStart
  \\resumeItem{Upgraded Java Spring Framework to Java 8 for WebApp Vulnerability}
  \\resumeItem{Identified \\(O(n^2)\\) runtime (slow) client-facing Java decompression; implemented solution algorithm: \\(O(n \\log n)\\)}
  \\resumeItem{Earned an honorable mention in a Hackathon for modernizing OpenHub forums using Ruby on Rails}
  \\resumeItemListEnd

  \\resumeSubheading
  {Jr Electromechanical Engineer}
  {Rypos | 2014-2015}
  {Co-op: Design, Repair and Testing of various electromechanical components}{Holliston, MA}
  \\resumeItemListStart
  \\resumeItem{Collaborated on the integration of electromechanical components in distributed systems, gaining experience in networked units and control circuit design}
  \\resumeItem{Collaborated on the design of, and tests for the next generation model, using optical isolation control circuits}
  \\resumeItem{Converted stand-alone embedded system into multiple networked units over RS-485}
  \\resumeItemListEnd

  \\resumeSubheading
  {ASE Certified Dealership Technician}{Herb Chambers Honda Infiniti | 2007 - 2010}
  {Automotive Technician | Electronic and Engine Performance Specialist}
  {Boston, MA}
  \\resumeItemListStart
  \\resumeItem{Performed vehicle maintenance and repair | Licensed State (MA) Vehicle Safety and Emissions Inspector}
  \\resumeItemListEnd

  \\resumeSubHeadingListEnd
  `;
    const resumeSkills = `%-----------SKILLS-----------
  \\section{Skills}
  \\begin{itemize}[leftmargin=0.15in, label={}]
      \\small{\\item{
      \\textbf{General}{: Enterprise Systems Architecture, Dev Ops, Full Stack Web Development, Accessible Design, Test Driven Development, Troubleshooting, Problem Solving, Teaching, Mentoring, Technical Writing} \\\\
      \\textbf{Web Application Development}{: JavaScript Technical Lead, E-Commerce Integration, Clean, Readable Code} \\\\
      \\textbf{Languages}{: JavaScript, EScript, TypeScript, Node.Js, Java, Verilog, PHP, HTML, CSS, SCSS, Ruby, C, C++, Python } \\\\
      \\textbf{Technologies}{: React 18, Gatsby, Redux, Gitlab, Vue.Js, Express, Apollo, Django, Next, GraphQL, Spring, Webpack, Angular, Electron, Linux, Debian, Ruby On Rails, BASH, Shell Scripting, Docker, Jira, Google Analytics, Solr, Continuous Integration, Continuous Deployment Pipelines}
      }}
  \\end{itemize}
  `;

    const resumeEnd = `

  %-------------------------------------------
  \\end{document}
  `;



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

    const generateSummarySection = ({ title = '', listItems = [] } = {}) => {
        const resumeSummary = `
      %-----------SUMMARY-----------
      \\section{Executive Summary}
      \\resumeSubHeadingListStart
      \\resumeSubheading
      ${title}
      ${listItems}
      \\resumeSubHeadingListEnd`;
        return resumeSummary;
    };

    const generateExperienceSection = (experience = [], title = 'Experience') => {
        console.log(experience);
        const experienceSection = `
        %-----------EXPERIENCE-----------
        \\section{${title}}
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

    const generateSkillsSection = (skills = []) => {
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

    const generateLatexResume = () => {
        console.log(resumeData);
        const {
            introduction, summary, experience, skills
        } = resumeData.resume;
        console.dir({
            introduction,
            summary,
            experience,
            skills
        });
        const introductionSection = generateIntroductionSection(introduction);
        const summarySection = generateSummarySection(summary);
        const experienceSection = generateExperienceSection(experience);
        const skillsSection = generateSkillsSection(skills);

        const resumeLatexTemplate = `${latexStart}
    ${resumeBody}
    ${resumeHeading}
    ${experienceSection}
    ${resumeEducation}
    ${resumeOtherExperience}
    ${resumeSkills}
    ${resumeEnd}
    `;


        return resumeLatexTemplate;
    };
    console.log(generateLatexResume(resumeData));
};
exports.ResumeBuiler = ResumeBuiler;
