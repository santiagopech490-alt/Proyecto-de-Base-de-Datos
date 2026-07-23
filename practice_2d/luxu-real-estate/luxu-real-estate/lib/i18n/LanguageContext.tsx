'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'es' | 'en';

const translations = {
  es: {
    nav: {
      dashboard: "Panel",
      buy: "Comprar",
      rent: "Rentar",
      sell: "Vender",
      savedHomes: "Favoritos",
      users: "Usuarios",
      profile: "Mi Perfil",
      signIn: "Iniciar Sesión",
      signOut: "Cerrar Sesión",
    },
    hero: {
      title: "Encuentra Tu Santuario de Lujo",
      subtitle: "Descubre propiedades exclusivas en las mejores ubicaciones del mundo",
      searchPlaceholder: "Buscar por ciudad, vecindario...",
      forSale: "En Venta",
      forRent: "En Renta",
      allTypes: "Todos los Tipos",
      searchBtn: "Buscar",
    },
    properties: {
      availableProperties: "Propiedades Disponibles",
      availableSubtitle: "Descubre bienes raíces de alta gama en los destinos más exclusivos.",
      quickSearch: "Búsqueda rápida...",
      filters: "Filtros",
      beds: "Hab",
      baths: "Baños",
      sqft: "m²",
      viewDetails: "Ver Detalles",
      forSaleBadge: "EN VENTA",
      forRentBadge: "EN RENTA",
      activeBadge: "ACTIVO",
    },
    auth: {
      welcomeBack: "Bienvenido de nuevo",
      loginSubtitle: "Inicia sesión en tu cuenta LuxeEstate",
      emailLabel: "Correo Electrónico",
      passwordLabel: "Contraseña",
      signInBtn: "Iniciar Sesión",
      demoLoginBtn: "Acceso Demo Instantáneo (1-Clic)",
      googleLogin: "Continuar con Google",
      githubLogin: "Continuar con GitHub",
      orJoin: "O ÚNETE A NUESTRA COMUNIDAD",
      noAccount: "¿No tienes una cuenta?",
      signUpLink: "Regístrate",
      privacy: "POLÍTICA DE PRIVACIDAD",
      terms: "TÉRMINOS DEL SERVICIO",
      help: "CENTRO DE AYUDA",
    },
    profile: {
      title: "Tu Panel de Lujo",
      memberSince: "Miembro desde",
      signOut: "Cerrar Sesión",
      saved: "GUARDADOS",
      visits: "VISITAS",
      sold: "VENDIDOS",
      savedProperties: "Propiedades Guardadas",
      scheduledVisits: "Visitas Agendadas",
      preferencesSettings: "Preferencias y Ajustes",
      noSavedYet: "Aún no tienes propiedades guardadas.",
      noVisitsYet: "No tienes visitas agendadas por el momento.",
      fullName: "Nombre Completo",
      location: "Ubicación",
      notifications: "Notificaciones",
      emailNotifications: "Notificaciones por Correo",
      pushNotifications: "Notificaciones Push",
      smsNotifications: "Notificaciones por SMS",
      saveChanges: "Guardar Cambios",
    },
    admin: {
      myProperties: "Mis Propiedades",
      addNewProperty: "Agregar Nueva Propiedad",
      totalListings: "Total de Propiedades",
      activeProperties: "Propiedades Activas",
      pendingSale: "Ventas Pendientes",
      propertyDetails: "Detalles de la Propiedad",
      price: "Precio",
      status: "Estado",
      actions: "Acciones",
      activeBadge: "Activa",
      forSaleBadge: "En Venta",
      forRentBadge: "En Renta",
    },
    createListing: {
      title: "Crear Nueva Propiedad",
      cancel: "Cancelar",
      publish: "Publicar Propiedad",
      basicInfo: "Información Básica",
      propertyTitle: "Título de la Propiedad",
      titlePlaceholder: "ej. Mansión Moderna con Vista al Mar",
      description: "Descripción",
      descPlaceholder: "Describe los detalles de esta lujosa propiedad...",
      locationPricing: "Ubicación y Precio",
      addressLocation: "Dirección / Ubicación",
      addressPlaceholder: "ej. Beverly Hills, CA",
      price: "Precio ($)",
      specifications: "Especificaciones",
      bedrooms: "HABITACIONES",
      bathrooms: "BAÑOS",
      sqft: "M² / METROS",
      garage: "ESTACIONAMIENTO",
      mainImage: "URL de Imagen Principal",
      imageHint: "Pega el enlace directo a una imagen de la propiedad (JPG/PNG).",
      successMsg: "¡Propiedad publicada exitosamente!",
    },
    details: {
      bedrooms: "Habitaciones",
      bathrooms: "Baños",
      sqft: "Metros Cuadrados",
      garage: "Cochera / Estacionamiento",
      scheduleViewing: "Agendar Visita",
      verified: "Verificado",
      specialist: "Especialista en Propiedades de Lujo",
      reviews: "reseñas",
      message: "Mensaje",
      call: "Llamar",
      scheduleVisit: "Agendar Visita",
      contactAgent: "Contactar Agente",
      location: "Ubicación",
      mapPreview: "Vista previa del mapa",
      estimatedPayment: "Pago Estimado",
      startingFrom: "A partir de",
      withDown: "con 20% de enganche",
      calcMortgage: "Calcular Hipoteca",
      aboutProperty: "Acerca de la Propiedad",
      amenities: "Amenidades y Servicios",
      viewAllPhotos: "Ver todas las fotos",
      forSale: "EN VENTA",
      forRent: "EN RENTA",
      newListing: "NUEVA PROPIEDAD",
    },
    schedulePage: {
      backToProperty: "Volver a detalles de la propiedad",
      scheduleViewingTitle: "Agendar una Visita",
      scheduleViewingSubtitle: "Elige una fecha y hora para recorrer la propiedad en persona.",
      selectDate: "Seleccionar Fecha",
      availableTimes: "Horarios Disponibles",
      messageAgent: "Mensaje para el Agente (Opcional)",
      messagePlaceholder: "¿Tienes alguna pregunta o requerimiento específico?",
      cancel: "Cancelar",
      confirmVisit: "Confirmar Visita",
      hostedBy: "Anfitrión:",
      beds: "Habitaciones",
      baths: "Baños",
      sqft: "m²",
      successTitle: "¡Visita Agendada!",
      successDesc: "Tu cita ha sido confirmada. El agente se pondrá en contacto contigo muy pronto.",
      close: "Cerrar",
    },
    userDirectory: {
      title: "Directorio de Usuarios",
      subtitle: "Gestiona el acceso y roles de usuario para tus propiedades.",
      searchPlaceholder: "Buscar por nombre, correo...",
      addUser: "Agregar Usuario",
      addNewUserTitle: "Agregar Nuevo Usuario",
      allUsers: "Todos los Usuarios",
      agents: "Agentes",
      brokers: "Corredores",
      admins: "Administradores",
      userDetails: "DETALLES DE USUARIO",
      roleStatus: "ROL Y ESTADO",
      performance: "RENDIMIENTO",
      actions: "ACCIONES",
      properties: "Propiedades",
      salesYtd: "Ventas (Año)",
      changeRole: "Cambiar Rol",
      suspendUser: "Suspender Usuario",
    }
  },
  en: {
    nav: {
      dashboard: "Dashboard",
      buy: "Buy",
      rent: "Rent",
      sell: "Sell",
      savedHomes: "Saved Homes",
      users: "Users",
      profile: "Profile",
      signIn: "Sign In",
      signOut: "Sign Out",
    },
    hero: {
      title: "Find Your Luxury Sanctuary",
      subtitle: "Discover exclusive properties in the best locations worldwide",
      searchPlaceholder: "Search by city, neighborhood...",
      forSale: "For Sale",
      forRent: "For Rent",
      allTypes: "All Types",
      searchBtn: "Search",
    },
    properties: {
      availableProperties: "Available Properties",
      availableSubtitle: "Discover premium real estate in exclusive locations.",
      quickSearch: "Quick search...",
      filters: "Filters",
      beds: "Beds",
      baths: "Baths",
      sqft: "sqft",
      viewDetails: "View Details",
      forSaleBadge: "FOR SALE",
      forRentBadge: "FOR RENT",
      activeBadge: "ACTIVE",
    },
    auth: {
      welcomeBack: "Welcome back",
      loginSubtitle: "Login to your LuxeEstate account",
      emailLabel: "Email address",
      passwordLabel: "Password",
      signInBtn: "Sign In",
      demoLoginBtn: "Instant Demo Access (1-Click)",
      googleLogin: "Continue with Google",
      githubLogin: "Continue with GitHub",
      orJoin: "OR JOIN OUR COMMUNITY",
      noAccount: "Don't have an account?",
      signUpLink: "Sign up",
      privacy: "PRIVACY POLICY",
      terms: "TERMS OF SERVICE",
      help: "HELP CENTER",
    },
    profile: {
      title: "Your Luxury Dashboard",
      memberSince: "Member since",
      signOut: "Sign Out",
      saved: "SAVED",
      visits: "VISITS",
      sold: "SOLD",
      savedProperties: "Saved Properties",
      scheduledVisits: "Scheduled Visits",
      preferencesSettings: "Preferences & Settings",
      noSavedYet: "No saved properties yet.",
      noVisitsYet: "No scheduled visits at this time.",
      fullName: "Full Name",
      location: "Location",
      notifications: "Notifications",
      emailNotifications: "Email Notifications",
      pushNotifications: "Push Notifications",
      smsNotifications: "SMS Notifications",
      saveChanges: "Save Changes",
    },
    admin: {
      myProperties: "My Properties",
      addNewProperty: "Add New Property",
      totalListings: "Total Listings",
      activeProperties: "Active Properties",
      pendingSale: "Pending Sale",
      propertyDetails: "Property Details",
      price: "Price",
      status: "Status",
      actions: "Actions",
      activeBadge: "Active",
      forSaleBadge: "For Sale",
      forRentBadge: "For Rent",
    },
    createListing: {
      title: "Create New Listing",
      cancel: "Cancel",
      publish: "Publish Property",
      basicInfo: "Basic Information",
      propertyTitle: "Property Title",
      titlePlaceholder: "e.g. Modern Villa with Sea View",
      description: "Description",
      descPlaceholder: "Tell potential buyers about this luxury home...",
      locationPricing: "Location & Pricing",
      addressLocation: "Address / Location",
      addressPlaceholder: "e.g. Beverly Hills, CA",
      price: "Price ($)",
      specifications: "Specifications",
      bedrooms: "BEDROOMS",
      bathrooms: "BATHROOMS",
      sqft: "SQ FT",
      garage: "GARAGE",
      mainImage: "Main Image URL",
      imageHint: "Paste a direct link to a property image (JPG/PNG).",
      successMsg: "Property added successfully!",
    },
    details: {
      bedrooms: "Bedrooms",
      bathrooms: "Bathrooms",
      sqft: "Sq.Ft.",
      garage: "Car Garage",
      scheduleViewing: "Schedule Viewing",
      verified: "Verified",
      specialist: "Luxury Properties Specialist",
      reviews: "reviews",
      message: "Message",
      call: "Call",
      scheduleVisit: "Schedule Visit",
      contactAgent: "Contact Agent",
      location: "Location",
      mapPreview: "Static Map Preview",
      estimatedPayment: "Estimated Payment",
      startingFrom: "Starting from",
      withDown: "with 20% down",
      calcMortgage: "Calculate Mortgage",
      aboutProperty: "About this Home",
      amenities: "Amenities & Features",
      viewAllPhotos: "View All Photos",
      forSale: "FOR SALE",
      forRent: "FOR RENT",
      newListing: "NEW LISTING",
    },
    schedulePage: {
      backToProperty: "Back to property details",
      scheduleViewingTitle: "Schedule a Viewing",
      scheduleViewingSubtitle: "Choose a date and time to tour the property in person.",
      selectDate: "Select Date",
      availableTimes: "Available Times",
      messageAgent: "Message for the Agent (Optional)",
      messagePlaceholder: "Any specific questions or requests?",
      cancel: "Cancel",
      confirmVisit: "Confirm Visit",
      hostedBy: "Hosted by",
      beds: "Beds",
      baths: "Baths",
      sqft: "sqft",
      successTitle: "Viewing Scheduled!",
      successDesc: "Your appointment has been confirmed. The agent will contact you shortly.",
      close: "Close",
    },
    userDirectory: {
      title: "User Directory",
      subtitle: "Manage user access and roles for your properties.",
      searchPlaceholder: "Search by name, email...",
      addUser: "Add User",
      addNewUserTitle: "Add New User",
      allUsers: "All Users",
      agents: "Agents",
      brokers: "Brokers",
      admins: "Admins",
      userDetails: "USER DETAILS",
      roleStatus: "ROLE & STATUS",
      performance: "PERFORMANCE",
      actions: "ACTIONS",
      properties: "Properties",
      salesYtd: "Sales (YTD)",
      changeRole: "Change Role",
      suspendUser: "Suspend User",
    }
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (path: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('es');

  useEffect(() => {
    const saved = localStorage.getItem('luxe_language') as Language;
    if (saved === 'es' || saved === 'en') {
      setLanguageState(saved);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('luxe_language', lang);
    document.cookie = `luxe_lang=${lang}; path=/; max-age=31536000`;
  };

  const t = (path: string): string => {
    const keys = path.split('.');
    let current: any = translations[language];
    for (const key of keys) {
      if (current && current[key] !== undefined) {
        current = current[key];
      } else {
        let fallback: any = translations['en'];
        for (const k of keys) {
          if (fallback && fallback[k] !== undefined) fallback = fallback[k];
        }
        return typeof fallback === 'string' ? fallback : path;
      }
    }
    return typeof current === 'string' ? current : path;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    return {
      language: 'es' as Language,
      setLanguage: () => {},
      t: (path: string) => path,
    };
  }
  return context;
}
