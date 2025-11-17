"use client";

import { useData } from "@/contexts/data-context";
import SummaryCards from "./summary-cards";
import DeviceList from "./device-list";
import { useMemo } from "react";

export default function MonitoringTab() {
  const { devices, config, rooms, updateDevice } = useData();

  const devicesWithRooms = useMemo(() => {
    return devices.map(device => {
      const room = rooms.find(r => r.id === device.roomId);
      return {
        ...device,
        roomName: room ? room.name : 'N/A',
      };
    });
  }, [devices, rooms]);

  return (
    <div className="space-y-8">
      <SummaryCards devices={devices} config={config} />
      <DeviceList devices={devicesWithRooms} updateDevice={updateDevice} />
    </div>
  );
}
