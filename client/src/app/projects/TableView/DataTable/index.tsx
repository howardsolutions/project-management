"use client";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  isDarkMode: boolean;
}

export function DataTable<TData, TValue>({
  columns,
  data,
  isDarkMode,
}: DataTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow
              key={headerGroup.id}
              className={cn(
                "border border-solid",
                isDarkMode ? "#2d3135" : "e5e7eb",
              )}
            >
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead
                    className={cn(
                      isDarkMode
                        ? "border-[#2d3135] bg-[#1d1f21] text-[#e5e7eb]"
                        : "bg-white",
                    )}
                    key={header.id}
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
                className={cn(
                  "border border-solid",

                  isDarkMode
                    ? "border-[#2d3135] bg-[#1d1f21] text-[#e5e7eb]"
                    : "border-[#e5e7eb] bg-white",
                )}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id} className="border-none">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow
              className={cn(
                "border border-solid",

                isDarkMode
                  ? "border-[#2d3135] bg-[#1d1f21] text-[#e5e7eb]"
                  : "border-[#e5e7eb] bg-white",
              )}
            >
              <TableCell
                colSpan={columns.length}
                className="h-24 border-none text-center"
              >
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      <div className="flex flex-row items-center justify-between px-6">
        <div
          className={`text-muted-foreground flex-1 text-sm ${isDarkMode ? "text-[#e5e7eb]" : ""}`}
        >
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-end space-x-2 py-4">
          <Button
            className={`${isDarkMode ? "text-[#e5e7eb]" : ""}`}
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            className={`${isDarkMode ? "text-[#e5e7eb]" : ""}`}
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
