import { chromium } from 'playwright';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function generatePDF(projectPath, outputPath) {
    const browser = await chromium.launch();
    const page = await browser.newPage();

    // Connect to the local build or file
    const fileUrl = `file://${path.resolve(projectPath)}`;
    await page.goto(fileUrl, { waitUntil: 'networkidle' });

    // Wait for Paged.js to finish rendering (detected by a class or timeout)
    await page.waitForSelector('.pagedjs_pages');

    // Determine format based on project type (basic detection)
  // Ideally this would be passed as an arg, but we can sniff the shell or default to A4
  // For now, let's keep it simple: Default A4 Portrait.
  // If the user wants 16:9, they should pass 'presentation' as the 4th arg.
  
  const layoutMode = process.argv[4] || 'a4'; 
  
  let pdfOptions = {
    path: outputPath,
    printBackground: true,
    displayHeaderFooter: false,
    margin: { top: '0px', right: '0px', bottom: '0px', left: '0px' }
  };

  if (layoutMode === 'presentation') {
    pdfOptions.width = '16in';
    pdfOptions.height = '9in';
  } else if (layoutMode === 'landscape') {
    pdfOptions.format = 'A4';
    pdfOptions.landscape = true;
  } else {
    pdfOptions.format = 'A4';
  }

  await page.pdf(pdfOptions);

    await browser.close();
    console.log(`PDF successfully generated at: ${outputPath}`);
}

const target = process.argv[2] || 'dist/index.html';
const output = process.argv[3] || 'dist/lead-magnet.pdf';

generatePDF(target, output).catch(err => {
    console.error('PDF Generation Failed:', err);
    process.exit(1);
});
