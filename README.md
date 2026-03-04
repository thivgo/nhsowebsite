# NHSO Connect Legacy v4.2

Um projeto divertido criado para testes de UI e para guardar as piadas internas do nosso grupo de amigos. 

## Sobre o Projeto

Este site simula um terminal antigo (estilo Windows 95) do departamento de polícia fictício "NHSO" (New Hannover Sheriff's Office). Ele foi construído para testar habilidades de design de interface retrô e, ao mesmo tempo, servir como um mural de piadas internas, referências a jogos e histórias do nosso grupo.

## Tecnologias Utilizadas

- **Next.js 15+** (App Router)
- **React**
- **Tailwind CSS** (para todo o estilo retrô)
- **Framer Motion** (para as animações de transição)
- **Lucide React** (para os ícones)

## Como Rodar Localmente

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/nhso-connect.git
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

4. Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.

## Estrutura do Projeto

- `app/page.tsx`: A página principal que contém toda a lógica e os dados (oficiais, avisos, veículos).
- `app/globals.css`: Onde a mágica do CSS retrô acontece (estilos do Windows 95, animações CRT, etc).
- `public/images/vehicles/`: Pasta onde as imagens dos veículos devem ser colocadas.

## Notas

- As imagens dos veículos são carregadas localmente. Certifique-se de adicionar as imagens corretas na pasta `public/images/vehicles/` para que elas apareçam no sistema.
- A aba `SOP.dat` contém um erro crítico intencional (e uma piada interna). Não tente consertar!
