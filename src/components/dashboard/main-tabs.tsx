"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MonitoringTab from "./monitoring-tab";
import FloorPlanTab from "./floor-plan-tab";
import SettingsTab from "./settings-tab";
import EnergyMatrixTab from "./energy-matrix-tab";
import EconomyTipsTab from "./economy-tips-tab";
import { BarChart, LayoutDashboard, Settings, Globe, Lightbulb } from "lucide-react";

export default function MainTabs() {
  return (
    <Tabs defaultValue="monitoring" className="w-full">
      <TabsList className="grid w-full grid-cols-5 max-w-3xl mx-auto bg-card border border-border">
        <TabsTrigger value="monitoring">
          <BarChart className="w-4 h-4 mr-2" />
          Monitoramento
        </TabsTrigger>
        <TabsTrigger value="plan">
          <LayoutDashboard className="w-4 h-4 mr-2" />
          Planta
        </TabsTrigger>
        <TabsTrigger value="matrix">
          <Globe className="w-4 h-4 mr-2" />
          Matrizes
        </TabsTrigger>
        <TabsTrigger value="tips">
          <Lightbulb className="w-4 h-4 mr-2" />
          Dicas
        </TabsTrigger>
        <TabsTrigger value="settings">
          <Settings className="w-4 h-4 mr-2" />
          Configurações
        </TabsTrigger>
      </TabsList>
      <TabsContent value="monitoring" className="mt-6">
        <MonitoringTab />
      </TabsContent>
      <TabsContent value="plan" className="mt-6">
        <FloorPlanTab />
      </TabsContent>
      <TabsContent value="matrix" className="mt-6">
        <EnergyMatrixTab />
      </TabsContent>
      <TabsContent value="tips" className="mt-6">
        <EconomyTipsTab />
      </TabsContent>
      <TabsContent value="settings" className="mt-6">
        <SettingsTab />
      </TabsContent>
    </Tabs>
  );
}
