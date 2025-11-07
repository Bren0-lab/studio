"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MonitoringTab from "./monitoring-tab";
import FloorPlanTab from "./floor-plan-tab";
import SettingsTab from "./settings-tab";
import { BarChart, LayoutDashboard, Settings } from "lucide-react";

export default function MainTabs() {
  return (
    <Tabs defaultValue="monitoring" className="w-full">
      <TabsList className="grid w-full grid-cols-3 max-w-lg mx-auto bg-card border border-border">
        <TabsTrigger value="monitoring">
          <BarChart className="w-4 h-4 mr-2" />
          Monitoramento
        </TabsTrigger>
        <TabsTrigger value="plan">
          <LayoutDashboard className="w-4 h-4 mr-2" />
          Planta
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
      <TabsContent value="settings" className="mt-6">
        <SettingsTab />
      </TabsContent>
    </Tabs>
  );
}
