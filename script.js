// Ativa o plugin que conecta as animações do GSAP com a rolagem da página.
if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);

  const secaoProjetos = document.querySelector(".projetos-abertura");
  const fundoProjetos = document.querySelector(".projetos-revelacao");
  const tituloProjetos = document.querySelector("#projetos-titulo");

  // Em cada valor, a primeira porcentagem pertence à seção e a segunda à tela.
  const inicioAnimacao = "-7% 88%";
  const fimAnimacao = "100% 100%";
  // Troque para false quando não quiser mais visualizar as marcações.
  const mostrarMarcadores = true;
  const movimentoReduzido = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  );

  // Evita criar animações para quem prefere menos movimento na tela.
  if (!movimentoReduzido.matches) {
    if (secaoProjetos && fundoProjetos && tituloProjetos) {
      // Define como o círculo e o texto devem aparecer antes da rolagem.
      gsap.set(fundoProjetos, {
        clipPath: "circle(4vmax at 50% 50%)",
        opacity: 0,
      });

      gsap.set(tituloProjetos, {
        y: 40,
        opacity: 0,
        letterSpacing: "0.22em",
      });

      const animacaoProjetos = gsap.timeline({
        scrollTrigger: {
          trigger: secaoProjetos,
          // 1º valor: ponto da seção. 2º valor: ponto da tela.
          start: inicioAnimacao,
          end: fimAnimacao,
          scrub: true,
          markers: mostrarMarcadores,
          toggleClass: {
            targets: fundoProjetos,
            className: "projetos-revelacao--fixa",
          },
          invalidateOnRefresh: true,
        },
      });

      // Enquanto a página rola, o círculo cresce até cobrir toda a tela.
      animacaoProjetos.to(fundoProjetos, {
        clipPath: "circle(75vmax at 50% 50%)",
        duration: 1,
        ease: "none",
      });

      // A cor do fundo aparece logo no começo e permanece azul-escura.
      animacaoProjetos.to(
        fundoProjetos,
        {
          opacity: 1,
          duration: 0.12,
          ease: "none",
        },
        0,
      );

      // O título aparece durante o crescimento do fundo.
      animacaoProjetos.to(
        tituloProjetos,
        {
          y: 0,
          opacity: 1,
          letterSpacing: "0.08em",
          duration: 0.45,
          ease: "none",
        },
        0.3,
      );

    }
  }
}
