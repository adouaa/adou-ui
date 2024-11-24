// 根据列数和每列展示的文件数量来分割文件
const splitFilesIntoColumns = (files: string[], filesPerColumn: number) => {
    const result: string[][] = [];
    let currentColumn: string[] = [];

    files.forEach((file, index) => {
        currentColumn.push(file);
        if ((index + 1) % filesPerColumn === 0 || index === files.length - 1) {
            result.push(currentColumn);
            currentColumn = [];
        }
    });

    return result;
};

export default splitFilesIntoColumns;