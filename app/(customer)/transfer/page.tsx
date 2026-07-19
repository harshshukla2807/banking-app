"use client";

import { useState } from "react";

import TransferForm from "@/components/transfer/TransferForm";
import TransferSummary from "@/components/transfer/TransferSummary";
import TransferReviewDialog from "@/components/transfer/TransferReviewDialog";
import TransferSuccessDialog from "@/components/transfer/TransferSuccessDialog";

import { accounts } from "@/data/accounts";

export default function TransferPage() {
  const [fromAccount, setFromAccount] = useState(accounts[0].name);
  const [recipient, setRecipient] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [ifsc, setIfsc] = useState("");
  const [amount, setAmount] = useState("");
  const [remarks, setRemarks] = useState("");

  const [reviewOpen, setReviewOpen] = useState(false);
  const [successOpen, setSuccessOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [completedTransfer, setCompletedTransfer] = useState({
  recipient: "",
  amount: "",
});

  const handleTransfer = () => {
    setReviewOpen(true);
  };

  const resetForm = () => {
    setRecipient("");
    setAccountNumber("");
    setIfsc("");
    setAmount("");
    setRemarks("");
  };

  const handleConfirmTransfer = () => {
     setLoading(true);

  setTimeout(() => {
    setCompletedTransfer({
      recipient,
      amount,
    });

    setLoading(false);
    setReviewOpen(false);
    setSuccessOpen(true);

    resetForm();
  }, 1500);
  };

  return (
    <div className="space-y-8">

      <div>
        <h1 className="text-3xl font-bold">
          Transfer Money
        </h1>

        <p className="mt-2 text-slate-500">
          Send money securely between bank accounts.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">

        <div className="lg:col-span-2">
          <TransferForm
            fromAccount={fromAccount}
            setFromAccount={setFromAccount}
            recipient={recipient}
            setRecipient={setRecipient}
            accountNumber={accountNumber}
            setAccountNumber={setAccountNumber}
            ifsc={ifsc}
            setIfsc={setIfsc}
            amount={amount}
            setAmount={setAmount}
            remarks={remarks}
            setRemarks={setRemarks}
            onTransfer={handleTransfer}
          />
        </div>

        <TransferSummary
          fromAccount={fromAccount}
          recipient={recipient}
          amount={amount}
        />

      </div>

      <TransferReviewDialog
        open={reviewOpen}
        onClose={() => setReviewOpen(false)}
        onConfirm={handleConfirmTransfer}
        loading={loading}
        fromAccount={fromAccount}
        recipient={recipient}
        accountNumber={accountNumber}
        ifsc={ifsc}
        amount={amount}
        remarks={remarks}
      />

      <TransferSuccessDialog
        open={successOpen}
        onClose={() => setSuccessOpen(false)}
        recipient={completedTransfer.recipient}
        amount={completedTransfer.amount}
      />

    </div>
  );
}