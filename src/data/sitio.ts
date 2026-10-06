// Textos editables del sitio. Teléfono, email y WhatsApp son provisorios.
export const CONTACTO = {
  telefono: "+56 9 0000 0000",
  email: "contacto@smartplaces.cl",
  direccion: "Las Condes, Santiago",
  whatsapp: "56900000000",
};

export type Pilar = "Seguridad" | "Protección" | "Confort" | "Energía";

export const slides = [
  { titulo: ["Seguridad que", "actúa antes"], texto: "Tu casa detecta, disuade y avisa antes de que algo pase.", cta: "Cotiza tu casa", href: "#contacto", img: "house1" },
  { titulo: ["Protección", "total"], texto: "Gas, humo, CO e inundación: alerta temprana y corte automático.", cta: "Ver soluciones", href: "#soluciones", img: "cocina" },
  { titulo: ["Confort", "inteligente"], texto: "Luces, cortinas y clima que se adaptan a tu rutina.", cta: "Ver soluciones", href: "#soluciones", img: "living" },
  { titulo: ["Energía", "bajo control"], texto: "Mide y reduce tu consumo eléctrico.", cta: "Ver soluciones", href: "#soluciones", img: "energia" },
] as const;

export const pilares: { nombre: Pilar; texto: string }[] = [
  { nombre: "Seguridad", texto: "Cámaras con IA y disuasión antes de que alguien entre." },
  { nombre: "Protección", texto: "Gas, humo, CO e inundación con corte automático." },
  { nombre: "Confort", texto: "Luces, cortinas y clima según tu rutina." },
  { nombre: "Energía", texto: "Medición y ahorro en tiempo real." },
];

export const zonas = [
  { n: 1, nombre: "Perímetro / vereda", x: 65, y: 93, detecta: "Personas y vehículos que se detienen frente a tu casa.", disuade: "Cámara con IA que ignora a quien solo pasa.", avisa: "Notificación a tu celular con imagen." },
  { n: 2, nombre: "Reja y antejardín", x: 44, y: 78, detecta: "Apertura de reja o presencia en el antejardín.", disuade: "Luz intensa y sirena disuasiva al instante.", avisa: "Tu celular y familiares que definas." },
  { n: 3, nombre: "Fachada y acceso", x: 42, y: 57, detecta: "Quién toca la puerta o manipula la chapa.", disuade: "Cámara de puerta con voz y chapa inteligente.", avisa: "Videollamada al celular desde cualquier lugar." },
  { n: 4, nombre: "Interior", x: 24, y: 36, detecta: "Movimiento, gas, humo e inundación.", disuade: "Sirena interior y corte automático de válvulas.", avisa: "Tú, tu familia y nuestro equipo técnico." },
];

export const tiempo = ["Detecta", "Disuade", "Avisa", "Escala"];

export const escalera = ["Reconexión", "Reinicio de servicio", "Reinicio de cámara", "Reinicio de red", "Aviso al técnico"];

export const dispositivos: { nombre: string; texto: string; pilar: Pilar; icono: string }[] = [
  { nombre: "Cámara IP con IA", texto: "Distingue personas, vehículos y mascotas. Graba local.", pilar: "Seguridad", icono: "Cctv" },
  { nombre: "Sensor de movimiento", texto: "Detecta presencia en interiores con inmunidad a mascotas.", pilar: "Seguridad", icono: "Activity" },
  { nombre: "Sensor puerta/ventana", texto: "Avisa cada apertura. Discreto e inalámbrico.", pilar: "Seguridad", icono: "DoorOpen" },
  { nombre: "Detector de gas", texto: "Alerta temprana y corte automático de la válvula.", pilar: "Protección", icono: "Flame" },
  { nombre: "Detector de CO", texto: "Monóxido de carbono, el riesgo invisible del invierno.", pilar: "Protección", icono: "Wind" },
  { nombre: "Detector de humo", texto: "Alarma local y aviso a tu celular, aunque no estés.", pilar: "Protección", icono: "CloudFog" },
  { nombre: "Sensor de inundación + válvula", texto: "Detecta filtraciones y corta el agua solo.", pilar: "Protección", icono: "Droplets" },
  { nombre: "Chapa inteligente", texto: "Abre con código, huella o desde la app.", pilar: "Seguridad", icono: "LockKeyhole" },
  { nombre: "Sirena / luz disuasiva", texto: "Ahuyenta antes de que alguien cruce la reja.", pilar: "Seguridad", icono: "Siren" },
  { nombre: "Enchufe con medición", texto: "Controla equipos y mide su consumo real.", pilar: "Energía", icono: "Plug" },
  { nombre: "Control de luces", texto: "Escenas, horarios y simulación de presencia.", pilar: "Confort", icono: "Lightbulb" },
  { nombre: "Control de clima (IR)", texto: "Tu aire acondicionado, inteligente y programado.", pilar: "Confort", icono: "Thermometer" },
];

export const pasos = [
  { titulo: "Visita técnica", texto: "Diagnóstico gratuito de tu casa." },
  { titulo: "Propuesta por zonas", texto: "Diseño a medida, sin equipos de más." },
  { titulo: "Instalación", texto: "Configuración completa y capacitación." },
  { titulo: "Monitoreo", texto: "Mantención continua y soporte." },
];

export const planes = [
  { nombre: "Esencial", sub: "Antejardín y acceso", items: ["2 cámaras con IA", "Sensor de reja", "Luz y sirena disuasiva", "Alertas al celular"], destacado: false },
  { nombre: "Hogar Protegido", sub: "Exterior + interior", items: ["Todo lo de Esencial", "Sensores interiores", "Gas, CO y humo", "Inundación con corte de agua"], destacado: true },
  { nombre: "Total", sub: "Continuidad garantizada", items: ["Todo lo anterior", "Respaldo de energía", "Internet 4G de respaldo", "Mantención predictiva"], destacado: false },
];

export const cooperacion = {
  niveles: ["Piloto", "Proyecto", "Proyecto + difusión"],
  filas: [
    { item: "Departamento modelo equipado", v: [true, true, true] },
    { item: "Capacitación a sala de ventas", v: [true, true, true] },
    { item: "Implementación por vivienda", v: [false, true, true] },
    { item: "Precio preferente para compradores", v: [false, true, true] },
    { item: "Material promocional conjunto", v: [false, false, true] },
  ],
};

export const compatibilidad = ["Home Assistant", "Z-Wave", "Zigbee", "Wi-Fi", "ONVIF", "Apple Home", "Google Home", "Alexa"];

export const faqs = [
  { p: "¿Necesito internet?", r: "No para lo esencial: sensores, sirenas y grabación funcionan localmente. Internet se usa para avisarte al celular; el plan Total incluye respaldo 4G." },
  { p: "¿Qué pasa si se corta la luz?", r: "Los equipos críticos pueden ir con respaldo de energía (UPS) para seguir funcionando y avisarte del corte." },
  { p: "¿Quién ve mis cámaras?", r: "Solo tú y quienes autorices. Las grabaciones se guardan en tu casa, no en servidores de terceros." },
  { p: "¿Puedo ampliarlo después?", r: "Sí. Trabajamos con estándares abiertos, así que puedes agregar zonas y dispositivos cuando quieras." },
  { p: "¿Hay contrato de permanencia?", r: "Te lo explicamos con claridad en la propuesta. Buscamos que te quedes porque funciona, no por un contrato." },
  { p: "¿Qué cubre la garantía?", r: "Equipos e instalación tienen garantía; con monitoreo activo, la mantención y el reemplazo por fallas están incluidos." },
];

export const comunas = ["Las Condes", "Vitacura", "Lo Barnechea", "Providencia", "Ñuñoa", "La Reina", "Peñalolén", "Santiago", "La Florida", "Macul", "Maipú", "Huechuraba", "Colina", "Chicureo", "San Miguel", "Otra"];
