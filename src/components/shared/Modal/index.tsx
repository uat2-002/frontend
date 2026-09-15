import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

interface ModalProps {
  triggerOpen: string;
  title: string;
  description?: string;
  children: React.ReactNode;
  cancelText?: string;
  confirmText?: string;
  onConfirm?: () => void;
}

export default function Modal({
  triggerOpen,
  title,
  children,
  description,
  cancelText,
  confirmText,
  onConfirm,
}: ModalProps) {
  return (
    <Dialog>
      <DialogTrigger render={<Button variant="outline">{triggerOpen}</Button>}></DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <div className="py-2">{children}</div>
        {(cancelText || confirmText) && (
          <DialogFooter className="justify-center gap-2">
            {cancelText && <DialogClose render={<Button variant="outline">{cancelText}</Button>} />}
            {confirmText && (
              <DialogClose render={<Button onClick={onConfirm}>{confirmText}</Button>} />
            )}
          </DialogFooter>
        )}
      </DialogContent>
    </Dialog>
  );
}
