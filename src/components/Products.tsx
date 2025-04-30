type Product = { title: string; icon?: string; image?: string; description: string };

const products: Product[] = [
  { title: 'Vida', image: '/insurance-family.jpg', description: 'Proteção para você e sua família.' },
  { title: 'Saúde', icon: '/icons/health.svg', description: 'Cobertura médica completa.' },
  { title: 'Residencial', image: '/insurance-home.jpg', description: 'Segurança para seu imóvel.' },
  { title: 'Eventos', icon: '/icons/event.svg', description: 'Proteção para sua festa ou evento.' },
  { title: 'Profissional', image: '/insurance-business.jpg', description: 'Responsabilidade civil profissional.' }
];

export default function Products() {
  return (
    <section id="produtos" className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4">
        {products.map((p) => (
          <div key={p.title} className="bg-white shadow p-6 rounded min-h-[300px]">
            {p.image ? (
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-32 object-cover mb-4 rounded"
              />
            ) : (
              <img src={p.icon!} alt={p.title} className="w-12 h-12 mb-4" />
            )}
            <h3 className="text-xl font-semibold mb-2 text-copper">{p.title}</h3>
            <p className="text-gray-700">{p.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
