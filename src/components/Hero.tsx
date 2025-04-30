export default function Hero() {
  return (
    <section id="home" className="min-h-screen bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: "url('/hero-bg.jpg')" }}>
      <div className="text-center text-white p-6 bg-black bg-opacity-50 rounded">
        <h1 className="text-5xl font-bold mb-4">Proteção e Tranquilidade para o Seu Futuro</h1>
        <p className="mb-6">Soluções de seguros personalizadas para você e sua empresa</p>
        <div className="flex space-x-4 justify-center">
          <a href="#produtos" className="px-6 py-3 bg-copper text-white rounded hover:opacity-90">Nossos Produtos</a>
          <a href="#contato" className="px-6 py-3 bg-teal text-white rounded hover:opacity-90">Fale Conosco</a>
        </div>
      </div>
    </section>
  );
}
