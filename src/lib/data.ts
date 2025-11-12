import type { Device, Room, Config } from './types';

export const initialRooms: Room[] = [
  { id: 'room1', name: 'Quarto 1', floorAreaId: 'quarto1' },
  { id: 'room2', name: 'Quarto 2', floorAreaId: 'quarto2' },
  { id: 'room3', name: 'Banheiro 1', floorAreaId: 'banheiro1' },
  { id: 'room4', name: 'Banheiro 2', floorAreaId: 'banheiro2' },
  { id: 'room5', name: 'Cozinha/Sala', floorAreaId: 'cozinha-sala' },
  { id: 'room6', name: 'Lavanderia', floorAreaId: 'lavanderia' },
  { id: 'room7', name: 'Área de Lazer', floorAreaId: 'area-lazer' },
  { id: 'room8', name: 'Garagem', floorAreaId: 'garagem' },
  { id: 'room9', name: 'Piscina', floorAreaId: 'piscina' },
];

export const initialDevices: Device[] = [
  { id: 'dev1', name: 'Geladeira', power: 200, hours: 24, on: true, roomId: 'room5', x: 0.8, y: 0.3 },
  { id: 'dev2', name: 'TV da Sala', power: 150, hours: 5, on: false, roomId: 'room5', x: 0.75, y: 0.45 },
  { id: 'dev3', name: 'Luz do Quarto', power: 15, hours: 6, on: true, roomId: 'room1', x: 0.4, y: 0.27 },
  { id: 'dev4', name: 'Ar Condicionado', power: 1500, hours: 8, on: false, roomId: 'room2', x: 0.1, y: 0.27 },
  { id: 'dev5', name: 'Máquina de Lavar', power: 500, hours: 1, on: false, roomId: 'room6', x: 0.3, y: 0.07 },
  { id: 'dev6', name: 'Micro-ondas', power: 800, hours: 0.5, on: false, roomId: 'room5', x: 0.85, y: 0.15 },
  { id: 'dev7', name: 'Abajur', power: 25, hours: 3, on: true, roomId: 'room1', x: 0.45, y: 0.2 },
];

export const initialConfig: Config = {
  baseRate: 0.75, // R$/kWh
  activeTariffKey: 'normal',
  tariffs: {
    normal: { mult: 1.0, color: '#4CAF50' },
    pico: { mult: 2.0, color: '#F44336' },
    fora_de_ponta: { mult: 0.8, color: '#2196F3' }
  },
};
