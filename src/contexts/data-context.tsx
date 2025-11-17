"use client";

import React, { createContext, useContext, useState, useMemo, useCallback } from 'react';
import type { Device, Room, Config } from '@/lib/types';
import { initialDevices, initialRooms, initialConfig } from '@/lib/data';

interface DataContextProps {
  devices: Device[];
  rooms: Room[];
  config: Config;
  updateDevice: (id: string, updates: Partial<Device>) => void;
  updateConfig: (updates: Partial<Config>) => void;
  // Removido addDevice e deleteDevice para usar dados estáticos
}

const DataContext = createContext<DataContextProps | undefined>(undefined);

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [devices, setDevices] = useState<Device[]>(initialDevices);
  const [rooms, setRooms] = useState<Room[]>(initialRooms);
  const [config, setConfig] = useState<Config>(initialConfig);

  const updateDevice = useCallback((id: string, updates: Partial<Device>) => {
    setDevices(currentDevices =>
      currentDevices.map(d => (d.id === id ? { ...d, ...updates } : d))
    );
  }, []);

  const updateConfig = useCallback((updates: Partial<Config>) => {
    setConfig(currentConfig => ({...currentConfig, ...updates}));
  }, []);

  const value = useMemo(() => ({
    devices,
    rooms,
    config,
    updateDevice,
    updateConfig,
  }), [devices, rooms, config, updateDevice, updateConfig]);

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export const useData = () => {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};
