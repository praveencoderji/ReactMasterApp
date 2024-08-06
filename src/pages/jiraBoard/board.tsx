import { useState } from "react";
import Column, { TaskProps } from './components/taskListByColumn'
import TaskModal from "./components/TaskModal";
import TaskForm, { FormDataProps } from "./components/taskForm";
import s from "../../styles/Homepage.module.scss"




const JiraBoard: React.FC = () => {
    const [newTicket, setNewTicket] = useState<TaskProps[]>([]);
    const [inProgress, setInProgress] = useState<TaskProps[]>([]);
    const [completed, setCompleted] = useState<TaskProps[]>([]);

    const [isAddingModal, setIsAdingModal] = useState(false);
    const [sourceCategory, setSourceCategory] = useState<string | null>(null)
    const [isLoading, setIsLoading] = useState(false)


    function filterTasks(tasks: TaskProps[], id: string) {
        return tasks.filter((task) => task.id !== id);
    }

    function handleDataUpdate(sourceColumn: string, targetColumn: string, task: TaskProps, mode = "edit") {
        if (targetColumn !== sourceColumn) {
            switch (targetColumn) {
                case "New":
                    setNewTicket([...newTicket, task]);
                    break;
                case "InProgress":
                    setInProgress([...inProgress, task]);
                    break;
                case "Completed":
                    setCompleted([...completed, task]);
                    break;
                default:
                    break;
            }
            if (mode === "edit") {
                switch (sourceColumn) {
                    case "New":
                        setNewTicket(filterTasks(newTicket, task.id));
                        break;
                    case "InProgress":
                        setInProgress(filterTasks(inProgress, task.id));
                        break;
                    case "Completed":
                        setCompleted(filterTasks(completed, task.id));
                        break;
                    default:
                        break;
                }
            }
        }
    }

    const handleDragStart = (e: any, task: TaskProps, sourceColumn: string) => {
        e.dataTransfer.setData("task", JSON.stringify(task));
        e.dataTransfer.setData("sourceColumn", sourceColumn);
    };

    // Receive the ticketName and sourceColumn name via dataTransfer
    // Push the ticketName to targetColumn array and remove it from sourceColumn
    const handleDrop = async (e: any, targetColumn: string) => {

        const taskData = e.dataTransfer.getData("task");
        const task = JSON.parse(taskData);
        const sourceColumn = e.dataTransfer.getData("sourceColumn");
        await handleDataUpdate(sourceColumn, targetColumn, task)
    };

    const onSubmit = async (data: FormDataProps, mode = 'add') => {

        const formData = {
            id: data.id ?? crypto.randomUUID(),
            title: data.title,
            description: data.description

        }
        setIsLoading(true)
        if (mode === "edit") {

            await handleDataUpdate(sourceCategory!, data.category, formData)
            setIsLoading(false)
            return true
        } else {
            await handleDataUpdate('', data.category, formData, 'add')
            setIsAdingModal(false)
            setIsLoading(false)
            return true
        }


    }
    return (
        <>
            <div className='items-left underline'>
                <a href='/' > {'<'}Back to Home  </a>
            </div>
            <h1 className="text-center mt-3 text-3xl">Agile Board</h1>
            <div className="add-ticket">
                <button className="px-5  text-lg font-medium text-white bg-blue-500 rounded-md hover:bg-blue-700" onClick={() => setIsAdingModal(true)}>Add Ticket</button>
            </div>

            <div className={s["kanban-board"]}>
                <Column
                    category="New"
                    tasks={newTicket}
                    onDrop={(e: any) => handleDrop(e, "New")}
                    onDragStart={handleDragStart}
                    submitHandler={onSubmit}
                    setSourceCategory={setSourceCategory}
                    isLoading={isLoading}
                />
                <Column
                    category="InProgress"
                    tasks={inProgress}
                    onDrop={(e: any) => handleDrop(e, "InProgress")}
                    onDragStart={handleDragStart}
                    submitHandler={onSubmit}
                    setSourceCategory={setSourceCategory}
                    isLoading={isLoading}
                />
                <Column
                    category="Completed"
                    tasks={completed}
                    onDrop={(e: any) => handleDrop(e, "Completed")}
                    onDragStart={handleDragStart}
                    submitHandler={onSubmit}
                    setSourceCategory={setSourceCategory}
                    isLoading={isLoading}
                />
            </div>

            <TaskModal isOpen={isAddingModal} loading={isLoading} setModalOpen={setIsAdingModal}>
                <TaskForm onSubmitHandler={onSubmit} />
            </TaskModal>
        </>
    );
}

export default JiraBoard;