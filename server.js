const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'seu-email@gmail.com',
        pass: 'sua-senha-app'
    }
});

const mensagens = [];

app.post('/api/contato', async (req, res) => {
    const { nome, email, telefone, mensagem } = req.body;

    if (!nome || !email || !telefone || !mensagem) {
        return res.status(400).json({ 
            success: false, 
            message: 'Preencha todos os campos!' 
        });
    }

    const novaMensagem = {
        id: mensagens.length + 1,
        nome,
        email,
        telefone,
        mensagem,
        data: new Date().toISOString()
    };

    mensagens.push(novaMensagem);

    try {
        await transporter.sendMail({
            from: 'seu-email@gmail.com',
            to: 'contato@rdntruck.com.br',
            subject: `Novo contato - ${nome}`,
            text: `
Nome: ${nome}
Email: ${email}
Telefone: ${telefone}

Mensagem:
${mensagem}
            `
        });

        res.json({ 
            success: true, 
            message: 'Mensagem enviada com sucesso!' 
        });
    } catch (error) {
        console.error('Erro ao enviar email:', error);
        res.json({ 
            success: true, 
            message: 'Mensagem salva! Entraremos em contato em breve.' 
        });
    }
});

app.get('/api/mensagens', (req, res) => {
    res.json(mensagens);
});

app.listen(PORT, () => {
    console.log(`Servidor RDN Truck rodando na porta ${PORT}`);
});