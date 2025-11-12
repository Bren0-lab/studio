"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Lightbulb, Refrigerator, Tv, Wind, Zap, Lamp } from "lucide-react";

const tips = [
  {
    icon: <Refrigerator className="w-5 h-5 text-primary" />,
    title: "Otimize o uso da geladeira",
    content: "Não forre as prateleiras, evite abrir a porta sem necessidade e não guarde alimentos quentes. Verifique se a borracha de vedação está em bom estado.",
  },
  {
    icon: <Wind className="w-5 h-5 text-primary" />,
    title: "Ar-condicionado com consciência",
    content: "Mantenha os filtros limpos, regule a temperatura para cerca de 23°C e mantenha portas e janelas fechadas para evitar a entrada de ar quente.",
  },
  {
    icon: <Tv className="w-5 h-5 text-primary" />,
    title: "Evite o modo stand-by",
    content: "Aparelhos em modo de espera continuam consumindo energia. Desligue-os da tomada quando não estiverem em uso por um longo período.",
  },
  {
    icon: <Lamp className="w-5 h-5 text-primary" />,
    title: "Iluminação eficiente",
    content: "Troque lâmpadas incandescentes por LED, que são mais econômicas e duráveis. Aproveite a luz natural sempre que possível.",
  },
  {
    icon: <Zap className="w-5 h-5 text-primary" />,
    title: "Cuidado com o 'ladrão' de energia",
    content: "Carregadores de celular e outros aparelhos conectados à tomada sem uso continuam consumindo energia. Retire-os da tomada após o uso.",
  },
];

export default function EconomyTipsTab() {
  return (
    <Card className="max-w-3xl mx-auto">
      <CardHeader className="text-center">
        <div className="flex justify-center items-center mb-2">
            <Lightbulb className="w-8 h-8 text-primary" />
        </div>
        <CardTitle>Dicas de Economia de Energia</CardTitle>
        <CardDescription>Pequenas mudanças de hábito que fazem uma grande diferença na sua conta de luz.</CardDescription>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          {tips.map((tip, index) => (
            <AccordionItem value={`item-${index}`} key={index}>
              <AccordionTrigger>
                <div className="flex items-center gap-4">
                  {tip.icon}
                  <span className="font-semibold">{tip.title}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pl-14">
                {tip.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  );
}
