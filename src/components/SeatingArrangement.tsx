import React from 'react';
import { Music } from 'lucide-react';
import { motion } from 'framer-motion';

// Mock data for tables and guests
const tables = [
  {
    id: 1,
    name: 'Mesa 1',
    guests: ['Beatriz Arteaga', 'Alma Galván', 'Alma Truebaz', 'Raul Chavez A.', 'Yannin Badillo', 'Paola Chávez', 'Isabel Arteaga', 'Benjamin', 'Ricardo Rabling'],
  },
  {
    id: 2,
    name: 'Mesa 2',
    guests: ['Gaby Rabling', 'Julio Martínez', 'Valentina Martínez', 'Julieta Martínez', 'Karla Rabling', 'Boris Campos', 'Noah Campos', 'Juliana Campos', 'Dante Martínez','Tania Callejo'],
  },
  {
    id: 3,
    name: 'Mesa 3',
    guests: ['Yolanda Bueno', 'Maria de Jesus', 'Araceli Bueno', 'Jaime Meza', 'Adrian Bueno', 'Claudia Ruelas', 'Dominica Bueno', 'Irma Bueno', 'Oscar Romo','Macarena C.'],
  },

  {
    id: 4,
    name: 'Mesa 4',
    guests: ['Paula Romo','Ricardo Cervantes','Clémentine Cloerec','Mauricio Romo','Diana Romo','Raul Peña','Palmira Meza','Roberto Ocaña B.','Alejandro Segura','Karina Zacarias','Jose Garcia'],
  },
  {
    id: 5,
    name: 'Mesa 5',
    guests: ['Ma Beatriz López','Vanessa Castañon','Juan Manuel','Alondra Castañon','Diego Castañon','Paloma Lopez','Tere Martínez'],
  },
  {
    id: 6,
    name: 'Mesa 6',
    guests: ['Antonio Bueno N.','Laura Delgadillo','Sofia Bueno','Eduardo Bueno','Araceli Vazquez','Antonio Bueno','Antonio Lopez','Joana','Antonio Lopez Jr','Fernanda Lopez'],
  },
  {
    id: 7,
    name: 'Mesa 7',
    guests: ['Yolanda Silva','Carlos Hernández','Kassandra H.','Vanessa H.','Victoria H.','Lupita Nuñez','Valeria Nuñez','Jaime Silva'],
  },
  {
    id: 8,
    name: 'Mesa 8',
    guests: ['Ignacio Lozano','Mayela','Alma Delgado','Jorge Reyes','Claudia Perez','Marco','Norma Echeverria','Patricia Muñiz','Eduardo Garcia','Blanca Loera','Pablo'],
  },
  {
    id: 9,
    name: 'Mesa 9',
    guests: ['Mireya Delgadillo','Veronica Ibarra', 'Veronica Ibarra Acompañante','Lupita Cortes', 'Lupita Cortes Acompañante','Irma Cortes','Efren Castañeda','Efren Castañeda Acompañante'],
  },
  {
    id: 10,
    name: 'Mesa 10',
    guests: ['Bere Muñoz','Juan Montiel','Claudia Mora','Alfredo Romo','Alejandra Martínez','Miguel Jiménez','Imelda Cardona','Reynaldo Martínez'],
  },
  {
    id: 11,
    name: 'Mesa 11',
    guests: ['Raul Chávez M.','Rosio','Esperanza Chávez M.','Rafael Romo','Nadia Romo','Rodrigo Romo','Cherry Romo','Silvia Chávez M.','Elizabeth Chávez M.','Jesus Alonso','Pedro D. Alonso','Ana Laura'],
  },
  {
    id: 12,
    name: 'Mesa 11',
    guests: ['Raul Chávez M.','Rosio','Esperanza Chávez M.','Rafael Romo','Nadia Romo','Rodrigo Romo','Cherry Romo','Silvia Chávez M.','Elizabeth Chávez M.','Jesus Alonso','Pedro D. Alonso','Ana Laura'],
  },
  // Añade más mesas con sus invitados específicos
  {
    id: 21,
    name: 'Mesa Nupcial',
    guests: ['Novio', 'Novia', 'Padre del Novio', 'Madre del Novio', 'Padre de la Novia', 'Madre de la Novia'],
  },
];

export function SeatingArrangement() {
  return (
    <section className="max-w-6xl mx-auto p-8">
      <h2 className="font-serif text-3xl mb-8 text-center text-jet">Distribución de Mesas</h2>
      
      {/* Floor Plan */}
      <div className="bg-antiflash-white/90 rounded-lg shadow-xl p-8 mb-12">
        <div className="aspect-[16/9] relative">
          <svg
            viewBox="0 0 1000 600"
            className="w-full h-full"
            style={{ background: '#f8f8f8' }}
          >
            {/* Left Tables */}
            {Array.from({ length: 10 }, (_, i) => (
              <g key={`left-${i}`} transform={`translate(150, ${100 + i * 45})`}>
                <circle cx="0" cy="0" r="20" className="fill-onyx/10 stroke-onyx" />
                <text x="30" y="5" className="text-sm fill-dim-gray font-medium">Mesa {i + 1}</text>
              </g>
            ))}

            {/* Right Tables */}
            {Array.from({ length: 10 }, (_, i) => (
              <g key={`right-${i}`} transform={`translate(850, ${100 + i * 45})`}>
                <circle cx="0" cy="0" r="20" className="fill-onyx/10 stroke-onyx" />
                <text x="-80" y="5" className="text-sm fill-dim-gray font-medium">Mesa {i + 11}</text>
              </g>
            ))}

            {/* Dance Floor */}
            <rect
              x="350"
              y="150"
              width="300"
              height="250"
              className="fill-onyx/5 stroke-onyx stroke-2 stroke-dashed"
              rx="10"
            />
            <text x="500" y="280" className="text-lg fill-dim-gray text-center font-medium" textAnchor="middle">
              Pista de Baile
            </text>

            {/* DJ Booth */}
            <g transform="translate(500, 480)">
              <rect
                x="-40"
                y="0"
                width="80"
                height="40"
                className="fill-onyx/20 stroke-onyx"
                rx="5"
              />
              <Music className="w-6 h-6 stroke-dim-gray" x="-12" y="8" />
              <text x="0" y="60" className="text-sm fill-dim-gray text-center font-medium" textAnchor="middle">
                DJ
              </text>
            </g>

            {/* Newlyweds Table */}
            <g transform="translate(500, 80)">
              <rect
                x="-120"
                y="0"
                width="240"
                height="40"
                className="fill-onyx/20 stroke-onyx"
                rx="5"
              />
              <text x="0" y="25" className="text-sm fill-dim-gray text-center font-medium" textAnchor="middle">
                Mesa Nupcial
              </text>
            </g>

            {/* Legend */}
            <g transform="translate(50, 30)">
              <text className="text-xs fill-dim-gray font-medium">Leyenda:</text>
              <g transform="translate(0, 20)">
                <circle cx="10" cy="0" r="8" className="fill-onyx/10 stroke-onyx" />
                <text x="25" y="4" className="text-xs fill-dim-gray">Mesa de Invitados</text>
              </g>
              <g transform="translate(0, 40)">
                <rect x="2" y="-8" width="16" height="16" className="fill-onyx/20 stroke-onyx" rx="2" />
                <text x="25" y="4" className="text-xs fill-dim-gray">Mesa Nupcial / DJ</text>
              </g>
            </g>
          </svg>
        </div>
      </div>

      {/* Guest List by Table */}
      <div className="space-y-8">
        <h3 className="font-serif text-2xl mb-8 text-center text-jet">Lista de Invitados por Mesa</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {tables.map((table) => (
            <motion.div
              key={table.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-elegant opacity-0 group-hover:opacity-10 rounded-lg transition-opacity duration-300" />
              <div className="bg-antiflash-white/90 rounded-lg shadow-md p-6 space-y-4">
                <div className="flex items-center justify-between border-b border-onyx/10 pb-3">
                  <h4 className="font-serif text-xl text-jet">{table.name}</h4>
                  <span className="text-sm text-dim-gray">{table.guests.length} invitados</span>
                </div>
                <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                  {table.guests.map((guest, index) => (
                    <div
                      key={index}
                      className="text-dim-gray text-sm py-1 border-b border-onyx/5 last:border-b-0"
                    >
                      {guest}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}