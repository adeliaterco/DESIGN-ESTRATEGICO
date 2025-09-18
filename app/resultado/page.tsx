"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
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
  Zap,
  Award,
  TrendingUp,
  ChevronLeft,
  ChevronRight
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CountdownTimer } from "@/components/countdown-timer"
import { enviarEvento } from "../../lib/analytics"

export default function ResultPageOptimized() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [recentBuyers, setRecentBuyers] = useState(43)
  const [spotsLeft, setSpotsLeft] = useState(7)
  const [userProfile, setUserProfile] = useState("")
  const [profileData, setProfileData] = useState(null)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isCarouselPaused, setIsCarouselPaused] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const contentRef = useRef(null)

  // ✅ HOOK: DETECÇÃO MOBILE OTIMIZADA
  useEffect(() => {
    const checkMobile = () => {
      const userAgent = navigator.userAgent || navigator.vendor || window.opera
      const mobileRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i
      const screenWidth = window.innerWidth <= 768
      const touchDevice = 'ontouchstart' in window
      
      setIsMobile(mobileRegex.test(userAgent) || screenWidth || touchDevice)
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // ✅ DADOS DO CARROSSEL INTEGRADO
  const carouselData = [
    {
      id: 1,
      modelImage: "https://amandateixeiraoficial.com.br/wp-content/uploads/2025/09/one.webp",
      testimonialImage: "https://amandateixeiraoficial.com.br/wp-content/uploads/2025/09/prova1.webp",
      modelAlt: "Modelo com sobrancelhas perfeitas - Resultado 1",
      testimonialAlt: "Depoimento de aluna satisfeita",
    },
    {
      id: 2,
      modelImage: "https://amandateixeiraoficial.com.br/wp-content/uploads/2025/09/two.webp",
      testimonialImage: "https://amandateixeiraoficial.com.br/wp-content/uploads/2025/09/prova2.webp",
      modelAlt: "Modelo com sobrancelhas perfeitas - Resultado 2",
      testimonialAlt: "Depoimento de aluna satisfeita",
    },
    {
      id: 3,
      modelImage: "https://amandateixeiraoficial.com.br/wp-content/uploads/2025/09/tree.webp",
      testimonialImage: "https://amandateixeiraoficial.com.br/wp-content/uploads/2025/09/prova3.webp",
      modelAlt: "Modelo com sobrancelhas perfeitas - Resultado 3",
      testimonialAlt: "Depoimento de aluna satisfeita",
    }
  ]

  // ✅ PERFIS CORRIGIDOS COM PREÇO ÚNICO R$ 19
  const profiles = {
    INICIANTE_DETERMINADA: {
      title: "INICIANTE DETERMINADA",
      subtitle: "Potencial de Faturamento: R$ 3.000 - R$ 6.000/mês",
      icon: "🌟",
      color: "from-pink-500 to-rose-600",
      description: "Você tem TUDO para ser uma Designer de sucesso!",
      characteristics: [
        "✅ Seu perfil mostra determinação e foco",
        "✅ Com o método certo, pode faturar R$ 6.000/mês em 90 dias",
        "✅ Tem perfil ideal para crescimento rápido"
      ],
      challenge: "Falta de conhecimento técnico",
      solution: "MÉTODO SOBRANCELHA ZERO AO SUCESSO",
      offer: {
        price: 19,
        originalPrice: 397,
        discount: 378,
        bonus: "Kit Iniciante Completo + Bônus Exclusivos",
        paymentLink: "https://pay.hotmart.com/F100142422S?off=oferta19",
        includes: [
          "✓ Método completo personalizado para seu perfil",
          "✓ Kit Iniciante Completo (R$ 197)",
          "✓ Agenda Otimizada Premium (R$ 147)",
          "✓ Suporte VIP por 60 dias",
          "✓ Garantia total de 30 dias",
          "✓ Acesso vitalício ao conteúdo"
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
        price: 19,
        originalPrice: 697,
        discount: 678,
        bonus: "Mentoria Grupo VIP + Todos os Bônus",
        paymentLink: "https://pay.hotmart.com/F100142422S?off=oferta19",
        includes: [
          "✓ Método completo personalizado para seu perfil",
          "✓ Kit Iniciante Completo (R$ 197)",
          "✓ Agenda Otimizada Premium (R$ 147)",
          "✓ Mentoria Grupo VIP (R$ 297)",
          "✓ Suporte VIP por 60 dias",
          "✓ Acesso vitalício ao conteúdo"
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
        price: 19,
        originalPrice: 297,
        discount: 278,
        bonus: "Agenda Otimizada + Kit Completo",
        paymentLink: "https://pay.hotmart.com/F100142422S?off=oferta19",
        includes: [
          "✓ Método completo personalizado para seu perfil",
          "✓ Kit Iniciante Completo (R$ 197)",
          "✓ Agenda Otimizada Premium (R$ 147)",
          "✓ Suporte VIP por 60 dias",
          "✓ Garantia total de 30 dias",
          "✓ Acesso vitalício ao conteúdo"
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
        "�� Perfil analítico é vantagem no mercado"
      ],
      challenge: "Excesso de análise, pouca ação",
      solution: "MÉTODO PASSO A PASSO SEGURO",
      offer: {
        price: 19,
        originalPrice: 197,
        discount: 178,
        bonus: "Garantia Estendida + Suporte VIP",
        paymentLink: "https://pay.hotmart.com/F100142422S?off=oferta19",
        includes: [
          "✓ Método completo personalizado para seu perfil",
          "✓ Kit Iniciante Completo (R$ 197)",
          "✓ Agenda Otimizada Premium (R$ 147)",
          "✓ Suporte VIP por 60 dias",
          "✓ Garantia estendida de 30 dias",
          "✓ Acesso vitalício ao conteúdo"
        ]
      }
    }
  }

  // ✅ COMPONENTE: CTA RESPONSIVO OTIMIZADO
  const ResponsiveCTA = ({ 
    onClick, 
    className = "", 
    children, 
    variant = "primary",
    size = "default",
    fullWidth = false 
  }) => {
    const baseClasses = "inline-flex items-center justify-center font-bold rounded-full transition-all duration-300 transform active:scale-95 touch-manipulation select-none"
    
    const variants = {
      primary: "bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-lg",
      secondary: "bg-gradient-to-r from-orange-500 to-red-600 hover:opacity-90 text-white shadow-lg",
      accent: "bg-yellow-500 hover:bg-yellow-600 text-black shadow-lg border-2 border-white"
    }
    
    const sizes = {
      sm: "min-h-[44px] px-4 py-2 text-sm",
      default: "min-h-[48px] px-6 py-3 text-base",
      lg: "min-h-[56px] px-8 py-4 text-lg"
    }
    
    const widthClass = fullWidth ? "w-full max-w-md mx-auto" : ""
    
    return (
      <Button
        onClick={onClick}
        className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${widthClass} ${className}`}
        onTouchStart={handleTouchFeedback}
      >
        {children}
      </Button>
    )
  }

  // ✅ COMPONENTE: TEXTO RESPONSIVO
  const ResponsiveText = ({ 
    children, 
    variant = "body", 
    className = "",
    truncate = false 
  }) => {
    const variants = {
      h1: "text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black leading-tight",
      h2: "text-xl sm:text-2xl md:text-3xl font-bold leading-tight",
      h3: "text-lg sm:text-xl md:text-2xl font-bold leading-tight",
      body: "text-sm sm:text-base leading-relaxed",
      small: "text-xs sm:text-sm leading-relaxed"
    }
    
    const truncateClass = truncate ? "truncate" : "break-words"
    
    return (
      <div className={`${variants[variant]} ${truncateClass} ${className}`}>
        {children}
      </div>
    )
  }

  // ✅ COMPONENTE: CARROSSEL MOBILE OTIMIZADO
  const OptimizedCarousel = () => {
    const [touchStart, setTouchStart] = useState(null)
    const [touchEnd, setTouchEnd] = useState(null)

    const minSwipeDistance = 50

    const onTouchStart = (e) => {
      setTouchEnd(null)
      setTouchStart(e.targetTouches[0].clientX)
    }

    const onTouchMove = (e) => {
      setTouchEnd(e.targetTouches[0].clientX)
    }

    const onTouchEnd = () => {
      if (!touchStart || !touchEnd) return
      
      const distance = touchStart - touchEnd
      const isLeftSwipe = distance > minSwipeDistance
      const isRightSwipe = distance < -minSwipeDistance

      if (isLeftSwipe) nextSlide()
      if (isRightSwipe) prevSlide()
    }

    const nextSlide = () => {
      setCurrentSlide((prev) => (prev + 1) % carouselData.length)
    }

    const prevSlide = () => {
      setCurrentSlide((prev) => (prev - 1 + carouselData.length) % carouselData.length)
    }

    const goToSlide = (index) => {
      setCurrentSlide(index)
    }

    const currentData = carouselData[currentSlide]

    return (
      <div className="w-full max-w-4xl mx-auto">
        <div 
          className="relative bg-black rounded-lg sm:rounded-xl p-2 sm:p-4 border border-orange-500 sm:border-2 shadow-xl overflow-hidden"
          onMouseEnter={() => setIsCarouselPaused(true)}
          onMouseLeave={() => setIsCarouselPaused(false)}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 to-red-600/20 animate-pulse"></div>
          
          <div className="relative z-10">
            {/* Layout Mobile Otimizado */}
            <div className="block md:hidden">
              <div className="space-y-3">
                {/* Modelo em cima */}
                <div className="relative overflow-hidden rounded-lg h-40 sm:h-48">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`model-mobile-${currentSlide}`}
                      initial={{ opacity: 0, x: isMobile ? 0 : -20, y: isMobile ? -10 : 0 }}
                      animate={{ opacity: 1, x: 0, y: 0 }}
                      exit={{ opacity: 0, x: isMobile ? 0 : 20, y: isMobile ? 10 : 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="w-full h-full"
                    >
                      <img
                        src={currentData.modelImage}
                        alt={currentData.modelAlt}
                        className="w-full h-full object-cover rounded-lg"
                        loading="lazy"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-2 sm:p-3">
                        <ResponsiveText variant="small" className="text-white font-bold">
                          ✨ RESULTADO PROFISSIONAL
                        </ResponsiveText>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Depoimento embaixo */}
                <div className="relative overflow-hidden rounded-lg h-40 sm:h-48">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`testimonial-mobile-${currentSlide}`}
                      initial={{ opacity: 0, x: isMobile ? 0 : 20, y: isMobile ? 10 : 0 }}
                      animate={{ opacity: 1, x: 0, y: 0 }}
                      exit={{ opacity: 0, x: isMobile ? 0 : -20, y: isMobile ? -10 : 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="w-full h-full"
                    >
                      <img
                        src={currentData.testimonialImage}
                        alt={currentData.testimonialAlt}
                        className="w-full h-full object-cover rounded-lg"
                        loading="lazy"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-2 sm:p-3">
                        <ResponsiveText variant="small" className="text-green-400 font-bold mb-1">
                          ✅ ALUNA APROVADA
                        </ResponsiveText>
                        <ResponsiveText variant="small" className="text-white font-bold">
                          Resultado em 30 dias
                        </ResponsiveText>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>

            {/* Layout Desktop */}
            <div className="hidden md:block">
              <div className="grid grid-cols-2 gap-4 h-80">
                {/* Lado Esquerdo - Modelo */}
                <div className="relative overflow-hidden rounded-lg">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`model-${currentSlide}`}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ duration: 0.5 }}
                      className="w-full h-full"
                    >
                      <img
                        src={currentData.modelImage}
                        alt={currentData.modelAlt}
                        className="w-full h-full object-cover rounded-lg"
                        loading="lazy"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                        <p className="text-white font-bold text-sm">
                          ✨ RESULTADO PROFISSIONAL
                        </p>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Lado Direito - Depoimento */}
                <div className="relative overflow-hidden rounded-lg">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`testimonial-${currentSlide}`}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.5 }}
                      className="w-full h-full"
                    >
                      <img
                        src={currentData.testimonialImage}
                        alt={currentData.testimonialAlt}
                        className="w-full h-full object-cover rounded-lg"
                        loading="lazy"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                        <p className="text-green-400 font-bold text-sm mb-1">
                          ✅ ALUNA APROVADA
                        </p>
                        <p className="text-white font-bold text-xs">
                          Resultado em 30 dias
                        </p>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>

            {/* Controles do Carrossel - Apenas Desktop */}
            <div className="hidden sm:block">
              <div className="absolute top-1/2 left-2 transform -translate-y-1/2">
                <button
                  onClick={prevSlide}
                  className="bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-300 min-h-[44px] min-w-[44px] flex items-center justify-center"
                  aria-label="Slide anterior"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
              </div>

              <div className="absolute top-1/2 right-2 transform -translate-y-1/2">
                <button
                  onClick={nextSlide}
                  className="bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-300 min-h-[44px] min-w-[44px] flex items-center justify-center"
                  aria-label="Próximo slide"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Indicadores */}
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {carouselData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 min-h-[24px] min-w-[24px] flex items-center justify-center ${
                    index === currentSlide 
                      ? 'bg-orange-500 scale-125' 
                      : 'bg-white/50 hover:bg-white/70'
                  }`}
                  aria-label={`Ir para slide ${index + 1}`}
                >
                  <span className="sr-only">Slide {index + 1}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* CTA abaixo do carrossel */}
        <div className="text-center mt-4 sm:mt-6">
          <ResponsiveCTA
            onClick={handlePurchase}
            variant="secondary"
            size={isMobile ? "default" : "lg"}
            fullWidth
            className="border border-yellow-400 sm:border-2"
          >
            <Play className="w-4 h-4 mr-2 flex-shrink-0" />
            <span className={isMobile ? "truncate" : ""}>
              {isMobile ? "QUERO ESSE RESULTADO - R$ 19" : "QUERO ESSE RESULTADO AGORA - R$ 19"}
            </span>
            <ArrowRight className="w-4 h-4 ml-2 flex-shrink-0" />
          </ResponsiveCTA>
        </div>
      </div>
    )
  }

  // ✅ COMPONENTE: PROVA SOCIAL EM TEMPO REAL
  const LiveSocialProof = () => {
    const [recentPurchases] = useState([
      { name: "Ana C.", profile: "INICIANTE", time: "agora mesmo" },
      { name: "Maria S.", profile: "RENDA EXTRA", time: "2 min atrás" },
      { name: "Carmen L.", profile: "EMPREENDEDORA", time: "5 min atrás" }
    ]);

    return (
      <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
        {recentPurchases.map((purchase, index) => (
          <div key={index} className="bg-black/30 rounded-lg p-2 sm:p-3 border-l-2 border-green-400">
            <div className="flex items-center mb-1">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse flex-shrink-0" />
              <ResponsiveText variant="small" className="text-green-400 font-bold">
                {purchase.time.toUpperCase()}:
              </ResponsiveText>
            </div>
            <ResponsiveText variant="small" className="text-white">
              <span className="font-bold">{purchase.name}</span> garantiu sua vaga - 
              Perfil: {purchase.profile}
            </ResponsiveText>
          </div>
        ))}
      </div>
    )
  }

  // ✅ COMPONENTE: URGÊNCIA REAL OTIMIZADA
  const OptimizedUrgencySection = () => (
    <div className="bg-red-900 border border-red-500 sm:border-2 rounded-lg p-3 sm:p-4 mb-4 sm:mb-6 w-full">
      <div className="flex items-center justify-center mb-2 sm:mb-3">
        <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-300 mr-2 animate-pulse flex-shrink-0" />
        <ResponsiveText variant="body" className="text-yellow-300 font-bold">
          OFERTA EXPIRA EM:
        </ResponsiveText>
      </div>
      
      <div className="text-center mb-3 sm:mb-4">
        <div className="text-2xl sm:text-4xl font-black text-white mb-2">
          <CountdownTimer minutes={15} seconds={0} />
        </div>
        <ResponsiveText variant="small" className="text-red-300 font-bold">
          ⚠️ Após este horário, volta para R$ {profileData?.offer?.originalPrice || '397'}
        </ResponsiveText>
      </div>

      <div className="flex items-center justify-between mb-2 gap-2">
        <ResponsiveText variant="small" className="text-yellow-300 font-bold">
          🚨 ÚLTIMAS {spotsLeft} VAGAS
        </ResponsiveText>
        <ResponsiveText variant="small" className="text-red-300 font-bold">
          {recentBuyers}/50
        </ResponsiveText>
      </div>
      
      <div className="w-full bg-gray-700 rounded-full h-2 sm:h-3 mb-2">
        <div 
          className="bg-red-500 h-2 sm:h-3 rounded-full transition-all duration-300" 
          style={{width: `${(recentBuyers/50) * 100}%`}}
        />
      </div>
      
      <div className="text-center">
        <ResponsiveText variant="small" className="text-red-300 animate-pulse font-bold">
          • Esta oferta NUNCA mais será repetida •
        </ResponsiveText>
      </div>
    </div>
  )

  // ✅ COMPONENTE: AQUECIMENTO PRÉ-VSL OTIMIZADO
  const OptimizedProblemSection = ({ profileData }) => (
    <div className="px-3 sm:px-4 py-4 sm:py-6 md:py-8 bg-gradient-to-r from-red-900/30 to-orange-900/30 w-full">
      <div className="max-w-4xl mx-auto w-full">
        <div className="text-center mb-4 sm:mb-6">
          <ResponsiveText variant="h2" className="text-white mb-3 sm:mb-4">
            ⚠️ <span className="text-red-400">ATENÇÃO:</span> SEU MAIOR OBSTÁCULO
          </ResponsiveText>
          
          <div className="bg-red-900/50 border border-red-500 sm:border-2 rounded-lg p-3 sm:p-4 mb-4 sm:mb-6">
            <ResponsiveText variant="body" className="text-red-300 font-bold mb-2 sm:mb-3">
              {profileData?.challenge || "Falta de conhecimento técnico"}
            </ResponsiveText>
            <ResponsiveText variant="body" className="text-white">
              Este é exatamente o motivo pelo qual 87% das pessoas com seu perfil 
              <span className="text-red-300 font-bold"> NUNCA conseguem resultados</span> com sobrancelhas.
            </ResponsiveText>
          </div>
          
          <div className="bg-green-900/50 border border-green-500 sm:border-2 rounded-lg p-3 sm:p-4">
            <ResponsiveText variant="body" className="text-green-300 font-bold mb-2 sm:mb-3">
              🎯 SUA SOLUÇÃO PERSONALIZADA:
            </ResponsiveText>
            <ResponsiveText variant="body" className="text-white">
              <span className="text-green-300 font-bold">{profileData?.solution || "MÉTODO PERSONALIZADO"}</span> - 
              O método que transforma seu maior desafio em sua maior vantagem.
            </ResponsiveText>
          </div>
        </div>
      </div>
    </div>
  )

  // ✅ COMPONENTE: AUTORIDADE OTIMIZADA
  const OptimizedAuthoritySection = () => (
    <div className="px-3 sm:px-4 py-4 sm:py-6 md:py-8 bg-gradient-to-r from-purple-900/30 to-blue-900/30 w-full">
      <div className="max-w-4xl mx-auto w-full">
        <div className="text-center mb-4 sm:mb-6">
          <ResponsiveText variant="h2" className="text-white mb-4 sm:mb-6">
            👑 <span className="text-purple-400">QUEM ESTÁ POR TRÁS</span> DO SEU RESULTADO
          </ResponsiveText>
          
          <div className="bg-black/30 rounded-lg p-4 sm:p-6 mb-4 sm:mb-6 max-w-2xl mx-auto">
            <div className="flex flex-col items-center mb-4 sm:mb-6">
              <img 
                src="https://amandateixeiraoficial.com.br/wp-content/uploads/2025/06/amanda.png" 
                alt="Amanda Teixeira"
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full mb-3 sm:mb-4 border-2 sm:border-4 border-purple-400"
              />
              <ResponsiveText variant="h3" className="text-white mb-2">
                Amanda Teixeira
              </ResponsiveText>
              <ResponsiveText variant="body" className="text-purple-400 font-bold mb-3 sm:mb-4">
                Especialista em Sobrancelhas há 8 anos
              </ResponsiveText>
            </div>
            
            <div className="grid grid-cols-3 gap-2 sm:gap-4 text-center mb-4 sm:mb-6">
              <div className="bg-purple-900/30 rounded-lg p-2 sm:p-3">
                <ResponsiveText variant="h3" className="text-purple-400">3k+</ResponsiveText>
                <ResponsiveText variant="small" className="text-white">Alunas Treinadas</ResponsiveText>
              </div>
              <div className="bg-purple-900/30 rounded-lg p-2 sm:p-3">
                <ResponsiveText variant="h3" className="text-purple-400">8</ResponsiveText>
                <ResponsiveText variant="small" className="text-white">Anos de Experiência</ResponsiveText>
              </div>
              <div className="bg-purple-900/30 rounded-lg p-2 sm:p-3">
                <ResponsiveText variant="h3" className="text-purple-400">94%</ResponsiveText>
                <ResponsiveText variant="small" className="text-white">Taxa de Sucesso</ResponsiveText>
              </div>
            </div>

            <div className="bg-purple-900/50 rounded-lg p-3 sm:p-4 mb-3 sm:mb-4">
              <ResponsiveText variant="body" className="text-white italic">
                "Transformei mais de 3.000 mulheres em Designer de sucesso. 
                Agora é a SUA vez de conquistar sua independência financeira."
              </ResponsiveText>
            </div>
          </div>
          
          <ResponsiveText variant="body" className="text-white font-semibold">
            Agora vou te mostrar <span className="text-purple-400 font-bold">exatamente como</span> 
            conseguir o mesmo resultado...
          </ResponsiveText>
        </div>
      </div>
    </div>
  )

  // ✅ COMPONENTE: TRANSFORMAÇÃO OTIMIZADA
  const OptimizedTransformationSection = ({ profileData }) => (
    <div className="px-3 sm:px-4 py-4 sm:py-6 md:py-8 bg-gradient-to-r from-green-900/30 to-emerald-900/30 w-full">
      <div className="max-w-4xl mx-auto w-full">
        <div className="text-center mb-6 sm:mb-8">
          <ResponsiveText variant="h2" className="text-white mb-4 sm:mb-6">
            🔥 <span className="text-green-400">SUA TRANSFORMAÇÃO</span> EM 90 DIAS
          </ResponsiveText>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-black/30 rounded-lg p-4 sm:p-6 border border-green-500 sm:border-2"
            >
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">📅</div>
              <ResponsiveText variant="h3" className="text-white mb-2">30 DIAS</ResponsiveText>
              <ResponsiveText variant="body" className="text-gray-300">
                Primeiras clientes conquistadas e R$ 1.000+ já faturados
              </ResponsiveText>
              <div className="mt-3 sm:mt-4 bg-green-600 rounded-full p-2">
                <Check className="w-4 h-4 sm:w-5 sm:h-5 text-white mx-auto" />
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-black/30 rounded-lg p-4 sm:p-6 border border-green-500 sm:border-2"
            >
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">💰</div>
              <ResponsiveText variant="h3" className="text-white mb-2">60 DIAS</ResponsiveText>
              <ResponsiveText variant="body" className="text-gray-300">
                Agenda lotada e R$ 3.000+ mensais de forma consistente
              </ResponsiveText>
              <div className="mt-3 sm:mt-4 bg-green-600 rounded-full p-2">
                <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-white mx-auto" />
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-black/30 rounded-lg p-4 sm:p-6 border border-green-500 sm:border-2"
            >
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">👑</div>
              <ResponsiveText variant="h3" className="text-white mb-2">90 DIAS</ResponsiveText>
              <ResponsiveText variant="body" className="text-gray-300">
                Referência na cidade e R$ {getEarningsValue(profileData?.subtitle || "R$ 6.000")}+ mensais
              </ResponsiveText>
              <div className="mt-3 sm:mt-4 bg-green-600 rounded-full p-2">
                <Crown className="w-4 h-4 sm:w-5 sm:h-5 text-white mx-auto" />
              </div>
            </motion.div>
          </div>

          <div className="mt-6 sm:mt-8 bg-green-900/50 rounded-lg p-4 sm:p-6">
            <ResponsiveText variant="body" className="text-green-300 font-bold mb-2 sm:mb-3">
              🎯 GARANTIA DE RESULTADO:
            </ResponsiveText>
            <ResponsiveText variant="body" className="text-white">
              Se você seguir o método e não conseguir seus primeiros R$ 1.000 em 30 dias, 
              <span className="text-green-400 font-bold"> devolvemos 100% do seu dinheiro</span> + 
              R$ 100 pelo seu tempo investido.
            </ResponsiveText>
          </div>
        </div>
      </div>
    </div>
  )

  // ✅ COMPONENTE: QUEBRA DE OBJEÇÕES OTIMIZADA
  const OptimizedObjectionSection = ({ profileData }) => (
    <div className="px-3 sm:px-4 py-4 sm:py-6 md:py-8 bg-gradient-to-r from-gray-900 to-black w-full">
      <div className="max-w-4xl mx-auto w-full">
        <ResponsiveText variant="h2" className="text-white text-center mb-4 sm:mb-6">
          💭 <span className="text-orange-400">SEI O QUE VOCÊ ESTÁ PENSANDO...</span>
        </ResponsiveText>

        <div className="space-y-3 sm:space-y-4 max-w-2xl mx-auto w-full">
          <div className="bg-gray-800 border-l-2 sm:border-l-4 border-red-500 p-3 sm:p-4 rounded-r-lg">
            <ResponsiveText variant="body" className="text-red-400 font-bold mb-2 flex items-center">
              😰 "E se eu não conseguir clientes?"
            </ResponsiveText>
            <ResponsiveText variant="body" className="text-white">
              <span className="text-green-400 font-bold">RESPOSTA:</span> 89% das alunas com seu perfil 
              conseguem os primeiros clientes em menos de 30 dias. Temos estratégias específicas 
              para captação que funcionam mesmo para iniciantes.
            </ResponsiveText>
          </div>

          <div className="bg-gray-800 border-l-2 sm:border-l-4 border-orange-500 p-3 sm:p-4 rounded-r-lg">
            <ResponsiveText variant="body" className="text-orange-400 font-bold mb-2 flex items-center">
              💰 "R$ 19 é muito barato, deve ser enganação..."
            </ResponsiveText>
            <ResponsiveText variant="body" className="text-white">
              <span className="text-green-400 font-bold">RESPOSTA:</span> É uma oferta especial 
              exclusiva para seu perfil. O valor normal é R$ {profileData?.offer?.originalPrice || '397'}. 
              Estou testando esta estratégia por apenas 48 horas para validar o método.
            </ResponsiveText>
          </div>

          <div className="bg-gray-800 border-l-2 sm:border-l-4 border-blue-500 p-3 sm:p-4 rounded-r-lg">
            <ResponsiveText variant="body" className="text-blue-400 font-bold mb-2 flex items-center">
              🤔 "Não tenho tempo para estudar..."
            </ResponsiveText>
            <ResponsiveText variant="body" className="text-white">
              <span className="text-green-400 font-bold">RESPOSTA:</span> O método foi criado 
              especificamente para pessoas ocupadas. São apenas 20 minutos por dia durante 
              2 semanas para dominar todas as técnicas.
            </ResponsiveText>
          </div>

          <div className="bg-gray-800 border-l-2 sm:border-l-4 border-purple-500 p-3 sm:p-4 rounded-r-lg">
            <ResponsiveText variant="body" className="text-purple-400 font-bold mb-2 flex items-center">
              😱 "E se eu fizer algo errado e estragar?"
            </ResponsiveText>
            <ResponsiveText variant="body" className="text-white">
              <span className="text-green-400 font-bold">RESPOSTA:</span> O método inclui 
              técnicas de segurança e correção de erros. Além disso, você tem 60 dias de 
              suporte VIP para tirar qualquer dúvida.
            </ResponsiveText>
          </div>
        </div>
      </div>
    </div>
  )

  // ✅ Auto-play do carrossel
  useEffect(() => {
    if (!isCarouselPaused && !isMobile) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % carouselData.length)
      }, 6000)
      return () => clearInterval(interval)
    }
  }, [isCarouselPaused, isMobile, carouselData.length])

  useEffect(() => {
    const savedProfile = localStorage.getItem("userProfile") || "INICIANTE_DETERMINADA"
    setUserProfile(savedProfile)
    setProfileData(profiles[savedProfile])

    setTimeout(() => {
      setIsLoaded(true)
    }, 300)

    // ✅ SIMULAR COMPRADORES E VAGAS EM TEMPO REAL
    const interval = setInterval(() => {
      setRecentBuyers((prev) => {
        const increase = Math.floor(Math.random() * 2) + 1
        const newValue = Math.min(prev + increase, 47)
        if (newValue >= 45) {
          setSpotsLeft(Math.max(1, 50 - newValue))
        }
        return newValue
      })
    }, 45000)

    try {
      enviarEvento("visualizou_resultado", {
        perfil: savedProfile,
        funil: "sobrancelhas"
      })
    } catch (error) {
      console.error("Error al registrar evento:", error)
    }

    const loadVTurbScript = () => {
      if (!document.querySelector('script[src*="68cb1686a02866a5da663d62"]')) {
        const script = document.createElement("script")
        script.src = "https://scripts.converteai.net/498be6ac-2d19-4386-aba2-c11c84449107/players/68cb1686a02866a5da663d62/v4/player.js"
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

  // ✅ FUNÇÃO PARA EXTRAIR VALOR DE FATURAMENTO
  const getEarningsValue = (subtitle) => {
    const match = subtitle.match(/R$\s*([\d.]+)/)
    return match ? match[1] : "6.000"
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
        
        {/* ✅ SEÇÃO 1: RESULTADO PERSONALIZADO OTIMIZADO */}
        <div className="relative overflow-hidden w-full">
          <div className={`absolute inset-0 bg-gradient-to-r ${profileData.color}/20 animate-pulse`}></div>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : -20 }}
            className="relative z-10 px-3 sm:px-4 py-4 sm:py-6 md:py-8 text-center w-full"
          >
            <div className="max-w-4xl mx-auto mb-6 sm:mb-8">
              <ResponsiveText variant="h1" className="text-white mb-3 sm:mb-4 md:mb-6">
                🎉 Sua avaliação está completa!
                <br />
                <span className="text-green-400">SEU PERFIL FOI IDENTIFICADO</span>
              </ResponsiveText>

              {/* Card do Perfil Otimizado */}
              <div className="max-w-lg mx-auto mb-6 sm:mb-8 w-full">
                <div className={`bg-gradient-to-r ${profileData.color} border-2 sm:border-4 border-yellow-400 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-2xl max-w-full`}>
                  <div className="text-4xl sm:text-6xl mb-3 sm:mb-4">{profileData.icon}</div>
                  
                  <ResponsiveText variant="h2" className="text-white mb-2">
                    {profileData.title}
                  </ResponsiveText>
                  
                  <ResponsiveText variant="body" className="text-white font-bold mb-3 sm:mb-4">
                    {profileData.subtitle}
                  </ResponsiveText>
                  
                  <div className="bg-black/20 rounded-lg p-3 sm:p-4 mb-3 sm:mb-4">
                    <ResponsiveText variant="body" className="text-white font-bold mb-2 sm:mb-3">
                      {profileData.description}
                    </ResponsiveText>
                    
                    <div className="text-left space-y-1 sm:space-y-2">
                      {profileData.characteristics.map((char, index) => (
                        <ResponsiveText key={index} variant="small" className="text-white">
                          {char}
                        </ResponsiveText>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-red-600/80 rounded-lg p-2 sm:p-3 mb-3 sm:mb-4">
                    <ResponsiveText variant="small" className="text-white font-bold">
                      ⚠️ SEU MAIOR DESAFIO: {profileData.challenge}
                    </ResponsiveText>
                  </div>
                  
                  <div className="bg-green-600/80 rounded-lg p-2 sm:p-3">
                    <ResponsiveText variant="small" className="text-white font-bold">
                      🎁 SUA SOLUÇÃO: {profileData.solution}
                    </ResponsiveText>
                  </div>
                </div>
              </div>

              <ResponsiveText variant="body" className="text-gray-300 font-semibold px-2">
                Descubra <span className="text-orange-400 font-bold">como alcançar este resultado</span>:
              </ResponsiveText>
            </div>
          </motion.div>
        </div>

        {/* ✅ SEÇÃO 2: AQUECIMENTO PRÉ-VSL OTIMIZADO */}
        <OptimizedProblemSection profileData={profileData} />

        {/* ✅ SEÇÃO 3: AUTORIDADE/CREDIBILIDADE OTIMIZADA */}
        <OptimizedAuthoritySection />

        {/* ✅ SEÇÃO 4: PROVA SOCIAL FORTE COM CARROSSEL OTIMIZADO */}
        <div className="px-3 sm:px-4 py-4 sm:py-6 md:py-8 bg-gradient-to-r from-black to-gray-900 w-full">
          <div className="max-w-4xl mx-auto w-full">
            <div className="text-center mb-4 sm:mb-6">
              <ResponsiveText variant="h2" className="text-white mb-2">
                <span className="text-orange-400">RESULTADOS REAIS</span> DE QUEM TINHA SEU PERFIL
              </ResponsiveText>
              <ResponsiveText variant="body" className="text-gray-300">
                Veja as transformações de alunas com o mesmo perfil que você
              </ResponsiveText>
            </div>

            {/* ✅ PROVA SOCIAL EM TEMPO REAL */}
            <LiveSocialProof />

            {/* ✅ CARROSSEL OTIMIZADO */}
            <OptimizedCarousel />

            {/* ✅ NÚMEROS ATUALIZADOS RESPONSIVOS */}
            <div className="grid grid-cols-2 gap-2 sm:gap-4 max-w-2xl mx-auto w-full mb-4 sm:mb-6 mt-6 sm:mt-8">
              <div className="bg-gray-800 p-2 sm:p-3 md:p-4 rounded-lg border border-orange-500 text-center">
                <ResponsiveText variant="h3" className="text-orange-400 mb-1">{recentBuyers}</ResponsiveText>
                <ResponsiveText variant="small" className="text-white">Compraram hoje</ResponsiveText>
              </div>
              <div className="bg-gray-800 p-2 sm:p-3 md:p-4 rounded-lg border border-orange-500 text-center">
                <ResponsiveText variant="h3" className="text-orange-400 mb-1">{spotsLeft}</ResponsiveText>
                <ResponsiveText variant="small" className="text-white">Vagas restantes</ResponsiveText>
              </div>
            </div>
          </div>
        </div>

        {/* ✅ SEÇÃO 5: VSL INTEGRADO OTIMIZADO */}
        <div className="px-3 sm:px-4 py-4 sm:py-6 md:py-8 w-full">
          <div className="max-w-4xl mx-auto w-full">
            <div className="text-center mb-4 sm:mb-6">
              <ResponsiveText variant="h2" className="text-white mb-3 sm:mb-4">
                <span className="text-orange-400">O MÉTODO</span> QUE TORNA SEU RESULTADO POSSÍVEL
              </ResponsiveText>
              
              <div className="max-w-2xl mx-auto mb-4 sm:mb-6 w-full">
                <ResponsiveText variant="body" className="text-gray-300 mb-3 sm:mb-4">
                  Assista este vídeo onde revelo:
                </ResponsiveText>
                <div className="text-left bg-black/30 rounded-lg p-3 sm:p-4 space-y-2 w-full">
                  <div className="flex items-start text-white">
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 mr-2 sm:mr-3 flex-shrink-0 mt-0.5" />
                    <ResponsiveText variant="body">
                      Por que seu perfil tem <strong className="text-orange-400">alto potencial de sucesso</strong>
                    </ResponsiveText>
                  </div>
                  <div className="flex items-start text-white">
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 mr-2 sm:mr-3 flex-shrink-0 mt-0.5" />
                    <ResponsiveText variant="body">
                      As <strong className="text-orange-400">técnicas exatas</strong> para seu perfil específico
                    </ResponsiveText>
                  </div>
                  <div className="flex items-start text-white">
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 mr-2 sm:mr-3 flex-shrink-0 mt-0.5" />
                    <ResponsiveText variant="body">
                      Como aplicar <strong className="text-orange-400">passo a passo</strong> e ter resultados em 30 dias
                    </ResponsiveText>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center mb-4 sm:mb-6 md:mb-8 w-full">
              <div className="w-full max-w-3xl">
                <div className="relative bg-black rounded-lg sm:rounded-xl md:rounded-2xl p-2 sm:p-4 border border-orange-500 sm:border-2 md:border-4 shadow-2xl w-full">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 to-red-600/20 rounded-lg sm:rounded-xl md:rounded-2xl animate-pulse"></div>
                  <div className="relative z-10 w-full">
                    <vturb-smartplayer 
                      id="vid-68cb1686a02866a5da663d62" 
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

            <div className="text-center w-full">
              <div className="bg-orange-600 text-white py-2 sm:py-3 px-3 sm:px-4 md:px-6 rounded-full inline-block font-bold animate-bounce max-w-full">
                <ResponsiveText variant="body" className="text-white">
                  👆 APLIQUE ISSO E VEJA RESULTADOS EM 30 DIAS
                </ResponsiveText>
              </div>
            </div>
          </div>
        </div>

        {/* ✅ SEÇÃO 6: TRANSFORMAÇÃO EM 90 DIAS OTIMIZADA */}
        <OptimizedTransformationSection profileData={profileData} />

        {/* ✅ SEÇÃO 7: QUEBRA DE OBJEÇÕES OTIMIZADA */}
        <OptimizedObjectionSection profileData={profileData} />

        {/* ✅ SEÇÃO 8: OFERTA IRRESISTÍVEL OTIMIZADA */}
        <div className="px-3 sm:px-4 py-4 sm:py-6 md:py-8 w-full">
          <div className="max-w-4xl mx-auto w-full">
            
            {/* ✅ URGÊNCIA REAL OTIMIZADA */}
            <OptimizedUrgencySection />

            <Card className={`bg-gradient-to-r ${profileData.color} text-white shadow-2xl border border-yellow-400 sm:border-2 md:border-4 w-full`}>
              <CardContent className="p-3 sm:p-4 md:p-6 lg:p-8 text-center w-full">
                
                <div className="bg-yellow-400 text-black font-bold py-2 sm:py-3 px-3 sm:px-4 md:px-6 rounded-full inline-block mb-3 sm:mb-4 md:mb-6 max-w-full">
                  <ResponsiveText variant="body">
                    🎁 BÔNUS EXCLUSIVO: R\$ {profileData.offer.discount} DE DESCONTO
                  </ResponsiveText>
                </div>

                <ResponsiveText variant="h2" className="mb-3 sm:mb-4 md:mb-6">
                  {profileData.solution}
                </ResponsiveText>

                {/* ✅ PREÇO UNIFICADO R\$ 19 OTIMIZADO */}
                <div className="bg-black/20 rounded-lg p-3 sm:p-4 md:p-6 mb-3 sm:mb-4 md:mb-6 w-full">
                  <div className="text-center mb-3 sm:mb-4">
                    <div className="text-3xl sm:text-4xl md:text-6xl font-black text-yellow-300 mb-2">
                      R\$ 19
                    </div>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-3">
                      <span className="line-through text-gray-400 text-base sm:text-lg md:text-xl">R\$ {profileData.offer.originalPrice}</span>
                      <span className="text-green-400 font-bold text-sm sm:text-base md:text-lg">ECONOMIZA R\$ {profileData.offer.discount}</span>
                    </div>
                  </div>

                  <div className="text-left space-y-1 sm:space-y-2 md:space-y-3 max-w-md mx-auto w-full">
                    {profileData.offer.includes.map((item, index) => (
                      <div key={index} className="flex items-start text-white">
                        <Check className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-green-400 mr-2 sm:mr-3 flex-shrink-0 mt-0.5" />
                        <ResponsiveText variant="small" className="sm:text-base">
                          {item}
                        </ResponsiveText>
                      </div>
                    ))}
                  </div>
                </div>

                {/* ✅ CTA OTIMIZADO COM COPY EMOCIONAL RESPONSIVO */}
                <motion.div
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  }}
                  className="mb-3 sm:mb-4 md:mb-6 w-full"
                >
                  <ResponsiveCTA
                    onClick={handlePurchase}
                    variant="primary"
                    size="lg"
                    fullWidth
                    className="border border-yellow-400 sm:border-2 md:border-4"
                  >
                    <Zap className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 mr-2 flex-shrink-0 animate-pulse" />
                    <span className="text-center leading-tight">
                      {isMobile ? "QUERO AGORA - R\$ 19" : "QUERO MINHA INDEPENDÊNCIA FINANCEIRA - R\$ 19"}
                    </span>
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 ml-2 flex-shrink-0" />
                  </ResponsiveCTA>
                </motion.div>

                <div className="flex justify-center gap-2 sm:gap-4 text-white mb-3 sm:mb-4 flex-wrap">
                  <div className="flex items-center">
                    <Users className="w-3 h-3 sm:w-4 sm:h-4 text-orange-400 mr-1 flex-shrink-0" />
                    <ResponsiveText variant="small">
                      <strong>{recentBuyers}</strong> compraram hoje
                    </ResponsiveText>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-red-400 mr-1 flex-shrink-0" />
                    <ResponsiveText variant="small">
                      Últimas {spotsLeft} vagas
                    </ResponsiveText>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* ✅ SEÇÃO 9: GARANTIA OTIMIZADA */}
        <div className="px-3 sm:px-4 py-4 sm:py-6 md:py-8 bg-gradient-to-r from-green-900/30 to-emerald-900/30 w-full">
          <div className="max-w-4xl mx-auto w-full">
            <Card className="bg-green-50 border border-green-400 sm:border-2 md:border-4 shadow-2xl w-full">
              <CardContent className="p-3 sm:p-4 md:p-6 text-center w-full">
                <Shield className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 text-green-600 mx-auto mb-3 sm:mb-4" />
                <ResponsiveText variant="h2" className="text-green-800 mb-3 sm:mb-4">
                  GARANTIA TOTAL DE 30 DIAS
                </ResponsiveText>
                <ResponsiveText variant="body" className="text-green-700 font-semibold mb-3 sm:mb-4">
                  Se não conseguir seus primeiros clientes, devolvemos 100% do seu dinheiro
                </ResponsiveText>
                <ResponsiveText variant="body" className="text-green-600 max-w-2xl mx-auto">
                  Teste o método durante 30 dias. Se não funcionar para seu perfil, devolvemos tudo sem fazer perguntas.
                </ResponsiveText>
                
                {/* ✅ GARANTIA EXTRA OTIMIZADA */}
                <div className="bg-green-100 border border-green-500 sm:border-2 rounded-lg p-3 sm:p-4 mt-3 sm:mt-4">
                  <ResponsiveText variant="body" className="text-green-800 font-bold mb-2">
                    🎁 GARANTIA EXTRA:
                  </ResponsiveText>
                  <ResponsiveText variant="small" className="text-green-700">
                    Se seguir o método e não faturar R\$ 1.000 em 30 dias, além do reembolso total, 
                    você ganha <span className="font-bold">R\$ 100 pelo tempo investido!</span>
                  </ResponsiveText>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* ✅ SEÇÃO 10: FAQ PERSONALIZADO OTIMIZADO */}
        <div className="px-3 sm:px-4 py-4 sm:py-6 md:py-8 w-full">
          <div className="max-w-4xl mx-auto w-full">
            <ResponsiveText variant="h2" className="text-white text-center mb-4 sm:mb-6 md:mb-8">
              PERGUNTAS FREQUENTES - {profileData.title}
            </ResponsiveText>

            <div className="space-y-3 sm:space-y-4 max-w-2xl mx-auto w-full">
              <Card className="bg-gray-800 border border-gray-700 w-full">
                <CardContent className="p-3 sm:p-4 w-full">
                  <ResponsiveText variant="body" className="text-orange-400 font-bold mb-2">
                    Este método funciona para meu perfil ({profileData.title})?
                  </ResponsiveText>
                  <ResponsiveText variant="small" className="text-gray-300">
                    Sim! O método foi especialmente adaptado para seu perfil. {profileData.characteristics[0]}
                  </ResponsiveText>
                </CardContent>
              </Card>

              <Card className="bg-gray-800 border border-gray-700 w-full">
                <CardContent className="p-3 sm:p-4 w-full">
                  <ResponsiveText variant="body" className="text-orange-400 font-bold mb-2">
                    Por que apenas R\$ 19? Não é muito barato?
                  </ResponsiveText>
                  <ResponsiveText variant="small" className="text-gray-300">
                    É uma oferta especial de lançamento para seu perfil específico. O valor normal é R\$ {profileData.offer.originalPrice}. 
                    Estou testando esta estratégia por tempo limitado para validar a eficácia do método personalizado.
                  </ResponsiveText>
                </CardContent>
              </Card>

              <Card className="bg-gray-800 border border-gray-700 w-full">
                <CardContent className="p-3 sm:p-4 w-full">
                  <ResponsiveText variant="body" className="text-orange-400 font-bold mb-2">
                    Quanto tempo para ver resultados?
                  </ResponsiveText>
                  <ResponsiveText variant="small" className="text-gray-300">
                    Para seu perfil específico, 89% das alunas veem os primeiros resultados em 30 dias. 
                    Muitas conseguem os primeiros clientes em apenas 2 semanas seguindo o cronograma personalizado.
                  </ResponsiveText>
                </CardContent>
              </Card>

              <Card className="bg-gray-800 border border-gray-700 w-full">
                <CardContent className="p-3 sm:p-4 w-full">
                  <ResponsiveText variant="body" className="text-orange-400 font-bold mb-2">
                    Como recebo o acesso?
                  </ResponsiveText>
                  <ResponsiveText variant="small" className="text-gray-300">
                    Imediatamente após o pagamento você recebe um email com suas credenciais. 
                    Todo conteúdo fica disponível na hora, incluindo os bônus exclusivos para seu perfil.
                  </ResponsiveText>
                </CardContent>
              </Card>

              <Card className="bg-gray-800 border border-gray-700 w-full">
                <CardContent className="p-3 sm:p-4 w-full">
                  <ResponsiveText variant="body" className="text-orange-400 font-bold mb-2">
                    Preciso de experiência prévia?
                  </ResponsiveText>
                  <ResponsiveText variant="small" className="text-gray-300">
                    Não! O método foi desenvolvido especialmente para iniciantes. Começamos do zero absoluto 
                    e te levamos até o nível profissional em 90 dias, respeitando seu ritmo e perfil.
                  </ResponsiveText>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* ✅ SEÇÃO 11: CTA FINAL COM URGÊNCIA MÁXIMA OTIMIZADO */}
        <div className={`px-3 sm:px-4 py-4 sm:py-6 md:py-8 bg-gradient-to-r ${profileData.color} w-full`}>
          <div className="max-w-4xl mx-auto text-center w-full">
            <div className="bg-black/20 backdrop-blur-sm rounded-lg sm:rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-6 border border-yellow-400 sm:border-2 md:border-4 w-full">
              <ResponsiveText variant="h2" className="text-white mb-3 sm:mb-4">
                ⏰ ÚLTIMAS {spotsLeft} VAGAS POR R\$ 19
              </ResponsiveText>
              <ResponsiveText variant="body" className="text-white mb-3 sm:mb-4 md:mb-6 font-semibold">
                Depois volta para R\$ {profileData.offer.originalPrice}. Esta oferta NUNCA mais será repetida para seu perfil.
              </ResponsiveText>

              <div className="bg-red-900 border border-red-500 sm:border-2 rounded-lg p-3 sm:p-4 mb-4 sm:mb-6 w-full">
                <div className="flex items-center justify-center mb-2 sm:mb-3">
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-300 mr-2 animate-pulse flex-shrink-0" />
                  <ResponsiveText variant="body" className="text-yellow-300 font-bold">
                    OFERTA EXPIRA EM:
                  </ResponsiveText>
                </div>
                
                <div className="text-center mb-3 sm:mb-4">
                  <div className="text-3xl sm:text-4xl font-black text-white mb-2">
                    <CountdownTimer minutes={15} seconds={0} />
                  </div>
                  <ResponsiveText variant="small" className="text-red-300 font-bold">
                    ⚠️ Após este horário, volta para R\$ {profileData.offer.originalPrice}
                  </ResponsiveText>
                </div>

                <div className="text-center">
                  <ResponsiveText variant="small" className="text-red-300 animate-pulse font-bold">
                    • Esta oferta NUNCA mais será repetida •
                  </ResponsiveText>
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
                className="w-full mb-4 sm:mb-6"
              >
                <ResponsiveCTA
                  onClick={handlePurchase}
                  variant="accent"
                  size="lg"
                  fullWidth
                  className="border border-white sm:border-2 md:border-4"
                >
                  <span className="text-center leading-tight">
                    {isMobile ? "GARANTIR VAGA - R\$ 19" : "GARANTIR ÚLTIMA VAGA - R\$ 19"}
                  </span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 ml-2 flex-shrink-0" />
                </ResponsiveCTA>
              </motion.div>

              <ResponsiveText variant="small" className="text-yellow-300 font-semibold">
                ⚠️ Esta oferta nunca mais será repetida para seu perfil específico
              </ResponsiveText>

              {/* ✅ PROVA SOCIAL FINAL OTIMIZADA */}
              <div className="mt-4 sm:mt-6 bg-black/30 rounded-lg p-3 sm:p-4">
                <div className="flex items-center justify-center gap-2 sm:gap-4 text-white flex-wrap">
                  <div className="flex items-center">
                    <Users className="w-3 h-3 sm:w-4 sm:h-4 text-green-400 mr-1 flex-shrink-0" />
                    <ResponsiveText variant="small">
                      <strong>{recentBuyers}</strong> compraram hoje
                    </ResponsiveText>
                  </div>
                  <div className="flex items-center">
                    <Award className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 mr-1 flex-shrink-0" />
                    <ResponsiveText variant="small">94% de aprovação</ResponsiveText>
                  </div>
                  <div className="flex items-center">
                    <Star className="w-3 h-3 sm:w-4 sm:h-4 text-orange-400 mr-1 flex-shrink-0" />
                    <ResponsiveText variant="small">4.9/5 estrelas</ResponsiveText>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ✅ ESTILOS CSS OTIMIZADOS PARA MOBILE */}
        <style jsx global>{`
          /* ===== RESET E BASE ===== */
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
            scroll-behavior: smooth;
          }

          body {
            overflow-x: hidden !important;
            max-width: 100vw !important;
            position: relative;
            width: 100%;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          }

          .min-h-screen {
            max-width: 100vw !important;
            overflow-x: hidden !important;
            width: 100% !important;
            position: relative;
          }

          /* ===== COMPONENTES ESPECÍFICOS ===== */
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

          /* ===== ELEMENTOS INTERATIVOS ===== */
          button, .button, [role="button"] {
            min-height: 44px !important;
            min-width: 44px !important;
            touch-action: manipulation !important;
            -webkit-tap-highlight-color: transparent !important;
            user-select: none !important;
            box-sizing: border-box !important;
            max-width: 100% !important;
            word-wrap: break-word !important;
            overflow-wrap: break-word !important;
            cursor: pointer;
            transition: all 0.2s ease;
          }

          button:active, .button:active {
            transform: scale(0.98);
          }

          /* ===== TIPOGRAFIA RESPONSIVA ===== */
          p, span, div, h1, h2, h3, h4, h5, h6 {
            word-wrap: break-word !important;
            overflow-wrap: break-word !important;
            hyphens: auto !important;
            max-width: 100% !important;
            box-sizing: border-box !important;
          }

          /* ===== MÍDIA RESPONSIVA ===== */
          img, video {
            max-width: 100% !important;
            height: auto !important;
            display: block;
            box-sizing: border-box;
          }

          /* ===== FORMULÁRIOS MOBILE ===== */
          input, select, textarea {
            font-size: 16px !important;
            max-width: 100% !important;
            box-sizing: border-box !important;
          }

          /* ===== LAYOUT RESPONSIVO ===== */
          .grid {
            gap: 0.5rem !important;
            width: 100% !important;
            box-sizing: border-box !important;
          }

          .flex {
            flex-wrap: wrap !important;
            box-sizing: border-box !important;
          }

          /* ===== CARROSSEL OTIMIZADO ===== */
          .carousel-container {
            touch-action: pan-y pinch-zoom;
            -webkit-overflow-scrolling: touch;
          }

          .carousel-slide {
            will-change: transform;
            backface-visibility: hidden;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          }

          .carousel-container img {
            will-change: transform;
            transform: translateZ(0);
          }

          /* ===== BREAKPOINTS MOBILE ===== */
          @media (max-width: 768px) {
            /* Typography Scale */
            .text-xs { font-size: 0.75rem !important; line-height: 1rem !important; }
            .text-sm { font-size: 0.875rem !important; line-height: 1.25rem !important; }
            .text-base { font-size: 1rem !important; line-height: 1.5rem !important; }
            .text-lg { font-size: 1.125rem !important; line-height: 1.75rem !important; }
            .text-xl { font-size: 1.25rem !important; line-height: 1.75rem !important; }
            .text-2xl { font-size: 1.5rem !important; line-height: 2rem !important; }
            .text-3xl { font-size: 1.875rem !important; line-height: 2.25rem !important; }
            .text-4xl { font-size: 2.25rem !important; line-height: 2.5rem !important; }

            /* Spacing */
            .px-3 { padding-left: 0.75rem !important; padding-right: 0.75rem !important; }
            .px-4 { padding-left: 1rem !important; padding-right: 1rem !important; }
            .py-4 { padding-top: 1rem !important; padding-bottom: 1rem !important; }
            .py-6 { padding-top: 1.5rem !important; padding-bottom: 1.5rem !important; }
            .py-8 { padding-top: 2rem !important; padding-bottom: 2rem !important; }

            /* Margins */
            .mb-3 { margin-bottom: 0.75rem !important; }
            .mb-4 { margin-bottom: 1rem !important; }
            .mb-6 { margin-bottom: 1.5rem !important; }
            .mb-8 { margin-bottom: 2rem !important; }

            /* Grid */
            .grid-cols-3 {
              grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
              gap: 0.5rem !important;
            }

            .grid-cols-2 {
              grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
              gap: 0.5rem !important;
            }

            /* Video Player */
            vturb-smartplayer {
              height: auto !important;
              aspect-ratio: 16/9 !important;
              min-height: 200px !important;
            }

            /* Borders & Radius */
            .rounded-2xl { border-radius: 1rem !important; }
            .rounded-xl { border-radius: 0.75rem !important; }
            .border-4 { border-width: 2px !important; }
            .border-2 { border-width: 1px !important; }

            /* Button Heights */
            .min-h-\[72px\] { min-height: 56px !important; }
            .min-h-\[64px\] { min-height: 52px !important; }
            .min-h-\[60px\] { min-height: 48px !important; }
            .min-h-\[56px\] { min-height: 48px !important; }

            /* Text Utilities */
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

            /* Carrossel Mobile */
            .carousel-container {
              padding: 0.5rem !important;
            }

            .carousel-slide img {
              object-fit: cover !important;
              border-radius: 0.5rem !important;
            }
          }

          /* ===== MOBILE SMALL (iPhone SE, etc.) ===== */
          @media (max-width: 375px) {
            .px-3 { padding-left: 0.5rem !important; padding-right: 0.5rem !important; }
            .text-2xl { font-size: 1.25rem !important; line-height: 1.75rem !important; }
            .text-3xl { font-size: 1.5rem !important; line-height: 2rem !important; }
            .text-4xl { font-size: 1.875rem !important; line-height: 2.25rem !important; }
            
            vturb-smartplayer {
              min-height: 180px !important;
            }

            .grid-cols-3, .grid-cols-2 {
              gap: 0.25rem !important;
            }

            button {
              min-height: 44px !important;
              font-size: 0.875rem !important;
            }

            .carousel-container {
              padding: 0.25rem !important;
            }
          }

          /* ===== PERFORMANCE OPTIMIZATIONS ===== */
          .bg-gradient-to-r, .bg-gradient-to-br {
            will-change: transform;
            backface-visibility: hidden;
            transform: translateZ(0);
          }

          /* ===== SAFARI FIXES ===== */
          @supports (-webkit-touch-callout: none) {
            input, select, textarea {
              font-size: 16px !important;
            }
          }

          /* ===== CONTAINER QUERIES ===== */
          @container (max-width: 768px) {
            .text-3xl { font-size: 1.5rem !important; }
            .text-4xl { font-size: 1.875rem !important; }
          }

          /* ===== TOUCH GESTURES ===== */
          @media (hover: none) and (pointer: coarse) {
            .carousel-container {
              -webkit-overflow-scrolling: touch;
              scroll-snap-type: x mandatory;
            }
            
            .carousel-slide {
              scroll-snap-align: center;
            }

            button:hover {
              transform: none;
            }

            button:active {
              transform: scale(0.95);
            }
          }

          /* ===== ACCESSIBILITY ===== */
          .sr-only {
            position: absolute;
            width: 1px;
            height: 1px;
            padding: 0;
            margin: -1px;
            overflow: hidden;
            clip: rect(0, 0, 0, 0);
            white-space: nowrap;
            border: 0;
          }

          /* ===== FOCUS STATES ===== */
          button:focus-visible {
            outline: 2px solid #3b82f6;
            outline-offset: 2px;
          }

          /* ===== LOADING STATES ===== */
          .loading {
            opacity: 0.7;
            pointer-events: none;
          }

          /* ===== ANIMATION PERFORMANCE ===== */
          @media (prefers-reduced-motion: reduce) {
            *, *::before, *::after {
              animation-duration: 0.01ms !important;
              animation-iteration-count: 1 !important;
              transition-duration: 0.01ms !important;
            }
          }
        `}</style>
      </div>
    </>
  )
}