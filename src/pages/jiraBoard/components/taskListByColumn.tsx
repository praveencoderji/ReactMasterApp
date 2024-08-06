import { useState } from "react"
import TaskModal from "./TaskModal"
import TaskForm, { Categories, FormDataProps } from "./taskForm"

export interface TaskListProps {
    category: Categories
    tasks: TaskProps[]
    onDrop: (e: React.DragEvent) => void
    onDragStart: (e: React.DragEvent, data: TaskProps, title: string) => void
    submitHandler: (data: FormDataProps, mode: string) => void
    setSourceCategory: React.Dispatch<React.SetStateAction<string | null>>
    isLoading: boolean
}

export type TaskProps = {
    id: string
    title: string
    description: string
}



const TaskListByColumn: React.FC<TaskListProps> = ({ category, tasks, onDrop, onDragStart, submitHandler, setSourceCategory, isLoading }) => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [editTaskInfo, setEditTaskInfo] = useState({
        id: '',
        title: '',
        description: ''
    })


    const editTaskHandler = (data: TaskProps) => {
        setEditTaskInfo(data)
        setIsModalOpen(true)
        setSourceCategory(category)
    }

    const onSubmit = async (data: FormDataProps) => {
        await submitHandler(data, 'edit')
        setIsModalOpen(false)
    }
    return (
        <div className="bg-gray-200 rounded-lg p-2.5" onDragOver={(e) => e.preventDefault()}
            onDrop={onDrop}>

            <h1  className="font-bold">{category}</h1>
            {tasks.map((task, index) => (
                <div
                    key={task.id}
                    className="task bg-white rounded m-2 p-4 cursor-move max-w-sm "
                    draggable
                    onDragStart={(e) => onDragStart(e, task, category)}
                    onClick={() => editTaskHandler(task)}
                >
                    <h1 className="text-base">{task.title}</h1>
                    <p className="text-xs"> {task.description}</p>

                    <a href="#" className="mt-5 text-gray-500"> #00T1</a>
                </div>
            ))}


            <TaskModal isOpen={isModalOpen} loading={isLoading} setModalOpen={setIsModalOpen}>
                <TaskForm task={editTaskInfo} category={category} onSubmitHandler={onSubmit} />
            </TaskModal>
        </div>
    );
};


export default TaskListByColumn;