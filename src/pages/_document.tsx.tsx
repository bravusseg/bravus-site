// src/pages/_document.tsx
import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          {/* 1) Definimos aqui sua configuração customizada do Tailwind */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
                tailwind.config = {
                  theme: {
                    extend: {
                      colors: {
                        teal: '#008080',
                        copper: '#b87333'
                      },
                      fontFamily: {
                        inter: ['Inter','sans-serif']
                      }
                    }
                  }
                };
              `
            }}
          />
          {/* 2) Em seguida, carregamos o Tailwind via CDN */}
          <script src="https://cdn.tailwindcss.com"></script>
        </Head>
        <body className="font-inter bg-white">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
