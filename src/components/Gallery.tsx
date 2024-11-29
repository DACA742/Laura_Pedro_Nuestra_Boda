import React from 'react';

const photos = [
  "img/playa2.jpeg",
  "img/playa.jpeg",
  "img/mano.jpg"
];

export function Gallery() {
  return (
    <section className="max-w-4xl mx-auto p-8">
      <h2 className="font-serif text-3xl mb-8 text-center text-rose-800">Momentos Especiales</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {photos.map((photo, index) => (
          <div key={index} className="relative overflow-hidden rounded-lg aspect-square">
            <img
              src={photo}
              alt="Momentos de la pareja"
              className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </section>
  );
}