"use client";

import React, { useRef } from 'react';
import type { Device, Room } from '@/lib/types';
import { cn } from '@/lib/utils';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface FloorPlanProps {
  devices: Device[];
  rooms: Room[];
  isMapping: boolean;
  onMapClick: (x: number, y: number) => void;
}

const RoomArea: React.FC<{ id: string; style: React.CSSProperties; name: string; className?: string }> = ({ id, style, name, className }) => (
  <div
    id={id}
    className={cn("absolute border border-dashed border-muted-foreground/30 flex items-center justify-center", className)}
    style={style}
  >
    <span className="p-1 text-xs font-medium text-muted-foreground/50 select-none">{name}</span>
  </div>
);

export default function FloorPlan({ devices, rooms, isMapping, onMapClick }: FloorPlanProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isMapping || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    const y = Math.max(0, Math.min(1, (e.clientY - rect.top) / rect.height));
    onMapClick(x, y);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-5xl mx-auto overflow-hidden border-2 rounded-lg aspect-[16/10] bg-card/50 border-border"
      onClick={handleClick}
      style={{ cursor: isMapping ? 'crosshair' : 'default' }}
    >
      {/* Room Layout based on user request */}
      <RoomArea id="quarto1" name="Quarto 1" style={{ top: '5%', left: '5%', width: '38%', height: '28%' }} />
      <RoomArea id="banheiro1" name="Banheiro" style={{ top: '5%', left: '45%', width: '18%', height: '28%' }} />
      <RoomArea id="quarto2" name="Quarto 2" style={{ top: '5%', left: '65%', width: '30%', height: '28%' }} />
      
      <RoomArea id="sala" name="Sala / Cozinha" style={{ top: '38%', left: '5%', width: '58%', height: '57%' }} />

      <RoomArea id="servico" name="Área de Serviço" className="rounded-br-3xl" style={{ top: '68%', left: '68%', width: '27%', height: '27%' }} />

      {/* Device Pins */}
      {devices.filter(d => d.x != null && d.y != null).map(device => (
        <TooltipProvider key={device.id}>
          <Tooltip>
            <TooltipTrigger asChild>
              <div
                className="absolute w-3 h-3 -translate-x-1/2 -translate-y-1/2 border-2 rounded-full transition-all duration-300"
                style={{
                  left: `${device.x! * 100}%`,
                  top: `${device.y! * 100}%`,
                  borderColor: device.on ? 'hsl(var(--primary))' : 'hsl(var(--muted-foreground))',
                  backgroundColor: device.on ? 'hsl(var(--primary))' : 'hsl(var(--background))',
                  boxShadow: device.on ? '0 0 2px hsl(var(--primary)), 0 0 5px hsl(var(--primary)), 0 0 10px hsl(var(--primary))' : 'none',
                }}
              />
            </TooltipTrigger>
            <TooltipContent>
              <p>{device.name} ({device.on ? 'Ligado' : 'Desligado'})</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ))}
    </div>
  );
}
