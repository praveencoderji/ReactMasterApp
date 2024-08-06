import { useState } from "react";
import FileElement from "./components/node";
import { dfsCreate } from "./utils/dfsCreate";

export interface FileStateProps {
    id: number;
    name: string;
    isFolder: boolean;
    children?: FileStateProps[];

}

const initialState = [
    {
        id: 1,
        name: "src",
        isFolder: true,
        children: [
            {
                id: 21,
                name: "Components",
                isFolder: true,
                children: [
                    {
                        id: 22,
                        name: "Button.js",
                        isFolder: false,
                    },
                    {
                        id: 23,
                        name: "Navbar.js",
                        isFolder: false,
                    },
                ],
            },
            {
                id: 2,
                name: "App.js",
                isFolder: false,
            },
            {
                id: 3,
                name: "styles.css",
                isFolder: false,
            },
        ],
    },
    {
        id: 4,
        name: "package.json",
        isFolder: false,
    },
    {
        id: 5,
        name: "package-lock.json",
        isFolder: false,
    },
];

const FileExplorerApp: React.FC = () => {
    const [nodes, setNodes] = useState(initialState);


    const createFile = (parentId: number) => {
        const fileName = prompt("Enter a File Name") || "New File";
        const fileAdded = dfsCreate(parentId, fileName, nodes, false)
        if (fileAdded) {
            setNodes([...nodes])
        } else {
            window.alert("Parent Folder Not Found")
        }
    }


    const createFolder = (parentId: number) => {
        const folderName = prompt("Enter a Folder Name") || "New Folder";
        const folderAdded = dfsCreate(parentId, folderName, nodes, true)
        if (folderAdded) {
            setNodes([...nodes])
        } else {
            window.alert("Parent Folder Not Found")
        }
    }
    return (
        <div className="mt-2 ml-3">
            <h2>File Explorer</h2>
            <div className='mr-3 underline float-right'>
                <a href='/' > {'<'}Back to Home  </a>
            </div>
            {nodes.map((c) => (
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

export default FileExplorerApp;