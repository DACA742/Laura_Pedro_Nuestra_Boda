import React from 'react';
import { motion } from 'framer-motion';
import { Gift, CreditCard, Home } from 'lucide-react';

const gifts = [
  {
    icon: <Gift className="w-6 h-6" />,
    title: "Mesa de Regalos Amazon",
    description: "Vista nuestra lista de regalos en Amazon",
    link: "https://www.amazon.com.mx/wedding/share/15022025"
  },
  {
    icon: <Gift className="w-6 h-6" />,
    title: "Mesa de Regalos Liverpool",
    description: "Código: 51541356",
    link: "https://mesaderegalos.liverpool.com.mx/milistaderegalos/51541356"
  },
  {
    icon: <Gift className="w-6 h-6" />,
    title: "Lluvia de sobres",
    description: "En el evento contaremos con un buzón para recibir tus sobres de regalo"
  }
];

export function GiftRegistry() {
  return (
    <section className="max-w-4xl mx-auto p-8">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="font-serif text-3xl mb-4 text-jet">Lista de Regalos</h2>
        <p className="text-dim-gray">Tu presencia es nuestro mejor regalo, pero si deseas obsequiarnos algo más...</p>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {gifts.map((gift, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-antiflash-white/90 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="text-onyx mb-4">{gift.icon}</div>
            <h3 className="font-serif text-xl mb-2 text-jet">{gift.title}</h3>
            <p className="text-dim-gray mb-4">{gift.description}</p>
            <a
              href={gift.link}
              className="inline-block px-4 py-2 bg-onyx text-antiflash-white rounded-md hover:bg-jet transition-colors duration-300"
            >
              Ver Detalles
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}