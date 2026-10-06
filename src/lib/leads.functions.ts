import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

export const leadSchema = z.object({
  nombre: z.string().trim().min(2, "Ingresa tu nombre").max(100, "Nombre demasiado largo"),
  email: z.string().trim().email("Ingresa un email válido").max(255, "Email demasiado largo"),
  telefono: z
    .string()
    .trim()
    .min(8, "Ingresa un teléfono válido")
    .max(20, "Teléfono demasiado largo")
    .regex(/^[0-9+\s()-]+$/, "El teléfono solo puede tener números, + y espacios"),
  comuna: z.string().trim().min(2, "Selecciona tu comuna").max(80),
  tipoPropiedad: z.enum(["casa", "departamento", "condominio", "inmobiliaria"], {
    message: "Selecciona el tipo de propiedad",
  }),
  plan: z.string().trim().max(60).optional().default(""),
  mensaje: z.string().trim().max(1000, "Mensaje demasiado largo").optional().default(""),
  consentimiento: z.literal(true, { message: "Debes aceptar el uso de tus datos" }),
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
      intereses: data.plan ? [data.plan] : [],
      plan: data.plan || null,
      mensaje: data.mensaje || null,
      origen: "sitio_web",
    });
    if (error) throw new Error("No pudimos guardar tu solicitud. Intenta de nuevo.");
    return { ok: true };
  });
