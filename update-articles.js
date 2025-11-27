const fs = require('fs');
const path = require('path');

// Read the completed keyword-1.html as template
const templatePath = path.join(__dirname, 'pages', 'keyword-1.html');
const templateContent = fs.readFileSync(templatePath, 'utf8');

// Extract the head section and styles from template
const headMatch = templateContent.match(/<head>([\s\S]*?)<\/head>/);
const headerMatch = templateContent.match(/(<!-- Header -->[\s\S]*?<\/header>)/);
const footerMatch = templateContent.match(/(<!-- Footer -->|<footer[\s\S]*?<\/footer>)/);
const scriptMatch = templateContent.match(/(<script>[\s\S]*?<\/script>\s*<\/body>)/);

if (!headMatch || !headerMatch || !footerMatch) {
  console.error('Could not extract template sections');
  process.exit(1);
}

const newHead = headMatch[0];
const newHeader = headerMatch[0];
const newFooter = footerMatch[0];
const newScript = scriptMatch ? scriptMatch[1] : '';

// Get all keyword files except keyword-1.html
const pagesDir = path.join(__dirname, 'pages');
const files = fs.readdirSync(pagesDir)
  .filter(f => f.startsWith('keyword-') && f !== 'keyword-1.html')
  .sort((a, b) => {
    const numA = parseInt(a.match(/\d+/)[0]);
    const numB = parseInt(b.match(/\d+/)[0]);
    return numA - numB;
  });

console.log(`Found ${files.length} files to update`);

files.forEach((file, index) => {
  const filePath = path.join(pagesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  console.log(`\n[${index + 1}/${files.length}] Processing ${file}...`);

  // Replace head section
  content = content.replace(/<head>[\s\S]*?<\/head>/, newHead);

  // Replace body tag
  content = content.replace(
    /<body[^>]*>/,
    '<body class="text-gray-200 font-sans antialiased selection:bg-primary selection:text-white">'
  );

  // Replace header
  content = content.replace(
    /<!-- Header -->[\s\S]*?<\/header>/,
    newHeader
  );

  // Replace main article container
  content = content.replace(
    /<main[^>]*>[\s\S]*?<article[^>]*>/,
    '<main class="max-w-4xl mx-auto pt-32 pb-20 px-6">\n    <article class="glass-card p-8 md:p-12 rounded-3xl">'
  );

  // Replace category badge
  content = content.replace(
    /<span class="text-primary[^"]*"[^>]*>([^<]+)<\/span>/,
    (match, categoryText) => {
      return `<span\n        class="inline-block py-1 px-3 rounded-full bg-indigo-900/30 text-indigo-300 text-sm font-semibold mb-4 border border-indigo-500/30 backdrop-blur-sm">\n        ${categoryText}\n      </span>`;
    }
  );

  // Replace h1 title
  content = content.replace(
    /<h1 class="[^"]*"[^>]*>([\s\S]*?)<\/h1>/,
    '<h1 class="text-3xl md:text-5xl font-bold mb-6 text-white leading-tight font-serif">$1</h1>'
  );

  // Replace meta info div
  content = content.replace(
    /<div class="flex items-center gap-4 mb-10 text-gray-[^"]*"[^>]*border-b border-gray-[^"]*"[^>]*>/,
    '<div class="flex items-center gap-4 mb-10 text-gray-400 text-sm border-b border-white/10 pb-8">'
  );

  // Replace prose container
  content = content.replace(
    /<div class="prose prose-lg prose-indigo[^"]*">/,
    '<div class="prose prose-lg prose-invert max-w-none">'
  );

  // Replace Quick Answer box
  content = content.replace(
    /<div class="bg-indigo-50[^"]*"[^>]*>([\s\S]*?)<h3[^>]*>⚡ Quick Answer<\/h3>/,
    `<div class="bg-indigo-500/10 border border-indigo-500/30 p-6 rounded-xl mb-8 backdrop-blur-sm hover:bg-indigo-500/15 transition-all">
          <h3 class="text-lg font-bold text-indigo-300 mb-3 flex items-center">
            <span class="mr-2">⚡</span> Quick Answer
          </h3>`
  );

  content = content.replace(
    /<p class="text-indigo-800 font-medium">/g,
    '<p class="text-gray-300 leading-relaxed">'
  );

  // Replace Core Interpretations heading
  content = content.replace(
    /<h2 class="text-2xl font-bold text-gray-900[^"]*"[^>]*>Core Interpretations<\/h2>/,
    '<h2 class="text-2xl font-bold text-white mt-12 mb-6 font-serif">Core Interpretations</h2>'
  );

  // Replace interpretation cards
  content = content.replace(
    /<div class="space-y-6">([\s\S]*?)<!-- 4\. Common Scenarios/,
    (match, interpretations) => {
      let updated = interpretations;

      // Wrap each interpretation in article-card
      updated = updated.replace(
        /<div>\s*<h3 class="text-xl font-semibold text-gray-800[^"]*"[^>]*>(.*?)<\/h3>\s*<p>([\s\S]*?)<\/p>\s*<\/div>/g,
        '<div class="article-card p-6 rounded-xl">\n            <h3 class="text-xl font-semibold text-primary mb-3">$1</h3>\n            <p class="text-gray-300 leading-relaxed">$2</p>\n          </div>'
      );

      return '<div class="space-y-6">' + updated + '<!-- 4. Common Scenarios';
    }
  );

  // Replace all section headings
  content = content.replace(
    /<h2 class="text-2xl font-bold text-gray-900[^"]*"[^>]*>/g,
    '<h2 class="text-2xl font-bold text-white mt-12 mb-6 font-serif">'
  );

  // Replace scenario cards
  content = content.replace(
    /<div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100">/g,
    '<div class="article-card p-6 rounded-xl">'
  );

  content = content.replace(
    /<h3 class="font-bold text-lg text-gray-900[^"]*">/g,
    '<h3 class="font-bold text-lg text-white mb-3">'
  );

  content = content.replace(
    /<p><strong>Meaning:<\/strong>/g,
    '<p class="text-gray-300 leading-relaxed"><strong class="text-primary">Meaning:</strong>'
  );

  // Replace positive/negative boxes
  content = content.replace(
    /<div class="bg-green-50 p-4 rounded-lg">/g,
    '<div class="bg-emerald-500/10 border border-emerald-500/30 p-6 rounded-xl backdrop-blur-sm">'
  );

  content = content.replace(
    /<h4 class="font-bold text-green-800 mb-2">✅ Positive Meanings<\/h4>/g,
    '<h4 class="font-bold text-emerald-300 mb-4 text-lg flex items-center">\n              <span class="mr-2">✅</span> Positive Meanings\n            </h4>'
  );

  content = content.replace(
    /<ul class="list-disc pl-5 text-green-700 space-y-1">/g,
    '<ul class="list-disc pl-5 space-y-2 text-emerald-200/90">'
  );

  content = content.replace(
    /<div class="bg-red-50 p-4 rounded-lg">/g,
    '<div class="bg-red-500/10 border border-red-500/30 p-6 rounded-xl backdrop-blur-sm">'
  );

  content = content.replace(
    /<h4 class="font-bold text-red-800 mb-2">❌ Negative Meanings<\/h4>/g,
    '<h4 class="font-bold text-red-300 mb-4 text-lg flex items-center">\n              <span class="mr-2">❌</span> Negative Meanings\n            </h4>'
  );

  content = content.replace(
    /<ul class="list-disc pl-5 text-red-700 space-y-1">/g,
    '<ul class="list-disc pl-5 space-y-2 text-red-200/90">'
  );

  // Replace life insights
  content = content.replace(
    /<p class="mb-4">\s*<strong>/g,
    '<p class="mb-4 text-gray-300 leading-relaxed">\n          <strong class="text-primary">'
  );

  // Replace FAQ items
  content = content.replace(
    /<details class="group bg-gray-50 p-4 rounded-lg">/g,
    '<details class="group bg-slate-800/50 backdrop-blur-md border border-white/10 p-5 rounded-xl hover:bg-slate-800/70 transition-all">'
  );

  content = content.replace(
    /<summary class="font-bold text-gray-900 cursor-pointer flex justify-between items-center">/g,
    '<summary class="font-bold text-white cursor-pointer flex justify-between items-center">'
  );

  content = content.replace(
    /<p class="mt-2 text-gray-600">/g,
    '<p class="mt-3 text-gray-300 leading-relaxed">'
  );

  // Replace emotions list
  content = content.replace(
    /<ul class="space-y-2">([\s\S]*?)<\/ul>/,
    (match, listContent) => {
      let updated = listContent.replace(
        /<li><strong>/g,
        '<li><strong class="text-primary">'
      );
      return '<ul class="space-y-3 text-gray-300 leading-relaxed">' + updated + '</ul>';
    }
  );

  // Replace context cards
  content = content.replace(
    /<div class="p-4 bg-white border border-gray-200 rounded-lg">/g,
    '<div class="article-card p-5 rounded-xl">'
  );

  content = content.replace(
    /<div class="font-bold text-gray-900">/g,
    '<div class="font-bold text-white mb-2">'
  );

  content = content.replace(
    /<div class="text-sm mt-1 text-gray-600">/g,
    '<div class="text-sm text-gray-300 leading-relaxed">'
  );

  // Replace final interpretation box
  content = content.replace(
    /<div class="mt-12 p-6 bg-primary\/5 border border-primary\/20 rounded-2xl text-center">([\s\S]*?)<\/div>/,
    (fullMatch, innerContent) => {
      const pMatch = innerContent.match(/<p class="[^"]*"[^>]*>([\s\S]*?)<\/p>/);
      const pContent = pMatch ? pMatch[1] : innerContent;
      return `<div
          class="mt-12 p-8 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 rounded-2xl backdrop-blur-sm text-center">
          <h3 class="text-2xl font-bold text-white mb-4 font-serif flex items-center justify-center">
            <span class="mr-2">🌟</span> Final Interpretation
          </h3>
          <p class="text-gray-200 text-lg leading-relaxed italic">${pContent}</p>
        </div>`;
    }
  );

  // Replace ad space
  content = content.replace(
    /<div class="bg-gray-100 p-8 rounded-2xl border border-gray-200 text-gray-400 font-medium">/g,
    '<div\n          class="bg-slate-800/50 backdrop-blur-md border border-white/10 p-8 rounded-2xl text-gray-400 font-medium hover:bg-slate-800/70 transition-all">'
  );

  // Replace footer
  content = content.replace(
    /<footer[\s\S]*?<\/footer>/,
    newFooter
  );

  // Replace closing script and body
  content = content.replace(
    /<script src="\.\.\/scripts\/app\.js"><\/script>\s*<\/body>\s*<\/html>/,
    newScript + '\n\n</html>'
  );

  // Write updated content
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`✓ Updated ${file}`);
});

console.log(`\n✅ Successfully updated ${files.length} article pages!`);
