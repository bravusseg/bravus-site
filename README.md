# Bravus Seguros

Site institucional criado com Next.js e Tailwind CSS.

## Instalação e Configuração Local

Para configurar e rodar o projeto localmente, siga estes passos:

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/<seu-usuario>/bravus-site.git
   cd bravus-site
   npm install
   ```

2. **Crie o arquivo de variáveis de ambiente** `.env.local` na raiz do projeto com as chaves abaixo:
   ```ini
   NEXT_PUBLIC_PIPEDRIVE_FORM_ID=SEU_FORM_ID
   NEXT_PUBLIC_GOOGLE_MAPS_EMBED=https://www.google.com/maps/embed?pb=SEU_EMBED
   ```

3. **Rodar em modo de desenvolvimento**:
   ```bash
   npm run dev
   ```

4. **Build e preview local**:
   ```bash
   npm run build
   npm run start
   ```

## CI/CD & Automação

Pipeline de CI com GitHub Actions em `.github/workflows/ci.yml` executa build, lint, testes de acessibilidade e performance.
