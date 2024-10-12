import { useState } from "react";

type ProjectPageProps = {
  params: { id: string };
};

function Project({ params }: ProjectPageProps) {
  const { id } = params;

  const [activeTab, setActiveTab] = useState();
  const [isModalOpen, setIsModalOpen] = useState();

  return <div>Project</div>;
}

export default Project;
