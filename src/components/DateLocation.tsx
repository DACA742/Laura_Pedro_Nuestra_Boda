import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

export function DateLocation() {
  return (
    <section className="max-w-2xl mx-auto p-8 bg-antiflash-white/80 backdrop-blur-sm rounded-lg shadow-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Misa en la iglesia */}
        <div className="text-center">
          <Calendar className="w-8 h-8 mx-auto mb-4 text-onyx" />
          <h2 className="font-serif text-2xl mb-2 text-jet">Ceremonia</h2>
          <p className="text-dim-gray">Sábado, Octubre 11, 2025</p>
          <p className="text-dim-gray">05:30 PM</p>
          <div className="mt-4">
            <MapPin className="w-8 h-8 mx-auto mb-4 text-onyx" />
            <p className="font-serif text-xl mb-2 text-jet">Parroquia De Nuestra Señora de los Bosques</p>
            <p className="text-dim-gray">Montes Himalaya S/N, Los Bosques, 20120 Aguascalientes, Ags.</p>
          </div>
        </div>

        {/* Fiesta en el jardín */}
        <div className="text-center">
          <Calendar className="w-8 h-8 mx-auto mb-4 text-onyx" />
          <h2 className="font-serif text-2xl mb-2 text-jet">Recepción</h2>
          <p className="text-dim-gray">Sábado, Octubre 11, 2025</p>
          <p className="text-dim-gray">07:30 PM</p>
          <div className="mt-4">
            <MapPin className="w-8 h-8 mx-auto mb-4 text-onyx" />
            <p className="font-serif text-xl mb-2 text-jet">Salón Jardín Quinta San Ignacio</p>
            <p className="text-dim-gray">Antiguo Camino a San Ignacio 5, La Fundición, 20001 Aguascalientes, Ags.</p>
          </div>
        </div>
      </div>
    </section>  
  );
}
