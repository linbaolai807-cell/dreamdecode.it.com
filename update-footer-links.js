const fs = require('fs');
const path = require('path');

// Get all article files in pages directory
const pagesDir = path.join(__dirname, 'pages');
const files = fs.readdirSync(pagesDir)
  .filter(f => f.startsWith('keyword-') && f.endsWith('.html'));

console.log(`Found ${files.length} article pages to update`);

files.forEach((file, index) => {
  const filePath = path.join(pagesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  console.log(`\n[${index + 1}/${files.length}] Updating ${file}...`);

  // Update About Us link
  content = content.replace(
    /<li><a href="#" class="hover:text-primary transition">About Us<\/a><\/li>/g,
    '<li><a href="../about.html" class="hover:text-primary transition">About Us</a></li>'
  );

  // Update Privacy Policy link
  content = content.replace(
    /<li><a href="#" class="hover:text-primary transition">Privacy Policy<\/a><\/li>/g,
    '<li><a href="../privacy.html" class="hover:text-primary transition">Privacy Policy</a></li>'
  );

  // Update Terms of Service link
  content = content.replace(
    /<li><a href="#" class="hover:text-primary transition">Terms of Service<\/a><\/li>/g,
    '<li><a href="../terms.html" class="hover:text-primary transition">Terms of Service</a></li>'
  );

  // Update Cookie Policy link
  content = content.replace(
    /<li><a href="#" class="hover:text-primary transition">Cookie Policy<\/a><\/li>/g,
    '<li><a href="../cookies.html" class="hover:text-primary transition">Cookie Policy</a></li>'
  );

  // Write updated content back to file
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`✓ Updated footer links in ${file}`);
});

console.log(`\n✅ Successfully updated footer links in ${files.length} article pages!`);
