const fs = require('fs');
const path = require('path');

// Get all keyword files
const pagesDir = path.join(__dirname, 'pages');
const files = fs.readdirSync(pagesDir)
  .filter(f => f.startsWith('keyword-') && f.endsWith('.html'))
  .sort((a, b) => {
    const numA = parseInt(a.match(/\d+/)[0]);
    const numB = parseInt(b.match(/\d+/)[0]);
    return numA - numB;
  });

console.log(`Found ${files.length} files to fix`);

files.forEach((file, index) => {
  const filePath = path.join(pagesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  console.log(`\n[${index + 1}/${files.length}] Fixing ${file}...`);

  // Find the first closing </html> tag and remove everything after it
  const firstHtmlClose = content.indexOf('</html>');
  if (firstHtmlClose !== -1) {
    const afterFirst = content.substring(firstHtmlClose + 7);
    if (afterFirst.trim().length > 0) {
      console.log(`  Found duplicate content (${afterFirst.length} chars), removing...`);
      content = content.substring(0, firstHtmlClose + 7);
    }
  }

  // Write cleaned content
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`✓ Fixed ${file}`);
});

console.log(`\n✅ Successfully fixed ${files.length} article pages!`);
