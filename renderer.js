const { ipcRenderer, dialog } = require('electron');
const fs = require('fs');

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
      const codeNode = document.getElementById('latexCodeDisplay')
      codeNode.innerHTML = fullDocument(latexContent)
      // Send the LaTeX content to the main process
      ipcRenderer.send('generate-latex', latexResume);
   } catch (error) {
      console.error('Error parsing JSON data:', error);
      alert('Please enter valid JSON data.');
   }
});


