const fs = require('fs');
const path = require('path');

// 读取所有文章文件
const pagesDir = path.join(__dirname, 'pages');
const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.html'));

console.log(`Found ${files.length} HTML files to optimize`);

files.forEach(file => {
    const filePath = path.join(pagesDir, file);
    let content = fs.readFileSync(filePath, 'utf8');

    // 检查是否已经是深色主题
    if (content.includes('linear-gradient(to bottom right, #0f172a, #1e1b4b, #312e81)')) {
        console.log(`✓ ${file} - Already optimized, skipping`);
        return;
    }

    console.log(`Optimizing ${file}...`);

    // 更新HTML结构和样式
    // 这里我们将手动更新每个文件
});

console.log('Optimization complete!');
