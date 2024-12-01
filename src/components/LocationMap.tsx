import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { motion } from 'framer-motion';
import { MapPin, Navigation } from 'lucide-react';

const mapContainerStyle = {
  width: '100%',
  height: '400px',
};

// Coordenadas de ambos lugares
const iglesiaLocation = {
  lat: 40.4168,  // Ejemplo de coordenadas de la iglesia
  lng: -3.7038,
};

const jardinLocation = {
  lat: 40.4178,  // Ejemplo de coordenadas del jardín
  lng: -3.7050,
};

export function LocationMap() {
  // Función para abrir las direcciones en Google Maps
  const handleGetDirections = (place: string) => {
    const url = place === "iglesia" 
      ? `https://maps.app.goo.gl/7PNY9sbZkRLgvumG8`  // Enlace para la iglesia
      : `https://maps.app.goo.gl/j4iQEX9smN6fe7Tb8`;     // Enlace para el jardín
    window.open(url);
  };

  return (
    <section className="max-w-4xl mx-auto p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-antiflash-white/90 rounded-lg shadow-xl overflow-hidden"
      >
        <div className="p-6 bg-gradient-elegant">
          {/* Sección de la Iglesia */}
          <h2 className="font-serif text-3xl mb-4 text-antiflash-white flex items-center gap-2">
            <MapPin className="w-6 h-6" />
            Cómo Llegar a Ceremonia
          </h2>
          <p className="text-antiflash-white/90 mb-6">
            Capilla San Peregrino Laziosi<br />
          </p>
          <button
            onClick={() => handleGetDirections("iglesia")}
            className="inline-flex items-center px-4 py-2 bg-antiflash-white text-onyx rounded-md hover:bg-antiflash-white/90 transition-colors duration-300"
          >
            <Navigation className="w-4 h-4 mr-2" />
            Obtener Direcciones
          </button>
        </div>

        {/* Sección del Jardín */}
        <div className="p-6 bg-gradient-elegant mt-8">
          <h2 className="font-serif text-3xl mb-4 text-antiflash-white flex items-center gap-2">
            <MapPin className="w-6 h-6" />
            Cómo Llegar a Recepción
          </h2>
          <p className="text-antiflash-white/90 mb-6">
            Jardin Bellagio Ags<br />
          </p>
          <button
            onClick={() => handleGetDirections("jardin")}
            className="inline-flex items-center px-4 py-2 bg-antiflash-white text-onyx rounded-md hover:bg-antiflash-white/90 transition-colors duration-300"
          >
            <Navigation className="w-4 h-4 mr-2" />
            Obtener Direcciones
          </button>
        </div>
      </motion.div>
    </section>
  );
}
