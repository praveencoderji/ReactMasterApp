import { useState } from "react";
import { FileStateProps } from "../file-explorer";

interface NodeProps {
    id: number;
    name: string;
    children?: FileStateProps[]
    isFolder: boolean;
    createFile: (parentId: number) => void;
    createFolder: (parentId: number) => void;
}

const FileElement: React.FC<NodeProps> = ({ id, name, isFolder, children, createFile, createFolder }) => {
    const [showChildren, setShowChildren] = useState(true);


    return (
        <div className="ml-4 mt-2 cursor-pointer ">
            <span onClick={() => setShowChildren((prev) => !prev)}>
                {isFolder ? showChildren ? '📂' : '📁': "📄"}
                <span>{name}</span>
            </span>
            {isFolder && (
                <span className="ml-4">
                    <button className="ml-1 px-2  text-lg font-medium text-white bg-gray-500 rounded-md hover:bg-gray-700" onClick={() => createFile(id)}>+ File</button>
                    <button className="ml-1 px-2  text-lg font-medium text-white bg-gray-500 rounded-md hover:bg-gray-700" onClick={() => createFolder(id)}>+ Folder</button>
                </span>
            )}
            {isFolder &&
                showChildren &&
                children?.map((c) => (
                    <FileElement
                        key={c.id}
                        id={c.id}
                        name={c.name}
                        isFolder={c.isFolder}
                        children={c.children}
                        createFile={createFile}
                        createFolder={createFolder}
                    />
                ))}
        </div>
    );
}

export default FileElement;