export type Tariff = {
  mult: number;
  color: string;
  additionalCostPerkWh: number;
};

export type Config = {
  baseRate: number;
  activeTariffKey: string;
  tariffs: {
    [key: string]: Tariff;
  };
};

export type Room = {
  id: string;
  name: string;
  floorAreaId?: string;
};

export type Device = {
  id: string;
  name: string;
  power: number; // Watts
  hours: number; // daily usage
  on: boolean;
  roomId: string;
  x: number | null;
  y: number | null;
};
