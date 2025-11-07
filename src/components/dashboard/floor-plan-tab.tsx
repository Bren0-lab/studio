"use client";
import { useState } from "react";
import FloorPlan from "./floor-plan";
import { Button } from "@/components/ui/button";
import { Map, X } from "lucide-react";
import UnmappedDevicesDialog from "./unmapped-devices-dialog";
import { useData } from "@/contexts/data-context";
import { useToast } from "@/hooks/use-toast";
import type { Device } from "@/lib/types";

export default function FloorPlanTab() {
  const { devices, rooms, updateDevice } = useData();
  const { toast } = useToast();
  const [isMapping, setIsMapping] = useState(false);
  const [selectedDeviceId, setSelectedDeviceId] = useState<string | null>(null);

  const selectedDevice = devices.find(d => d.id === selectedDeviceId);

  const handleSelectDeviceForMapping = (deviceId: string) => {
    setSelectedDeviceId(deviceId);
    setIsMapping(true);
  };

  const handleMapClick = (x: number, y: number) => {
    if (isMapping && selectedDeviceId) {
      updateDevice(selectedDeviceId, { x, y });
      toast({
        title: "Dispositivo Mapeado!",
        description: `O dispositivo ${selectedDevice?.name} foi posicionado na planta.`,
      });
      setIsMapping(false);
      setSelectedDeviceId(null);
    }
  };

  const cancelMapping = () => {
    setIsMapping(false);
    setSelectedDeviceId(null);
  };

  const unmappedDevices = devices.filter(d => d.x === null || d.y === null);

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h2 className="text-2xl font-bold">Planta Baixa Interativa</h2>
        <UnmappedDevicesDialog
          devices={unmappedDevices}
          onSelectDevice={handleSelectDeviceForMapping}
        >
          <Button variant="outline">
            <Map className="w-4 h-4 mr-2" />
            Mapear Dispositivos ({unmappedDevices.length})
          </Button>
        </UnmappedDevicesDialog>
      </div>
      
      {isMapping && selectedDevice && (
        <div className="flex items-center justify-center gap-4 p-3 text-center rounded-lg bg-card border border-primary/50 text-primary">
          <Map className="w-5 h-5 animate-pulse" />
          <span>Clique na planta para posicionar: <strong>{selectedDevice.name}</strong></span>
          <Button variant="ghost" size="icon" className="w-8 h-8 rounded-full" onClick={cancelMapping}>
            <X className="w-4 h-4" />
          </Button>
        </div>
      )}

      <FloorPlan
        devices={devices}
        rooms={rooms}
        isMapping={isMapping}
        onMapClick={handleMapClick}
      />
    </div>
  );
}
