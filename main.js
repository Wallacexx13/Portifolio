// main.js

// Registra o plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Animação para a seção de Habilidades (.features-container)
// Faz com que as "pills" apareçam com um slide-up e fade-in
gsap.from(".features-container .pill", {
    opacity: 0,
    y: 50, // Move de 50px para cima
    stagger: 0.1, // Atraso de 0.1s entre cada "pill"
    duration: 0.8,
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".features-container", // Quando este elemento entrar na tela
        start: "top 80%", // Começa quando o topo da seção estiver a 80% do topo da viewport
        end: "bottom 20%", // Termina quando o fundo da seção estiver a 20% do topo da viewport
        toggleActions: "play none none reverse", // Play ao entrar, reverte ao sair de volta
        // markers: true // Descomente para ver os marcadores de ScrollTrigger (útil para depurar)
    }
});

// Animação para os cartões "Sobre Mim" (.benefits)
gsap.from(".benefits .benefit-card", {
    opacity: 0,
    y: 30, // Move de 30px para cima
    stagger: 0.15, // Atraso de 0.15s entre cada cartão
    duration: 0.7,
    ease: "back.out(1.7)", // Um efeito de "salto" no final
    scrollTrigger: {
        trigger: ".benefits", // Quando esta seção entrar na tela
        start: "top 75%", // Começa quando o topo da seção estiver a 75% do topo da viewport
        end: "bottom 25%",
        toggleActions: "play none none reverse",
        // markers: true
    }
});

// Exemplo mais avançado: Parallax simples no subtítulo do Header ao rolar
// Isso fará o subtítulo se mover para cima lentamente
gsap.to(".header-content .subtitle", {
    y: -100, // Move 100px para cima em relação à sua posição original
    ease: "none",
    scrollTrigger: {
        trigger: "body", // Dispara em relação à rolagem do body
        start: "top top", // Começa quando o topo do body atinge o topo da viewport
        end: "bottom top", // Termina quando o fundo do body atinge o topo da viewport
        scrub: true, // Animação "grudada" na rolagem
        // markers: true
    }
});

// Exemplo para o título principal (efeito de profundidade/escala ao rolar)
gsap.to(".header-content .gradiant-text", {
    scale: 0.8, // Diminui o título
    opacity: 0.5, // Diminui a opacidade
    ease: "none",
    scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom top",
        scrub: true,
        // markers: true
    }
});

// Animação para os cards de projeto (.project-card)
gsap.from(".projects-grid .project-card", {
    opacity: 0,
    scale: 0.8, // Começa um pouco menor
    y: 50, // Começa um pouco abaixo
    stagger: 0.1,
    duration: 0.8,
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".projects-grid",
        start: "top 75%",
        end: "bottom 25%",
        toggleActions: "play none none reverse",
        // markers: true
    }
});