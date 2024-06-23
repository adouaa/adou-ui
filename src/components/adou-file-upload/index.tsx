import React, { useState } from 'react';

function FileUpload() {
    const [selectedFile, setSelectedFile] = useState<any>(null);

    // 处理文件选择
    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    // 处理文件上传
    const handleUpload = async () => {
        if (!selectedFile) {
            alert('Please select a file first!');
            return;
        }

        // 读取文件内容
        const reader: any = new FileReader();
        reader.readAsArrayBuffer(selectedFile);
        reader.onload = async () => {
            const fileContent = new Uint8Array(reader.result);

            // 构建请求体
            const payload = {
                banner_id: 1, // 假设的banner ID
                file_name: selectedFile.name,
                file_format: selectedFile.type,
                file_content: Array.from(fileContent), // 转换为普通数组
            };

            console.log("payload = ", payload);
            
            try {
                alert('File uploaded successfully');
            } catch (error) {
                console.error('Error uploading file', error);
                alert('Error uploading file');
            }
        };
    };

    return (
        <div className="container mt-5">
            <h2>File Upload</h2>
            <div className="input-group mb-3">
                <input type="file" className="form-control" onChange={handleFileChange} />
                <button className="btn btn-primary" onClick={handleUpload}>
                    Upload
                </button>
            </div>
        </div>
    );
}

export default FileUpload;
