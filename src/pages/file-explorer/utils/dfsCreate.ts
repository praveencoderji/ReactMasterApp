import { Children } from "react";

type Node = {
    id: number;
    name: string;
    children?: Node[];
    isFolder: boolean;
  };


export const dfsCreate = (
    parentId: number, 
    nameOfDirectory: string, 
    nodesList: Node[], 
    isFolder: boolean
  ): boolean =>{

    for (const node of nodesList) {
        if (node.id === parentId && node.isFolder && node.children) {
          const newItem = {
            id: parseInt(crypto.randomUUID()),
            name: nameOfDirectory,
            isFolder: isFolder,
            children: isFolder ? [] : undefined,
          };
    
          node.children.push(newItem);
          return true; // File/Folder added successfully
        }
    
        if (node.children && node.children.length > 0) {
          const added = dfsCreate(parentId,nameOfDirectory, node.children,isFolder);
          if (added) return true; // File/Folder added successfully
        }
      }
    
      return false;
}