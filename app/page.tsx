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

  // Contador de pessoas em tempo real
  useEffect(() => {
    const interval = setInterval(() => {
      setContadorPessoas(prev => prev + Math.floor(Math.random() * 3) + 1)
    }, 45000)
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
        <link rel="preconnect" href="https://comprarplanseguro.shop" />
        <link rel="dns-prefetch" href="https://comprarplanseguro.shop" />
        <title>Descubra Seu Potencial de Faturamento com Sobrancelhas</title>
        <meta name="description" content="Quiz gratuito de 2 minutos para descobrir quanto você pode faturar por mês trabalhando com sobrancelhas. Mais de 127.000 mulheres já descobriram!" />
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
.btn-quiz-pulsante{background:linear-gradient(135deg,#dc2626 0%,#b91c1c 100%)!important;color:white!important;border:none!important;padding:20px 40px!important;font-size:18px!important;font-weight:900!important;border-radius:50px!important;text-transform:uppercase!important;cursor:pointer!important;transition:all .3s ease!important;animation:pulsar-cta 3s infinite!important;width:100%!important;max-width:400px!important;box-shadow:0 8px 25px rgba(220,38,38,.4)!important;letter-spacing:.5px!important;position:relative!important;overflow:hidden!important}

@keyframes pulsar-cta{0%{box-shadow:0 0 0 0 rgba(220,38,38,.7)}70%{box-shadow:0 0 0 10px rgba(220,38,38,0)}100%{box-shadow:0 0 0 0 rgba(220,38,38,0)}}

.btn-quiz-pulsante:hover{background:linear-gradient(135deg,#b91c1c 0%,#991b1b 100%)!important;transform:scale(1.05)!important;box-shadow:0 15px 40px rgba(220,38,38,.7)!important}

.cta-principal{display:block!important;font-size:18px!important;font-weight:900!important;text-transform:uppercase!important;letter-spacing:0.5px!important}

.cta-secundario{display:block!important;font-size:12px!important;margin-top:5px!important;opacity:0.9!important}

.container-preto{background:linear-gradient(145deg,#000 0%,#111 100%)!important;border:1px solid #444!important;border-radius:25px!important;padding:45px!important;max-width:650px!important;margin:0 auto!important;text-align:center!important;box-shadow:0 20px 60px rgba(0,0,0,.8)!important;backdrop-filter:blur(10px)!important;min-height: 400px;contain: layout style;}

.titulo-principal{color:#fff!important;font-size:36px!important;font-weight:900!important;margin-bottom:25px!important;line-height:1.2!important;text-shadow:1px 1px 2px rgba(0,0,0,.3)!important;animation:fadeInUp 1.2s ease-out .3s both!important}

.subtitulo{color:#e5e5e5!important;font-size:19px!important;margin-bottom:35px!important;font-weight:500!important;line-height:1.4!important;animation:fadeInUp 1.2s ease-out .6s both!important}

.texto-garantia{color:#a3a3a3!important;font-size:14px!important;margin-top:15px!important;display:flex!important;align-items:center!important;justify-content:center!important;gap:8px!important;font-weight:500!important}

.elemento-confianca{margin-top:20px!important;padding:15px!important;background:rgba(255,255,255,0.05)!important;border-radius:10px!important;border:1px solid rgba(255,255,255,0.1)!important}

.texto-confianca{color:#a3a3a3!important;font-size:14px!important;margin:0!important;font-weight:500!important}

.prova-social-container{margin:25px 0!important;padding:20px!important;background:linear-gradient(145deg,#1a1a1a 0%,#0a0a0a 100%)!important;border-radius:15px!important;border:1px solid #333!important}

.contador-pessoas{text-align:center!important;margin-bottom:15px!important}

.numero-contador{color:#dc2626!important;font-size:32px!important;font-weight:900!important;display:block!important;text-shadow:0 0 10px rgba(220,38,38,0.5)!important}

.texto-contador{color:#a3a3a3!important;font-size:14px!important;font-weight:500!important}

.testimonios-rapidos{display:flex!important;flex-direction:column!important;gap:8px!important}

.testimonio-mini{background:rgba(255,215,0,0.1)!important;border-left:3px solid #FFD700!important;padding:8px 12px!important;color:#e5e5e5!important;font-size:13px!important;border-radius:5px!important}

.urgencia-container{background:linear-gradient(135deg,#dc2626 0%,#b91c1c 100%)!important;padding:15px!important;border-radius:10px!important;margin:20px 0!important;text-align:center!important;animation:pulso-urgencia 2s infinite!important}

@keyframes pulso-urgencia{0%,100%{transform:scale(1)}50%{transform:scale(1.02)}}

.timer-urgencia{color:white!important;font-weight:bold!important;font-size:16px!important}

.timer-numero{background:rgba(0,0,0,0.3)!important;padding:4px 8px!important;border-radius:5px!important;margin-left:5px!important;font-family:monospace!important}

.motivo-urgencia{color:#fecaca!important;font-size:12px!important;margin-top:5px!important}

.logo-container{display:flex;justify-content:center;align-items:center;margin-bottom:45px!important;animation:fadeInDown 1.2s ease-out}

.logo-arredondada{border-radius: 15px !important;
  width: 200px !important;
  height: 120px !important;
  object-fit: cover !important;
  border: 4px solid #dc2626 !important;
  box-shadow: 0 0 30px rgba(220, 38, 38, 0.4), 0 0 0 2px #dc2626 !important;
  transition: all 0.4s ease !important;
  display: block !important;
  aspect-ratio: 5/3;}

@keyframes fadeInDown{from{opacity:0;transform: translate3d(0, -40px, 0);}to{opacity:1;transform: translate3d(0, 0, 0);}}
@keyframes fadeInUp{from{opacity:0;transform: translate3d(0, 40px, 0);}to{opacity:1;transform: translate3d(0, 0, 0);}}

.loading-overlay{position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,.95);display:flex;align-items:center;justify-content:center;z-index:1000;backdrop-filter:blur(5px)}

.loading-content{text-align:center;color:white}

.progress-bar{width:250px;height:6px;background:#333;border-radius:3px;overflow:hidden;margin-top:25px}

.progress-fill{height:100%;background:linear-gradient(90deg,#dc2626,#f87171);transition:width .3s ease;border-radius:3px}

.main-content{display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding-top: 100px;
  contain: layout style paint;}

.copyright{position:relative;margin-top:40px;padding:20px;color:#888;font-size:12px;text-align:center}

.garantia-visual{display:flex!important;align-items:center!important;justify-content:center!important;gap:8px!important;margin-top:15px!important;color:#a3a3a3!important;font-size:14px!important}

@media (max-width:768px){.container-preto{padding:25px!important;margin:10px!important;border-radius:20px!important}.logo-container{margin-bottom:30px!important}.logo-arredondada{width:160px!important;height:100px!important;border:3px solid #dc2626!important}.titulo-principal{font-size:26px!important;margin-bottom:18px!important;line-height:1.2!important}.subtitulo{font-size:16px!important;margin-bottom:25px!important}.prova-social-container{padding:15px!important;margin:20px 0!important}.numero-contador{font-size:28px!important}.btn-quiz-pulsante{padding:16px 32px!important;font-size:16px!important;max-width:95%!important}.main-content{padding-top:20px;min-height:calc(100vh - 40px)}.copyright{margin-top:30px;padding:15px}.elemento-confianca{padding:12px!important;margin-top:15px!important}.texto-confianca{font-size:12px!important}.urgencia-container{padding:12px!important;margin:15px 0!important}.timer-urgencia{font-size:14px!important}}

@media (max-width:480px){.container-preto{padding:20px!important;margin:5px!important}.logo-arredondada{width:140px!important;height:85px!important;border:2px solid #dc2626!important}.titulo-principal{font-size:22px!important;line-height:1.1!important}.subtitulo{font-size:14px!important}.prova-social-container{padding:12px!important;margin:15px 0!important}.numero-contador{font-size:24px!important}.btn-quiz-pulsante{padding:14px 28px!important;font-size:14px!important}.copyright{margin-top:25px;padding:10px;font-size:11px}.elemento-confianca{padding:10px!important;margin-top:12px!important}.texto-confianca{font-size:11px!important}.garantia-visual{font-size:12px!important;margin-top:12px!important}.urgencia-container{padding:10px!important;margin:12px 0!important}.timer-urgencia{font-size:13px!important}}

@keyframes spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}
`}</style>

        {/* Loading overlay */}
        {isLoading && (
          <div className="loading-overlay">
            <div className="loading-content">
              <div style={{ fontSize: "18px", fontWeight: "600" }}>Preparando seu questionário personalizado...</div>
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

        {/* CONTEÚDO PRINCIPAL OTIMIZADO PARA SOBRANCELHAS */}
        <div className="main-content">
          <div className="container-preto">
            {/* LOGO */}
            <div className="logo-container">
              <Image
                src="https://comprarplanseguro.shop/wp-content/uploads/2025/08/543af5ae-e239-4f03-a3a8-59c53717f3b9.webp"
                alt="Logo Sobrancelhas Expert"
                width={200}
                height={120}
                className="logo-arredondada"
                priority
                fetchPriority="high"
                quality={70}
                sizes="(max-width: 480px) 140px, (max-width: 768px) 160px, 200px"
                placeholder="blur"
                blurDataURL="data:image/webp;base64,UklGRpIAAABXRUJQVlA4WAoAAAAQAAAADwAABwAAQUxQSDIAAAARL0AmbZurmr57yyIiqE8oiG0bejIYEQTgqiDA9vqnsUSI6H+oAERp2HZ65qP/VIAWAFZQOCBCAAAA8AEAnQEqEAAIAAVAfCWkAALp8sF8rgRgAP7o9FDvMCkMde9PK7euH5M1m6VWoDXf2FkP3BqV0ZYbO6NA/VFIAAAA"
                onError={(e) => {
                  e.target.style.display = "none"
                }}
              />
            </div>

            {/* HEADLINE MATADORA PARA SOBRANCELHAS */}
            <h1 className="titulo-principal">
              <span style={{color: "#dc2626", fontSize: "38px"}}>
                ATENÇÃO!
              </span>
              <br />
              Quer descobrir quanto você pode faturar por mês trabalhando com sobrancelhas?
              <br />
              <span style={{color: "#FFD700", display: "block", marginTop: "15px", fontSize: "28px"}}>
                Descubra em 2 minutos seu verdadeiro potencial
              </span>
              <span style={{color: "#e5e5e5", display: "block", marginTop: "10px", fontSize: "16px", fontWeight: "400"}}>
                (Método usado por +10.000 mulheres com 89% de sucesso)
              </span>
            </h1>

            {/* SUBTÍTULO OTIMIZADO */}
            <p className="subtitulo">
              Avaliação rápida de 2 minutos - Resultados imediatos
            </p>

            {/* PROVA SOCIAL DEVASTADORA */}
            <div className="prova-social-container">
              <div className="contador-pessoas">
                <span className="numero-contador">{contadorPessoas.toLocaleString()}</span>
                <span className="texto-contador">mulheres avaliadas hoje</span>
              </div>
              
              <div className="testimonios-rapidos">
                <div className="testimonio-mini">
                  "Funcionou em 3 semanas" - Maria C.
                </div>
                <div className="testimonio-mini">
                  "Já faturei R$ 6.000 no primeiro mês" - Ana S.
                </div>
                <div className="testimonio-mini">
                  "Resultado incrível" - Carmen L.
                </div>
              </div>
            </div>

            {/* URGÊNCIA PSICOLÓGICA */}
            <div className="urgencia-container">
              <div className="timer-urgencia">
                ⏰ Esta avaliação fecha em: <span className="timer-numero">{formatTime(timeLeft)}</span>
              </div>
              <div className="motivo-urgencia">
                Apenas 50 avaliações disponíveis por dia
              </div>
            </div>

            {/* CTA PODEROSO */}
            <div className="cta-container">
              <button onClick={handleStart} disabled={isLoading || !isOnline} className="btn-quiz-pulsante">
                {isLoading ? (
                  <span>PREPARANDO SUA AVALIAÇÃO...</span>
                ) : (
                  <>
                    <span className="cta-principal">DESCOBRIR MEU POTENCIAL AGORA</span>
                    <span className="cta-secundario">✓ Grátis ✓ 2 minutos ✓ Resultado imediato</span>
                    <ArrowRight style={{position: "absolute", right: "20px", top: "50%", transform: "translateY(-50%)", width: "22px", height: "22px"}} />
                  </>
                )}
              </button>
              
              <div className="garantia-visual">
                <Shield size={16} />
                <span>100% Confidencial - Sem spam</span>
              </div>
            </div>

            {/* ELEMENTO DE CONFIANÇA */}
            <div className="elemento-confianca">
              <p className="texto-confianca">
                ✓ Mais de 127.000 mulheres avaliadas  ✓ Método validado  ✓ Resultados reais
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