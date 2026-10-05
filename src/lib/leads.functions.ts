import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

export const leadSchema = z.object({
  nombre: z.string().trim().min(2, "Ingresa tu nombre").max(100, "Nombre demasiado largo"),
  telefono: z
    .string()
    .trim()
    .min(8, "Ingresa un teléfono válido")
    .max(20, "Teléfono demasiado largo")
    .regex(/^[0-9+\s()-]+$/, "El teléfono solo puede tener números, + y espacios"),
  email: z.string().trim().email("Ingresa un email válido").max(255, "Email demasiado largo"),
  comuna: z.string().trim().min(2, "Ingresa tu comuna").max(80, "Comuna demasiado larga"),
  tipoPropiedad: z.enum(["casa", "departamento", "condominio", "local"], {
    message: "Selecciona el tipo de propiedad",
  }),
  intereses: z.array(z.string().max(50)).max(10, "Demasiados intereses").default([]),
});

export type LeadInput = z.input<typeof leadSchema>;

export const enviarLead = createServerFn({ method: "POST" })
  .inputValidator((data) => leadSchema.parse(data))
  .handler(async ({ data }) => {
    const { createClient } = await import("@supabase/supabase-js");
    const supabase = createClient(
      process.env["SUPABASE_URL"]!,
      process.env["SUPABASE_PUBLISHABLE_KEY"]!,
      { auth: { storage: undefined, persistSession: false, autoRefreshToken: false } },
    );

    const { error } = await supabase.from("leads").insert({
      nombre: data.nombre,
      telefono: data.telefono,
      email: data.email,
      comuna: data.comuna,
      tipo_propiedad: data.tipoPropiedad,
      intereses: data.intereses,
      origen: "sitio_web",
    });

    if (error) {
      throw new Error("No pudimos guardar tu solicitud. Intenta de nuevo.");
    }

    return { ok: true };
  });
