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
      className="relative w-full max-w-5xl mx-auto overflow-hidden border-2 rounded-lg aspect-[10/11] bg-card/50 border-border"
      onClick={handleClick}
      style={{ cursor: isMapping ? 'crosshair' : 'default' }}
    >
      {/* Room Layout based on user request */}
      <RoomArea id="lavanderia" name="Lavanderia" style={{ top: '0%', left: '0%', width: '100%', height: '10%' }} />
      <RoomArea id="quarto2" name="Quarto 2" style={{ top: '10%', left: '0%', width: '25%', height: '15%' }} />
      <RoomArea id="banheiro1" name="Banheiro 1" style={{ top: '10%', left: '25%', width: '10%', height: '15%' }} />
      <RoomArea id="quarto1" name="Quarto 1" style={{ top: '10%', left: '35%', width: '25%', height: '15%' }} />
      <RoomArea id="casa-maquinas" name="Casa de Maquinas" style={{ top: '25%', left: '0%', width: '60%', height: '5%' }} />
      <RoomArea id="piscina" name="Piscina" style={{ top: '30%', left: '5%', width: '50%', height: '25%', borderStyle: 'solid' }} />
      <RoomArea id="cozinha-sala" name="Cozinha/Sala" style={{ top: '10%', left: '60%', width: '40%', height: '45%' }} />
      <RoomArea id="area-lazer" name="Área de Lazer" style={{ top: '55%', left: '0%', width: '60%', height: '45%', borderBottomLeftRadius: '10rem', borderTop: 'none' }} className="border-t-0" />
      <RoomArea id="banheiro2" name="Banheiro 2" style={{ top: '80%', left: '60%', width: '10%', height: '20%' }} />
      <RoomArea id="garagem" name="Garagem" style={{ top: '55%', left: '70%', width: '30%', height: '45%' }} />

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
