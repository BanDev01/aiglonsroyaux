"use client";

import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Loader2, Send } from "lucide-react";
import { admissionSchema, type AdmissionFormValues } from "@/lib/validations";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const classes = [
  "Maternelle 1",
  "Maternelle 2",
  "Maternelle 3",
  "1ère – 6ème Primaire",
  "7ème – 8ème (Éducation de base)",
  "Secondaire Général (1ère – 4ème)",
  "Secondaire Technique (1ère – 4ème)",
];

export function AdmissionForm() {
  const [submitting, setSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<AdmissionFormValues>({
    resolver: zodResolver(admissionSchema),
    defaultValues: {
      name: "",
      parentName: "",
      phone: "",
      email: "",
      desiredClass: "",
      message: "",
    },
  });

  async function onSubmit(values: AdmissionFormValues) {
    setSubmitting(true);
    try {
      const res = await fetch("/api/admissions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error("Request failed");
      toast.success("Votre demande a bien été envoyée !", {
        description: "Notre équipe vous recontactera très prochainement.",
      });
      reset();
    } catch {
      toast.error("Une erreur est survenue", {
        description: "Veuillez réessayer ou nous contacter directement par téléphone.",
      });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="name">Nom complet de l&apos;enfant</Label>
          <Input id="name" placeholder="Ex : Grâce Ilunga" {...register("name")} />
          {errors.name && <p className="text-xs text-destructive">{errors.name.message}</p>}
        </div>
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="parentName">Nom du parent / tuteur</Label>
          <Input id="parentName" placeholder="Votre nom complet" {...register("parentName")} />
          {errors.parentName && (
            <p className="text-xs text-destructive">{errors.parentName.message}</p>
          )}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="phone">Téléphone</Label>
          <Input id="phone" placeholder="+243 8XX XXX XXX" {...register("phone")} />
          {errors.phone && <p className="text-xs text-destructive">{errors.phone.message}</p>}
        </div>
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="vous@email.com" {...register("email")} />
          {errors.email && <p className="text-xs text-destructive">{errors.email.message}</p>}
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <Label htmlFor="desiredClass">Classe souhaitée</Label>
        <Controller
          control={control}
          name="desiredClass"
          render={({ field }) => (
            <Select value={field.value} onValueChange={field.onChange}>
              <SelectTrigger id="desiredClass" className="w-full">
                <SelectValue placeholder="Sélectionnez une classe" />
              </SelectTrigger>
              <SelectContent>
                {classes.map((c) => (
                  <SelectItem key={c} value={c}>
                    {c}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        />
        {errors.desiredClass && (
          <p className="text-xs text-destructive">{errors.desiredClass.message}</p>
        )}
      </div>

      <div className="flex flex-col gap-1.5">
        <Label htmlFor="message">Message (optionnel)</Label>
        <Textarea
          id="message"
          rows={4}
          placeholder="Informations complémentaires sur votre demande..."
          {...register("message")}
        />
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gold-500 px-6 py-3.5 text-sm font-semibold text-royal-950 shadow-lg shadow-gold-500/30 transition-all hover:-translate-y-0.5 hover:bg-gold-400 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {submitting ? (
          <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
        ) : (
          <Send className="h-4 w-4" aria-hidden />
        )}
        Envoyer ma demande d&apos;admission
      </button>
    </form>
  );
}
