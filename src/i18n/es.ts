import { Translations } from "./types";

export const es: Translations = {
  nav: {
    capabilities: "Capacidades",
    approach: "Metodología",
    technology: "Tecnología",
    portfolio: "Portafolio",
    contact: "Contacto",
  },
  hero: {
    label: "Ingeniería de Software Empresarial",
    line1: "SISTEMAS",
    line2: "DISEÑADOS",
    line3: "CON PRECISIÓN",
    subtitle1: "Software con arquitectura definida para operaciones empresariales.",
    subtitle2: "Diseñado para escalar. Construido para perdurar.",
    cta: "Iniciar Conversación",
  },
  capabilities: {
    label: "Lo Que Construimos",
    title1: "Arquitectura",
    title2: "de Capacidades",
    services: [
      {
        title: "Plataformas Web",
        description:
          "Sistemas web de nivel empresarial diseñados para escala, confiabilidad y claridad operativa a largo plazo. Arquitectamos plataformas que funcionan como infraestructura central del negocio — no como superficies de marketing desechables. Cada decisión está fundamentada en modelado de dominio, restricciones de rendimiento y estrategia de despliegue.",
      },
      {
        title: "Automatización de Procesos",
        description:
          "Eliminación sistemática de fricción operativa a través de flujos de trabajo ingenieriles. Construimos pipelines de automatización que se integran con la infraestructura existente, aplican reglas de negocio a nivel de sistema y reducen la intervención manual en operaciones críticas. Orquestación de webhooks, arquitectura orientada a eventos, ejecución determinística.",
      },
      {
        title: "Sistemas a Medida",
        description:
          "Software construido a propósito para organizaciones cuyos requisitos superan las soluciones genéricas. Desde herramientas internas hasta plataformas específicas de dominio, diseñamos sistemas con límites claros, contratos tipados y arquitectura mantenible. Construidos para evolucionar con el negocio, no en su contra.",
      },
    ],
  },
  approach: {
    label: "Cómo Trabajamos",
    title1: "Metodología",
    title2: "de Ingeniería",
    phases: [
      {
        title: "Descubrimiento",
        description:
          "Mapeamos el panorama operativo — sistemas existentes, flujos de datos, requisitos de stakeholders y restricciones técnicas. Sin suposiciones. Cada decisión se fundamenta en evidencia y comprensión del dominio.",
      },
      {
        title: "Arquitectura",
        description:
          "Los límites del sistema se definen antes de escribir una sola línea de código. Diseñamos modelos de datos, contratos de API, topología de infraestructura y estrategia de despliegue como un plano unificado.",
      },
      {
        title: "Implementación",
        description:
          "Código modular, tipado y testeable entregado en ciclos iterativos. Integración continua desde el día uno. Cada componente se construye con interfaces claras y comportamiento documentado.",
      },
      {
        title: "Optimización",
        description:
          "Auditoría de rendimiento post-despliegue, configuración de monitoreo y refinamiento sistemático. Medimos el comportamiento real y optimizamos contra métricas concretas — no suposiciones.",
      },
    ],
  },
  techStack: {
    label: "Tecnología",
    title1: "Stack",
    title2: "Tecnológico",
    frontend: "Frontend",
    backend: "Backend",
    infrastructure: "Infraestructura",
  },
  portfolio: {
    label: "Portafolio",
    title1: "Proyectos",
    title2: "Seleccionados",
  },
  security: {
    label: "Estándares",
    title1: "Seguridad y",
    title2: "Estándares",
    items: [
      {
        title: "Autenticación y Control de Acceso",
        description:
          "Control de acceso basado en roles, autenticación multifactor, gestión de sesiones y autorización basada en tokens. Cada sistema aplica el principio de mínimo privilegio a nivel de infraestructura.",
      },
      {
        title: "Monitoreo de Infraestructura",
        description:
          "Observabilidad en tiempo real en capas de aplicación, base de datos y red. Los pipelines de alertas detectan anomalías antes de que se conviertan en incidentes. Logging estructurado con agregación centralizada.",
      },
      {
        title: "Respaldo y Recuperación",
        description:
          "Respaldos automatizados de base de datos con recuperación punto en el tiempo. Planes de recuperación ante desastres probados contra objetivos definidos de RPO y RTO. Redundancia de datos entre regiones geográficas.",
      },
      {
        title: "Fiabilidad de Despliegue",
        description:
          "Despliegues sin tiempo de inactividad mediante estrategias blue-green y mecanismos de rollback automatizados. Paridad de entornos entre staging y producción. Infraestructura definida como código.",
      },
    ],
  },
  infrastructure: {
    label: "Operaciones",
    title1: "Infraestructura y",
    title2: "Continuidad",
    blocks: [
      {
        title: "Despliegue Continuo",
        description:
          "Pipelines CI/CD automatizados con promoción basada en ramas, puertas de testing automatizadas y artefactos de build determinísticos. Cada merge a main activa una ruta de despliegue validada de staging a producción.",
      },
      {
        title: "Gestión de Entornos",
        description:
          "Entornos aislados para desarrollo, staging y producción con paridad de configuración. Variables de entorno gestionadas a través de vaults encriptados. Aprovisionamiento de infraestructura versionado.",
      },
      {
        title: "Monitoreo y Alertas",
        description:
          "Monitoreo de rendimiento de aplicación, seguimiento de errores y verificaciones de uptime con umbrales de alerta configurables. Flujos de respuesta a incidentes integrados en canales de comunicación del equipo.",
      },
    ],
    slaTitle: "Marco SLA",
    slaItems: [
      {
        question: "¿Qué garantías de uptime se proporcionan?",
        answer:
          "Nuestro objetivo es 99.9% de uptime para entornos de producción. El monitoreo es continuo con alertas automatizadas para eventos de degradación. Los términos específicos del SLA se documentan por compromiso.",
      },
      {
        question: "¿Cómo se manejan los incidentes?",
        answer:
          "Los incidentes críticos activan respuesta inmediata dentro de 30 minutos durante horario laboral. Mantenemos runbooks para escenarios de fallo comunes y realizamos revisiones post-incidente para cada evento P1.",
      },
      {
        question: "¿Qué incluye el mantenimiento continuo?",
        answer:
          "Actualizaciones de dependencias, aplicación de parches de seguridad, monitoreo de rendimiento y optimización de infraestructura. Realizamos revisiones arquitectónicas trimestrales e informes de salud mensuales.",
      },
      {
        question: "¿Cómo se maneja el escalamiento?",
        answer:
          "La infraestructura se diseña con escalamiento horizontal desde el inicio. Las políticas de auto-scaling se configuran según patrones de tráfico y utilización de recursos.",
      },
    ],
  },
  contact: {
    label: "Contacto",
    title1: "¿Listo para",
    title2: "Construir?",
    description:
      "Trabajamos con organizaciones que toman su infraestructura de software en serio. Si estás planeando un sistema que necesita escalar, integrarse y perdurar — deberíamos hablar.",
    email: "contact@hyvento.com",
    form: {
      details: "Datos",
      project: "Proyecto",
      review: "Revisión",
      name: "Nombre Completo",
      emailLabel: "Correo Electrónico",
      company: "Empresa",
      service: "Servicio Requerido",
      scale: "Escala del Proyecto",
      budget: "Rango de Presupuesto",
      descriptionLabel: "Descripción del Proyecto",
      continue: "Continuar",
      back: "Atrás",
      submit: "Enviar Consulta",
      sending: "Enviando",
      successTitle: "Mensaje Recibido",
      successDescription: "Revisaremos tu consulta y responderemos dentro de dos días hábiles.",
      namePlaceholder: "Tu nombre",
      emailPlaceholder: "correo@empresa.com",
      companyPlaceholder: "Nombre de la organización",
      descriptionPlaceholder: "Describe el sistema que necesitas, el problema que resuelve y cualquier restricción técnica.",
      selectOption: "Selecciona una opción",
      summary: "Resumen",
    },
    serviceOptions: [
      { value: "web-platforms", label: "Plataformas Web" },
      { value: "process-automation", label: "Automatización de Procesos" },
      { value: "custom-systems", label: "Sistemas a Medida" },
      { value: "consulting", label: "Consultoría Técnica" },
    ],
    scaleOptions: [
      { value: "small", label: "Pequeño — Aplicación única" },
      { value: "medium", label: "Mediano — Sistema multi-módulo" },
      { value: "large", label: "Grande — Plataforma empresarial" },
      { value: "ongoing", label: "Continuo — Compromiso a largo plazo" },
    ],
    budgetOptions: [
      { value: "10k-25k", label: "$10,000 – $25,000" },
      { value: "25k-50k", label: "$25,000 – $50,000" },
      { value: "50k-100k", label: "$50,000 – $100,000" },
      { value: "100k+", label: "$100,000+" },
      { value: "undetermined", label: "Por determinar" },
    ],
  },
  footer: {
    tagline1: "Ingeniería de software empresarial.",
    tagline2: "Arquitectura primero. Pensamiento sistémico.",
    rights: "Todos los derechos reservados.",
  },
};
