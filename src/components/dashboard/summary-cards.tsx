"use client";

import { useMemo } from 'react';
import type { Device, Config } from '@/lib/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Zap, DollarSign, Power } from 'lucide-react';

interface SummaryCardsProps {
  devices: Device[];
  config: Config;
}

export default function SummaryCards({ devices, config }: SummaryCardsProps) {
  const { totalKwh, totalCost, activeDevices } = useMemo(() => {
    const activeDevices = devices.filter(d => d.on);
    const totalPowerWh = activeDevices.reduce((acc, device) => acc + (device.power * device.hours), 0);
    const totalKwh = totalPowerWh / 1000;
    
    const activeTariff = config.tariffs[config.activeTariffKey] || { mult: 1, additionalCostPer100kWh: 0 };
    const baseCost = totalKwh * config.baseRate * activeTariff.mult;
    const additionalCost = (totalKwh / 100) * activeTariff.additionalCostPer100kWh;
    const totalCost = baseCost + additionalCost;

    return {
      totalKwh,
      totalCost,
      activeDevices: activeDevices.length,
    };
  }, [devices, config]);

  return (
    <div className="grid gap-4 md:grid-cols-3">
      <Card className="border-l-4 border-primary">
        <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
          <CardTitle className="text-sm font-medium">Consumo Total (dia)</CardTitle>
          <Zap className="w-5 h-5 text-primary" style={{filter: 'drop-shadow(0 0 4px hsl(var(--primary)))'}}/>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold">
            {totalKwh.toFixed(2)} <span className="text-lg font-normal text-muted-foreground">kWh</span>
          </div>
          <p className="text-xs text-muted-foreground">Consumo estimado para hoje</p>
        </CardContent>
      </Card>
      <Card className="border-l-4 border-green-500">
        <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
          <CardTitle className="text-sm font-medium">Custo Estimado (dia)</CardTitle>
          <DollarSign className="w-5 h-5 text-green-500" style={{filter: 'drop-shadow(0 0 4px #4CAF50)'}}/>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold">
            R$ {totalCost.toFixed(2)}
          </div>
          <p className="text-xs text-muted-foreground">Baseado na tarifa atual</p>
        </CardContent>
      </Card>
      <Card className="border-l-4 border-blue-500">
        <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
          <CardTitle className="text-sm font-medium">Dispositivos Ativos</CardTitle>
          <Power className="w-5 h-5 text-blue-500" style={{filter: 'drop-shadow(0 0 4px #3b82f6)'}}/>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold">
            {activeDevices} <span className="text-lg font-normal text-muted-foreground">/ {devices.length}</span>
          </div>
          <p className="text-xs text-muted-foreground">Aparelhos ligados no momento</p>
        </CardContent>
      </Card>
    </div>
  );
}
