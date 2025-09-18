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
  const contentRef = useRef(null)

  // ✅ DADOS DO CARROSSEL INTEGRADO
  const carouselData = [
    {
      id: 1,
      modelImage: "https://amandateixeiraoficial.com.br/wp-content/uploads/2025/09/IMG_4639-scaled.webp",
      testimonialImage: "https://amandateixeiraoficial.com.br/wp-content/uploads/2025/09/IMG_5696.webp",
      modelAlt: "Modelo com sobrancelhas perfeitas - Resultado 1",
      testimonialAlt: "Depoimento de aluna satisfeita",
      clientName: "Ana Carolina",
      clientProfile: "INICIANTE DETERMINADA",
      result: "R$ 4.500 no primeiro mês"
    },
    {
      id: 2,
      modelImage: "https://amandateixeiraoficial.com.br/wp-content/uploads/2025/09/IMG_5559-scaled.webp",
      testimonialImage: "https://amandateixeiraoficial.com.br/wp-content/uploads/2025/09/IMG_5697.webp",
      modelAlt: "Modelo com sobrancelhas perfeitas - Resultado 2",
      testimonialAlt: "Depoimento de aluna satisfeita",
      clientName: "Maria Santos",
      clientProfile: "RENDA EXTRA INTELIGENTE",
      result: "R$ 3.200 trabalhando fins de semana"
    },
    {
      id: 3,
      modelImage: "https://amandateixeiraoficial.com.br/wp-content/uploads/2025/09/IMG_5125-scaled.webp",
      testimonialImage: "https://amandateixeiraoficial.com.br/wp-content/uploads/2025/09/Post-Instagram-Depoimento-de-Clientes-Feedback-Moderno-Marrom.png.webp",
      modelAlt: "Modelo com sobrancelhas perfeitas - Resultado 3",
      testimonialAlt: "Depoimento de aluna satisfeita",
      clientName: "Carmen Lima",
      clientProfile: "EMPREENDEDORA NATA",
      result: "R$ 8.900 em 60 dias"
    }
  ]

  // ✅ PERFIS CORRIGIDOS COM PREÇO ÚNICO R$ 19
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
        "🎯 Perfil analítico é vantagem no mercado"
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

  // ✅ COMPONENTE: CARROSSEL INTEGRADO OTIMIZADO
  const IntegratedCarousel = () => {
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
          className="relative bg-black rounded-xl sm:rounded-2xl p-2 sm:p-4 border-2 border-orange-500 shadow-2xl overflow-hidden"
          onMouseEnter={() => setIsCarouselPaused(true)}
          onMouseLeave={() => setIsCarouselPaused(false)}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 to-red-600/20 animate-pulse"></div>
          
          <div className="relative z-10">
            {/* Desktop Layout */}
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
                          ✅ {currentData.clientProfile}
                        </p>
                        <p className="text-white font-bold text-xs">
                          {currentData.clientName} - {currentData.result}
                        </p>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>

            {/* Mobile Layout */}
            <div className="md:hidden">
              <div className="space-y-4">
                {/* Modelo em cima */}
                <div className="relative overflow-hidden rounded-lg h-48">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`model-mobile-${currentSlide}`}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      transition={{ duration: 0.5 }}
                      className="w-full h-full"
                    >
                      <img
                        src={currentData.modelImage}
                        alt={currentData.modelAlt}
                        className="w-full h-full object-cover rounded-lg"
                        loading="lazy"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                        <p className="text-white font-bold text-sm">
                          ✨ RESULTADO PROFISSIONAL
                        </p>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Depoimento embaixo */}
                <div className="relative overflow-hidden rounded-lg h-48">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`testimonial-mobile-${currentSlide}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5 }}
                      className="w-full h-full"
                    >
                      <img
                        src={currentData.testimonialImage}
                        alt={currentData.testimonialAlt}
                        className="w-full h-full object-cover rounded-lg"
                        loading="lazy"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                        <p className="text-green-400 font-bold text-sm mb-1">
                          ✅ {currentData.clientProfile}
                        </p>
                        <p className="text-white font-bold text-xs">
                          {currentData.clientName} - {currentData.result}
                        </p>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>

            {/* Controles do Carrossel */}
            <div className="absolute top-1/2 left-2 transform -translate-y-1/2">
              <button
                onClick={prevSlide}
                className="bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-300"
                aria-label="Slide anterior"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
            </div>

            <div className="absolute top-1/2 right-2 transform -translate-y-1/2">
              <button
                onClick={nextSlide}
                className="bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-300"
                aria-label="Próximo slide"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Indicadores */}
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {carouselData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-orange-500 scale-125' 
                      : 'bg-white/50 hover:bg-white/70'
                  }`}
                  aria-label={`Ir para slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* CTA abaixo do carrossel */}
        <div className="text-center mt-6">
          <Button
            onClick={handlePurchase}
            className={`w-full max-w-md mx-auto bg-gradient-to-r ${profileData?.color || 'from-orange-500 to-red-600'} hover:opacity-90 text-white font-bold py-3 px-6 rounded-full text-base shadow-lg transition-all duration-300 min-h-[48px] flex items-center justify-center`}
            onTouchStart={handleTouchFeedback}
          >
            <Play className="w-4 h-4 mr-2 flex-shrink-0" />
            <span className="truncate">QUERO ESSE RESULTADO - R$ 19</span>
            <ArrowRight className="w-4 h-4 ml-2 flex-shrink-0" />
          </Button>
        </div>
      </div>
    )
  }

  // ✅ COMPONENTE: PROVA SOCIAL EM TEMPO REAL
  const LiveSocialProof = () => {
    const [recentPurchases] = useState([
      { name: "Ana C.", profile: "INICIANTE_DETERMINADA", time: "agora mesmo" },
      { name: "Maria S.", profile: "RENDA_EXTRA_INTELIGENTE", time: "2 min atrás" },
      { name: "Carmen L.", profile: "EMPREENDEDORA_NATA", time: "5 min atrás" }
    ]);

    return (
      <div className="space-y-3 mb-6">
        {recentPurchases.map((purchase, index) => (
          <div key={index} className="bg-black/30 rounded-lg p-3 border-l-2 border-green-400">
            <div className="flex items-center mb-1">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" />
              <span className="text-green-400 text-xs font-bold">
                {purchase.time.toUpperCase()}:
              </span>
            </div>
            <p className="text-white text-sm">
              <span className="font-bold">{purchase.name}</span> acabou de garantir sua vaga - 
              Perfil: {purchase.profile.replace('_', ' ')}
            </p>
          </div>
        ))}
      </div>
    )
  }

  // ✅ COMPONENTE: URGÊNCIA REAL INTENSIFICADA
  const RealUrgencySection = () => (
    <div className="bg-red-900 border-2 border-red-500 rounded-lg p-4 mb-6 w-full">
      <div className="flex items-center justify-center mb-3">
        <Clock className="w-5 h-5 text-yellow-300 mr-2 animate-pulse" />
        <span className="text-yellow-300 font-bold text-lg">OFERTA EXPIRA EM:</span>
      </div>
      
      <div className="text-center mb-4">
        <div className="text-4xl font-black text-white mb-2">
          <CountdownTimer minutes={15} seconds={0} />
        </div>
        <p className="text-red-300 text-sm font-bold">
          ⚠️ Após este horário, volta para R$ {profileData?.offer?.originalPrice || '397'}
        </p>
      </div>

      <div className="flex items-center justify-between mb-2">
        <p className="text-yellow-300 font-bold text-base">
          🚨 ÚLTIMAS {spotsLeft} VAGAS HOJE
        </p>
        <div className="text-red-300 font-bold text-sm">
          {recentBuyers}/50 preenchidas
        </div>
      </div>
      
      <div className="w-full bg-gray-700 rounded-full h-3 mb-2">
        <div 
          className="bg-red-500 h-3 rounded-full transition-all duration-300" 
          style={{width: `${(recentBuyers/50) * 100}%`}}
        />
      </div>
      
      <div className="text-center">
        <p className="text-red-300 text-xs animate-pulse font-bold">
          • Esta oferta NUNCA mais será repetida •
        </p>
      </div>
    </div>
  )

  // ✅ COMPONENTE: AQUECIMENTO PRÉ-VSL
  const ProblemAgitationSection = ({ profileData }) => (
    <div className="px-4 py-6 sm:py-8 bg-gradient-to-r from-red-900/30 to-orange-900/30 w-full">
      <div className="max-w-4xl mx-auto w-full">
        <div className="text-center mb-6">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
            ⚠️ <span className="text-red-400">ATENÇÃO:</span> SEU MAIOR OBSTÁCULO
          </h2>
          
          <div className="bg-red-900/50 border-2 border-red-500 rounded-lg p-4 mb-6">
            <h3 className="text-lg font-bold text-red-300 mb-3">
              {profileData?.challenge || "Falta de conhecimento técnico"}
            </h3>
            <p className="text-white text-sm sm:text-base">
              Este é exatamente o motivo pelo qual 87% das pessoas com seu perfil 
              <span className="text-red-300 font-bold"> NUNCA conseguem resultados</span> com sobrancelhas.
            </p>
          </div>
          
          <div className="bg-green-900/50 border-2 border-green-500 rounded-lg p-4">
            <h3 className="text-lg font-bold text-green-300 mb-3">
              🎯 SUA SOLUÇÃO PERSONALIZADA:
            </h3>
            <p className="text-white text-sm sm:text-base">
              <span className="text-green-300 font-bold">{profileData?.solution || "MÉTODO PERSONALIZADO"}</span> - 
              O método que transforma seu maior desafio em sua maior vantagem.
            </p>
          </div>
        </div>
      </div>
    </div>
  )

  // ✅ NOVO COMPONENTE: AUTORIDADE/CREDIBILIDADE
  const AuthoritySection = () => (
    <div className="px-4 py-6 sm:py-8 bg-gradient-to-r from-purple-900/30 to-blue-900/30 w-full">
      <div className="max-w-4xl mx-auto w-full">
        <div className="text-center mb-6">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-6">
            👑 <span className="text-purple-400">QUEM ESTÁ POR TRÁS</span> DO SEU RESULTADO
          </h2>
          
          <div className="bg-black/30 rounded-lg p-6 mb-6 max-w-2xl mx-auto">
            <div className="flex flex-col items-center mb-6">
              <img 
                src="https://amandateixeiraoficial.com.br/wp-content/uploads/2025/06/amanda.png" 
                alt="Amanda Teixeira"
                className="w-20 h-20 rounded-full mb-4 border-4 border-purple-400"
              />
              <h3 className="text-xl font-bold text-white mb-2">Amanda Teixeira</h3>
              <p className="text-purple-400 font-bold mb-4">
                Especialista em Sobrancelhas há 8 anos
              </p>
            </div>
            
            <div className="grid grid-cols-3 gap-4 text-center mb-6">
              <div className="bg-purple-900/30 rounded-lg p-3">
                <div className="text-2xl font-bold text-purple-400">127k+</div>
                <p className="text-white text-xs">Alunas Treinadas</p>
              </div>
              <div className="bg-purple-900/30 rounded-lg p-3">
                <div className="text-2xl font-bold text-purple-400">8</div>
                <p className="text-white text-xs">Anos de Experiência</p>
              </div>
              <div className="bg-purple-900/30 rounded-lg p-3">
                <div className="text-2xl font-bold text-purple-400">94%</div>
                <p className="text-white text-xs">Taxa de Sucesso</p>
              </div>
            </div>

            <div className="bg-purple-900/50 rounded-lg p-4 mb-4">
              <p className="text-white text-sm italic">
                "Transformei mais de 127.000 mulheres em sobrancelhistas de sucesso. 
                Agora é a SUA vez de conquistar sua independência financeira."
              </p>
            </div>
          </div>
          
          <p className="text-white text-lg font-semibold">
            Agora vou te mostrar <span className="text-purple-400 font-bold">exatamente como</span> 
            conseguir o mesmo resultado...
          </p>
        </div>
      </div>
    </div>
  )

  // ✅ NOVO COMPONENTE: TRANSFORMAÇÃO EM 90 DIAS
  const TransformationSection = ({ profileData }) => (
    <div className="px-4 py-6 sm:py-8 bg-gradient-to-r from-green-900/30 to-emerald-900/30 w-full">
      <div className="max-w-4xl mx-auto w-full">
        <div className="text-center mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-6">
            🔥 <span className="text-green-400">SUA TRANSFORMAÇÃO</span> EM 90 DIAS
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-black/30 rounded-lg p-6 border-2 border-green-500"
            >
              <div className="text-4xl mb-4">📅</div>
              <h3 className="text-xl font-bold text-white mb-2">30 DIAS</h3>
              <p className="text-gray-300 text-sm">
                Primeiras clientes conquistadas e R$ 1.000+ já faturados
              </p>
              <div className="mt-4 bg-green-600 rounded-full p-2">
                <Check className="w-5 h-5 text-white mx-auto" />
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-black/30 rounded-lg p-6 border-2 border-green-500"
            >
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-white mb-2">60 DIAS</h3>
              <p className="text-gray-300 text-sm">
                Agenda lotada e R$ 3.000+ mensais de forma consistente
              </p>
              <div className="mt-4 bg-green-600 rounded-full p-2">
                <TrendingUp className="w-5 h-5 text-white mx-auto" />
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-black/30 rounded-lg p-6 border-2 border-green-500"
            >
              <div className="text-4xl mb-4">👑</div>
              <h3 className="text-xl font-bold text-white mb-2">90 DIAS</h3>
              <p className="text-gray-300 text-sm">
                Referência na cidade e R$ {getEarningsValue(profileData?.subtitle || "R$ 6.000")}+ mensais
              </p>
              <div className="mt-4 bg-green-600 rounded-full p-2">
                <Crown className="w-5 h-5 text-white mx-auto" />
              </div>
            </motion.div>
          </div>

          <div className="mt-8 bg-green-900/50 rounded-lg p-6">
            <h3 className="text-lg font-bold text-green-300 mb-3">
              🎯 GARANTIA DE RESULTADO:
            </h3>
            <p className="text-white">
              Se você seguir o método e não conseguir seus primeiros R$ 1.000 em 30 dias, 
              <span className="text-green-400 font-bold"> devolvemos 100% do seu dinheiro</span> + 
              R$ 100 pelo seu tempo investido.
            </p>
          </div>
        </div>
      </div>
    </div>
  )

  // ✅ COMPONENTE: QUEBRA DE OBJEÇÕES
  const ObjectionBreakingSection = ({ profileData }) => (
    <div className="px-4 py-6 sm:py-8 bg-gradient-to-r from-gray-900 to-black w-full">
      <div className="max-w-4xl mx-auto w-full">
        <h2 className="text-xl sm:text-2xl font-bold text-white text-center mb-6">
          💭 <span className="text-orange-400">SEI O QUE VOCÊ ESTÁ PENSANDO...</span>
        </h2>

        <div className="space-y-4 max-w-2xl mx-auto w-full">
          <div className="bg-gray-800 border-l-4 border-red-500 p-4 rounded-r-lg">
            <h3 className="text-red-400 font-bold mb-2 flex items-center">
              😰 "E se eu não conseguir clientes?"
            </h3>
            <p className="text-white text-sm">
              <span className="text-green-400 font-bold">RESPOSTA:</span> 89% das alunas com seu perfil 
              conseguem os primeiros clientes em menos de 30 dias. Temos estratégias específicas 
              para captação que funcionam mesmo para iniciantes.
            </p>
          </div>

          <div className="bg-gray-800 border-l-4 border-orange-500 p-4 rounded-r-lg">
            <h3 className="text-orange-400 font-bold mb-2 flex items-center">
              💰 "R$ 19 é muito barato, deve ser enganação..."
            </h3>
            <p className="text-white text-sm">
              <span className="text-green-400 font-bold">RESPOSTA:</span> É uma oferta especial 
              exclusiva para seu perfil. O valor normal é R$ {profileData?.offer?.originalPrice || '397'}. 
              Estou testando esta estratégia por apenas 48 horas para validar o método.
            </p>
          </div>

          <div className="bg-gray-800 border-l-4 border-blue-500 p-4 rounded-r-lg">
            <h3 className="text-blue-400 font-bold mb-2 flex items-center">
              🤔 "Não tenho tempo para estudar..."
            </h3>
            <p className="text-white text-sm">
              <span className="text-green-400 font-bold">RESPOSTA:</span> O método foi criado 
              especificamente para pessoas ocupadas. São apenas 20 minutos por dia durante 
              2 semanas para dominar todas as técnicas.
            </p>
          </div>

          <div className="bg-gray-800 border-l-4 border-purple-500 p-4 rounded-r-lg">
            <h3 className="text-purple-400 font-bold mb-2 flex items-center">
              😱 "E se eu fizer algo errado e estragar?"
            </h3>
            <p className="text-white text-sm">
              <span className="text-green-400 font-bold">RESPOSTA:</span> O método inclui 
              técnicas de segurança e correção de erros. Além disso, você tem 60 dias de 
              suporte VIP para tirar qualquer dúvida.
            </p>
          </div>
        </div>
      </div>
    </div>
  )

  // ✅ Auto-play do carrossel
  useEffect(() => {
    if (!isCarouselPaused) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % carouselData.length)
      }, 6000) // 6 segundos
      return () => clearInterval(interval)
    }
  }, [isCarouselPaused, carouselData.length])

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
        // Quando chegar perto do limite, reduzir vagas
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
    const match = subtitle.match(/R\$\s*([\d.]+)/)
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
        
        {/* ✅ SEÇÃO 1: RESULTADO PERSONALIZADO */}
        <div className="relative overflow-hidden w-full">
          <div className={`absolute inset-0 bg-gradient-to-r ${profileData.color}/20 animate-pulse`}></div>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : -20 }}
            className="relative z-10 px-4 py-6 sm:py-8 text-center w-full"
          >
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

              <p className="text-lg sm:text-xl text-gray-300 mb-4 font-semibold max-w-full break-words px-2">
                Descubra <span className="text-orange-400 font-bold">como alcançar este resultado</span>:
              </p>
            </div>
          </motion.div>
        </div>

        {/* ✅ SEÇÃO 2: AQUECIMENTO PRÉ-VSL */}
        <ProblemAgitationSection profileData={profileData} />

        {/* ✅ SEÇÃO 3: AUTORIDADE/CREDIBILIDADE */}
        <AuthoritySection />

        {/* ✅ SEÇÃO 4: PROVA SOCIAL FORTE COM CARROSSEL INTEGRADO */}
        <div className="px-4 py-6 sm:py-8 bg-gradient-to-r from-black to-gray-900 w-full">
          <div className="max-w-4xl mx-auto w-full">
            <div className="text-center mb-6">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 max-w-full break-words">
                <span className="text-orange-400">RESULTADOS REAIS</span> DE QUEM TINHA SEU PERFIL
              </h3>
              <p className="text-gray-300 text-sm sm:text-base break-words">
                Veja as transformações de alunas com o mesmo perfil que você
              </p>
            </div>

            {/* ✅ PROVA SOCIAL EM TEMPO REAL */}
            <LiveSocialProof />

            {/* ✅ CARROSSEL INTEGRADO */}
            <IntegratedCarousel />

            {/* ✅ NÚMEROS ATUALIZADOS */}
            <div className="grid grid-cols-2 gap-2 sm:gap-4 max-w-2xl mx-auto w-full mb-6 mt-8">
              <div className="bg-gray-800 p-3 sm:p-4 rounded-lg border border-orange-500 text-center">
                <div className="text-xl sm:text-2xl font-bold text-orange-400 mb-1">{recentBuyers}</div>
                <p className="text-white text-xs sm:text-sm break-words">Compraram hoje</p>
              </div>
              <div className="bg-gray-800 p-3 sm:p-4 rounded-lg border border-orange-500 text-center">
                <div className="text-xl sm:text-2xl font-bold text-orange-400 mb-1">{spotsLeft}</div>
                <p className="text-white text-xs sm:text-sm break-words">Vagas restantes</p>
              </div>
            </div>
          </div>
        </div>

        {/* ✅ SEÇÃO 5: VSL INTEGRADO (REPOSICIONADO) */}
        <div className="px-4 py-6 sm:py-8 w-full">
          <div className="max-w-4xl mx-auto w-full">
            <div className="text-center mb-6">
                            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 max-w-full break-words">
                <span className="text-orange-400">O MÉTODO</span> QUE TORNA SEU RESULTADO POSSÍVEL
              </h2>
              
              <div className="max-w-2xl mx-auto mb-6 w-full">
                <p className="text-base sm:text-lg text-gray-300 mb-4 break-words">
                  Assista este vídeo onde revelo:
                </p>
                <div className="text-left bg-black/30 rounded-lg p-3 sm:p-4 space-y-2 w-full">
                  <div className="flex items-start text-white text-sm sm:text-base">
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 mr-2 sm:mr-3 flex-shrink-0 mt-0.5" />
                    <span className="break-words">Por que seu perfil tem <strong className="text-orange-400">alto potencial de sucesso</strong></span>
                  </div>
                  <div className="flex items-start text-white text-sm sm:text-base">
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 mr-2 sm:mr-3 flex-shrink-0 mt-0.5" />
                    <span className="break-words">As <strong className="text-orange-400">técnicas exatas</strong> para seu perfil específico</span>
                  </div>
                  <div className="flex items-start text-white text-sm sm:text-base">
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 mr-2 sm:mr-3 flex-shrink-0 mt-0.5" />
                    <span className="break-words">Como aplicar <strong className="text-orange-400">passo a passo</strong> e ter resultados em 30 dias</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center mb-6 sm:mb-8 w-full">
              <div className="w-full max-w-3xl">
                <div className="relative bg-black rounded-xl sm:rounded-2xl p-2 sm:p-4 border-2 sm:border-4 border-orange-500 shadow-2xl w-full">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 to-red-600/20 rounded-xl sm:rounded-2xl animate-pulse"></div>
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
              <div className="bg-orange-600 text-white py-2 sm:py-3 px-4 sm:px-6 rounded-full inline-block font-bold text-base sm:text-lg mb-4 sm:mb-6 animate-bounce max-w-full">
                👆 APLIQUE ISSO E VEJA RESULTADOS EM 30 DIAS
              </div>
            </div>
          </div>
        </div>

        {/* ✅ SEÇÃO 6: TRANSFORMAÇÃO EM 90 DIAS */}
        <TransformationSection profileData={profileData} />

        {/* ✅ SEÇÃO 7: QUEBRA DE OBJEÇÕES */}
        <ObjectionBreakingSection profileData={profileData} />

        {/* ✅ SEÇÃO 8: OFERTA IRRESISTÍVEL */}
        <div className="px-4 py-6 sm:py-8 w-full">
          <div className="max-w-4xl mx-auto w-full">
            
            {/* ✅ URGÊNCIA REAL INTENSIFICADA */}
            <RealUrgencySection />

            <Card className={`bg-gradient-to-r ${profileData.color} text-white shadow-2xl border-2 sm:border-4 border-yellow-400 w-full`}>
              <CardContent className="p-4 sm:p-6 md:p-8 text-center w-full">
                
                <div className="bg-yellow-400 text-black font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-full inline-block mb-4 sm:mb-6 text-base sm:text-lg max-w-full">
                  🎁 BÔNUS EXCLUSIVO: R\$ {profileData.offer.discount} DE DESCONTO
                </div>

                <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-4 sm:mb-6 break-words">
                  {profileData.solution}
                </h2>

                {/* ✅ PREÇO UNIFICADO R\$ 19 */}
                <div className="bg-black/20 rounded-lg p-4 sm:p-6 mb-4 sm:mb-6 w-full">
                  <div className="text-center mb-4">
                    <div className="text-4xl sm:text-6xl font-black text-yellow-300 mb-2">
                      R\$ 19
                    </div>
                    <div className="text-lg sm:text-xl">
                      <span className="line-through text-gray-400 mr-3">R\$ {profileData.offer.originalPrice}</span>
                      <span className="text-green-400 font-bold">ECONOMIZA R\$ {profileData.offer.discount}</span>
                    </div>
                  </div>

                  <div className="text-left space-y-2 sm:space-y-3 max-w-md mx-auto w-full">
                    {profileData.offer.includes.map((item, index) => (
                      <div key={index} className="flex items-start text-white text-sm sm:text-base">
                        <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 mr-2 sm:mr-3 flex-shrink-0 mt-0.5" />
                        <span className="break-words">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* ✅ CTA OTIMIZADO COM COPY EMOCIONAL */}
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
                    className="w-full max-w-lg mx-auto bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-black py-4 sm:py-6 px-4 sm:px-8 rounded-full text-lg sm:text-xl shadow-2xl transition-all duration-300 transform hover:scale-105 border-2 sm:border-4 border-yellow-400 min-h-[60px] sm:min-h-[72px] flex items-center justify-center box-border"
                    onTouchStart={handleTouchFeedback}
                  >
                    <Zap className="w-5 h-5 sm:w-6 sm:h-6 mr-2 flex-shrink-0 animate-pulse" />
                    <span className="text-center leading-tight break-words">
                      QUERO MINHA INDEPENDÊNCIA FINANCEIRA - R\$ 19
                    </span>
                    <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 ml-2 flex-shrink-0" />
                  </Button>
                </motion.div>

                <div className="flex justify-center gap-2 sm:gap-4 text-xs sm:text-sm text-white mb-4 flex-wrap">
                  <div className="flex items-center">
                    <Users className="w-3 h-3 sm:w-4 sm:h-4 text-orange-400 mr-1" />
                    <span><strong>{recentBuyers}</strong> compraram hoje</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-red-400 mr-1" />
                    <span>Últimas {spotsLeft} vagas</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* ✅ SEÇÃO 9: GARANTIA */}
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
                
                {/* ✅ GARANTIA EXTRA */}
                <div className="bg-green-100 border-2 border-green-500 rounded-lg p-4 mt-4">
                  <h3 className="text-green-800 font-bold mb-2">
                    🎁 GARANTIA EXTRA:
                  </h3>
                  <p className="text-green-700 text-sm">
                    Se seguir o método e não faturar R\$ 1.000 em 30 dias, além do reembolso total, 
                    você ganha <span className="font-bold">R\$ 100 pelo tempo investido!</span>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* ✅ SEÇÃO 10: FAQ PERSONALIZADO */}
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
                    Por que apenas R\$ 19? Não é muito barato?
                  </h3>
                  <p className="text-gray-300 text-sm break-words">
                    É uma oferta especial de lançamento para seu perfil específico. O valor normal é R\$ {profileData.offer.originalPrice}. 
                    Estou testando esta estratégia por tempo limitado para validar a eficácia do método personalizado.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gray-800 border border-gray-700 w-full">
                <CardContent className="p-3 sm:p-4 w-full">
                  <h3 className="text-base sm:text-lg font-bold text-orange-400 mb-2 break-words">
                    Quanto tempo para ver resultados?
                  </h3>
                  <p className="text-gray-300 text-sm break-words">
                    Para seu perfil específico, 89% das alunas veem os primeiros resultados em 30 dias. 
                    Muitas conseguem os primeiros clientes em apenas 2 semanas seguindo o cronograma personalizado.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gray-800 border border-gray-700 w-full">
                <CardContent className="p-3 sm:p-4 w-full">
                  <h3 className="text-base sm:text-lg font-bold text-orange-400 mb-2 break-words">
                    Como recebo o acesso?
                  </h3>
                  <p className="text-gray-300 text-sm break-words">
                    Imediatamente após o pagamento você recebe um email com suas credenciais. 
                    Todo conteúdo fica disponível na hora, incluindo os bônus exclusivos para seu perfil.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gray-800 border border-gray-700 w-full">
                <CardContent className="p-3 sm:p-4 w-full">
                  <h3 className="text-base sm:text-lg font-bold text-orange-400 mb-2 break-words">
                    Preciso de experiência prévia?
                  </h3>
                  <p className="text-gray-300 text-sm break-words">
                    Não! O método foi desenvolvido especialmente para iniciantes. Começamos do zero absoluto 
                    e te levamos até o nível profissional em 90 dias, respeitando seu ritmo e perfil.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* ✅ SEÇÃO 11: CTA FINAL COM URGÊNCIA MÁXIMA */}
        <div className={`px-4 py-6 sm:py-8 bg-gradient-to-r ${profileData.color} w-full`}>
          <div className="max-w-4xl mx-auto text-center w-full">
            <div className="bg-black/20 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border-2 sm:border-4 border-yellow-400 w-full">
              <h2 className="text-2xl sm:text-3xl font-black text-white mb-4 break-words">
                ⏰ ÚLTIMAS {spotsLeft} VAGAS POR R\$ 19
              </h2>
              <p className="text-lg sm:text-xl text-white mb-4 sm:mb-6 font-semibold break-words">
                Depois volta para R\$ {profileData.offer.originalPrice}. Esta oferta NUNCA mais será repetida para seu perfil.
              </p>

              <div className="bg-red-900 border-2 border-red-500 rounded-lg p-4 mb-6 w-full">
                <div className="flex items-center justify-center mb-3">
                  <Clock className="w-5 h-5 text-yellow-300 mr-2 animate-pulse" />
                  <span className="text-yellow-300 font-bold text-lg">OFERTA EXPIRA EM:</span>
                </div>
                
                <div className="text-center mb-4">
                  <div className="text-4xl font-black text-white mb-2">
                    <CountdownTimer minutes={15} seconds={0} />
                  </div>
                  <p className="text-red-300 text-sm font-bold">
                    ⚠️ Após este horário, volta para R\$ {profileData.offer.originalPrice}
                  </p>
                </div>

                <div className="text-center">
                  <p className="text-red-300 text-xs animate-pulse font-bold">
                    • Esta oferta NUNCA mais será repetida •
                  </p>
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
                    GARANTIR ÚLTIMA VAGA - R\$ 19
                  </span>
                  <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 ml-2 flex-shrink-0" />
                </Button>
              </motion.div>

              <p className="text-yellow-300 text-xs sm:text-sm mt-4 font-semibold break-words">
                ⚠️ Esta oferta nunca mais será repetida para seu perfil específico
              </p>

              {/* ✅ PROVA SOCIAL FINAL */}
              <div className="mt-6 bg-black/30 rounded-lg p-4">
                <div className="flex items-center justify-center gap-4 text-white text-sm">
                  <div className="flex items-center">
                    <Users className="w-4 h-4 text-green-400 mr-1" />
                    <span><strong>{recentBuyers}</strong> compraram hoje</span>
                  </div>
                  <div className="flex items-center">
                    <Award className="w-4 h-4 text-yellow-400 mr-1" />
                    <span>94% de aprovação</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-orange-400 mr-1" />
                    <span>4.9/5 estrelas</span>
                  </div>
                </div>
              </div>
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

          /* Estilos específicos do carrossel */
          .carousel-container {
            touch-action: pan-y pinch-zoom;
          }

          .carousel-slide {
            will-change: transform;
            backface-visibility: hidden;
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

            .grid-cols-2 {
              grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
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

            /* Mobile carousel adjustments */
            .carousel-container {
              padding: 0.5rem !important;
            }

            .carousel-slide img {
              object-fit: cover !important;
              border-radius: 0.5rem !important;
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

          /* Animações suaves para o carrossel */
          .carousel-slide {
            transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          }

          /* Otimizações de performance */
          .carousel-container img {
            will-change: transform;
            transform: translateZ(0);
          }

          /* Touch gestures para mobile */
          @media (hover: none) and (pointer: coarse) {
            .carousel-container {
              -webkit-overflow-scrolling: touch;
              scroll-snap-type: x mandatory;
            }
            
            .carousel-slide {
              scroll-snap-align: center;
            }
          }
        `}</style>
      </div>
    </>
  )
}