"use client";
import type { Device } from '@/lib/types';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { cn } from '@/lib/utils';
import { Power, Zap } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface DeviceListProps {
  devices: (Device & { roomName: string })[];
  updateDevice: (id: string, updates: Partial<Device>) => void;
}

export default function DeviceList({ devices, updateDevice }: DeviceListProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Controle de Dispositivos</CardTitle>
        <CardDescription>Ligue ou desligue os aparelhos da sua casa.</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Status</TableHead>
              <TableHead>Dispositivo</TableHead>
              <TableHead className="hidden md:table-cell">Cômodo</TableHead>
              <TableHead className="text-right">Potência</TableHead>
              <TableHead className="text-right hidden md:table-cell">Uso/dia</TableHead>
              <TableHead className="text-center">Controles</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {devices.map((device) => (
              <TableRow key={device.id} className={cn(device.on && "bg-primary/5")}>
                <TableCell>
                  <Badge variant={device.on ? "default" : "secondary"} className={cn(
                      device.on && 'shadow-[0_0_8px_hsl(var(--primary))]'
                  )}>
                    <Power className="w-3 h-3 mr-1" />
                    {device.on ? "Ligado" : "Desligado"}
                  </Badge>
                </TableCell>
                <TableCell className="font-medium">{device.name}</TableCell>
                <TableCell className="hidden md:table-cell text-muted-foreground">{device.roomName}</TableCell>
                <TableCell className="text-right text-muted-foreground">
                    <div className="flex items-center justify-end gap-1">
                        <Zap className={cn("w-4 h-4", device.on ? "text-primary" : "text-muted-foreground")} />
                        {device.power} W
                    </div>
                </TableCell>
                <TableCell className="text-right hidden md:table-cell text-muted-foreground">{device.hours}h</TableCell>
                <TableCell className="text-center">
                  <Switch
                      checked={device.on}
                      onCheckedChange={(on) => updateDevice(device.id, { on })}
                      aria-label={`Ligar/Desligar ${device.name}`}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
