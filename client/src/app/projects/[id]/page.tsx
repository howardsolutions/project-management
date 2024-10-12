"use client";

import ProjectHeader from "@/components/ProjectHeader";
import { useState } from "react";

type ProjectPageProps = {
  params: { id: string };
};

function Project({ params }: ProjectPageProps) {
  const { id } = params;

  const [activeTab, setActiveTab] = useState<string>("Board");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <div>
      <ProjectHeader activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}

export default Project;
