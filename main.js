// Menu mobile
const initMobileMenu = () => {
    const nav = document.querySelector('.main-nav');
    const navLinks = document.querySelector('.nav-links');
    const hamburger = document.createElement('button');
    hamburger.classList.add('hamburger-menu');
    hamburger.innerHTML = '☰';
    
    nav.insertBefore(hamburger, navLinks);
    
    hamburger.addEventListener('click', () => {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    });
};

// Carregamento dinâmico de projetos
const loadProjects = async () => {
    try {
        // Simulação de dados - em produção, isso viria de uma API
        const projects = [
            {
                title: 'Projeto 1',
                description: 'Descrição do projeto 1',
                image: 'assets/img/projects/project1.jpg'
            },
            {
                title: 'Projeto 2',
                description: 'Descrição do projeto 2',
                image: 'assets/img/projects/project2.jpg'
            },
            {
                title: 'Projeto 3',
                description: 'Descrição do projeto 3',
                image: 'assets/img/projects/project3.jpg'
            }
        ];

        const projectsGrid = document.querySelector('.projects-grid');
        projects.forEach(project => {
            const projectCard = document.createElement('div');
            projectCard.classList.add('project-card');
            projectCard.innerHTML = `
                <img src="${project.image}" alt="${project.title}">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <a href="#" class="btn btn-secondary">Saiba mais</a>
            `;
            projectsGrid.appendChild(projectCard);
        });
    } catch (error) {
        console.error('Erro ao carregar projetos:', error);
    }
};

// Formulário de doação
const initDonationForms = () => {
    const forms = document.querySelectorAll('.donation-form');
    forms.forEach(form => {
        form.innerHTML = `
            <select name="amount" required>
                <option value="">Selecione o valor</option>
                <option value="50">R$ 50,00</option>
                <option value="100">R$ 100,00</option>
                <option value="200">R$ 200,00</option>
                <option value="other">Outro valor</option>
            </select>
            <input type="number" name="custom-amount" placeholder="Digite outro valor" style="display: none;">
            <button type="submit" class="btn btn-primary">Doar Agora</button>
        `;

        const select = form.querySelector('select');
        const customInput = form.querySelector('input[name="custom-amount"]');

        select.addEventListener('change', (e) => {
            customInput.style.display = e.target.value === 'other' ? 'block' : 'none';
        });

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            // Aqui será implementada a integração com gateway de pagamento
            alert('Sistema de pagamento em desenvolvimento');
        });
    });
};

// Formulário de contato
const initContactForm = () => {
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const formData = new FormData(form);
        try {
            // Simulação de envio - em produção, isso seria uma chamada API
            await new Promise(resolve => setTimeout(resolve, 1000));
            alert('Mensagem enviada com sucesso!');
            form.reset();
        } catch (error) {
            console.error('Erro ao enviar mensagem:', error);
            alert('Erro ao enviar mensagem. Tente novamente.');
        }
    });
};

// Newsletter
const initNewsletterForm = () => {
    const form = document.getElementById('newsletter-form');
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = form.querySelector('input[type="email"]').value;
        try {
            // Simulação de inscrição - em produção, isso seria uma chamada API
            await new Promise(resolve => setTimeout(resolve, 1000));
            alert('Inscrição realizada com sucesso!');
            form.reset();
        } catch (error) {
            console.error('Erro na inscrição:', error);
            alert('Erro ao realizar inscrição. Tente novamente.');
        }
    });
};

// Animações de scroll
const initScrollAnimations = () => {
    const sections = document.querySelectorAll('section');
    const options = {
        threshold: 0.3
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });
};

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    initMobileMenu();
    loadProjects();
    initDonationForms();
    initContactForm();
    initNewsletterForm();
    initScrollAnimations();
});

// Smooth scroll para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});