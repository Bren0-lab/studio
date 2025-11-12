"use client"

import * as React from "react"
import { Pie, PieChart, Cell } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const worldEnergyData = [
  { source: "Petróleo e derivados", value: 30.2, fill: "hsl(var(--chart-1))" },
  { source: "Carvão Mineral", value: 27.6, fill: "hsl(var(--chart-2))" },
  { source: "Gás Natural", value: 23.1, fill: "hsl(var(--chart-3))" },
  { source: "Biomassa", value: 8.8, fill: "hsl(var(--chart-4))" },
  { source: "Nuclear", value: 4.7, fill: "hsl(var(--accent))" },
  { source: "Hidráulica", value: 2.5, fill: "hsl(var(--primary))" },
  { source: "Outras Renováveis", value: 3.1, fill: "hsl(var(--chart-5))" },
]

const brazilEnergyData = [
    { source: "Petróleo e derivados", value: 34.3, fill: "hsl(var(--chart-1))" },
    { source: "Derivados de Cana", value: 19.1, fill: "hsl(var(--chart-5))" },
    { source: "Hidráulica", value: 12.4, fill: "hsl(var(--primary))" },
    { source: "Gás Natural", value: 11.8, fill: "hsl(var(--chart-3))" },
    { source: "Carvão Mineral", value: 5.6, fill: "hsl(var(--chart-2))" },
    { source: "Outras Renováveis", value: 7.7, fill: "hsl(var(--chart-4))" },
    { source: "Nuclear", value: 1.4, fill: "hsl(var(--accent))" },
]

const worldElectricData = [
    { source: "Carvão", value: 36.0, fill: "hsl(var(--chart-2))" },
    { source: "Gás Natural", value: 23.0, fill: "hsl(var(--chart-3))" },
    { source: "Hidrelétrica", value: 15.0, fill: "hsl(var(--primary))" },
    { source: "Nuclear", value: 9.0, fill: "hsl(var(--accent))" },
    { source: "Eólica", value: 7.0, fill: "hsl(var(--chart-4))" },
    { source: "Solar", value: 5.0, fill: "hsl(var(--chart-5))" },
    { source: "Outras", value: 5.0, fill: "hsl(var(--secondary))" },
]

const brazilElectricData = [
    { source: "Hidrelétrica", value: 63.8, fill: "hsl(var(--primary))" },
    { source: "Eólica", value: 10.8, fill: "hsl(var(--chart-4))" },
    { source: "Biomassa", value: 8.4, fill: "hsl(var(--chart-1))" },
    { source: "Gás Natural", value: 7.1, fill: "hsl(var(--chart-3))" },
    { source: "Solar", value: 4.6, fill: "hsl(var(--chart-5))" },
    { source: "Derivados de Petróleo", value: 2.1, fill: "hsl(var(--secondary))" },
    { source: "Carvão e derivados", value: 1.9, fill: "hsl(var(--chart-2))" },
    { source: "Nuclear", value: 1.3, fill: "hsl(var(--accent))" },
]

const chartConfig = {
  value: { label: "Value" },
  ...[...worldEnergyData, ...brazilEnergyData, ...worldElectricData, ...brazilElectricData].reduce((acc, cur) => ({ ...acc, [cur.source]: { label: cur.source, color: cur.fill } }), {})
}

const ChartCard = ({ title, description, data }: { title: string, description: string, data: typeof worldEnergyData }) => (
    <Card>
        <CardHeader>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
            <ChartContainer config={chartConfig} className="mx-auto aspect-square h-[250px]">
                <PieChart>
                    <ChartTooltip
                        content={<ChartTooltipContent nameKey="source" />}
                    />
                    <Pie
                        data={data}
                        dataKey="value"
                        nameKey="source"
                        innerRadius={60}
                        strokeWidth={5}
                        labelLine={false}
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.fill} />
                        ))}
                    </Pie>
                </PieChart>
            </ChartContainer>
            <ul className="flex flex-wrap justify-center gap-x-4 gap-y-2 mt-4 text-xs text-muted-foreground">
                {data.map((entry) => (
                    <li key={entry.source} className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: entry.fill }} />
                        {entry.source}
                    </li>
                ))}
            </ul>
        </CardContent>
    </Card>
);


export default function EnergyMatrixTab() {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
        <ChartCard 
            title="Matriz Energética Mundial"
            description="Distribuição das fontes de energia consumidas no mundo."
            data={worldEnergyData}
        />
        <ChartCard 
            title="Matriz Energética Brasileira"
            description="Distribuição das fontes de energia consumidas no Brasil."
            data={brazilEnergyData}
        />
        <ChartCard 
            title="Matriz Elétrica Mundial"
            description="Fontes de geração de eletricidade no mundo."
            data={worldElectricData}
        />
        <ChartCard 
            title="Matriz Elétrica Brasileira"
            description="Fontes de geração de eletricidade no Brasil."
            data={brazilElectricData}
        />
    </div>
  )
}
