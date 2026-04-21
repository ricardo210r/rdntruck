# RDN Truck - Mecânica de Caminhões

## Arquivos do Projeto

```
claude/
├── index.html      # Página principal
├── style.css     # Estilos
├── script.js    # JavaScript
├── server.js   # Backend (API)
├── package.json # Dependências Node.js
├── .env.example # Exemplo de variáveis de ambiente
└── README.md  # Este arquivo
```

## Como Colocar Online (Frontend)

### Opção 1: Netlify (Recomendado - Gratuito)
1. Acesse: https://app.netlify.com/drop
2. Arraste a pasta `claude` para a área indicada
3. Pronto! O site ficar online automaticamente

### Opção 2: Vercel (Gratuito)
1. Acesse: https://vercel.com/drop
2. Arraste a pasta `claude`
3. Pronto!

---

## Configurar Backend (API)

### 1. Criar conta no Render
- Acesse: https://render.com
- Criar conta gratuita

### 2. Criar novo Web Service
- New > Web Service
- Conectar seu repositório GitHub

### 3. Configurar variáveis
- Adicionar no painel do Render:
  - EMAIL_USER: seu-email@gmail.com
  - EMAIL_PASS: senha-app-do-gmail
  - EMAIL_DESTINO: contato@rdntruck.com.br

### 4. Deploy
- Fazer deploy Automatically

---

## Funcionalidades

- [x] Site responsivo (mobile)
- [x] Trava de zoom no mobile
- [x] Formulário de contato com backend
- [x] Integração WhatsApp
- [x] Tabela de preços
- [x] Serviços detalhados
- [x] Botão flutuante WhatsApp

---

## Configurar G-Mail

Para o backend funcionar com Gmail:

1. Acesse: https://myaccount.google.com/lesssecureapps
2. Ativar "Acesso menos seguro"
3. OU usar Senha de App:
   - Segurança > Verificação em 2 etapas
   - Senhas de App > Criar senha

---

## Contato

- WhatsApp: (11) 96245-0886
- Email: contato@rdntruck.com.br
- Site: www.rdntruck.com.br