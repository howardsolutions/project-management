"use client";

import * as React from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const modes = [
  {
    title: "Light",
    value: "light",
  },
  {
    title: "Dark",
    value: "dark",
  },
  {
    title: "System",
    value: "system",
  },
];

export function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all hover:bg-gray-100 dark:-rotate-90 dark:scale-0 dark:hover:bg-gray-700" />
          <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all hover:bg-gray-100 dark:rotate-0 dark:scale-100 dark:text-gray-100 dark:hover:bg-gray-700" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {modes.map((mode) => (
          <DropdownMenuItem
            key={mode.value}
            className="hover:bg-gray-100 text-gray-800 dark:text-gray-100 dark:hover:bg-gray-700"
            onClick={() => setTheme(mode.value)}
          >
            {mode.title}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
