'use client';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/lib/i18n/LanguageContext';

interface BookingSuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function BookingSuccessModal({ isOpen, onClose }: BookingSuccessModalProps) {
  const { t } = useLanguage();

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[400px]">
        <DialogHeader>
          <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-emerald-100 mb-4">
            <span className="material-icons text-emerald-800 text-3xl">check</span>
          </div>
          <DialogTitle className="text-center text-xl font-bold">{t("schedulePage.successTitle")}</DialogTitle>
          <DialogDescription className="text-center">
            {t("schedulePage.successDesc")}
          </DialogDescription>
        </DialogHeader>
        <Button onClick={onClose} className="w-full bg-[#006655] hover:bg-[#005544] text-white cursor-pointer">
          {t("schedulePage.close")}
        </Button>
      </DialogContent>
    </Dialog>
  );
}
