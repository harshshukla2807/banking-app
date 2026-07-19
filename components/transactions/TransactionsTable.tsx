"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { transactions } from "@/data/transactions";
import { Button } from "../ui/button";

import { useMemo, useState } from "react";
import { Input } from "@/components/ui/input";

export default function TransactionsTable() {
  const ITEMS_PER_PAGE = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState<"All" | "Credit" | "Debit">(
    "All",
  );

  // CSV CODE
  const exportCSV = () => {
    const headers = [
      "Date",
      "Description",
      "Category",
      "Type",
      "Status",
      "Amount",
    ];

    const rows = filteredTransactions.map((t) => [
      t.date,
      t.description,
      t.category,
      t.type,
      t.status,
      t.amount,
    ]);

    const csv = [headers.join(","), ...rows.map((row) => row.join(","))].join(
      "\n",
    );

    const blob = new Blob([csv], {
      type: "text/csv;charset=utf-8;",
    });

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");

    link.href = url;
    link.download = "transactions.csv";

    link.click();

    URL.revokeObjectURL(url);
  };

  // filter transactions

  const filteredTransactions = useMemo(() => {
    return transactions.filter((transaction) => {
      const matchesSearch =
        transaction.description.toLowerCase().includes(search.toLowerCase()) ||
        transaction.category.toLowerCase().includes(search.toLowerCase());

      const matchesType =
        typeFilter === "All" || transaction.type === typeFilter;

      return matchesSearch && matchesType;
    });
  }, [search, typeFilter]);

  // pagination
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;

  const paginatedTransactions = filteredTransactions.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE,
  );

  const totalPages = Math.ceil(filteredTransactions.length / ITEMS_PER_PAGE);

  return (
    <div className="space-y-4">
      <Button onClick={exportCSV}>Export CSV</Button>

      <Input
        placeholder="Search transactions..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="max-w-sm ml-4"
      />

      <div className="flex gap-3">
        {["All", "Credit", "Debit"].map((type) => (
          <Button
            key={type}
            variant={typeFilter === type ? "default" : "outline"}
            onClick={() => setTypeFilter(type as "All" | "Credit" | "Debit")}
          >
            {type}
          </Button>
        ))}
      </div>

      <div className="overflow-hidden rounded-xl border bg-white">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {filteredTransactions.length > 0 ? (
              paginatedTransactions.map((transaction) => (
                <TableRow key={transaction.id}>
                  <TableCell>{transaction.date}</TableCell>

                  <TableCell className="font-medium">
                    {transaction.description}
                  </TableCell>

                  <TableCell>{transaction.category}</TableCell>

                  <TableCell>{transaction.type}</TableCell>

                  <TableCell>
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-medium ${
                        transaction.status === "Completed"
                          ? "bg-green-100 text-green-700"
                          : transaction.status === "Pending"
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-red-100 text-red-700"
                      }`}
                    >
                      {transaction.status}
                    </span>
                  </TableCell>

                  <TableCell
                    className={`text-right font-semibold ${
                      transaction.type === "Credit"
                        ? "text-green-600"
                        : "text-red-500"
                    }`}
                  >
                    {transaction.type === "Credit" ? "+" : "-"}₹
                    {transaction.amount.toLocaleString()}
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={6}
                  className="h-24 text-center text-slate-500"
                >
                  No transactions found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
        <div className="mt-6 flex items-center justify-center gap-3">
          <Button
            variant="outline"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => prev - 1)}
          >
            Previous
          </Button>

          <span>
            {currentPage} / {totalPages}
          </span>

          <Button
            variant="outline"
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((prev) => prev + 1)}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
