"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import type { Device } from "@/lib/types";
import { useState } from "react";
import { ScrollArea } from "../ui/scroll-area";

interface UnmappedDevicesDialogProps {
  children: React.ReactNode;
  devices: Device[];
  onSelectDevice: (deviceId: string) => void;
}

export default function UnmappedDevicesDialog({ children, devices, onSelectDevice }: UnmappedDevicesDialogProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState<string | null>(null);

    const handleSelect = () => {
        if(selectedValue) {
            onSelectDevice(selectedValue);
            setIsOpen(false);
            setSelectedValue(null);
        }
    }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Mapear Dispositivo</DialogTitle>
          <DialogDescription>
            Selecione um dispositivo da lista para posicioná-lo na planta da casa.
          </DialogDescription>
        </DialogHeader>
        {devices.length > 0 ? (
            <div className="space-y-4">
                <ScrollArea className="h-64">
                    <RadioGroup value={selectedValue || ''} onValueChange={setSelectedValue} className="p-1">
                        {devices.map((device) => (
                            <div key={device.id} className="flex items-center p-3 rounded-md hover:bg-muted/50">
                                <RadioGroupItem value={device.id} id={device.id} />
                                <Label htmlFor={device.id} className="ml-3 cursor-pointer">
                                    <span className="font-semibold">{device.name}</span>
                                    <p className="text-sm text-muted-foreground">{device.power}W</p>
                                </Label>
                            </div>
                        ))}
                    </RadioGroup>
                </ScrollArea>
                <Button onClick={handleSelect} disabled={!selectedValue} className="w-full">
                    Posicionar Dispositivo
                </Button>
            </div>
        ) : (
            <p className="py-8 text-center text-muted-foreground">Todos os dispositivos já foram mapeados!</p>
        )}
      </DialogContent>
    </Dialog>
  );
}
