const ResumeBuiler = ({ resume: { introduction, summary, experience, otherExperience, skills, education } }) => {
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
    const resumeSummary = `\\resumeSubheading
      ${title}
      ${listItems}`
    return resumeSummary;
  };

  const generateExperienceSection = (experience = [], title = 'Experience') => {
    console.log(experience);
    const experienceSection = `${experience.map((exp) => {
      return `% ${exp.title}
\\resumeSubheading
{${exp.title}}
{${exp.listItems[exp.listItems.length - 1]}}
{${exp.listItems.slice(0, -1).join(" | ")}}
\\resumeItemListStart
${exp.listItems.map((item) => `\\resumeItem{${item}}`).join("\n")}
\\resumeItemListEnd`;
    }).join("\n")
      }
\\resumeSubHeadingListEnd`;
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

  const generateLatexResume = () => {
    console.log(resumeData);
    const {
      introduction, summary, experience, otherExperience, skills, education
    } = resume;
    console.dir({
      introduction,
      summary,
      experience,
      skills,
      otherExperience,
      education
    });
    const introductionSection = generateIntroductionSection(introduction);
    const summarySection = generateSummarySection(summary);
    const experienceSection = generateExperienceSection(experience);
    const experienceOtherSection = generateExperienceSection(otherExperience, 'Other Experience');
    const skillsSection = generateSkillsSection(skills);
    const resumeLatexTemplate = `${introductionSection}
${summarySection}
${experienceSection}
${educationSection}
${experienceOtherSection}
${skillsSection}
${resumeEnd}`
    return resumeLatexTemplate;
  };
  return generateLatexResume()
};

exports.default = ResumeBuiler