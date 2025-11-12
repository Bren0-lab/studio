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

const worldMatrixData = [
  { source: "Petróleo e derivados", value: 30.2, fill: "hsl(var(--chart-1))" },
  { source: "Carvão Mineral", value: 27.6, fill: "hsl(var(--chart-2))" },
  { source: "Gás Natural", value: 23.1, fill: "hsl(var(--chart-3))" },
  { source: "Biomassa", value: 8.8, fill: "hsl(var(--chart-4))" },
  { source: "Nuclear", value: 4.7, fill: "hsl(var(--chart-5))" },
  { source: "Hidráulica", value: 2.5, fill: "hsl(var(--primary))" },
  { source: "Outros", value: 3.1, fill: "hsl(var(--secondary))" },
]

const brazilMatrixData = [
    { source: "Petróleo e derivados", value: 34.3, fill: "hsl(var(--chart-1))" },
    { source: "Derivados de Cana", value: 19.1, fill: "hsl(var(--chart-5))" },
    { source: "Hidráulica", value: 12.4, fill: "hsl(var(--primary))" },
    { source: "Gás Natural", value: 11.8, fill: "hsl(var(--chart-3))" },
    { source: "Carvão Mineral", value: 5.6, fill: "hsl(var(--chart-2))" },
    { source: "Outras Renováveis", value: 7.7, fill: "hsl(var(--chart-4))" },
    { source: "Nuclear", value: 1.4, fill: "hsl(var(--accent))" },
]


const chartConfig = {
  value: {
    label: "Value",
  },
  ...worldMatrixData.reduce((acc, cur) => ({ ...acc, [cur.source]: { label: cur.source, color: cur.fill } }), {}),
  ...brazilMatrixData.reduce((acc, cur) => ({ ...acc, [cur.source]: { label: cur.source, color: cur.fill } }), {})
}

export default function EnergyMatrixTab() {
  return (
    <div className="grid gap-8 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Matriz Energética Mundial</CardTitle>
          <CardDescription>Distribuição das fontes de energia consumidas no mundo.</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={chartConfig}
            className="mx-auto aspect-square h-[250px]"
          >
            <PieChart>
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <Pie
                data={worldMatrixData}
                dataKey="value"
                nameKey="source"
                innerRadius={60}
                strokeWidth={5}
                labelLine={false}
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(1)}%`}
              >
                 {worldMatrixData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                ))}
              </Pie>
            </PieChart>
          </ChartContainer>
           <ul className="flex flex-wrap justify-center gap-x-4 gap-y-2 mt-4 text-sm text-muted-foreground">
                {worldMatrixData.map((entry) => (
                    <li key={entry.source} className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: entry.fill }} />
                        {entry.source}
                    </li>
                ))}
            </ul>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Matriz Energética Brasileira</CardTitle>
          <CardDescription>Distribuição das fontes de energia consumidas no Brasil.</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={chartConfig}
            className="mx-auto aspect-square h-[250px]"
          >
            <PieChart>
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <Pie
                data={brazilMatrixData}
                dataKey="value"
                nameKey="source"
                innerRadius={60}
                strokeWidth={5}
                 labelLine={false}
                 label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(1)}%`}
              >
                {brazilMatrixData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                ))}
              </Pie>
            </PieChart>
          </ChartContainer>
          <ul className="flex flex-wrap justify-center gap-x-4 gap-y-2 mt-4 text-sm text-muted-foreground">
                {brazilMatrixData.map((entry) => (
                    <li key={entry.source} className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: entry.fill }} />
                        {entry.source}
                    </li>
                ))}
            </ul>
        </CardContent>
      </Card>
    </div>
  )
}