const fs = require("fs");
const path = require("path");

// 获取当前脚本所在的目录
const currentDir = __dirname;

// 上层级目录的路径
const srcDir = path.resolve(currentDir, "../packages");

// components 目录的路径
const componentsDir = path.join(srcDir);

// 目标文件夹路径
const targetDir = path.join(currentDir, "../packages/components");
// 获取 components 目录下的所有子目录
const componentDirs = fs
  .readdirSync(componentsDir, { withFileTypes: true })
  .filter((dirent) => dirent.isDirectory()) // 判断是否是一个目录
  .map((dirent) => dirent.name); // 获取名字

/**
 * 全局变量 targetDir在上方定义，代表的是要放到publish文件夹下
 * targetFileDir: targetDir/targetDirName(publish/adou-button)
 * @param {*} srcPath: 要拷贝的文件的绝对路径
 * @param {*} targetDirName：要放到publish文件夹下的哪个子文件夹(adou-button 或者 adou-button/css 文件夹)
 * @param {*} targetFileName：要放到publish文件夹下的哪个子文件夹下的哪个文件(index.tsx 或 index.css)
 */
/* const makeAndCopyFile = (srcPath, targetDirName, targetFileName) => {
  const targetFileDir = path.join(targetDir, targetDirName);
  fs.mkdirSync(targetFileDir, { recursive: true });
  // 拷贝 index.css 文件
  fs.copyFileSync(srcPath, path.join(targetFileDir, targetFileName));
};
 */

// 最好不要使用递归，直接写到需要的文件的文件夹
const makeAndCopyFile = (srcPath, targetDirName, targetFileName) => {
  const targetFileDir = path.join(targetDir, targetDirName);
  fs.mkdirSync(targetFileDir, { recursive: true });

  if (!targetFileName) {
    const files = fs.readdirSync(srcPath);
    files.forEach((file) => {
      const filePath = path.join(srcPath, file);
      const targetFilePath = path.join(targetFileDir, file);

      const stats = fs.statSync(filePath);
      if (stats.isDirectory()) {
        makeAndCopyFile(filePath, file); // 递归处理文件夹
      } else {
        fs.copyFileSync(filePath, targetFilePath);
      }
    });
  } else {
    fs.copyFileSync(srcPath, path.join(targetFileDir, targetFileName));
  }
};

// 遍历每个子目录
componentDirs.forEach((component) => {
  // 拼接每个子目录的路径
  const componentDir = path.join(componentsDir, component);

  // 拼接每个子目录下的 index.ts 文件路径
  const indexPath = path.join(componentDir, "dist/cjs");

  // 拼接每个子目录下的 css/index.css 文件路径
  const cssPath = path.join(componentDir, "dist/css");

  // 判断 index.ts 是否存在
  if (fs.existsSync(indexPath)) {
    makeAndCopyFile(indexPath, component);
  } else {
    console.log(`${indexPath} not found in ${componentDir}`);
  }
  // 判断 index.css 是否存在
  if (fs.existsSync(cssPath)) {
    makeAndCopyFile(cssPath, `${component}/css`);
  } else {
    console.log(`${cssPath} not found in ${componentDir}`);
  }
});
