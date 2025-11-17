"use client";

import { useData } from "@/contexts/data-context";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Save } from "lucide-react";

const settingsSchema = z.object({
  baseRate: z.coerce.number().min(0, "A tarifa deve ser um valor positivo."),
  activeTariffKey: z.string(),
});

type SettingsFormValues = z.infer<typeof settingsSchema>;

export default function SettingsTab() {
  const { config, updateConfig } = useData();
  const { toast } = useToast();

  const form = useForm<SettingsFormValues>({
    resolver: zodResolver(settingsSchema),
    defaultValues: {
      baseRate: config.baseRate,
      activeTariffKey: config.activeTariffKey,
    },
  });

  function onSubmit(data: SettingsFormValues) {
    updateConfig(data);
    toast({
      title: "Configurações Salvas!",
      description: "Suas novas configurações de tarifa foram aplicadas.",
    });
  }
  
  const getTariffDisplayName = (key: string) => {
    return key.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  }

  return (
    <Card className="max-w-2xl mx-auto">
        <CardHeader>
            <CardTitle>Configurações do Sistema</CardTitle>
            <CardDescription>Ajuste as tarifas de energia e outras configurações da sua casa.</CardDescription>
        </CardHeader>
        <CardContent>
            <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                control={form.control}
                name="baseRate"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Tarifa Base (R$/kWh)</FormLabel>
                    <FormControl>
                        <Input type="number" step="0.01" placeholder="0.75" {...field} />
                    </FormControl>
                    <FormDescription>
                        Este é o custo base por quilowatt-hora.
                    </FormDescription>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="activeTariffKey"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Bandeira Tarifária Ativa</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                        <SelectTrigger>
                            <SelectValue placeholder="Selecione uma bandeira" />
                        </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                        {Object.entries(config.tariffs).map(([key, tariff]) => (
                            <SelectItem key={key} value={key}>
                                <div className="flex items-center gap-2">
                                    <span className="w-3 h-3 rounded-full" style={{backgroundColor: tariff.color}}/>
                                    <span>{getTariffDisplayName(key)} (+R$ {tariff.additionalCostPerkWh.toFixed(5).replace('.',',')}/kWh)</span>
                                </div>
                            </SelectItem>
                        ))}
                        </SelectContent>
                    </Select>
                    <FormDescription>
                        A bandeira ativa adiciona um custo à sua conta de energia.
                    </FormDescription>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <Button type="submit">
                <Save className="w-4 h-4 mr-2" />
                Salvar Alterações
                </Button>
            </form>
            </Form>
        </CardContent>
    </Card>
  );
}
