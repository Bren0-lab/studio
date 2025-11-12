import type { Device, Room, Config } from './types';

export const initialRooms: Room[] = [
  { id: 'room1', name: 'Sala', floorAreaId: 'sala' },
  { id: 'room2', name: 'Cozinha', floorAreaId: 'cozinha' },
  { id: 'room3', name: 'Quarto 1', floorAreaId: 'quarto1' },
  { id: 'room5', name: 'Área', floorAreaId: 'area' },
  { id: 'room6', name: 'Quarto 2', floorAreaId: 'quarto2' },
];

export const initialDevices: Device[] = [
  { id: 'dev1', name: 'Geladeira', power: 200, hours: 24, on: true, roomId: 'room2', x: 0.8, y: 0.5 },
  { id: 'dev2', name: 'TV da Sala', power: 150, hours: 5, on: false, roomId: 'room1', x: 0.25, y: 0.5 },
  { id: 'dev3', name: 'Luz do Quarto', power: 15, hours: 6, on: true, roomId: 'room3', x: 0.15, y: 0.15 },
  { id: 'dev4', name: 'Ar Condicionado', power: 1500, hours: 8, on: false, roomId: 'room3', x: 0.3, y: 0.15 },
  { id: 'dev5', name: 'Máquina de Lavar', power: 500, hours: 1, on: false, roomId: 'room5', x: null, y: null },
  { id: 'dev6', name: 'Micro-ondas', power: 800, hours: 0.5, on: false, roomId: 'room2', x: null, y: null },
  { id: 'dev7', name: 'Abajur', power: 25, hours: 3, on: true, roomId: 'room6', x: 0.7, y: 0.15 },
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
