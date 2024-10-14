/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  useGetTasksQuery,
  useUpdateTaskStatusMutation
} from "@/state/api";
import { Dispatch, SetStateAction } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import TaskColumn from "./TaskColumn";

type BoardViewProps = {
  id: string;
  setIsModalCreateNewTaskOpen: Dispatch<SetStateAction<boolean>>;
};

const taskStatus = ["To Do", "Work In Progress", "Under Review", "Completed"];

function BoardView({ id, setIsModalCreateNewTaskOpen }: BoardViewProps) {
  const {
    data: tasks,
    isLoading,
    error,
  } = useGetTasksQuery({ projectId: +id });

  const [updateTaskStatus] = useUpdateTaskStatusMutation();

  function moveTask(taskId: number, toStatus: string) {
    updateTaskStatus({ taskId, status: toStatus });
  }

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error occured while fetching tasks</div>;

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2 xl:grid-cols-4">
        {taskStatus.map((status) => (
          <TaskColumn
            key={status}
            status={status}
            tasks={tasks || []}
            moveTask={moveTask}
            setIsModalCreateNewTaskOpen={setIsModalCreateNewTaskOpen}
          />
        ))}
      </div>
    </DndProvider>
  );
}

export default BoardView;
