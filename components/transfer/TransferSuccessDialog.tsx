"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";

import { CheckCircle2 } from "lucide-react";

interface Props {
  open: boolean;
  onClose: () => void;

  recipient: string;
  amount: string;
}

export default function TransferSuccessDialog({
  open,
  onClose,
  recipient,
  amount,
}: Props) {
  const transactionId =
    "TXN" + Math.floor(Math.random() * 100000000);

  return (
    <Dialog
      open={open}
      onOpenChange={onClose}
    >
      <DialogContent>

        <DialogHeader>
          <DialogTitle className="text-center">
            Transfer Successful
          </DialogTitle>
        </DialogHeader>

        <div className="flex flex-col items-center space-y-5">

          <CheckCircle2
            className="text-green-600"
            size={70}
          />

          <div className="text-center">

            <p className="text-3xl font-bold">
              ₹{Number(amount).toLocaleString()}
            </p>

            <p className="mt-2 text-slate-500">
              Successfully transferred to
            </p>

            <p className="font-semibold">
              {recipient}
            </p>

          </div>

          <div className="w-full rounded-lg border p-4 space-y-2 text-sm">

            <div className="flex justify-between">
              <span>Transaction ID</span>
              <span>{transactionId}</span>
            </div>

            <div className="flex justify-between">
              <span>Date</span>
              <span>
                {new Date().toLocaleString()}
              </span>
            </div>

            <div className="flex justify-between">
              <span>Status</span>
              <span className="text-green-600 font-semibold">
                Success
              </span>
            </div>

          </div>

          <Button
            className="w-full"
            onClick={onClose}
          >
            Done
          </Button>

        </div>

      </DialogContent>
    </Dialog>
  );
}