"use client";

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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import type { Device, Room } from "@/lib/types";

const deviceSchema = z.object({
  name: z.string().min(2, "O nome deve ter pelo menos 2 caracteres."),
  power: z.coerce.number().min(1, "A potência deve ser maior que 0."),
  hours: z.coerce.number().min(0.1, "O uso diário deve ser maior que 0.").max(24, "O uso diário não pode exceder 24 horas."),
  roomId: z.string({ required_error: "Selecione um cômodo." }),
});

type DeviceFormValues = z.infer<typeof deviceSchema>;

interface AddDeviceDialogProps {
  children: React.ReactNode;
  rooms: Room[];
  addDevice: (device: Omit<Device, 'id' | 'on' | 'x' | 'y'>) => void;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export default function AddDeviceDialog({ children, rooms, addDevice, isOpen, setIsOpen }: AddDeviceDialogProps) {
  const { toast } = useToast();

  const form = useForm<DeviceFormValues>({
    resolver: zodResolver(deviceSchema),
    defaultValues: {
      name: "",
      power: 0,
      hours: 0,
    },
  });

  function onSubmit(data: DeviceFormValues) {
    addDevice(data);
    toast({
      title: "Dispositivo Adicionado!",
      description: `O dispositivo ${data.name} foi cadastrado com sucesso.`,
    });
    form.reset();
    setIsOpen(false);
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Adicionar Novo Dispositivo</DialogTitle>
          <DialogDescription>
            Preencha as informações abaixo para cadastrar um novo aparelho.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome do Dispositivo</FormLabel>
                  <FormControl>
                    <Input placeholder="Ex: TV, Geladeira, Lâmpada" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="power"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Potência (Watts)</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="150" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="hours"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Uso Diário (h)</FormLabel>
                    <FormControl>
                      <Input type="number" step="0.1" placeholder="5" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="roomId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Cômodo</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione o cômodo onde o aparelho fica" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {rooms.map((room) => (
                        <SelectItem key={room.id} value={room.id}>
                          {room.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter>
              <Button type="submit">Salvar Dispositivo</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}