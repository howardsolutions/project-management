"use client";
import Header from "@/components/Header";
import { useGetUsersQuery } from "@/state/api";
import { useTheme } from "next-themes";

const Users = () => {
  const { data: users, isLoading, isError } = useGetUsersQuery();
  const { theme } = useTheme();

  const isDarkMode = theme === "dark";

  if (isLoading) return <div>Loading...</div>;
  if (isError || !users) return <div>Error fetching users</div>;

  return (
    <div className="flex w-full flex-col p-8">
      <Header name="Users" />
      <div style={{ height: 650, width: "100%" }}></div>
    </div>
  );
};

export default Users;
