"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";

interface TransferReviewDialogProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;

  fromAccount: string;
  recipient: string;
  accountNumber: string;
  ifsc: string;
  amount: string;
  remarks: string;
  loading: boolean;
}

export default function TransferReviewDialog({
  open,
  onClose,
  onConfirm,
  fromAccount,
  recipient,
  accountNumber,
  ifsc,
  amount,
  remarks,
  loading,
}: TransferReviewDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>

        <DialogHeader>
          <DialogTitle>Review Transfer</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">

          <div className="flex justify-between">
            <span className="text-slate-500">From</span>
            <span>{fromAccount}</span>
          </div>

          <div className="flex justify-between">
            <span className="text-slate-500">Recipient</span>
            <span>{recipient}</span>
          </div>

          <div className="flex justify-between">
            <span className="text-slate-500">Account</span>
            <span>{accountNumber}</span>
          </div>

          <div className="flex justify-between">
            <span className="text-slate-500">IFSC</span>
            <span>{ifsc}</span>
          </div>

          <div className="flex justify-between">
            <span className="text-slate-500">Amount</span>
            <span className="font-semibold text-lg">
              ₹{Number(amount).toLocaleString()}
            </span>
          </div>

          <div>
            <p className="text-slate-500 mb-1">Remarks</p>
            <p>{remarks || "-"}</p>
          </div>

        </div>

        <DialogFooter>

          <Button
            variant="outline"
            onClick={onClose}
            disabled={loading}
          >
            Cancel
          </Button>

          <Button
            onClick={onConfirm}
            disabled={loading}
          >
            {loading ? "Processing..." : "Confirm Transfer"}
          </Button>

        </DialogFooter>

      </DialogContent>
    </Dialog>
  );
}