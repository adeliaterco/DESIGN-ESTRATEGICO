"use client"

import { useState, useEffect, useCallback } from "react"
import { ArrowRight, Shield } from "lucide-react"
import { useRouter } from "next/navigation"
import Image from "next/image"

// GA otimizado
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
  const [timeLeft, setTimeLeft] = useState(1847)

  // Timer simples
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

  const handleStart = useCallback(() => {
    if (isLoading) return
    setIsLoading(true)
    enviarEvento("quiz_start", { funil: "sobrancelhas" })
    
    setTimeout(() => {
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
    }, 800)
  }, [isLoading, router])

  return (
    <>
      <head>
        <title>Descubra Quanto Você Pode Faturar com Sobrancelhas</title>
        <meta name="description" content="89% das mulheres faturam R\$ 3-8k/mês. Descubra seu potencial em 2 minutos." />
      </head>
      
      <div style={{ backgroundColor: "#000", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "20px" }}>
        
        <style jsx>{`
          .container-quiz {
            background: linear-gradient(145deg, #111 0%, #000 100%);
            border: 1px solid #333;
            border-radius: 20px;
            padding: 40px;
            max-width: 500px;
            width: 100%;
            text-align: center;
            box-shadow: 0 20px 60px rgba(0,0,0,0.8);
          }

          .logo {
            display: block !important;
            margin: 0 auto 30px !important;
            border-radius: 12px !important;
            border: 3px solid #dc2626 !important;
            object-fit: cover !important;
          }

          .headline {
            color: #fff;
            font-size: 28px;
            font-weight: 900;
            line-height: 1.2;
            margin-bottom: 20px;
          }

          .destaque {
            color: #dc2626;
            font-size: 32px;
          }

          .subtitulo {
            color: #FFD700;
            font-size: 18px;
            font-weight: 700;
            margin-bottom: 25px;
          }

          .testimonial {
            background: rgba(255,215,0,0.1);
            border-left: 3px solid #FFD700;
            padding: 12px;
            margin: 20px 0;
            color: #e5e5e5;
            font-size: 14px;
            border-radius: 5px;
            font-style: italic;
          }

          .urgencia {
            background: linear-gradient(135deg, #dc2626, #b91c1c);
            padding: 15px;
            border-radius: 10px;
            margin: 20px 0;
            color: white;
            font-weight: bold;
          }

          .timer {
            background: rgba(0,0,0,0.3);
            padding: 5px 10px;
            border-radius: 5px;
            font-family: monospace;
            font-size: 18px;
          }

          .btn-quiz {
            background: linear-gradient(135deg, #dc2626, #b91c1c);
            color: white;
            border: none;
            padding: 20px 40px;
            font-size: 18px;
            font-weight: 900;
            border-radius: 50px;
            text-transform: uppercase;
            cursor: pointer;
            width: 100%;
            max-width: 400px;
            box-shadow: 0 10px 30px rgba(220,38,38,0.4);
            transition: all 0.3s ease;
            position: relative;
            animation: pulsar 3s infinite;
          }

          @keyframes pulsar {
            0% { box-shadow: 0 0 0 0 rgba(220,38,38,0.7); }
            70% { box-shadow: 0 0 0 10px rgba(220,38,38,0); }
            100% { box-shadow: 0 0 0 0 rgba(220,38,38,0); }
          }

          .btn-quiz:hover {
            transform: scale(1.05);
            box-shadow: 0 15px 40px rgba(220,38,38,0.6);
          }

          .garantia {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            margin-top: 15px;
            color: #a3a3a3;
            font-size: 14px;
          }

          .loading {
            opacity: 0.7;
            pointer-events: none;
          }

          @media (max-width: 768px) {
            .container-quiz {
              padding: 30px 25px;
              margin: 10px;
            }
            
            .headline {
              font-size: 24px;
              margin-bottom: 15px;
            }
            
            .destaque {
              font-size: 28px;
            }
            
            .subtitulo {
              font-size: 16px;
              margin-bottom: 20px;
            }
            
            .btn-quiz {
              padding: 18px 35px;
              font-size: 16px;
            }
          }

          @media (max-width: 480px) {
            .container-quiz {
              padding: 25px 20px;
              margin: 5px;
            }
            
            .headline {
              font-size: 20px;
            }
            
            .destaque {
              font-size: 24px;
            }
            
            .subtitulo {
              font-size: 14px;
            }
            
            .btn-quiz {
              padding: 16px 30px;
              font-size: 14px;
            }
          }
        `}</style>

        <div className={`container-quiz ${isLoading ? 'loading' : ''}`}>
          
          {/* LOGO COMPACTA - TAMANHO ORIGINAL */}
          <Image
            src="https://amandateixeiraoficial.com.br/wp-content/uploads/2025/09/Generated-Image-September-17-2025-4_42PM.jpeg"
            alt="Sobrancelhas Expert"
            width={0}
            height={0}
            sizes="100vw"
            className="logo"
            priority
            quality={70}
            style={{
              width: 'auto',
              height: 'auto',
              maxWidth: '100%',
              display: 'block',
              margin: '0 auto 30px',
              borderRadius: '12px',
              border: '3px solid #dc2626',
              objectFit: 'cover'
            }}
          />

          {/* HEADLINE DIRETA */}
          <h1 className="headline">
            <span className="destaque">89%</span> das mulheres faturam<br />
            <span style={{color: "#FFD700"}}>R\$ 3-8k/mês</span> com sobrancelhas
          </h1>

          {/* SUBTÍTULO FOCADO */}
          <p className="subtitulo">
            Descubra seu potencial em 2 minutos
          </p>

          {/* UM TESTIMONIAL PODEROSO */}
          <div className="testimonial">
            "O teste mostrou R\$ 6k/mês de potencial. Hoje faturo isso!" - Maria C.
          </div>

          {/* URGÊNCIA SIMPLES */}
          <div className="urgencia">
            ⏰ Encerra em: <span className="timer">{formatTime(timeLeft)}</span>
            <div style={{fontSize: "12px", marginTop: "5px", opacity: "0.9"}}>
              Apenas 47 análises disponíveis hoje
            </div>
          </div>

          {/* CTA DIRETO */}
          <button 
            onClick={handleStart} 
            disabled={isLoading} 
            className="btn-quiz"
          >
            {isLoading ? (
              "PREPARANDO..."
            ) : (
              <>
                DESCOBRIR MEU POTENCIAL
                <ArrowRight style={{position: "absolute", right: "20px", top: "50%", transform: "translateY(-50%)", width: "20px"}} />
              </>
            )}
          </button>

          {/* GARANTIA MÍNIMA */}
          <div className="garantia">
            <Shield size={16} />
            <span>100% Grátis • 2 minutos • Resultado imediato</span>
          </div>

        </div>
      </div>
    </>
  )
}