export default function Join() {
  return (
    <section id="seja-corretor" className="max-w-6xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-6 text-teal">Seja um Corretor</h2>
      <form
        action={`https://forms.pipedrive.com/forms/${process.env.NEXT_PUBLIC_PIPEDRIVE_FORM_ID}`}
        method="POST"
        className="max-w-md mx-auto space-y-4"
      >
        <input
          name="name"
          type="text"
          placeholder="Nome"
          required
          className="w-full border rounded p-2"
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          required
          className="w-full border rounded p-2"
        />
        <input
          name="phone"
          type="tel"
          placeholder="Telefone"
          required
          className="w-full border rounded p-2"
        />
        <button
          type="submit"
          className="w-full bg-teal text-white py-2 rounded hover:opacity-90"
        >
          Quero me inscrever
        </button>
      </form>
    </section>
  );
}
