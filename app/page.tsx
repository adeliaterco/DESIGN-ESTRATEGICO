"use client"

import { useState, useEffect, useCallback } from "react"
import { ArrowRight, Shield, Star, Users, Clock } from "lucide-react"
import { useRouter } from "next/navigation"
import Image from "next/image"

// GA otimizado - só envia quando necessário
const enviarEvento = (() => {
  let queue = []
  let timeout

  return (evento, props = {}) => {
    queue.push({ evento, props })
    clearTimeout(timeout)

    timeout = setTimeout(() => {
      if (typeof window !== "undefined" && window.gtag && queue.length) {
        queue.forEach(({ evento, props }) => {
          window.gtag("event", evento, props)
        })
        queue = []
      }
    }, 500)
  }
})()

export default function HomePage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [loadingProgress, setLoadingProgress] = useState(0)
  const [errorMessage, setErrorMessage] = useState("")
  const [isOnline, setIsOnline] = useState(true)
  const [contadorPessoas, setContadorPessoas] = useState(2847)
  const [timeLeft, setTimeLeft] = useState(1847) // segundos para urgência
  const [analisesPendentes, setAnalisesPendentes] = useState(47) // NOVO: contador de análises

  // Contador de pessoas em tempo real
  useEffect(() => {
    const interval = setInterval(() => {
      setContadorPessoas(prev => prev + Math.floor(Math.random() * 3) + 1)
    }, 45000)
    return () => clearInterval(interval)
  }, [])

  // NOVO: Contador de análises pendentes
  useEffect(() => {
    const interval = setInterval(() => {
      setAnalisesPendentes(prev => {
        const change = Math.random() > 0.7 ? -1 : 0 // Diminui ocasionalmente
        return Math.max(15, prev + change) // Mínimo de 15
      })
    }, 120000) // A cada 2 minutos
    return () => clearInterval(interval)
  }, [])

  // Timer de urgência
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => prev > 0 ? prev - 1 : 0)
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  // Detecção de conexão minimalista
  useEffect(() => {
    if (typeof window === "undefined") return

    const updateOnlineStatus = () => setIsOnline(navigator.onLine)

    window.addEventListener("online", updateOnlineStatus, { passive: true })
    window.addEventListener("offline", updateOnlineStatus, { passive: true })

    return () => {
      window.removeEventListener("online", updateOnlineStatus)
      window.removeEventListener("offline", updateOnlineStatus)
    }
  }, [])

  // Tracking minimalista - só o essencial
  useEffect(() => {
    if (typeof window === "undefined") return

    const timer = setTimeout(() => {
      enviarEvento("page_view", {
        device: window.innerWidth < 768 ? "mobile" : "desktop",
        funil: "sobrancelhas"
      })
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  // Função de início ultra-otimizada
  const handleStart = useCallback(() => {
    if (isLoading || !isOnline) return

    setIsLoading(true)
    setLoadingProgress(20)

    enviarEvento("quiz_start", { funil: "sobrancelhas" })

    let progress = 20
    const interval = setInterval(() => {
      progress += 15
      setLoadingProgress(progress)

      if (progress >= 100) {
        clearInterval(interval)

        // Preservar UTMs
        let url = "/quiz/1"
        if (typeof window !== "undefined" && window.location.search) {
          const params = new URLSearchParams(window.location.search)
          const utms = new URLSearchParams()

          for (const [key, value] of params) {
            if (key.startsWith("utm_")) utms.set(key, value)
          }

          if (utms.toString()) url += `?${utms.toString()}`
        }

        router.push(url)
      }
    }, 200)
  }, [isLoading, isOnline, router])

  return (
    <>
      <head>
        <link rel="preconnect" href="https://amandateixeiraoficial.com.br" />
        <link rel="dns-prefetch" href="https://amandateixeiraoficial.com.br" />
        <title>89% das Mulheres Faturam R$ 3-8k/mês com Sobrancelhas - Descubra Seu Potencial</title>
        <meta name="description" content="89% das mulheres que trabalham com sobrancelhas faturam R$ 3.000-8.000/mês. Descubra em 2 minutos se VOCÊ tem esse perfil. Quiz gratuito com resultado imediato!" />
      </head>
      <div
        style={{
          backgroundColor: "#000000",
          minHeight: "100vh",
          padding: "20px",
          position: "relative",
        }}
      >
        <style jsx>{`
.btn-quiz-pulsante{background:linear-gradient(135deg,#dc2626 0%,#b91c1c 100%)!important;color:white!important;border:none!important;padding:22px 45px!important;font-size:19px!important;font-weight:900!important;border-radius:50px!important;text-transform:uppercase!important;cursor:pointer!important;transition:all .3s ease!important;animation:pulsar-cta 3s infinite!important;width:100%!important;max-width:450px!important;box-shadow:0 10px 30px rgba(220,38,38,.5)!important;letter-spacing:.8px!important;position:relative!important;overflow:hidden!important}

@keyframes pulsar-cta{0%{box-shadow:0 0 0 0 rgba(220,38,38,.7)}70%{box-shadow:0 0 0 12px rgba(220,38,38,0)}100%{box-shadow:0 0 0 0 rgba(220,38,38,0)}}

.btn-quiz-pulsante:hover{background:linear-gradient(135deg,#b91c1c 0%,#991b1b 100%)!important;transform:scale(1.05)!important;box-shadow:0 15px 40px rgba(220,38,38,.7)!important}

.cta-principal{display:block!important;font-size:19px!important;font-weight:900!important;text-transform:uppercase!important;letter-spacing:0.8px!important}

.cta-secundario{display:block!important;font-size:13px!important;margin-top:6px!important;opacity:0.95!important;font-weight:600!important}

.container-preto{background:linear-gradient(145deg,#000 0%,#111 100%)!important;border:1px solid #444!important;border-radius:25px!important;padding:50px!important;max-width:700px!important;margin:0 auto!important;text-align:center!important;box-shadow:0 25px 70px rgba(0,0,0,.9)!important;backdrop-filter:blur(10px)!important;min-height: 450px;contain: layout style;}

.titulo-principal{color:#fff!important;font-size:38px!important;font-weight:900!important;margin-bottom:30px!important;line-height:1.2!important;text-shadow:2px 2px 4px rgba(0,0,0,.5)!important;animation:fadeInUp 1.2s ease-out .3s both!important}

.subtitulo{color:#e5e5e5!important;font-size:20px!important;margin-bottom:40px!important;font-weight:600!important;line-height:1.4!important;animation:fadeInUp 1.2s ease-out .6s both!important}

.texto-garantia{color:#a3a3a3!important;font-size:14px!important;margin-top:15px!important;display:flex!important;align-items:center!important;justify-content:center!important;gap:8px!important;font-weight:500!important}

.elemento-confianca{margin-top:25px!important;padding:18px!important;background:rgba(255,255,255,0.06)!important;border-radius:12px!important;border:1px solid rgba(255,255,255,0.12)!important}

.texto-confianca{color:#a3a3a3!important;font-size:15px!important;margin:0!important;font-weight:600!important}

.prova-social-container{margin:30px 0!important;padding:25px!important;background:linear-gradient(145deg,#1a1a1a 0%,#0a0a0a 100%)!important;border-radius:18px!important;border:1px solid #333!important}

.contador-pessoas{text-align:center!important;margin-bottom:18px!important}

.numero-contador{color:#dc2626!important;font-size:36px!important;font-weight:900!important;display:block!important;text-shadow:0 0 15px rgba(220,38,38,0.6)!important}

.texto-contador{color:#a3a3a3!important;font-size:15px!important;font-weight:600!important}

.testimonios-rapidos{display:flex!important;flex-direction:column!important;gap:10px!important;margin-top:15px!important}

.testimonio-mini{background:rgba(255,215,0,0.12)!important;border-left:4px solid #FFD700!important;padding:10px 15px!important;color:#e5e5e5!important;font-size:14px!important;border-radius:6px!important;font-weight:500!important}

.urgencia-container{background:linear-gradient(135deg,#dc2626 0%,#b91c1c 100%)!important;padding:18px!important;border-radius:12px!important;margin:25px 0!important;text-align:center!important;animation:pulso-urgencia 2s infinite!important;border:2px solid rgba(255,255,255,0.1)!important}

@keyframes pulso-urgencia{0%,100%{transform:scale(1)}50%{transform:scale(1.02)}}

.timer-urgencia{color:white!important;font-weight:bold!important;font-size:17px!important}

.timer-numero{background:rgba(0,0,0,0.4)!important;padding:5px 10px!important;border-radius:6px!important;margin-left:8px!important;font-family:monospace!important;font-size:18px!important}

.motivo-urgencia{color:#fecaca!important;font-size:13px!important;margin-top:8px!important;font-weight:600!important}

.analises-restantes{background:rgba(255,165,0,0.15)!important;border:1px solid #FFA500!important;border-radius:8px!important;padding:10px!important;margin:15px 0!important;color:#FFA500!important;font-size:14px!important;font-weight:600!important}

.logo-container{display:flex;justify-content:center;align-items:center;margin-bottom:50px!important;animation:fadeInDown 1.2s ease-out}

.logo-arredondada{border-radius: 18px !important;
  width: 220px !important;
  height: 130px !important;
  object-fit: cover !important;
  border: 4px solid #dc2626 !important;
  box-shadow: 0 0 35px rgba(220, 38, 38, 0.5), 0 0 0 3px #dc2626 !important;
  transition: all 0.4s ease !important;
  display: block !important;
  aspect-ratio: 5/3;}

@keyframes fadeInDown{from{opacity:0;transform: translate3d(0, -40px, 0);}to{opacity:1;transform: translate3d(0, 0, 0);}}
@keyframes fadeInUp{from{opacity:0;transform: translate3d(0, 40px, 0);}to{opacity:1;transform: translate3d(0, 0, 0);}}

.loading-overlay{position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,.95);display:flex;align-items:center;justify-content:center;z-index:1000;backdrop-filter:blur(5px)}

.loading-content{text-align:center;color:white}

.progress-bar{width:280px;height:8px;background:#333;border-radius:4px;overflow:hidden;margin-top:30px}

.progress-fill{height:100%;background:linear-gradient(90deg,#dc2626,#f87171);transition:width .3s ease;border-radius:4px}

.main-content{display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding-top: 100px;
  contain: layout style paint;}

.copyright{position:relative;margin-top:45px;padding:25px;color:#888;font-size:13px;text-align:center}

.garantia-visual{display:flex!important;align-items:center!important;justify-content:center!important;gap:10px!important;margin-top:18px!important;color:#a3a3a3!important;font-size:15px!important;font-weight:600!important}

.headline-destaque{color:#dc2626!important;font-size:42px!important;font-weight:900!important;text-shadow:0 0 20px rgba(220,38,38,0.4)!important}

.resultado-destaque{color:#FFD700!important;display:block!important;margin-top:18px!important;font-size:30px!important;font-weight:900!important;text-shadow:0 0 15px rgba(255,215,0,0.3)!important}

.metodo-validado{color:#e5e5e5!important;display:block!important;margin-top:12px!important;font-size:17px!important;font-weight:500!important;opacity:0.9!important}

@media (max-width:768px){.container-preto{padding:30px!important;margin:15px!important;border-radius:22px!important}.logo-container{margin-bottom:35px!important}.logo-arredondada{width:180px!important;height:110px!important;border:3px solid #dc2626!important}.titulo-principal{font-size:28px!important;margin-bottom:22px!important;line-height:1.2!important}.headline-destaque{font-size:32px!important}.resultado-destaque{font-size:24px!important;margin-top:15px!important}.metodo-validado{font-size:15px!important}.subtitulo{font-size:17px!important;margin-bottom:30px!important}.prova-social-container{padding:18px!important;margin:25px 0!important}.numero-contador{font-size:32px!important}.btn-quiz-pulsante{padding:18px 35px!important;font-size:17px!important;max-width:95%!important}.cta-principal{font-size:17px!important}.main-content{padding-top:25px;min-height:calc(100vh - 50px)}.copyright{margin-top:35px;padding:18px}.elemento-confianca{padding:15px!important;margin-top:20px!important}.texto-confianca{font-size:13px!important}.urgencia-container{padding:15px!important;margin:20px 0!important}.timer-urgencia{font-size:15px!important}.timer-numero{font-size:16px!important}}

@media (max-width:480px){.container-preto{padding:25px!important;margin:8px!important}.logo-arredondada{width:160px!important;height:95px!important;border:2px solid #dc2626!important}.titulo-principal{font-size:24px!important;line-height:1.1!important}.headline-destaque{font-size:28px!important}.resultado-destaque{font-size:20px!important;margin-top:12px!important}.metodo-validado{font-size:14px!important}.subtitulo{font-size:15px!important}.prova-social-container{padding:15px!important;margin:20px 0!important}.numero-contador{font-size:28px!important}.btn-quiz-pulsante{padding:16px 30px!important;font-size:15px!important}.cta-principal{font-size:15px!important}.cta-secundario{font-size:12px!important}.copyright{margin-top:30px;padding:15px;font-size:12px}.elemento-confianca{padding:12px!important;margin-top:15px!important}.texto-confianca{font-size:12px!important}.garantia-visual{font-size:13px!important;margin-top:15px!important}.urgencia-container{padding:12px!important;margin:15px 0!important}.timer-urgencia{font-size:14px!important}.timer-numero{font-size:15px!important}.testimonios-rapidos{gap:8px!important}.testimonio-mini{padding:8px 12px!important;font-size:13px!important}}

@keyframes spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}
`}</style>

        {/* Loading overlay */}
        {isLoading && (
          <div className="loading-overlay">
            <div className="loading-content">
              <div style={{ fontSize: "19px", fontWeight: "700" }}>Preparando sua análise personalizada...</div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: `${loadingProgress}%` }} />
              </div>
            </div>
          </div>
        )}

        {/* Error message */}
        {errorMessage && (
          <div
            style={{
              position: "fixed",
              top: "20px",
              left: "20px",
              right: "20px",
              background: "#dc2626",
              color: "white",
              padding: "15px",
              borderRadius: "10px",
              zIndex: 1000,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span>{errorMessage}</span>
            <button
              onClick={() => setErrorMessage("")}
              style={{
                background: "none",
                border: "none",
                color: "white",
                fontSize: "20px",
                cursor: "pointer",
              }}
            >
              ×
            </button>
          </div>
        )}

        {/* Offline indicator */}
        {!isOnline && (
          <div
            style={{
              position: "fixed",
              top: "0",
              left: "0",
              right: "0",
              background: "#f59e0b",
              color: "white",
              textAlign: "center",
              padding: "10px",
              zIndex: 1000,
            }}
          >
            ⚠️ Sem conexão com a internet
          </div>
        )}

        {/* CONTEÚDO PRINCIPAL OTIMIZADO */}
        <div className="main-content">
          <div className="container-preto">
            {/* LOGO */}
            <div className="logo-container">
              <Image
                src="https://amandateixeiraoficial.com.br/wp-content/uploads/2025/09/Generated-Image-September-17-2025-4_42PM.jpeg"
                alt="Logo Sobrancelhas Expert"
                width={220}
                height={130}
                className="logo-arredondada"
                priority
                fetchPriority="high"
                quality={75}
                sizes="(max-width: 480px) 160px, (max-width: 768px) 180px, 220px"
                placeholder="blur"
                blurDataURL="data:image/webp;base64,UklGRpIAAABXRUJQVlA4WAoAAAAQAAAADwAABwAAQUxQSDIAAAARL0AmbZurmr57yyIiqE8oiG0bejIYEQTgqiDA9vqnsUSI6H+oAERp2HZ65qP/VIAWAFZQOCBCAAAA8AEAnQEqEAAIAAVAfCWkAALp8sF8rgRgAP7o9FDvMCkMde9PK7euH5M1m6VWoDXf2FkP3BqV0ZYbO6NA/VFIAAAA"
                onError={(e) => {
                  e.target.style.display = "none"
                }}
              />
            </div>

            {/* HEADLINE OTIMIZADA COM AS MELHORIAS */}
            <h1 className="titulo-principal">
              <span className="headline-destaque">
                89% das mulheres que trabalham com sobrancelhas faturam R$ 3.000-8.000/mês
              </span>
              <span className="resultado-destaque">
                Descubra em 2 minutos se VOCÊ tem esse perfil
              </span>
              <span className="metodo-validado">
                (Método usado por +127.000 mulheres com 89% de sucesso)
              </span>
            </h1>

            {/* SUBTÍTULO OTIMIZADO */}
            <p className="subtitulo">
              Análise gratuita de potencial - Resultado personalizado em 2 minutos
            </p>

            {/* PROVA SOCIAL DEVASTADORA COM TESTIMONIAIS OTIMIZADOS */}
            <div className="prova-social-container">
              <div className="contador-pessoas">
                <span className="numero-contador">{contadorPessoas.toLocaleString()}</span>
                <span className="texto-contador">mulheres analisadas hoje</span>
              </div>
              
              <div className="testimonios-rapidos">
                <div className="testimonio-mini">
                  "O teste mostrou potencial para R$ 6k/mês. Hoje faturo isso!" - Maria C.
                </div>
                <div className="testimonio-mini">
                  "Descobri meu perfil. Em 4 meses: R$ 8k/mês" - Ana S.
                </div>
                <div className="testimonio-mini">
                  "Quiz revelou meus erros. Dobrei o faturamento" - Carmen L.
                </div>
              </div>
            </div>

            {/* URGÊNCIA JUSTIFICADA */}
            <div className="urgencia-container">
              <div className="timer-urgencia">
                ⏰ Esta análise fecha em: <span className="timer-numero">{formatTime(timeLeft)}</span>
              </div>
              <div className="motivo-urgencia">
                Apenas {analisesPendentes} análises personalizadas disponíveis hoje
              </div>
              <div className="motivo-urgencia">
                (Cada análise demora 15 minutos para processar)
              </div>
            </div>

            {/* CTA OTIMIZADO */}
            <div className="cta-container">
              <button onClick={handleStart} disabled={isLoading || !isOnline} className="btn-quiz-pulsante">
                {isLoading ? (
                  <span>PREPARANDO SUA ANÁLISE...</span>
                ) : (
                  <>
                    <span className="cta-principal">DESCOBRIR MEU POTENCIAL DE FATURAMENTO</span>
                    <span className="cta-secundario">✓ Grátis ✓ 2 minutos ✓ Análise personalizada ✓ Resultado imediato</span>
                    <ArrowRight style={{position: "absolute", right: "25px", top: "50%", transform: "translateY(-50%)", width: "24px", height: "24px"}} />
                  </>
                )}
              </button>
              
              <div className="garantia-visual">
                <Shield size={18} />
                <span>100% Confidencial - Sem spam - Resultado imediato</span>
              </div>
            </div>

            {/* ELEMENTO DE CONFIANÇA OTIMIZADO */}
            <div className="elemento-confianca">
              <p className="texto-confianca">
                ✓ Mais de 127.000 mulheres analisadas  ✓ Método validado cientificamente  ✓ 89% de taxa de sucesso  ✓ Resultados comprovados
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="copyright">Sobrancelhas Expert™ Todos os Direitos Reservados.</div>
      </div>
      <script defer src="data:text/javascript,"></script>
    </>
  )
} 