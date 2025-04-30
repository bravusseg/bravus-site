export default function Contact() {
  return (
    <section id="contato" className="bg-gray-100 py-16 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Dados de contato */}
        <div>
          <h2 className="text-3xl font-bold mb-4 text-teal">Fale Conosco</h2>
          <p className="mb-2">Email: contato@bravusseguros.com.br</p>
          <p className="mb-4">Telefone: (11) 99999-9999</p>
          <div className="w-full h-64">
            <iframe
              src={process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>

        {/* Formulário de mensagem */}
        <div>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Seu Nome"
              required
              className="w-full border rounded p-2"
            />
            <input
              type="email"
              placeholder="Seu Email"
              required
              className="w-full border rounded p-2"
            />
            <textarea
              placeholder="Mensagem"
              required
              className="w-full border rounded p-2 h-32"
            />
            <button
              type="submit"
              className="bg-copper text-white py-2 px-4 rounded hover:opacity-90"
            >
              Enviar Mensagem
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
