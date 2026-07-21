import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

interface BookingSuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function BookingSuccessModal({ isOpen, onClose }: BookingSuccessModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[400px]">
        <DialogHeader>
          <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-hintgreen/20 mb-4">
            <span className="material-icons text-mosque text-3xl">check</span>
          </div>
          <DialogTitle className="text-center text-xl">Booking Confirmed</DialogTitle>
          <DialogDescription className="text-center">
            Your viewing appointment has been successfully scheduled. We look forward to seeing you.
          </DialogDescription>
        </DialogHeader>
        <Button onClick={onClose} className="w-full bg-mosque hover:bg-mosque/90">
          Close
        </Button>
      </DialogContent>
    </Dialog>
  );
}
