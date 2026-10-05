CREATE TABLE public.leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  nombre TEXT NOT NULL,
  telefono TEXT NOT NULL,
  email TEXT NOT NULL,
  comuna TEXT NOT NULL,
  tipo_propiedad TEXT NOT NULL,
  intereses TEXT[] NOT NULL DEFAULT '{}',
  origen TEXT NOT NULL DEFAULT 'sitio_web',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

GRANT INSERT ON public.leads TO anon;
GRANT ALL ON public.leads TO service_role;

ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Cualquier visitante puede enviar un lead"
ON public.leads
FOR INSERT
TO anon
WITH CHECK (true);