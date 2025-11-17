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
  { id: 'room10', name: 'Casa de Maquinas', floorAreaId: 'casa-maquinas' },
];

// Dados extraídos da lista do usuário
export const initialDevices: Device[] = [
  // Quarto 1
  { id: 'dev1', name: 'Ventilador (Q1)', power: 160, hours: 10, on: false, roomId: 'room1', x: 0.47, y: 0.15 },
  { id: 'dev2', name: 'Computador (Q1)', power: 90, hours: 4, on: false, roomId: 'room1', x: 0.42, y: 0.20 },
  { id: 'dev3', name: 'Lâmpada (Q1)', power: 24, hours: 4, on: true, roomId: 'room1', x: 0.45, y: 0.12 },
  
  // Quarto 2
  { id: 'dev4', name: 'Ventilador (Q2)', power: 160, hours: 5, on: false, roomId: 'room2', x: 0.13, y: 0.15 },
  { id: 'dev5', name: 'Lâmpada (Q2)', power: 4, hours: 1, on: false, roomId: 'room2', x: 0.15, y: 0.12 },

  // Banheiro 1
  { id: 'dev6', name: 'Chuveiro (B1)', power: 7500, hours: 1.5, on: false, roomId: 'room3', x: 0.30, y: 0.18 },
  { id: 'dev7', name: 'Lâmpada 1 (B1)', power: 4, hours: 1, on: false, roomId: 'room3', x: 0.28, y: 0.15 },
  { id: 'dev8', name: 'Lâmpada 2 (B1)', power: 0.67, hours: 3, on: false, roomId: 'room3', x: 0.32, y: 0.15 },

  // Cozinha / Sala
  { id: 'dev9', name: 'Fogão', power: 6000, hours: 5, on: false, roomId: 'room5', x: 0.70, y: 0.15 },
  { id: 'dev10', name: 'Air Fryer (C/S)', power: 1900, hours: 3, on: false, roomId: 'room5', x: 0.75, y: 0.18 },
  { id: 'dev11', name: 'Forno (C/S)', power: 1500, hours: 3, on: false, roomId: 'room5', x: 0.72, y: 0.22 },
  { id: 'dev12', name: 'Lâmpada 1 (C/S)', power: 24, hours: 10, on: true, roomId: 'room5', x: 0.80, y: 0.25 },
  { id: 'dev13', name: 'Lâmpada 2 (C/S)', power: 16.67, hours: 9, on: true, roomId: 'room5', x: 0.85, y: 0.30 },
  { id: 'dev14', name: 'Lâmpada 3 (C/S)', power: 16.67, hours: 9, on: true, roomId: 'room5', x: 0.82, y: 0.35 },
  { id: 'dev15', name: 'Lâmpada 4 (C/S)', power: 16.67, hours: 9, on: true, roomId: 'room5', x: 0.78, y: 0.40 },
  { id: 'dev16', name: 'Geladeira (C/S)', power: 150, hours: 24, on: true, roomId: 'room5', x: 0.65, y: 0.15 },
  { id: 'dev17', name: 'Lustre', power: 175, hours: 3, on: false, roomId: 'room5', x: 0.80, y: 0.45 },
  { id: 'dev18', name: 'TV', power: 130, hours: 10, on: false, roomId: 'room5', x: 0.88, y: 0.50 },

  // Área de Lazer
  { id: 'dev19', name: 'Geladeira (Lazer)', power: 150, hours: 24, on: true, roomId: 'room7', x: 0.10, y: 0.60 },
  { id: 'dev20', name: 'Forno (Lazer)', power: 1500, hours: 3, on: false, roomId: 'room7', x: 0.15, y: 0.65 },
  { id: 'dev21', name: 'Air Fryer (Lazer)', power: 2850, hours: 2, on: false, roomId: 'room7', x: 0.20, y: 0.70 },
  { id: 'dev22', name: 'Microondas', power: 1500, hours: 1.5, on: false, roomId: 'room7', x: 0.25, y: 0.75 },
  { id: 'dev23', name: 'Lâmpada 1 (Lazer)', power: 25, hours: 2, on: false, roomId: 'room7', x: 0.30, y: 0.80 },
  { id: 'dev24', name: 'Lâmpada 2 (Lazer)', power: 25, hours: 2, on: false, roomId: 'room7', x: 0.35, y: 0.85 },
  { id: 'dev25', name: 'Lâmpada 3 (Lazer)', power: 25, hours: 2, on: false, roomId: 'room7', x: 0.40, y: 0.90 },
  { id: 'dev26', name: 'Motor Caixa d\'água', power: 190, hours: 10, on: false, roomId: 'room10', x: 0.1, y: 0.27 },

  // Banheiro 2
  { id: 'dev27', name: 'Lâmpada (B2)', power: 12.5, hours: 4, on: false, roomId: 'room4', x: 0.65, y: 0.85 },
  { id: 'dev28', name: 'Chuveiro (B2)', power: 7500, hours: 1.5, on: false, roomId: 'room4', x: 0.65, y: 0.90 },
];


export const initialConfig: Config = {
  baseRate: 0.75, // R$/kWh
  activeTariffKey: 'verde',
  tariffs: {
    verde: { mult: 1.0, color: '#4CAF50', additionalCostPerkWh: 0 },
    amarela: { mult: 1.0, color: '#FFEB3B', additionalCostPerkWh: 0.01885 },
    vermelha_1: { mult: 1.0, color: '#F44336', additionalCostPerkWh: 0.04463 },
    vermelha_2: { mult: 1.0, color: '#B71C1C', additionalCostPerkWh: 0.07877 }
  },
};
