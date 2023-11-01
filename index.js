const { app, BrowserWindow, ipcMain, ipcRenderer, dialog } = require('electron');
const fs = require('fs');
const path = require('path');
const { MathJax } = require('mathjax')

const fullDocument = (latexContent) => `${LATEX_START}${latexContent}${LATEX_END}`


/*************************************************************************
*
*  component/tex2chtml
*
*  Uses MathJax v3 to convert a TeX string to an HTML string.
*
* ----------------------------------------------------------------------
*
*  Copyright (c) 2019 The MathJax Consortium
*
*  Licensed under the Apache License, Version 2.0 (the "License");
*  you may not use this file except in compliance with the License.
*  You may obtain a copy of the License at
*
*      http://www.apache.org/licenses/LICENSE-2.0
*
*  Unless required by applicable law or agreed to in writing, software
*  distributed under the License is distributed on an "AS IS" BASIS,
*  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
*  See the License for the specific language governing permissions and
*  limitations under the License.
*/


//
//  The default TeX packages to use
//
const PACKAGES = 'base, autoload, require, ams, newcommand';

//
//  Configure MathJax
//
// window.MathJax = {
//   // options: {
//   //     enableAssistiveMml: argv.assistiveMml
//   // },
//   loader: {
//       paths: {MathJax: 'MathJax-full/es5'},
//       // source: require('MathJax-full/components/src/source.js').source,
//       require: require,
//       load: ['adaptors/liteDOM']
//   },
//   tex: {
//       packages: PACKAGES
//   },
//   // chtml: {
//   //     fontURL: argv.fontURL
//   // },
//   startup: {
//       typeset: false
//   }
// }

//
//  Load the MathJax startup module
//
// require('MathJax-full/components/src/tex-chtml/tex-chtml.js');
//
//  Load the MathJax startup module
//
// require('MathJax-full/es5/tex-chtml.js');

/*
var argv = require('yargs')
    .demand(0).strict()
    .usage('$0 [options] "math" > file.html')
    .options({
        inline: {
            boolean: true,
            describe: "process as inline math"
        },
        em: {
            default: 16,
            describe: 'em-size in pixels'
        },
        ex: {
            default: 8,
            describe: 'ex-size in pixels'
        },
        width: {
            default: 80 * 16,
            describe: 'width of container in pixels'
        },
        packages: {
            default: PACKAGES,
            describe: 'the packages to use, e.g. "base, ams"; use "*" to represent the default packages, e.g, "*, bbox"'
        },
        css: {
            boolean: true,
            describe: 'output the required CSS rather than the HTML itself'
        },
        fontURL: {
            default: 'https://cdn.jsdelivr.net/npm/MathJax@3/es5/output/chtml/fonts/woff-v2',
            describe: 'the URL to use for web fonts'
        },
        assistiveMml: {
            boolean: true,
            default: false,
            describe: 'whether to include assistive MathML output'
        },
        dist: {
            boolean: true,
            default: false,
            describe: 'true to use webpacked version, false to use MathJax source files'
        }
    })
    .argv;
*/
//
//  Wait for MathJax to start up, and then typeset the math
//
const makeLatexDoc = (data) =>
  MathJax.tex2chtmlPromise(data).then((node) => {
      const adaptor = MathJax.startup.adaptor;
      //
      //  If the --css option was specified, output the CSS,
      //  Otherwise, output the typeset math as HTML
      //

      return adaptor.outerHTML(node);
  })

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

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true, // Enable Node.js integration in renderer
      contextIsolation: false,
      enableRemoteModule: true
    },
  });

  win.loadFile('index.html');
}

app.whenReady().then(createWindow);


// Handle the 'generate-latex' event from the renderer process
ipcMain.on('generate-latex', (event, latexContent) => {
  const filePath = 'resume.tex';

  fs.writeFile(filePath, fullDocument(latexContent), (err) => {
    if (err) {
      console.error('Error saving LaTeX file:', err);
    } else {
      console.log('LaTeX resume saved to', filePath);
    }
  });
});

ipcMain.on('file-request', (event) => {
  // If the platform is 'win32' or 'Linux'
  if (process.platform !== 'darwin') {
    // Resolves to a Promise<Object>
    dialog.showOpenDialog({
      title: 'Select the File to be uploaded',
      buttonLabel: 'Upload',
      // Restricting the user to only Text Files.
      filters: [
      {
         name: 'JSON Resume Data',
         extensions: ['json']
      }, ],
      // Specifying the File Selector Property
      properties: ['openFile']
    }).then(file => {
      // Stating whether dialog operation was
      // cancelled or not.
      console.log(file.canceled);
      if (!file.canceled) {
        const filepath = file.filePaths[0].toString();
        console.log(filepath);
        event.reply('file', filepath);
      }
    }).catch(err => {
      console.log(err)
    });
  }
  else {
    // If the platform is 'darwin' (macOS)
    dialog.showOpenDialog({
      title: 'Select the File to be uploaded',
      buttonLabel: 'Upload',
      filters: [
      {
        name: 'JSON Resume Data',
        extensions: ['json']
      }, ],
      // Specifying the File Selector and Directory
      // Selector Property In macOS
      properties: ['openFile']
    }).then(file => {
      console.log(file.canceled);
      if (!file.canceled) {
      const filepath = file.filePaths[0].toString();
      console.log(filepath);
      event.reply('file', filepath);
    }
  }).catch(err => {
      console.log(err)
    });
  }
});
