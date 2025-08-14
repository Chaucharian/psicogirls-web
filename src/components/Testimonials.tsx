import React from 'react';

const Testimonials = () => {
  return (
    <section className="w-full bg-white py-20 px-4 md:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-600 mb-6">Lo que opinan mis pacientes</h2>
          <p className="text-gray-500 text-lg max-w-3xl mx-auto leading-relaxed font-sans">
            Algunos de los pacientes que hemos acompañado en estos años opinan esto sobre nuestro trabajo.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl p-8 md:p-12 shadow-sm border border-primary/40">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-6 h-6 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              
              <h3 className="text-xl font-serif font-bold text-gray-600 mb-4">Una genia Pame</h3>
              
              <blockquote className="text-gray-500 leading-relaxed mb-6 text-lg italic font-sans">
                &ldquo;Atención muy profesional y agradable. Altamente recomendable. Me ayudó mucho con mi proceso de crecimiento personal y siempre me sentí acompañada en todo momento.&rdquo;
              </blockquote>
              
              <div className="flex items-center justify-center space-x-4">
                <div className="w-12 h-12 bg-secondary/50 rounded-full flex items-center justify-center">
                  <span className="text-secondary font-bold text-lg">M</span>
                </div>
                <div className="text-left">
                  <p className="font-semibold text-gray-600 font-sans">Mauricio</p>
                  <p className="text-sm text-gray-500 font-sans">Paciente desde 2023</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Navigation arrows for carousel */}
          <div className="flex justify-center mt-8 space-x-4">
            <button className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors">
              <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
              </svg>
            </button>
            <button className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors">
              <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 