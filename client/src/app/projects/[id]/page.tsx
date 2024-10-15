"use client";

import ProjectHeader from "@/components/ProjectHeader";
import { useState } from "react";
import BoardView from "../BoardView";
import ListView from "../ListView";
import TimelineView from "../TimelineView";
import TableView from "../TableView";

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
      {activeTab === activeTabs.LIST && (
        <ListView id={id} setIsModalNewTaskOpen={setIsModalOpen} />
      )}
      {activeTab === activeTabs.TIMELINE && (
        <TimelineView id={id} setIsModalNewTaskOpen={setIsModalOpen} />
      )}
      {activeTab === activeTabs.TABLE && (
        <TableView id={id} setIsModalNewTaskOpen={setIsModalOpen} />
      )}
    </div>
  );
}

export default Project;

type ProjectPageProps = {
  params: { id: string };
};

enum activeTabs {
  BOARD = "Board",
  LIST = "List",
  TIMELINE = "Timeline",
  TABLE = "Table",
}
