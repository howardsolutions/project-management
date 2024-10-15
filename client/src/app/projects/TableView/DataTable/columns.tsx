"use client";

import { Task } from "@/state/api";
import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export const columns: ColumnDef<Partial<Task>>[] = [
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "description",
    header: "Description",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "priority",
    header: "Priority",
  },
  {
    accessorKey: "tags",
    header: "Tags",
  },
  {
    accessorKey: "startDate",
    header: "Start Date",
  },
  {
    accessorKey: "dueDate",
    header: "Due Date",
  },
  {
    accessorKey: "author",
    header: "Author",
    cell: ({ row }) => {
      return (
        <div className="text-center font-medium w-20">
          {" "}
          {row?.original.author?.username || ""}{" "}
        </div>
      );
    },
  },
  {
    accessorKey: "assignee",
    header: "Assignee",
    cell: ({ row }) => {
      return (
        <div className="text-center font-medium w-20">
          {" "}
          {row?.original.assignee?.username || ""}{" "}
        </div>
      );
    },
  },
];
