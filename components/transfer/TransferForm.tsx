"use client";

import { useMemo } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { accounts } from "@/data/accounts";

interface TransferFormProps {
  fromAccount: string;
  setFromAccount: React.Dispatch<React.SetStateAction<string>>;

  recipient: string;
  setRecipient: React.Dispatch<React.SetStateAction<string>>;

  accountNumber: string;
  setAccountNumber: React.Dispatch<React.SetStateAction<string>>;

  ifsc: string;
  setIfsc: React.Dispatch<React.SetStateAction<string>>;

  amount: string;
  setAmount: React.Dispatch<React.SetStateAction<string>>;

  remarks: string;
  setRemarks: React.Dispatch<React.SetStateAction<string>>;

  onTransfer: () => void;
}

export default function TransferForm({
  fromAccount,
  setFromAccount,
  recipient,
  setRecipient,
  accountNumber,
  setAccountNumber,
  ifsc,
  setIfsc,
  amount,
  setAmount,
  remarks,
  setRemarks,
  onTransfer,
}: TransferFormProps) {
  const selectedAccount = useMemo(() => {
    return accounts.find((acc) => acc.name === fromAccount);
  }, [fromAccount]);

  const transferAmount = Number(amount) || 0;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!recipient || !accountNumber || !ifsc || !amount) {
      alert("Please fill all required fields.");
      return;
    }

    onTransfer();
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Transfer Money</CardTitle>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">

          <div className="space-y-2">
            <label className="text-sm font-medium">From Account</label>

            <Select value={fromAccount} onValueChange={setFromAccount}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>

              <SelectContent>
                {accounts.map((account) => (
                  <SelectItem key={account.id} value={account.name}>
                    {account.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <p className="text-sm text-slate-500">
              Available Balance: ₹
              {selectedAccount?.balance.toLocaleString()}
            </p>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Recipient Name</label>

            <Input
              placeholder="John Doe"
              value={recipient}
              onChange={(e) => setRecipient(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Account Number</label>

            <Input
              placeholder="123456789012"
              value={accountNumber}
              onChange={(e) => setAccountNumber(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">IFSC Code</label>

            <Input
              placeholder="HDFC0001234"
              value={ifsc}
              onChange={(e) => setIfsc(e.target.value.toUpperCase())}
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Amount</label>

            <Input
              type="number"
              placeholder="5000"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">
              Remarks (Optional)
            </label>

            <Textarea
              placeholder="Rent for July..."
              value={remarks}
              onChange={(e) => setRemarks(e.target.value)}
            />
          </div>

          <div className="rounded-lg border bg-slate-50 p-4 space-y-2">
            <div className="flex justify-between">
              <span>From</span>
              <span>{fromAccount}</span>
            </div>

            <div className="flex justify-between">
              <span>To</span>
              <span>{recipient || "-"}</span>
            </div>

            <div className="flex justify-between">
              <span>Amount</span>
              <span>₹{transferAmount.toLocaleString()}</span>
            </div>

            <div className="flex justify-between">
              <span>Transfer Fee</span>
              <span>₹0</span>
            </div>

            <hr />

            <div className="flex justify-between font-semibold">
              <span>Total Debit</span>
              <span>₹{transferAmount.toLocaleString()}</span>
            </div>
          </div>

          <Button type="submit" className="w-full">
            Transfer Money
          </Button>

        </form>
      </CardContent>
    </Card>
  );
}