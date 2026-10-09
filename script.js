const movimentoReduzido = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
);

const preloader = document.querySelector(".preloader");
const nomePreloader = document.querySelector(".preloader-name span");
const textoPreloader = document.querySelector(".preloader-label span");
const progressoPreloader = document.querySelector(".preloader-progress");

// Libera a página quando o preloader termina ou quando o GSAP não está disponível.
function finalizarPreloader() {
  document.body.classList.remove("preloader-ativo");

  if (!preloader) return;

  preloader.classList.remove("is-active");
  preloader.setAttribute("aria-hidden", "true");

  if (typeof gsap !== "undefined") {
    gsap.set(preloader, { clearProps: "transform" });
  }

  requestAnimationFrame(() => {
    if (typeof ScrollTrigger !== "undefined") {
      ScrollTrigger.refresh();
    }
  });
}

function iniciarPreloader() {
  if (!preloader || !nomePreloader || !textoPreloader || !progressoPreloader) {
    finalizarPreloader();
    return;
  }

  // Para movimento reduzido, o site é liberado sem executar a animação.
  if (typeof gsap === "undefined" || movimentoReduzido.matches) {
    finalizarPreloader();
    return;
  }

  // Converte o estado inicial do CSS para valores que o GSAP pode animar.
  gsap.set([nomePreloader, textoPreloader], {
    y: 0,
    yPercent: 110,
  });
  gsap.set(progressoPreloader, { width: 0 });

  const animacaoPreloader = gsap.timeline({
    onComplete: finalizarPreloader,
  });

  animacaoPreloader.to(nomePreloader, {
    yPercent: 0,
    duration: 0.65,
    ease: "power3.out",
  });

  animacaoPreloader.to(
    textoPreloader,
    {
      yPercent: 0,
      duration: 0.45,
      ease: "power3.out",
    },
    0.2,
  );

  animacaoPreloader.to(
    progressoPreloader,
    {
      width: "100%",
      duration: 1.25,
      ease: "power2.inOut",
    },
    0.35,
  );

  animacaoPreloader.to(
    [nomePreloader, textoPreloader],
    {
      yPercent: -110,
      duration: 0.5,
      ease: "power2.in",
    },
    "+=0.18",
  );

  animacaoPreloader.to(
    preloader,
    {
      yPercent: -100,
      duration: 0.8,
      ease: "power3.inOut",
    },
    "-=0.1",
  );
}

iniciarPreloader();

// Ativa o plugin que conecta as animações do GSAP com a rolagem da página.
if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);

  let rolagemSuave = null;

  // O ScrollSmoother é iniciado antes dos outros ScrollTriggers da página.
  if (
    typeof ScrollSmoother !== "undefined" &&
    !movimentoReduzido.matches
  ) {
    gsap.registerPlugin(ScrollSmoother);

    rolagemSuave = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1,
      effects: true,
      smoothTouch: 0.1,
    });

    // Mantém a mesma suavidade ao navegar pelos links internos do menu.
    document.querySelectorAll('a[href^="#"]').forEach((link) => {
      link.addEventListener("click", (evento) => {
        const destino = document.querySelector(link.getAttribute("href"));

        if (!destino) return;

        evento.preventDefault();
        const posicaoDestino =
          rolagemSuave.scrollTop() + destino.getBoundingClientRect().top;

        rolagemSuave.scrollTo(posicaoDestino, true);
      });
    });
  }

  const secaoProjetos = document.querySelector(".projetos-abertura");
  const fundoProjetos = document.querySelector(
    ".projetos-revelacao--overlay",
  );
  const tituloProjetos = fundoProjetos?.querySelector("p");
  const tituloProjetosEstatico = document.querySelector("#projetos-titulo");

  // Em cada valor, a primeira porcentagem pertence à seção e a segunda à tela.
  const inicioAnimacao = "-7% 88%";
  const fimAnimacao = "100% 100%";
  // Troque para false quando não quiser mais visualizar as marcações.
  const mostrarMarcadores = true;
  // Evita criar animações para quem prefere menos movimento na tela.
  if (!movimentoReduzido.matches) {
    if (secaoProjetos && fundoProjetos && tituloProjetos) {
      // A seção estática só aparece quando a animação chega completamente ao fim.
      secaoProjetos.classList.add("projetos-abertura--com-animacao");

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
          toggleClass: {
            targets: fundoProjetos,
            className: "projetos-revelacao--fixa",
          },
          onUpdate: (gatilho) => {
            secaoProjetos.classList.toggle(
              "projetos-abertura--concluida",
              gatilho.progress === 1,
            );
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

      secaoProjetos.classList.toggle(
        "projetos-abertura--concluida",
        animacaoProjetos.scrollTrigger.progress === 1,
      );

    }

    const galeriaProjetos = document.querySelector(".projetos-galeria");
    const informacoesProjetos = document.querySelector(".projetos-info");
    const midiaProjetos = document.querySelector(".projetos-midia");
    const imagensProjetos = gsap.utils.toArray(".projeto-imagem");
    const textosProjetos = gsap.utils.toArray(".projeto-texto");
    const itensProjetos = gsap.utils.toArray(".projeto-item");
    const botoesProjetos = gsap.utils.toArray(".projeto-seletor");

    if (
      galeriaProjetos &&
      informacoesProjetos &&
      midiaProjetos &&
      imagensProjetos.length &&
      imagensProjetos.length === textosProjetos.length
    ) {
      // Cria profundidade na passagem entre o título e a galeria de projetos.
      if (secaoProjetos && tituloProjetosEstatico) {
        const parallaxProjetos = gsap.timeline({
          scrollTrigger: {
            trigger: galeriaProjetos,
            start: "top bottom",
            end: "top top",
            scrub: true,
            invalidateOnRefresh: true,
          },
        });

        // O título acompanha a página mais devagar enquanto a galeria se aproxima.
        parallaxProjetos.to(
          tituloProjetosEstatico,
          {
            y: () => window.innerHeight * 0.65,
            scale: 0.94,
            opacity: 0.3,
            ease: "none",
          },
          0,
        );

        // Texto e imagem da galeria entram em uma velocidade diferente.
        parallaxProjetos.fromTo(
          [informacoesProjetos, midiaProjetos],
          {
            y: () => window.innerHeight * -0.1,
          },
          {
            y: 0,
            ease: "none",
          },
          0,
        );
      }

      // Esta porcentagem controla quanto o usuário rola durante a galeria fixa.
      const distanciaRolagemGaleria = 360;
      const quantidadeProjetos = imagensProjetos.length;
      const controleGaleria = { progresso: 0 };

      // Guarda a altura final da imagem. Assim, somente a máscara cresce e a
      // foto não fica espremida durante a revelação de cima para baixo.
      function medirMidiaProjetos() {
        midiaProjetos.style.setProperty(
          "--projetos-midia-altura",
          `${midiaProjetos.clientHeight}px`,
        );
      }

      // Atualiza a barra e o nome destacado conforme a rolagem avança.
      function atualizarProjetoAtivo() {
        const porcentagem = controleGaleria.progresso * 100;
        const indiceAtivo = Math.round(
          controleGaleria.progresso * (quantidadeProjetos - 1),
        );

        galeriaProjetos.style.setProperty(
          "--progresso-projetos",
          `${porcentagem}%`,
        );

        itensProjetos.forEach((item, indice) => {
          const estaAtivo = indice === indiceAtivo;
          const botao = botoesProjetos[indice];
          item.classList.toggle("projeto-item--ativo", estaAtivo);

          if (botao) {
            if (estaAtivo) {
              botao.setAttribute("aria-current", "true");
            } else {
              botao.removeAttribute("aria-current");
            }
          }
        });

        textosProjetos.forEach((texto, indice) => {
          const estaAtivo = indice === indiceAtivo;
          texto.classList.toggle("projeto-texto--ativo", estaAtivo);
          texto.setAttribute("aria-hidden", !estaAtivo);
        });
      }

      medirMidiaProjetos();
      ScrollTrigger.addEventListener("refreshInit", medirMidiaProjetos);

      // Estado inicial da galeria: apenas o primeiro projeto aparece completo.
      gsap.set(imagensProjetos[0], { height: "100%" });
      gsap.set(imagensProjetos.slice(1), { height: "0%" });
      gsap.set(textosProjetos[0], { opacity: 1, y: 0 });
      gsap.set(textosProjetos.slice(1), { opacity: 0, y: 20 });
      atualizarProjetoAtivo();

      const duracaoGaleria = 4.4;
      const pausa = 0.4;
      const espacoEntreProjetos =
        (duracaoGaleria - pausa * 2) / (quantidadeProjetos - 1);
      const duracaoTroca = espacoEntreProjetos * 0.65;

      const animacaoGaleria = gsap.timeline({
        scrollTrigger: {
          id: "galeria-projetos",
          trigger: galeriaProjetos,
          start: "top top",
          end: `+=${distanciaRolagemGaleria}%`,
          pin: true,
          scrub: true,
          // markers: mostrarMarcadores,
          invalidateOnRefresh: true,
        },
      });

      // Reserva um pequeno respiro antes da primeira e depois da última troca.
      animacaoGaleria.to({}, { duration: duracaoGaleria }, 0);

      for (let indice = 1; indice < quantidadeProjetos; indice += 1) {
        const inicioTroca = pausa + (indice - 1) * espacoEntreProjetos;

        // A nova imagem mantém 100% da largura e é revelada pelo topo.
        animacaoGaleria.fromTo(
          imagensProjetos[indice],
          { height: "0%" },
          {
            height: "100%",
            duration: duracaoTroca,
            ease: "power2.inOut",
          },
          inicioTroca,
        );

        animacaoGaleria.to(
          textosProjetos[indice - 1],
          {
            opacity: 0,
            y: -20,
            duration: duracaoTroca * 0.4,
            ease: "power1.in",
          },
          inicioTroca,
        );

        animacaoGaleria.fromTo(
          textosProjetos[indice],
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: duracaoTroca * 0.45,
            ease: "power1.out",
          },
          inicioTroca + duracaoTroca * 0.35,
        );

        animacaoGaleria.to(
          controleGaleria,
          {
            progresso: indice / (quantidadeProjetos - 1),
            duration: duracaoTroca,
            ease: "power2.inOut",
            onUpdate: atualizarProjetoAtivo,
          },
          inicioTroca,
        );
      }

      // Permite ir diretamente para qualquer projeto clicando em seu nome.
      botoesProjetos.forEach((botao, indice) => {
        botao.addEventListener("click", () => {
          const scrollGaleria = animacaoGaleria.scrollTrigger;

          if (!scrollGaleria) return;

          let pontoNaAnimacao = pausa * 0.5;

          if (indice > 0) {
            const inicioTroca = pausa + (indice - 1) * espacoEntreProjetos;
            const fimTroca = inicioTroca + duracaoTroca;
            const inicioSeguinte =
              indice < quantidadeProjetos - 1
                ? pausa + indice * espacoEntreProjetos
                : duracaoGaleria - pausa;

            pontoNaAnimacao = (fimTroca + inicioSeguinte) / 2;
          }

          const progressoDestino = pontoNaAnimacao / duracaoGaleria;
          const scrollDestino =
            scrollGaleria.start +
            (scrollGaleria.end - scrollGaleria.start) * progressoDestino;

          if (rolagemSuave) {
            rolagemSuave.scrollTo(scrollDestino, true);
          } else {
            window.scrollTo({
              top: scrollDestino,
              behavior: "smooth",
            });
          }
        });
      });
    }
  }
}
