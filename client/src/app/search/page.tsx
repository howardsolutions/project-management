"use client";

import { ProjectCard, TaskCard, UserCard } from "@/components";
import Header from "@/components/Header";
import { useDebounce } from "@/hooks";

import { useSearchQuery } from "@/state/api";
import { useState } from "react";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const debouncedSearchValue = useDebounce(searchTerm);

  const {
    data: searchResults,
    isLoading,
    isError,
  } = useSearchQuery(debouncedSearchValue, {
    skip: debouncedSearchValue.length < 3 || debouncedSearchValue == "",
  });

  return (
    <div className="p-8">
      <Header name="Search" />
      <div>
        <input
          type="text"
          placeholder="Search..."
          className="w-1/2 rounded border p-3 shadow"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="p-5">
        {isLoading && <p>Loading...</p>}
        {isError && <p>Error occurred while fetching search results.</p>}
        {!isLoading && !isError && searchResults && (
          <div>
            {searchResults.tasks && searchResults.tasks?.length > 0 && (
              <h2>Tasks</h2>
            )}
            {searchResults.tasks?.map((task) => (
              <TaskCard key={task.id} task={task} />
            ))}

            {searchResults.projects && searchResults.projects?.length > 0 && (
              <h2>Projects</h2>
            )}
            {searchResults.projects?.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}

            {searchResults.users && searchResults.users?.length > 0 && (
              <h2>Users</h2>
            )}
            {searchResults.users?.map((user) => (
              <UserCard key={user.userId} user={user} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
