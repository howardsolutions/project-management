import Header from "@/components/Header";
import { useGetTasksQuery } from "@/state/api";
import { DataTable } from "./DataTable";
import { useTheme } from "next-themes";
import { columns } from "./DataTable/columns";

type TableViewProps = {
  id: string;
  setIsModalNewTaskOpen: (isOpen: boolean) => void;
};

const TableView = ({ id, setIsModalNewTaskOpen }: TableViewProps) => {
  const { theme } = useTheme();

  const isDarkMode = theme === "dark";

  const {
    data: tasks,
    error,
    isLoading,
  } = useGetTasksQuery({ projectId: Number(id) });

  if (isLoading) return <div>Loading...</div>;
  if (error || !tasks) return <div>An error occurred while fetching tasks</div>;

  return (
    <div className="h-[540px] w-full px-4 pb-8 xl:px-6">
      <div className="pt-5">
        <Header
          name="Table"
          headerBtn={
            <button
              className="flex items-center rounded bg-blue-primary px-3 py-2 text-white hover:bg-blue-600"
              onClick={() => setIsModalNewTaskOpen(true)}
            >
              Add Task
            </button>
          }
          isSmallText
        />
      </div>
      {/* Place the table! */}
      <DataTable columns={columns} data={tasks} isDarkMode={isDarkMode} />
    </div>
  );
};

export default TableView;
