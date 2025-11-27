const fs = require('fs');
const path = require('path');

console.log('=== Updating Header Navigation Links ===\n');

// 1. Update all article pages (pages/keyword-*.html)
const pagesDir = path.join(__dirname, 'pages');
const articleFiles = fs.readdirSync(pagesDir)
  .filter(f => f.startsWith('keyword-') && f.endsWith('.html'));

console.log(`Found ${articleFiles.length} article pages to update\n`);

articleFiles.forEach((file, index) => {
  const filePath = path.join(pagesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Fix Articles link
  content = content.replace(
    /<a href="#"\s+class="([^"]*hover:text-white[^"]*)">Articles<\/a>/g,
    '<a href="../index.html#features"\n          class="$1">Articles</a>'
  );

  // Fix Contact link
  content = content.replace(
    /<a href="#"\s+class="([^"]*bg-primary[^"]*)">Contact<\/a>/g,
    '<a href="../contact.html"\n          class="$1">Contact</a>'
  );

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`✓ [${index + 1}/${articleFiles.length}] Updated ${file}`);
});

// 2. Update policy pages (about.html, privacy.html, terms.html, cookies.html, contact.html)
const policyPages = ['about.html', 'privacy.html', 'terms.html', 'cookies.html', 'contact.html'];

console.log(`\n\nFound ${policyPages.length} policy pages to update\n`);

policyPages.forEach((file, index) => {
  const filePath = path.join(__dirname, file);

  if (!fs.existsSync(filePath)) {
    console.log(`⚠ Skipped ${file} (not found)`);
    return;
  }

  let content = fs.readFileSync(filePath, 'utf8');

  // Fix Articles link
  content = content.replace(
    /<a href="#"\s+class="([^"]*hover:text-white[^"]*)">Articles<\/a>/g,
    '<a href="index.html#features"\n          class="$1">Articles</a>'
  );

  // Fix Contact link
  content = content.replace(
    /<a href="#"\s+class="([^"]*bg-primary[^"]*)">Contact<\/a>/g,
    '<a href="contact.html"\n          class="$1">Contact</a>'
  );

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`✓ [${index + 1}/${policyPages.length}] Updated ${file}`);
});

console.log('\n✅ Successfully updated all header navigation links!');
