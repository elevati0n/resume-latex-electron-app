const ResumeBuilder = require('./ResumeBuilder');
const { sampleResumeJson } = require('./sampleResumeJson');

const summaryLine1 = `{JavaScript Tech Lead | Senior Front End Developer}{Computer Engineer}{Specializing in Enterprise Web Commerce Platform Integration}{react, gatsby, analytics, ndoe, async, vanilla}`
const summaryListItems = `\\resumeItemListStart
\\resumeItem{Strong background in building modern, responsive websites and single page web applications, achieving complex interactivity, enhancing user experiences,  accessibility and integrating enterprise systems}
\\resumeItem{Experienced in optimizing and integrating e-commerce systems, streamlining processes, and creating user-friendly, accessible web components.  Clean, readable, maintainable code | Excels at mentoring junior developers }
\\resumeItemListEnd`



ResumeBuilder(sampleResumeJson)

