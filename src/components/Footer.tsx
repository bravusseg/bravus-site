export default function Footer() {
  return (
    <footer className="bg-white py-6 shadow-inner">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        <p className="text-gray-500">
          © {new Date().getFullYear()} Bravus Seguros. Todos os direitos reservados.
        </p>
        <div className="space-x-4 mt-4 md:mt-0 font-inter">
          <a href="#" aria-label="LinkedIn">LinkedIn</a>
          <a href="#" aria-label="Facebook">Facebook</a>
          <a href="#" aria-label="Instagram">Instagram</a>
        </div>
      </div>
    </footer>
  );
}
