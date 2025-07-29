import React from 'react';

const AvailabilityForm = () => {
  return (
    <section id="horarios" className="w-full bg-white py-20 px-4 md:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-600 mb-6">Preguntas frecuentes</h2>
          <p className="text-gray-500 text-lg max-w-3xl mx-auto leading-relaxed">
            Resolvemos las dudas más comunes sobre nuestras sesiones de terapia virtual.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* FAQ Section */}
          <div className="space-y-4">
            <div className="bg-emerald-50 rounded-xl p-6 border border-emerald-100">
              <h3 className="text-lg font-semibold text-gray-600 mb-2 flex items-center">
                <span className="text-emerald-600 mr-2">&gt;</span>
                ¿Cómo es la terapia?
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Nuestras sesiones se realizan de forma virtual a través de plataformas seguras. Utilizamos enfoques basados en evidencia como la Terapia Cognitivo Conductual y Terapias de Tercera Generación.
              </p>
            </div>

            <div className="bg-rose-50 rounded-xl p-6 border border-rose-100">
              <h3 className="text-lg font-semibold text-gray-600 mb-2 flex items-center">
                <span className="text-rose-600 mr-2">&gt;</span>
                ¿Qué necesito para hacer terapia virtual?
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Solo necesitas un dispositivo con conexión a internet, un espacio privado y tranquilo, y la disposición para trabajar en tu bienestar emocional.
              </p>
            </div>

            <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
              <h3 className="text-lg font-semibold text-gray-600 mb-2 flex items-center">
                <span className="text-blue-600 mr-2">&gt;</span>
                ¿Qué frecuencia tienen las sesiones?
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                La frecuencia se adapta a tus necesidades. Generalmente comenzamos con sesiones semanales y ajustamos según tu progreso y objetivos.
              </p>
            </div>

            <div className="bg-amber-50 rounded-xl p-6 border border-amber-100">
              <h3 className="text-lg font-semibold text-gray-600 mb-2 flex items-center">
                <span className="text-amber-600 mr-2">&gt;</span>
                ¿Cuánto duran las sesiones?
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Las sesiones tienen una duración de 50 minutos, tiempo suficiente para trabajar en profundidad en tus objetivos terapéuticos.
              </p>
            </div>

            <div className="bg-purple-50 rounded-xl p-6 border border-purple-100">
              <h3 className="text-lg font-semibold text-gray-600 mb-2 flex items-center">
                <span className="text-purple-600 mr-2">&gt;</span>
                ¿Qué pasa si falto a una sesión? ¿Debo abonar igual?
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Te pedimos que canceles con al menos 24 horas de anticipación. En caso de cancelación tardía, se puede reprogramar la sesión según disponibilidad.
              </p>
            </div>
          </div>

          {/* Availability Form */}
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 shadow-sm border border-emerald-100">
            <h3 className="text-xl font-bold text-gray-600 mb-6">Disponibilidad horaria</h3>
            <p className="text-gray-500 mb-6 leading-relaxed">
              Si ya te decidiste a empezar terapia, dejanos un mensaje y empezamos a recorrer juntos este camino. Contanos tu disponibilidad horaria y te asignaremos un turno en menos de 24 horas.
            </p>
            
            <form className="space-y-4">
              <input 
                type="text" 
                placeholder="Nombre" 
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors bg-white"
              />
              <div className="grid grid-cols-2 gap-4">
                <input 
                  type="text" 
                  placeholder="Código de área" 
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors bg-white"
                />
                <input 
                  type="text" 
                  placeholder="Teléfono" 
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors bg-white"
                />
              </div>
              <input 
                type="email" 
                placeholder="Mail" 
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors bg-white"
              />
              
              <div className="flex items-start space-x-3">
                <input 
                  type="checkbox" 
                  id="virtual" 
                  className="mt-1 h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded"
                />
                <label htmlFor="virtual" className="text-sm text-gray-500">
                  Conozco que sus Psicólogas atienden sólo de forma virtual
                </label>
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-white border-2 border-emerald-300 text-emerald-600 px-6 py-3 rounded-lg font-semibold hover:bg-emerald-50 hover:border-emerald-400 transition-all duration-200"
              >
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AvailabilityForm; 