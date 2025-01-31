import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Church, Martini, Music, Camera, Cake, Wine, UtensilsCrossed, Users, Frown} from 'lucide-react';

interface TimelineEvent {
  time: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const events: TimelineEvent[] = [
  {
    time: "13:30",
    title: "Ceremonia Religiosa",
    description: "Iglesia Santa María",
    icon: <Church className="w-6 h-6" />,
  },
  {
    time: "16:00",
    title: "Cóctel de Bienvenida",
    description: "Jardín Las Rosas - Terraza Principal",
    icon: <Martini className="w-6 h-6" />,
  },
  {
    time: "17:00",
    title: "Comida",
    description: "Jardines y Fuente Central",
    icon: <UtensilsCrossed className="w-6 h-6" />,
  },
  {
    time: "17:45",
    title: "Brindis",
    description: "Salón Principal",
    icon: <Wine className="w-6 h-6" />,
  },
  {
    time: "18:00",
    title: "Vals",
    description: "Los novios bailaran",
    icon: <Users className="w-6 h-6" />,
  },
  {
  time: "18:30",
  title: "Baile",
  description: "Apertura de Pista de Baile",
  icon: <Music className="w-6 h-6" />,
  },
  {
    time: "22:00",
    title: "Fin",
    description: "Fin de la boda",
    icon: <Frown className="w-6 h-6" />,
    }
  


];

export function Schedule() {
  return (
    <section className="max-w-4xl mx-auto p-8">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <div className="flex items-center justify-center gap-2 mb-4">
          <Clock className="w-6 h-6 text-onyx" />
          <h2 className="font-serif text-3xl text-jet">Itinerario</h2>
        </div>
        <p className="text-dim-gray">Acompáñanos en este día tan especial</p>
      </motion.div>

      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-onyx/20" />

        {/* Timeline events */}
        <div className="space-y-12">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`flex items-center gap-8 ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}
            >
              {/* Content */}
              <div className={`w-1/2 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                <div className="bg-antiflash-white/90 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <p className="font-serif text-2xl mb-2 text-onyx">{event.time}</p>
                  <h3 className="font-medium text-xl mb-1 text-jet">{event.title}</h3>
                  <p className="text-dim-gray">{event.description}</p>
                </div>
              </div>

              {/* Icon */}
              <div className="relative z-10 w-12 h-12 rounded-full bg-onyx text-antiflash-white flex items-center justify-center shadow-md">
                {event.icon}
              </div>

              {/* Empty space for alignment */}
              <div className="w-1/2" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}