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
          <p className="text-dim-gray">Sábado, Febrero 15, 2025</p>
          <p className="text-dim-gray">01:30 PM</p>
          <div className="mt-4">
            <MapPin className="w-8 h-8 mx-auto mb-4 text-onyx" />
            <p className="font-serif text-xl mb-2 text-jet">Capilla San Peregrino Laziosi</p>
            <p className="text-dim-gray">Lic Miguel de la Madrid Hurtado 2602, Trojes de Kristal, 20118 Aguascalientes, Ags.</p>
          </div>
        </div>

        {/* Fiesta en el jardín */}
        <div className="text-center">
          <Calendar className="w-8 h-8 mx-auto mb-4 text-onyx" />
          <h2 className="font-serif text-2xl mb-2 text-jet">Recepción</h2>
          <p className="text-dim-gray">Sábado, Febrero 15, 2025</p>
          <p className="text-dim-gray">04:00 PM</p>
          <div className="mt-4">
            <MapPin className="w-8 h-8 mx-auto mb-4 text-onyx" />
            <p className="font-serif text-xl mb-2 text-jet">Jardin Bellagio Ags</p>
            <p className="text-dim-gray">Chasela 203 Arboledas de Paso Blanco, 20907 aguascalientes, Ags.</p>
          </div>
        </div>
      </div>
    </section>  
  );
}
