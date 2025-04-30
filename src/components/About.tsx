export default function About() {
  return (
    <section
      id="sobre"
      className="max-w-6xl mx-auto py-16 flex flex-col md:flex-row items-center gap-8"
    >
      <div className="md:w-1/2 p-4">
        <h2 className="text-3xl font-bold mb-4 text-teal">
          Sobre a Bravus Seguros
        </h2>
        <p className="text-gray-700 mb-4">
          Na Bravus Seguros, nossa missão é oferecer soluções de proteção que
          garantam segurança financeira e tranquilidade para nossos clientes.
          Com expertise em diversos ramos de seguros, atuamos de forma consultiva
          e personalizada.
        </p>
        <p className="text-gray-700">
          Fundada por William Américo, nossa corretora conta com um modelo de
          atendimento que alia tecnologia, experiência de mercado e foco no
          cliente, oferecendo planos personalizados que atendem às necessidades
          específicas de cada perfil.
        </p>
      </div>
      <div className="md:w-1/2 p-4">
        <img
          src="/about-image.jpg"
          alt="Sobre Bravus Seguros"
          className="rounded shadow"
        />
      </div>
    </section>
  );
}
