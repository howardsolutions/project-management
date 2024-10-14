"use client";

import ProjectHeader from "@/components/ProjectHeader";
import { useState } from "react";
import BoardView from "../BoardView";

type ProjectPageProps = {
  params: { id: string };
};

enum activeTabs {
  BOARD = "Board",
  LIST = "List",
  TIMELINE = "Timeline",
  TABLE = "Table",
}
function Project({ params }: ProjectPageProps) {
  const { id } = params;

  const [activeTab, setActiveTab] = useState<string>("Board");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <div>
      <ProjectHeader activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === activeTabs.BOARD && (
        <BoardView id={id} setIsModalCreateNewTaskOpen={setIsModalOpen} />
      )}
    </div>
  );
}

export default Project;
