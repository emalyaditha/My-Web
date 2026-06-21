const fs = require('fs');
const { execSync } = require('child_process');

try {
  console.log('Step 1: Compiling Tailwind CSS...');
  execSync('npm run build:css', { stdio: 'inherit' });

  console.log('Step 2: Cleaning and recreating dist/ folder...');
  if (fs.existsSync('dist')) {
    fs.rmSync('dist', { recursive: true, force: true });
  }
  fs.mkdirSync('dist');

  console.log('Step 3: Copying static files to dist/...');
  fs.copyFileSync('index.html', 'dist/index.html');

  if (fs.existsSync('robots.txt')) {
    fs.copyFileSync('robots.txt', 'dist/robots.txt');
  }

  if (fs.existsSync('sitemap.xml')) {
    fs.copyFileSync('sitemap.xml', 'dist/sitemap.xml');
  }

  if (fs.existsSync('assets')) {
    fs.cpSync('assets', 'dist/assets', { recursive: true });
    console.log('Assets directory copied successfully.');
  }

  console.log('🎉 Build completed successfully! Production files are ready in /dist.');
} catch (error) {
  console.error('❌ Build failed:', error);
  process.exit(1);
}
