import Image from 'next/image';

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-white shadow z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        <Image
          src="/logo-color.svg"
          alt="Bravus Seguros"
          width={160}
          height={40}
          priority
        />
        <nav className="space-x-6 font-inter">
          {['Home','Sobre','Produtos','Seja Corretor','Contato'].map(item => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g,'-')}`}
              className="hover:text-copper"
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
