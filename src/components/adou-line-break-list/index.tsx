import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import splitFilesIntoColumns from 'utils/splitListIntoColumns';

interface FileExplorerProps {
    files: string[]; // 文件名数组
    filesPerColumn: number; // 每列展示的文件数量
    columns: number; // 展示的列数
}

const FileExplorer: React.FC<FileExplorerProps> = ({ files, filesPerColumn, columns }) => {
    // 根据列数和每列展示的文件数量来分割文件
    const fileColumns = splitFilesIntoColumns(files, filesPerColumn);

    return (
        <div className="container">
            <div className="row">
                {fileColumns.map((columnFiles, columnIndex) => (
                    <div className={`col-${12 / columns}`} key={columnIndex}>
                        <ul className="list-group" style={{ maxHeight: '200px', overflowY: 'auto', border: '1px solid #ccc', borderRadius: '5px' }}>
                            {columnFiles.map((file, fileIndex) => (
                                <button key={fileIndex} type="button" className="list-group-item list-group-item-action border-0">
                                    {file}
                                </button>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FileExplorer;
