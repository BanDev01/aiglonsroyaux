import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Votre nom doit contenir au moins 2 caractères."),
  phone: z
    .string()
    .trim()
    .min(6, "Veuillez indiquer un numéro de téléphone valide."),
  email: z.string().trim().email("Veuillez indiquer une adresse email valide."),
  subject: z.string().trim().min(2, "Veuillez préciser l'objet de votre message."),
  message: z
    .string()
    .trim()
    .min(10, "Votre message doit contenir au moins 10 caractères."),
});

export type ContactFormValues = z.infer<typeof contactSchema>;

export const admissionSchema = z.object({
  name: z.string().trim().min(2, "Le nom complet de l'enfant est requis."),
  parentName: z.string().trim().min(2, "Le nom du parent/tuteur est requis."),
  phone: z
    .string()
    .trim()
    .min(6, "Veuillez indiquer un numéro de téléphone valide."),
  email: z.string().trim().email("Veuillez indiquer une adresse email valide."),
  desiredClass: z.string().trim().min(1, "Veuillez sélectionner une classe souhaitée."),
  message: z.string().trim().optional(),
});

export type AdmissionFormValues = z.infer<typeof admissionSchema>;
