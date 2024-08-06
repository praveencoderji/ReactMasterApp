import React from 'react';
import { Modal } from 'antd';

interface ModalProps {
    isOpen: boolean;
    loading: boolean;
    setModalOpen: React.Dispatch<React.SetStateAction<boolean>>
    children: React.ReactNode;
}

const TaskModal:React.FC<ModalProps> = ({isOpen, loading, setModalOpen, children}) => {


  return (
    <div>
       <Modal
        title={<p>New ticket</p>}
        loading={loading}
        open={isOpen}
        onCancel={()=>setModalOpen(false)}
        footer={null}
      >
        {children}
      </Modal>
    </div>
  );
};

export default TaskModal;
