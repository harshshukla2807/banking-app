export interface Transaction {
  id: number;
  date: string;
  description: string;
  category: string;
  amount: number;
  type: "Credit" | "Debit";
  status: "Completed" | "Pending" | "Failed";
}

export const transactions: Transaction[] = [
  {
    id: 1,
    date: "26 Jul 2026",
    description: "Salary",
    category: "Income",
    amount: 45000,
    type: "Credit",
    status: "Completed",
  },
  {
    id: 2,
    date: "25 Jul 2026",
    description: "Netflix",
    category: "Entertainment",
    amount: 499,
    type: "Debit",
    status: "Completed",
  },
  {
    id: 3,
    date: "24 Jul 2026",
    description: "Amazon",
    category: "Shopping",
    amount: 2999,
    type: "Debit",
    status: "Completed",
  },
  {
    id: 4,
    date: "23 Jul 2026",
    description: "Electricity Bill",
    category: "Bills",
    amount: 2150,
    type: "Debit",
    status: "Pending",
  },
  {
    id: 5,
    date: "22 Jul 2026",
    description: "Freelance Payment",
    category: "Income",
    amount: 18000,
    type: "Credit",
    status: "Completed",
  },
  {
    id: 6,
    date: "2 Jul 2026",
    description: "Miscellaneous Payment",
    category: "Income",
    amount: 18000,
    type: "Debit",
    status: "Completed",
  },
  {
    id: 7,
    date: "28 Jul 2026",
    description: "New Payment",
    category: "Income",
    amount: 18000,
    type: "Credit",
    status: "Pending",
  },
  {
    id: 8,
    date: "29 Jul 2026",
    description: "Car Payment",
    category: "Income",
    amount: 28000,
    type: "Credit",
    status: "Completed",
  },
];