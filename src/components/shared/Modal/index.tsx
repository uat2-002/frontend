import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import type { ReactNode } from 'react';

type ModalProps = {
  triggerOpen: string;
  title: string;
  description?: string;
  children: ReactNode;
  cancelText?: string;
  confirmText?: string;
  onConfirm?: () => void;
};

export const Modal = ({
  triggerOpen,
  title,
  children,
  description,
  cancelText,
  confirmText,
  onConfirm,
}: ModalProps) => (
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
