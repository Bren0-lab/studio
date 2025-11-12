"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Lightbulb, Sun, PaintBucket, Plug, AlertTriangle, Home } from "lucide-react";

const tips = [
  {
    icon: <Sun className="w-5 h-5 text-primary" />,
    title: "Aproveite a iluminação natural",
    content: "Abra cortinas e persianas durante o dia. Usar a luz do sol para iluminar os ambientes é a forma mais eficiente e gratuita de economizar energia.",
  },
  {
    icon: <PaintBucket className="w-5 h-5 text-primary" />,
    title: "Pinte as paredes com cores claras",
    content: "Ambientes com paredes e tetos de cores claras refletem melhor a luz, diminuindo a necessidade de usar lâmpadas durante o dia.",
  },
    {
    icon: <Home className="w-5 h-5 text-primary" />,
    title: "Use a iluminação de forma direcionada",
    content: "Em vez de acender a luz principal do cômodo, use abajures ou luminárias para atividades como leitura. Isso consome menos energia.",
  },
  {
    icon: <Plug className="w-5 h-5 text-primary" />,
    title: "Desconecte aparelhos que não estão em uso",
    content: "Aparelhos em modo 'stand-by' ou carregadores na tomada sem o celular continuam consumindo energia. Desplugá-los pode gerar uma economia de até 12%.",
  },
  {
    icon: <AlertTriangle className="w-5 h-5 text-primary" />,
    title: "Verifique a fiação da sua casa",
    content: "Fios elétricos antigos, finos ou com emendas malfeitas podem causar fuga de corrente, o que desperdiça energia e aumenta o risco de acidentes. Consulte um eletricista.",
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
