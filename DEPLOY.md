# Como criar o repositório no GitHub

## Passo 1: Criar repositório no GitHub
1. Acesse: https://github.com/new
2. Preencha:
   - Repository name: `rdntruck`
   - Description: `Site RDN Truck - Mecânica de Caminhões`
   - Public: ✓ (marcado)
   - Add a README file: ✓ (marcado)
3. Clicar em "Create repository"

## Passo 2: Enviar arquivos
1. No repositório criado, clicar em "uploading an existing file"
2. Arrastar todos os arquivos da pasta `claude`:
   - index.html
   - style.css
   - script.js
   - server.js
   - package.json
   - .env.example
   - README.md
3. Clicar em "Commit changes"

## Passo 3: Conectar no Netlify (Frontend)
1. Acesse: https://app.netlify.com
2. Login com GitHub
3. Clicar "Add new site" > "Import an existing project"
4. Selecionar o repositório `rdntruck`
5. Clicar "Deploy site"

## Passo 4: Conectar no Render (Backend)
1. Acesse: https://render.com
2. Login com GitHub
3. Clicar "New" > "Web Service"
4. Selecionar repositório `rdntruck`
5. Configurar:
   - Root directory: (vazio)
   - Build command: (vazio)
   - Start command: `node server.js`
6. Em "Environment Variables":
   - KEY: `EMAIL_USER` = seu-email@gmail.com
   - KEY: `EMAIL_PASS` = sua-senha-app
   - KEY: `EMAIL_DESTINO` = contato@rdntruck.com.br
7. Clicar "Create Web Service"

## URLs finais
- Frontend: `https://rdntruck.netlify.app`
- Backend: `https://rdntruck.onrender.com`