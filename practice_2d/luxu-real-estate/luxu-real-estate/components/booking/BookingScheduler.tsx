'use client';

import * as React from 'react';
import { Calendar } from '@/components/ui/calendar';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Availability } from '@/types/booking';
import { useLanguage } from '@/lib/i18n/LanguageContext';

interface BookingSchedulerProps {
  availability: Availability;
  onBook: (date: Date, time: string, notes: string) => void;
}

export function BookingScheduler({ availability, onBook }: BookingSchedulerProps) {
  const { t } = useLanguage();
  const [date, setDate] = React.useState<Date | undefined>(new Date(availability.date));
  const [time, setTime] = React.useState<string>('');
  const [notes, setNotes] = React.useState<string>('');

  const handleBook = () => {
    if (date && time) {
      onBook(date, time, notes);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-bold text-nordic mb-4">{t("schedulePage.selectDate")}</h3>
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border"
        />
      </div>

      <div>
        <h3 className="text-lg font-bold text-nordic mb-4">{t("schedulePage.availableTimes")}</h3>
        <ToggleGroup type="single" value={time} onValueChange={setTime} className="grid grid-cols-4 gap-2">
          {availability.slots.map((slot) => (
            <ToggleGroupItem
              key={slot.time}
              value={slot.time}
              disabled={!slot.isAvailable}
              className="px-2 py-1 text-xs cursor-pointer"
            >
              {slot.time}
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
      </div>

      <div>
        <h3 className="text-lg font-bold text-nordic mb-4">{t("schedulePage.messageAgent")}</h3>
        <Textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder={t("schedulePage.messagePlaceholder")}
          className="min-h-[100px]"
        />
      </div>

      <div className="flex justify-end gap-3 pt-4 border-t">
        <Button variant="ghost" onClick={() => window.history.back()} className="cursor-pointer">{t("schedulePage.cancel")}</Button>
        <Button onClick={handleBook} disabled={!date || !time} className="bg-[#006655] hover:bg-[#005544] text-white cursor-pointer">
          {t("schedulePage.confirmVisit")}
        </Button>
      </div>
    </div>
  );
}
