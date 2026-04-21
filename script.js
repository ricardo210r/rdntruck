document.addEventListener('DOMContentLoaded', function() {
    if (window.innerWidth <= 768) {
        const viewport = document.querySelector('meta[name="viewport"]');
        if (viewport) {
            viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no');
        }
    }
    
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    const ctaButton = document.querySelector('.cta-button');
    const contatoSection = document.getElementById('contato');
    
    if (ctaButton && contatoSection) {
        ctaButton.addEventListener('click', function() {
            contatoSection.scrollIntoView({ behavior: 'smooth' });
        });
    }

    const contatoForm = document.querySelector('.contato-form');
    
    if (contatoForm) {
        contatoForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const formData = new FormData(contatoForm);
            const data = {
                nome: formData.get('nome'),
                email: formData.get('email'),
                telefone: formData.get('telefone'),
                mensagem: formData.get('mensagem')
            };

            const submitBtn = contatoForm.querySelector('.submit-btn');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Enviando...';
            submitBtn.disabled = true;

            try {
                const response = await fetch('https://rdn-truck-api.onrender.com/api/contato', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(data)
                });

                const result = await response.json();
                alert(result.message || 'Mensagem enviada com sucesso!');
                contatoForm.reset();
            } catch (error) {
                alert('Erro ao enviar. Tente novamente ou entre em contato pelo WhatsApp.');
            } finally {
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }
        });
    }

    const observerOptions = {
        threshold: 0.1
    };

    const observers = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.servico-card').forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `all 0.5s ease ${index * 0.1}s`;
        observers.observe(card);
    });

    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.3)';
        } else {
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.2)';
        }
    });

    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');

            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));

            this.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        });
    });
});