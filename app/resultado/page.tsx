"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import {
  Shield,
  ArrowRight,
  Check,
  Clock,
  Users,
  Heart,
  Play,
  Star,
  Crown,
  Target,
  Zap
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CountdownTimer } from "@/components/countdown-timer"
import { enviarEvento } from "../../lib/analytics"

export default function ResultPageOptimized() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [recentBuyers, setRecentBuyers] = useState(3)
  const [userProfile, setUserProfile] = useState<string>("")
  const [profileData, setProfileData] = useState(null)
  const contentRef = useRef<HTMLDivElement>(null)

  // Definição dos perfis de sobrancelhista
  const profiles = {
    INICIANTE_DETERMINADA: {
      title: "INICIANTE DETERMINADA",
      subtitle: "Potencial de Faturamento: R$ 3.000 - R$ 6.000/mês",
      icon: "🌟",
      color: "from-pink-500 to-rose-600",
      description: "Você tem TUDO para ser uma sobrancelhista de sucesso!",
      characteristics: [
        "✅ Seu perfil mostra determinação e foco",
        "✅ Com o método certo, pode faturar R$ 6.000/mês em 90 dias",
        "✅ Tem perfil ideal para crescimento rápido"
      ],
      challenge: "Falta de conhecimento técnico",
      solution: "MÉTODO SOBRANCELHA ZERO AO SUCESSO",
      offer: {
        price: 97,
        originalPrice: 397,
        discount: 300,
        bonus: "Kit Iniciante Completo",
        paymentLink: "https://pay.hotmart.com/F100142422S?off=iniciante97",
        includes: [
          "✓ Curso completo do zero ao avançado",
          "✓ Kit Iniciante Completo (R$ 197)",
          "✓ Técnicas de captação de clientes",
          "✓ Garantia de primeira cliente em 30 dias",
          "✓ Suporte por 60 dias"
        ]
      }
    },
    
    EMPREENDEDORA_NATA: {
      title: "EMPREENDEDORA NATA",
      subtitle: "Potencial de Faturamento: R$ 8.000 - R$ 15.000/mês", 
      icon: "👑",
      color: "from-yellow-500 to-orange-600",
      description: "VOCÊ É UMA MÁQUINA DE FAZER DINHEIRO!",
      characteristics: [
        "🔥 Seu perfil indica potencial para ser TOP 1%",
        "🔥 Pode construir um império de sobrancelhas",
        "🔥 Tem mentalidade de empresária de sucesso"
      ],
      challenge: "Escalar o negócio rapidamente",
      solution: "MÉTODO IMPÉRIO SOBRANCELHAS",
      offer: {
        price: 197,
        originalPrice: 697,
        discount: 500,
        bonus: "Mentoria Grupo VIP",
        paymentLink: "https://pay.hotmart.com/F100142422S?off=imperio197",
        includes: [
          "✓ Método completo + técnicas avançadas",
          "✓ Estratégias de precificação premium",
          "✓ Mentoria Grupo VIP (R$ 297)",
          "✓ Marketing digital para sobrancelhas",
          "✓ Como treinar outras profissionais"
        ]
      }
    },
    
    RENDA_EXTRA_INTELIGENTE: {
      title: "RENDA EXTRA INTELIGENTE",
      subtitle: "Potencial de Faturamento: R$ 2.000 - R$ 4.000/mês",
      icon: "💰", 
      color: "from-green-500 to-emerald-600",
      description: "VOCÊ ESCOLHEU O CAMINHO CERTO!",
      characteristics: [
        "💡 Sobrancelhas é perfeito para renda extra",
        "💡 Pode trabalhar nos fins de semana e faturar alto",
        "💡 Perfil ideal para conciliar com outras atividades"
      ],
      challenge: "Otimizar o tempo disponível",
      solution: "MÉTODO RENDA EXTRA TURBINADA",
      offer: {
        price: 67,
        originalPrice: 297,
        discount: 230,
        bonus: "Agenda Otimizada",
        paymentLink: "https://pay.hotmart.com/F100142422S?off=rendaextra67",
        includes: [
          "✓ Cronograma para quem tem pouco tempo",
          "✓ Técnicas rápidas e eficientes",
          "✓ Agenda Otimizada (R$ 147)",
          "✓ Como conseguir clientes no fim de semana",
          "✓ Estratégias de produtividade"
        ]
      }
    },
    
    PESQUISADORA_CAUTELOSA: {
      title: "PESQUISADORA CAUTELOSA",
      subtitle: "Potencial de Faturamento: R$ 1.000 - R$ 3.000/mês",
      icon: "🎯",
      color: "from-blue-500 to-indigo-600", 
      description: "SUA CAUTELA É SUA FORÇA!",
      characteristics: [
        "🎯 Você não toma decisões impulsivas",
        "🎯 Quando decide, vai até o fim", 
        "🎯 Perfil analítico é vantagem no mercado"
      ],
      challenge: "Excesso de análise, pouca ação",
      solution: "MÉTODO PASSO A PASSO SEGURO",
      offer: {
        price: 1,
        originalPrice: 197,
        discount: 196,
        bonus: "Teste 7 dias + Garantia Estendida",
        paymentLink: "https://pay.hotmart.com/F100142422S?off=teste1real",
        includes: [
          "✓ Teste por 7 dias: apenas R$ 1,00",
          "✓ Depois: 12x R$ 9,90",
          "✓ Garantia estendida de 30 dias",
          "✓ Suporte individual personalizado",
          "✓ Comunidade de apoio exclusiva"
        ]
      }
    }
  }

  useEffect(() => {
    // Recuperar perfil do localStorage ou definir padrão
    const savedProfile = localStorage.getItem("userProfile") || "INICIANTE_DETERMINADA"
    setUserProfile(savedProfile)
    setProfileData(profiles[savedProfile])

    setTimeout(() => {
      setIsLoaded(true)
    }, 300)

    // Simular compradores recentes
    const interval = setInterval(() => {
      setRecentBuyers((prev) => {
        const increase = Math.floor(Math.random() * 2) + 1
        return Math.min(prev + increase, 23)
      })
    }, 45000)

    // Registra visualização
    try {
      enviarEvento("visualizou_resultado", {
        perfil: savedProfile,
        funil: "sobrancelhas"
      })
    } catch (error) {
      console.error("Error al registrar evento:", error)
    }

    // Carrega script do VTurb
    const loadVTurbScript = () => {
      if (!document.querySelector('script[src*="68c885a9cd2fbb4c19f84a1e"]')) {
        const script = document.createElement("script")
        script.src = "https://scripts.converteai.net/498be6ac-2d19-4386-aba2-c11c84449107/players/68c885a9cd2fbb4c19f84a1e/v4/player.js"
        script.async = true
        document.head.appendChild(script)
      }
    }

    loadVTurbScript()

    return () => clearInterval(interval)
  }, [])

  const handlePurchase = () => {
    try {
      enviarEvento("clicou_comprar", {
        posicao: "principal",
        perfil: userProfile,
        preco: profileData?.offer?.price
      })
    } catch (error) {
      console.error("Error al registrar evento de clic:", error)
    }
    
    if (profileData?.offer?.paymentLink) {
      window.open(profileData.offer.paymentLink, "_blank")
    }
  }

  const handleTouchFeedback = () => {
    if (navigator.vibrate) {
      navigator.vibrate(50)
    }
  }

  if (!profileData) {
    return <div>Carregando...</div>
  }

  return (
    <>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <title>Seu Perfil: {profileData.title} - Sobrancelhas Expert</title>
      </head>

      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black overflow-x-hidden w-full max-w-[100vw]" ref={contentRef}>
        
        {/* ✅ SEÇÃO 1: RESULTADO PERSONALIZADO */}
        <div className="relative overflow-hidden w-full">
          <div className={`absolute inset-0 bg-gradient-to-r ${profileData.color}/20 animate-pulse`}></div>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : -20 }}
            className="relative z-10 px-4 py-6 sm:py-8 text-center w-full"
          >
            {/* RESULTADO PERSONALIZADO */}
            <div className="max-w-4xl mx-auto mb-8">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 sm:mb-6 leading-tight max-w-full break-words">
                🎉 Sua avaliação está completa!
                <br />
                <span className="text-green-400">SEU PERFIL FOI IDENTIFICADO</span>
              </h1>

              {/* Card do Perfil */}
              <div className="max-w-lg mx-auto mb-8 w-full">
                <div className={`bg-gradient-to-r ${profileData.color} border-4 border-yellow-400 rounded-2xl p-6 shadow-2xl max-w-full`}>
                  <div className="text-6xl mb-4">{profileData.icon}</div>
                  
                  <h2 className="text-2xl sm:text-3xl font-black text-white mb-2">
                    {profileData.title}
                  </h2>
                  
                  <p className="text-lg font-bold text-white mb-4">
                    {profileData.subtitle}
                  </p>
                  
                  <div className="bg-black/20 rounded-lg p-4 mb-4">
                    <p className="text-white font-bold text-lg mb-3">
                      {profileData.description}
                    </p>
                    
                    <div className="text-left space-y-2">
                      {profileData.characteristics.map((char, index) => (
                        <p key={index} className="text-white text-sm">
                          {char}
                        </p>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-red-600/80 rounded-lg p-3 mb-4">
                    <p className="text-white font-bold text-sm">
                      ⚠️ SEU MAIOR DESAFIO: {profileData.challenge}
                    </p>
                  </div>
                  
                  <div className="bg-green-600/80 rounded-lg p-3">
                    <p className="text-white font-bold text-sm">
                      🎁 SUA SOLUÇÃO: {profileData.solution}
                    </p>
                  </div>
                </div>
              </div>

              {/* Transição para VSL */}
              <p className="text-lg sm:text-xl text-gray-300 mb-4 font-semibold max-w-full break-words px-2">
                Descubra <span className="text-orange-400 font-bold">como alcançar este resultado</span>:
              </p>
            </div>

            {/* ✅ VSL INTEGRADO */}
            <div className="max-w-4xl mx-auto w-full">
              <div className="text-center mb-6">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 max-w-full break-words">
                  <span className="text-orange-400">O MÉTODO</span> QUE TORNA SEU RESULTADO POSSÍVEL
                </h2>
                
                <div className="max-w-2xl mx-auto mb-6 w-full">
                  <p className="text-base sm:text-lg text-gray-300 mb-4 break-words">
                    Assista este vídeo onde especialistas revelam:
                  </p>
                  <div className="text-left bg-black/30 rounded-lg p-3 sm:p-4 space-y-2 w-full">
                    <div className="flex items-start text-white text-sm sm:text-base">
                      <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 mr-2 sm:mr-3 flex-shrink-0 mt-0.5" />
                      <span className="break-words">Por que seu perfil tem <strong className="text-orange-400">alto potencial de sucesso</strong></span>
                    </div>
                    <div className="flex items-start text-white text-sm sm:text-base">
                      <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 mr-2 sm:mr-3 flex-shrink-0 mt-0.5" />
                      <span className="break-words">As <strong className="text-orange-400">técnicas exatas</strong> para seu perfil</span>
                    </div>
                    <div className="flex items-start text-white text-sm sm:text-base">
                      <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 mr-2 sm:mr-3 flex-shrink-0 mt-0.5" />
                      <span className="break-words">Como aplicar <strong className="text-orange-400">passo a passo</strong></span>
                    </div>
                  </div>
                </div>
              </div>

              {/* VSL */}
              <div className="flex justify-center mb-6 sm:mb-8 w-full">
                <div className="w-full max-w-3xl">
                  <div className="relative bg-black rounded-xl sm:rounded-2xl p-2 sm:p-4 border-2 sm:border-4 border-orange-500 shadow-2xl w-full">
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 to-red-600/20 rounded-xl sm:rounded-2xl animate-pulse"></div>
                    <div className="relative z-10 w-full">
                      <vturb-smartplayer 
                        id="vid-68c885a9cd2fbb4c19f84a1e" 
                        style={{
                          display: 'block',
                          margin: '0 auto',
                          width: '100%',
                          maxWidth: '100%',
                          borderRadius: '8px',
                          overflow: 'hidden'
                        }}
                      ></vturb-smartplayer>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA PÓS VSL */}
              <div className="text-center w-full">
                <div className="bg-orange-600 text-white py-2 sm:py-3 px-4 sm:px-6 rounded-full inline-block font-bold text-base sm:text-lg mb-4 sm:mb-6 animate-bounce max-w-full">
                  👆 APLIQUE ISSO E VEJA RESULTADOS EM DIAS
                </div>

                <motion.div
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  }}
                  className="w-full"
                >
                  <Button
                    onClick={handlePurchase}
                    size="lg"
                    className={`w-full max-w-md mx-auto bg-gradient-to-r ${profileData.color} hover:opacity-90 text-white font-black py-4 sm:py-6 px-4 sm:px-8 rounded-full text-lg sm:text-xl shadow-2xl transition-all duration-300 transform hover:scale-105 border-2 sm:border-4 border-yellow-400 min-h-[56px] sm:min-h-[64px] flex items-center justify-center box-border`}
                    onTouchStart={handleTouchFeedback}
                  >
                    <Heart className="w-5 h-5 sm:w-6 sm:h-6 mr-2 flex-shrink-0" />
                    <span className="text-center leading-tight break-words">
                      ACESSAR MÉTODO - R$ {profileData.offer.price}
                    </span>
                    <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 ml-2 flex-shrink-0" />
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ✅ SEÇÃO 2: PROVA SOCIAL */}
        <div className="px-4 py-6 sm:py-8 bg-gradient-to-r from-black to-gray-900 w-full">
          <div className="max-w-4xl mx-auto w-full">
            <div className="text-center mb-6">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 max-w-full break-words">
                <span className="text-orange-400">DEPOIMENTO REAL</span> DE QUEM TINHA SEU PERFIL
              </h3>
              <p className="text-gray-300 text-sm sm:text-base break-words">
                Veja a transformação de alguém com o mesmo perfil que você
              </p>
            </div>

            {/* Depoimento em Vídeo */}
            <div className="flex justify-center mb-6 sm:mb-8 w-full">
              <div className="w-full max-w-xs">
                <div className="relative bg-black rounded-xl sm:rounded-2xl p-2 border-2 border-orange-500 shadow-xl overflow-hidden w-full">
                  
                  <div className="flex items-center p-2 pb-1">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-orange-400 overflow-hidden mr-2 flex-shrink-0">
                      <div className="w-full h-full bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center">
                        <span className="text-white font-bold text-xs">MC</span>
                      </div>
                    </div>
                    <div className="flex-1 text-left min-w-0">
                      <h4 className="text-white font-bold text-xs truncate">Maria C.</h4>
                      <p className="text-green-400 text-xs font-semibold">✅ {profileData.title}</p>
                    </div>
                  </div>

                  <div className="relative aspect-[9/16] bg-gray-900 rounded-xl overflow-hidden w-full" style={{height: '260px'}}>
                    <script src="https://fast.wistia.com/player.js" async></script>
                    <script src="https://fast.wistia.com/embed/3rj8vdh574.js" async type="module"></script>
                    <wistia-player 
                      media-id="3rj8vdh574" 
                      aspect="0.5625"
                      className="w-full h-full"
                      style={{width: '100%', height: '100%', maxWidth: '100%'}}
                    ></wistia-player>
                  </div>

                  <div className="p-2 text-center w-full">
                    <Button
                      onClick={handlePurchase}
                      className={`w-full bg-gradient-to-r ${profileData.color} hover:opacity-90 text-white font-bold py-2 px-2 rounded-full text-xs shadow-lg transition-all duration-300 min-h-[36px] flex items-center justify-center box-border`}
                      onTouchStart={handleTouchFeedback}
                    >
                      <Play className="w-3 h-3 mr-1 flex-shrink-0" />
                      <span className="truncate">ACESSAR MÉTODO</span>
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Números de Prova Social */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 max-w-2xl mx-auto w-full">
              <div className="bg-gray-800 p-3 sm:p-4 rounded-lg border border-orange-500 text-center">
                <div className="text-xl sm:text-2xl font-bold text-orange-400 mb-1">89%</div>
                <p className="text-white text-xs sm:text-sm break-words">Veem resultados em 30 dias</p>
              </div>
              <div className="bg-gray-800 p-3 sm:p-4 rounded-lg border border-orange-500 text-center">
                <div className="text-xl sm:text-2xl font-bold text-orange-400 mb-1">127k+</div>
                <p className="text-white text-xs sm:text-sm break-words">Mulheres treinadas</p>
              </div>
              <div className="bg-gray-800 p-3 sm:p-4 rounded-lg border border-orange-500 text-center">
                <div className="text-xl sm:text-2xl font-bold text-orange-400 mb-1">R$ {profileData.subtitle.match(/R\$ ([\d.]+)/)?.[1] || "6.000"}</div>
                <p className="text-white text-xs sm:text-sm break-words">Faturamento médio</p>
              </div>
            </div>
          </div>
        </div>

        {/* ✅ SEÇÃO 3: OFERTA PERSONALIZADA */}
        <div className="px-4 py-6 sm:py-8 w-full">
          <div className="max-w-4xl mx-auto w-full">
            <Card className={`bg-gradient-to-r ${profileData.color} text-white shadow-2xl border-2 sm:border-4 border-yellow-400 w-full`}>
              <CardContent className="p-4 sm:p-6 md:p-8 text-center w-full">
                
                <div className="bg-yellow-400 text-black font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-full inline-block mb-4 sm:mb-6 text-base sm:text-lg max-w-full">
                  OFERTA ESPECIAL PARA SEU PERFIL
                </div>

                <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-4 sm:mb-6 break-words">
                  {profileData.solution}
                </h2>

                {/* Preço Personalizado */}
                <div className="bg-black/20 rounded-lg p-4 sm:p-6 mb-4 sm:mb-6 w-full">
                  <div className="text-center mb-4">
                    <div className="text-4xl sm:text-6xl font-black text-yellow-300 mb-2">
                      R$ {profileData.offer.price}
                    </div>
                    <div className="text-lg sm:text-xl">
                      <span className="line-through text-gray-400 mr-3">R$ {profileData.offer.originalPrice}</span>
                      <span className="text-green-400 font-bold">ECONOMIZA R$ {profileData.offer.discount}</span>
                    </div>
                  </div>

                  {/* O que inclui */}
                  <div className="text-left space-y-2 sm:space-y-3 max-w-md mx-auto w-full">
                    {profileData.offer.includes.map((item, index) => (
                      <div key={index} className="flex items-start text-white text-sm sm:text-base">
                        <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 mr-2 sm:mr-3 flex-shrink-0 mt-0.5" />
                        <span className="break-words">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Principal */}
                <motion.div
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  }}
                  className="mb-4 sm:mb-6 w-full"
                >
                  <Button
                    onClick={handlePurchase}
                    size="lg"
                    className="w-full max-w-lg mx-auto bg-yellow-500 hover:bg-yellow-600 text-black font-black py-4 sm:py-6 px-4 sm:px-8 rounded-full text-lg sm:text-2xl shadow-2xl transition-all duration-300 transform hover:scale-105 border-2 sm:border-4 border-white min-h-[60px] sm:min-h-[72px] flex items-center justify-center box-border"
                    onTouchStart={handleTouchFeedback}
                  >
                    <span className="text-center leading-tight break-words">
                      QUERO COMEÇAR AGORA - R$ {profileData.offer.price}
                    </span>
                    <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 ml-2 flex-shrink-0" />
                  </Button>
                </motion.div>

                {/* Social Proof Final */}
                <div className="flex justify-center gap-2 sm:gap-4 text-xs sm:text-sm text-white mb-4 flex-wrap">
                  <div className="flex items-center">
                    <Users className="w-3 h-3 sm:w-4 sm:h-4 text-orange-400 mr-1" />
                    <span><strong>{recentBuyers}</strong> compraram hoje</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-red-400 mr-1" />
                    <span>Últimas horas</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* ✅ SEÇÃO 4: GARANTIA */}
        <div className="px-4 py-6 sm:py-8 bg-gradient-to-r from-green-900/30 to-emerald-900/30 w-full">
          <div className="max-w-4xl mx-auto w-full">
            <Card className="bg-green-50 border-2 sm:border-4 border-green-400 shadow-2xl w-full">
              <CardContent className="p-4 sm:p-6 text-center w-full">
                <Shield className="w-12 h-12 sm:w-16 sm:h-16 text-green-600 mx-auto mb-4" />
                <h2 className="text-xl sm:text-2xl font-bold text-green-800 mb-4 break-words">
                  GARANTIA TOTAL DE 30 DIAS
                </h2>
                <p className="text-green-700 text-base sm:text-lg font-semibold mb-4 break-words">
                  Se não conseguir seus primeiros clientes, devolvemos 100% do seu dinheiro
                </p>
                <p className="text-green-600 max-w-2xl mx-auto text-sm sm:text-base break-words">
                  Teste o método durante 30 dias. Se não funcionar para seu perfil, devolvemos tudo sem fazer perguntas.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* ✅ FAQ PERSONALIZADO */}
        <div className="px-4 py-6 sm:py-8 w-full">
          <div className="max-w-4xl mx-auto w-full">
            <h2 className="text-xl sm:text-2xl font-bold text-white text-center mb-6 sm:mb-8 break-words">
              PERGUNTAS FREQUENTES - {profileData.title}
            </h2>

            <div className="space-y-4 max-w-2xl mx-auto w-full">
              <Card className="bg-gray-800 border border-gray-700 w-full">
                <CardContent className="p-3 sm:p-4 w-full">
                  <h3 className="text-base sm:text-lg font-bold text-orange-400 mb-2 break-words">
                    Este método funciona para meu perfil ({profileData.title})?
                  </h3>
                  <p className="text-gray-300 text-sm break-words">
                    Sim! O método foi especialmente adaptado para seu perfil. {profileData.characteristics[0]}
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gray-800 border border-gray-700 w-full">
                <CardContent className="p-3 sm:p-4 w-full">
                  <h3 className="text-base sm:text-lg font-bold text-orange-400 mb-2 break-words">
                    Quanto tempo para ver resultados?
                  </h3>
                  <p className="text-gray-300 text-sm break-words">
                    Para seu perfil, 89% das alunas veem os primeiros resultados em 30 dias. Muitas conseguem os primeiros clientes em 2 semanas.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gray-800 border border-gray-700 w-full">
                <CardContent className="p-3 sm:p-4 w-full">
                  <h3 className="text-base sm:text-lg font-bold text-orange-400 mb-2 break-words">
                    Como recebo o acesso?
                  </h3>
                  <p className="text-gray-300 text-sm break-words">
                    Imediatamente após o pagamento você recebe um email com suas credenciais. Todo conteúdo fica disponível na hora.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* ✅ CTA FINAL COM COUNTDOWN */}
        <div className={`px-4 py-6 sm:py-8 bg-gradient-to-r ${profileData.color} w-full`}>
          <div className="max-w-4xl mx-auto text-center w-full">
            <div className="bg-black/20 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border-2 sm:border-4 border-yellow-400 w-full">
              <h2 className="text-2xl sm:text-3xl font-black text-white mb-4 break-words">
                Acesse agora por R$ {profileData.offer.price}
              </h2>
              <p className="text-lg sm:text-xl text-white mb-4 sm:mb-6 font-semibold break-words">
                Depois volta para R$ {profileData.offer.originalPrice}.
              </p>

              <div className="bg-red-800 p-3 sm:p-4 rounded-lg mb-4 sm:mb-6 w-full">
                <p className="text-yellow-300 font-bold text-base sm:text-lg mb-2">TEMPO RESTANTE:</p>
                <div className="text-3xl sm:text-4xl font-black text-white">
                  <CountdownTimer minutes={15} seconds={0} />
                </div>
              </div>

              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
                className="w-full"
              >
                <Button
                  onClick={handlePurchase}
                  size="lg"
                  className="w-full max-w-md mx-auto bg-yellow-500 hover:bg-yellow-600 text-black font-black py-4 sm:py-6 px-4 sm:px-8 rounded-full text-lg sm:text-2xl shadow-2xl transition-all duration-300 transform hover:scale-105 border-2 sm:border-4 border-white min-h-[60px] sm:min-h-[72px] flex items-center justify-center box-border"
                  onTouchStart={handleTouchFeedback}
                >
                  <span className="text-center leading-tight break-words">
                    COMEÇAR AGORA - R$ {profileData.offer.price}
                  </span>
                  <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 ml-2 flex-shrink-0" />
                </Button>
              </motion.div>

              <p className="text-yellow-300 text-xs sm:text-sm mt-4 font-semibold break-words">
                Clique agora antes que seja tarde demais
              </p>
            </div>
          </div>
        </div>

        {/* Estilos CSS Otimizados */}
        <style jsx global>{`
          @viewport {
            width: device-width;
            initial-scale: 1.0;
            maximum-scale: 1.0;
            user-scalable: no;
          }

          * {
            box-sizing: border-box !important;
            margin: 0;
            padding: 0;
            max-width: 100% !important;
          }

          html {
            overflow-x: hidden !important;
            max-width: 100vw !important;
            -webkit-text-size-adjust: 100%;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }

          body {
            overflow-x: hidden !important;
            max-width: 100vw !important;
            position: relative;
            width: 100%;
          }

          .min-h-screen {
            max-width: 100vw !important;
            overflow-x: hidden !important;
            width: 100% !important;
            position: relative;
          }

          vturb-smartplayer {
            border-radius: 8px !important;
            overflow: hidden !important;
            width: 100% !important;
            max-width: 100% !important;
            height: auto !important;
            display: block !important;
            aspect-ratio: 16/9 !important;
            contain: layout style paint;
          }

          wistia-player[media-id='3rj8vdh574']:not(:defined) { 
            background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/3rj8vdh574/swatch'); 
            display: block; 
            filter: blur(5px); 
            padding-top: 177.78%; 
            width: 100% !important;
            max-width: 100% !important;
            box-sizing: border-box;
          }
          
          wistia-player {
            border-radius: 8px !important;
            overflow: hidden !important;
            width: 100% !important;
            max-width: 100% !important;
            height: 100% !important;
            display: block;
            box-sizing: border-box;
          }

          button {
            min-height: 48px !important;
            min-width: 48px !important;
            touch-action: manipulation !important;
            -webkit-tap-highlight-color: transparent !important;
            user-select: none !important;
            box-sizing: border-box !important;
            max-width: 100% !important;
            word-wrap: break-word !important;
            overflow-wrap: break-word !important;
          }

          p, span, div, h1, h2, h3, h4, h5, h6 {
            word-wrap: break-word !important;
            overflow-wrap: break-word !important;
            hyphens: auto !important;
            max-width: 100% !important;
            box-sizing: border-box !important;
          }

          img, video {
            max-width: 100% !important;
            height: auto !important;
            display: block;
            box-sizing: border-box;
          }

          input, select, textarea {
            font-size: 16px !important;
            max-width: 100% !important;
            box-sizing: border-box !important;
          }

          a, button, [role="button"] {
            min-height: 44px !important;
            min-width: 44px !important;
            display: inline-flex !important;
            align-items: center !important;
            justify-content: center !important;
            box-sizing: border-box !important;
          }

          .grid {
            gap: 0.5rem !important;
            width: 100% !important;
            box-sizing: border-box !important;
          }

          .flex {
            flex-wrap: wrap !important;
            box-sizing: border-box !important;
          }

          @media (max-width: 768px) {
            .text-xs { font-size: 0.75rem !important; line-height: 1rem !important; }
            .text-sm { font-size: 0.875rem !important; line-height: 1.25rem !important; }
            .text-base { font-size: 1rem !important; line-height: 1.5rem !important; }
            .text-lg { font-size: 1.125rem !important; line-height: 1.75rem !important; }
            .text-xl { font-size: 1.25rem !important; line-height: 1.75rem !important; }
            .text-2xl { font-size: 1.5rem !important; line-height: 2rem !important; }
            .text-3xl { font-size: 1.875rem !important; line-height: 2.25rem !important; }
            .text-4xl { font-size: 2.25rem !important; line-height: 2.5rem !important; }
            .text-5xl { font-size: 3rem !important; line-height: 1 !important; }
            .text-6xl { font-size: 3.75rem !important; line-height: 1 !important; }

            .px-4 { padding-left: 1rem !important; padding-right: 1rem !important; }
            .py-6 { padding-top: 1.5rem !important; padding-bottom: 1.5rem !important; }
            .py-8 { padding-top: 2rem !important; padding-bottom: 2rem !important; }
            .mb-4 { margin-bottom: 1rem !important; }
            .mb-6 { margin-bottom: 1.5rem !important; }
            .mb-8 { margin-bottom: 2rem !important; }

            .grid-cols-3 {
              grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
              gap: 0.5rem !important;
            }

            vturb-smartplayer {
              height: auto !important;
              aspect-ratio: 16/9 !important;
              min-height: 200px !important;
            }

            .rounded-2xl { border-radius: 1rem !important; }
            .rounded-xl { border-radius: 0.75rem !important; }
            .border-4 { border-width: 2px !important; }
            .border-2 { border-width: 1px !important; }

            .min-h-\[72px\] { min-height: 60px !important; }
            .min-h-\[64px\] { min-height: 56px !important; }
            .min-h-\[60px\] { min-height: 56px !important; }
            .min-h-\[56px\] { min-height: 52px !important; }

            .truncate {
              overflow: hidden !important;
              text-overflow: ellipsis !important;
              white-space: nowrap !important;
            }

            .break-words {
              word-wrap: break-word !important;
              overflow-wrap: break-word !important;
              word-break: break-word !important;
            }
          }

          @media (max-width: 375px) {
            .px-4 { padding-left: 0.75rem !important; padding-right: 0.75rem !important; }
            .text-2xl { font-size: 1.25rem !important; line-height: 1.75rem !important; }
            .text-3xl { font-size: 1.5rem !important; line-height: 2rem !important; }
            .text-4xl { font-size: 1.875rem !important; line-height: 2.25rem !important; }
            
            vturb-smartplayer {
              min-height: 180px !important;
            }

            .grid-cols-3 {
              gap: 0.25rem !important;
            }

            button {
              min-height: 44px !important;
              font-size: 0.875rem !important;
            }
          }

          .bg-gradient-to-r, .bg-gradient-to-br {
            will-change: transform;
            backface-visibility: hidden;
            transform: translateZ(0);
          }

          html {
            scroll-behavior: smooth;
          }

          @supports (-webkit-touch-callout: none) {
            input, select, textarea {
              font-size: 16px !important;
            }
          }

          * {
            max-width: 100% !important;
            box-sizing: border-box !important;
          }

          @container (max-width: 768px) {
            .text-3xl { font-size: 1.5rem !important; }
            .text-4xl { font-size: 1.875rem !important; }
          }
        `}</style>
      </div>
    </>
  )
}