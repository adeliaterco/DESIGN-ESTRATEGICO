"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import {
  Gift,
  Check,
  ArrowRight,
  ArrowLeft,
  Heart,
  Clock,
  AlertTriangle,
  User,
  TrendingUp,
  Target,
  Zap,
  Calendar,
  Users,
  MessageCircle,
  Smile,
  Star,
  CheckCircle,
  Trophy,
  Scissors,
  Sparkles,
  Crown,
  DollarSign,
  Home,
  Briefcase,
  Coffee,
  Award
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { quizSteps, socialProofMessages, getPersonalizedContent, calculateProfile } from "@/lib/quiz-data"
import { BonusUnlock } from "@/components/bonus-unlock"
import { ValueCounter } from "@/components/value-counter"
import { LoadingAnalysis } from "@/components/loading-analysis"

// Função para enviar eventos a Google Analytics
function enviarEvento(nombre_evento, propriedades = {}) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', nombre_evento, propriedades);
    console.log('Evento enviado:', nombre_evento, propriedades);
  }
}

export default function QuizStep() {
  const params = useParams()
  const router = useRouter()
  const step = Number.parseInt(params.step as string)
  const [selectedAnswer, setSelectedAnswer] = useState<string>("")
  const [quizData, setQuizData] = useState<any>({})
  const [unlockedBonuses, setUnlockedBonuses] = useState<number[]>([])
  const [totalValue, setTotalValue] = useState(0)
  const [showBonusUnlock, setShowBonusUnlock] = useState(false)
  const [showAnalysis, setShowAnalysis] = useState(false)
  const [newBonus, setNewBonus] = useState<any>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [peopleCount, setPeopleCount] = useState(127)
  const [userProfile, setUserProfile] = useState<string>("")

  const currentStep = quizSteps[step - 1]
  const progress = (step / 12) * 100

  useEffect(() => {
    // Cargar dados guardados
    const saved = localStorage.getItem("quizData")
    const savedBonuses = localStorage.getItem("unlockedBonuses")
    const savedValue = localStorage.getItem("totalValue")
    const savedProfile = localStorage.getItem("userProfile")

    if (saved) setQuizData(JSON.parse(saved))
    if (savedBonuses) setUnlockedBonuses(JSON.parse(savedBonuses))
    if (savedValue) setTotalValue(Number.parseInt(savedValue))
    if (savedProfile) setUserProfile(savedProfile)

    // Retraso de animación optimizado
    setTimeout(() => {
      setIsLoaded(true)
    }, 200)

    // Registra visualização da etapa do quiz
    enviarEvento('visualizou_etapa_quiz', {
      numero_etapa: step,
      pergunta: currentStep?.question || `Etapa ${step}`,
      funil: 'sobrancelhas'
    });

    // Avance automático para o passo de especialista
    if (currentStep?.autoAdvance) {
      const timer = setTimeout(() => {
        proceedToNextStep()
      }, 3000)

      return () => clearTimeout(timer)
    }

    // Simular contador de pessoas (otimizado para sobrancelhas)
    const interval = setInterval(() => {
      setPeopleCount((prev) => prev + Math.floor(Math.random() * 3) + 1)
    }, 45000)

    return () => clearInterval(interval)
  }, [step])

  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswer(answer)

    // Registra evento de resposta selecionada
    enviarEvento('selecionou_resposta', {
      numero_etapa: step,
      pergunta: currentStep?.question || `Etapa ${step}`,
      resposta: answer,
      funil: 'sobrancelhas'
    });

    // Retroalimentação visual otimizada
    const button = document.querySelector(`button[data-option="${answer}"]`)
    if (button) {
      button.classList.add("scale-102")
      setTimeout(() => button.classList.remove("scale-102"), 150)
    }
  }

  const handleNext = () => {
    // Registra evento de avanço para próxima etapa
    enviarEvento('avancou_etapa', {
      numero_etapa: step,
      pergunta: currentStep?.question || `Etapa ${step}`,
      resposta_selecionada: selectedAnswer,
      funil: 'sobrancelhas'
    });

    // Guardar resposta
    const newQuizData = { ...quizData, [step]: selectedAnswer }
    setQuizData(newQuizData)
    localStorage.setItem("quizData", JSON.stringify(newQuizData))

    // Calcular perfil se estamos no último passo
    if (step === 12) {
      const answers = Object.values(newQuizData)
      const profile = calculateProfile(answers)
      setUserProfile(profile)
      localStorage.setItem("userProfile", profile)
      
      enviarEvento('perfil_calculado', {
        perfil: profile,
        funil: 'sobrancelhas'
      });
    }

    // Mostrar análise para certos passos (otimizado)
    if (currentStep?.elements?.analysisText || currentStep?.elements?.profileAnalysis) {
      setShowAnalysis(true)
      setTimeout(() => {
        setShowAnalysis(false)
        proceedToNextStep()
      }, 1500)
      return
    }

    proceedToNextStep()
  }

  const proceedToNextStep = () => {
    // Capturar UTMs da URL atual
    const currentUrl = new URL(window.location.href);
    let utmString = '';
    
    const utmParams = new URLSearchParams();
    for (const [key, value] of currentUrl.searchParams.entries()) {
      if (key.startsWith('utm_')) {
        utmParams.append(key, value);
      }
    }
    
    if (utmParams.toString() !== '') {
      utmString = '?' + utmParams.toString();
    }

    // Verificar desbloqueio de bonificação
    if (currentStep?.bonusUnlock && !unlockedBonuses.includes(currentStep.bonusUnlock.id)) {
      enviarEvento('desbloqueou_bonus', {
        numero_etapa: step,
        bonus_id: currentStep.bonusUnlock.id,
        bonus_titulo: currentStep.bonusUnlock.title,
        funil: 'sobrancelhas'
      });

      const newUnlockedBonuses = [...unlockedBonuses, currentStep.bonusUnlock.id]
      const newTotalValue = totalValue + currentStep.bonusUnlock.value

      setUnlockedBonuses(newUnlockedBonuses)
      setTotalValue(newTotalValue)

      const personalizedBonus = {
        ...currentStep.bonusUnlock,
        title: currentStep.bonusUnlock.title,
        description: currentStep.bonusUnlock.description,
      }
      setNewBonus(personalizedBonus)

      localStorage.setItem("unlockedBonuses", JSON.stringify(newUnlockedBonuses))
      localStorage.setItem("totalValue", newTotalValue.toString())

      setShowBonusUnlock(true)
      return
    }

    if (step < 12) {
      router.push(`/quiz/${step + 1}${utmString}`)
    } else {
      enviarEvento('concluiu_quiz', {
        total_etapas_completadas: 12,
        total_bonus_desbloqueados: unlockedBonuses.length,
        perfil_final: userProfile,
        funil: 'sobrancelhas'
      });
      
      router.push(`/resultado${utmString}`)
    }
  }

  const handleBonusUnlockComplete = () => {
    setShowBonusUnlock(false)
    
    const currentUrl = new URL(window.location.href);
    let utmString = '';
    
    const utmParams = new URLSearchParams();
    for (const [key, value] of currentUrl.searchParams.entries()) {
      if (key.startsWith('utm_')) {
        utmParams.append(key, value);
      }
    }
    
    if (utmParams.toString() !== '') {
      utmString = '?' + utmParams.toString();
    }
    
    if (step < 12) {
      router.push(`/quiz/${step + 1}${utmString}`)
    } else {
      router.push(`/resultado${utmString}`)
    }
  }

  const handleBack = () => {
    enviarEvento('retornou_etapa', {
      de_etapa: step,
      para_etapa: step > 1 ? step - 1 : 'inicio',
      funil: 'sobrancelhas'
    });
    
    const currentUrl = new URL(window.location.href);
    let utmString = '';
    
    const utmParams = new URLSearchParams();
    for (const [key, value] of currentUrl.searchParams.entries()) {
      if (key.startsWith('utm_')) {
        utmParams.append(key, value);
      }
    }
    
    if (utmString.toString() !== '') {
      utmString = '?' + utmParams.toString();
    }
    
    if (step > 1) {
      router.push(`/quiz/${step - 1}${utmString}`)
    } else {
      router.push(`/${utmString}`)
    }
  }

  // ✅ ÍCONES ADAPTADOS PARA SOBRANCELHAS
  const getStepIcon = (stepNumber: number, index: number) => {
    const iconMaps = {
      1: [Briefcase, Users, Scissors, Home], // Situação profissional
      2: [Calendar, TrendingUp, Target, Zap], // Idade
      3: [Clock, Calendar, Coffee, Heart], // Tempo disponível
      4: [Sparkles, Scissors, Users, Award], // Experiência com sobrancelhas
      5: [DollarSign, TrendingUp, Target, Crown], // Meta financeira
      6: [AlertTriangle, Heart, DollarSign, Users, Sparkles, Check], // Medos
      7: [Home, Users, Briefcase, Coffee, Crown, Target, Heart], // Local de atendimento
      8: [DollarSign, Gift, Target, Crown, AlertTriangle], // Investimento
      9: [Crown, Briefcase, Heart, Users, Home, DollarSign, Star, Check], // Motivação
    }

    const icons = iconMaps[stepNumber] || [Sparkles]
    const Icon = icons[index] || Sparkles
    return <Icon className="w-5 h-5" />
  }

  // Obter conteúdo personalizado
  const getPersonalizedQuestion = () => {
    return currentStep.question
  }

  const getPersonalizedOptions = () => {
    return Array.isArray(currentStep.options) ? currentStep.options : []
  }

  if (!currentStep) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white text-xl">Carregando...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black p-4">
      <div className="max-w-2xl mx-auto">
        {/* Cabeçalho com progresso - ADAPTADO PARA SOBRANCELHAS */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-3">
            <Button
              variant="ghost"
              onClick={handleBack}
              className="text-white hover:bg-white/10 border border-white/20 text-sm"
              disabled={currentStep?.autoAdvance}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar
            </Button>

            <div className="flex items-center gap-3">
              {totalValue > 0 && <ValueCounter value={totalValue} />}
              {currentStep?.elements?.timer && (
                <div className="flex items-center gap-2 text-white text-sm bg-white/10 px-3 py-1 rounded-full">
                  <Clock className="w-4 h-4" />
                  <span>{currentStep.elements.timer}</span>
                </div>
              )}
            </div>
          </div>

          <div className="bg-gray-700 rounded-full h-2 mb-2">
            <motion.div 
              className="bg-gradient-to-r from-pink-500 to-rose-600 h-full rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="flex justify-between items-center">
            <p className="text-white text-sm">
              Pergunta {step} de 12 • {Math.round(progress)}% completado
            </p>
            {currentStep?.elements?.profileComplete && (
              <p className="text-green-400 text-sm font-semibold">
                {currentStep.elements.profileComplete} completo
              </p>
            )}
          </div>
        </div>

        {/* ✅ DEPOIMENTOS ADAPTADOS PARA SOBRANCELHAS */}
        {currentStep?.elements?.testimonialDisplay && currentStep?.elements?.testimonialText && (
          <motion.div 
            initial={{ opacity: 0, y: 15 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.4 }}
            className="mb-6"
          >
            <div className="bg-gray-800 p-4 rounded-lg border border-gray-600">
              <div className="flex items-center gap-3">
                {currentStep.elements.testimonialImage ? (
                  <img
                    src={currentStep.elements.testimonialImage}
                    alt={currentStep.elements.testimonialName || "Cliente"}
                    className="w-12 h-12 rounded-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-600 rounded-full flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                )}

                <div className="flex-1">
                  {/* Estrelas */}
                  <div className="flex gap-1 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  <p className="text-white text-sm italic mb-1">
                    "{currentStep.elements.testimonialText}"
                  </p>

                  {currentStep.elements.testimonialName && (
                    <p className="text-gray-400 text-xs">
                      - {currentStep.elements.testimonialName}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* ✅ CARD DE PERGUNTA ADAPTADO */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 15 }}
          transition={{ duration: 0.4 }}
        >
          <Card className="bg-gray-900 border-gray-700 shadow-lg">
            <CardContent className="p-6">
              {/* Passo de avanço automático de especialista - ADAPTADO */}
              {currentStep?.autoAdvance && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center"
                >
                  {currentStep?.elements?.expertImage ? (
                    <img
                      src={currentStep.elements.expertImage}
                      alt="Especialista em Sobrancelhas"
                      className="w-20 h-20 rounded-full object-cover border-2 border-pink-500 mx-auto mb-4"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-rose-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Sparkles className="w-10 h-10 text-white" />
                    </div>
                  )}

                  <p className="text-pink-400 font-semibold mb-4">{currentStep.elements?.autoMessage}</p>

                  <div className="flex justify-center">
                    <div className="flex space-x-1">
                      {[...Array(3)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="w-2 h-2 bg-pink-500 rounded-full"
                          animate={{ opacity: [0.3, 1, 0.3] }}
                          transition={{
                            duration: 1.2,
                            repeat: Number.POSITIVE_INFINITY,
                            delay: i * 0.2,
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* ✅ RENDERIZAÇÃO ESPECIAL PARA FINAL REVEAL */}
              {currentStep?.elements?.finalReveal && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  className="text-center mb-6"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-rose-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-10 h-10 text-white" />
                  </div>

                  <div className="bg-green-900/30 border border-green-600 rounded-lg p-4 mb-4">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <Trophy className="w-5 h-5 text-green-400" />
                      <span className="text-xl font-bold text-green-400">
                        {currentStep.elements.profileComplete}
                      </span>
                    </div>
                    <p className="text-green-300">Análise Completa</p>
                  </div>

                  <div className="bg-pink-900/30 border border-pink-500 rounded-lg p-3">
                    <div className="flex items-center justify-center gap-2">
                      <Sparkles className="w-5 h-5 text-pink-400" />
                      <span className="text-pink-300 font-semibold">Perfil de Sobrancelhista Pronto</span>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Foto de especialista para o passo 11 - ADAPTADA */}
              {currentStep?.elements?.expertPhoto && !currentStep?.autoAdvance && (
                <div className="flex justify-center mb-4">
                  {currentStep?.elements?.expertImage ? (
                    <img
                      src={currentStep.elements.expertImage}
                      alt="Especialista em Sobrancelhas"
                      className="w-16 h-16 rounded-full object-cover border-2 border-pink-500"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-600 rounded-full flex items-center justify-center">
                      <Sparkles className="w-8 h-8 text-white" />
                    </div>
                  )}
                </div>
              )}

              {/* Cálculo de compatibilidade - ADAPTADO */}
              {currentStep?.elements?.compatibilityCalc && (
                <div className="mb-4">
                  <div className="bg-green-900/30 border border-green-500 rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold text-green-400">
                      {currentStep.elements.compatibilityCalc} de potencial de sucesso
                    </div>
                  </div>
                </div>
              )}

              {!currentStep?.autoAdvance && (
                <>
                  <h2 className="text-xl md:text-2xl font-bold text-white mb-4 text-center">
                    {getPersonalizedQuestion()}
                  </h2>

                  {currentStep.subtext && (
                    <p className="text-pink-200 text-center mb-4 font-medium">{currentStep.subtext}</p>
                  )}

                  {currentStep.description && (
                    <p className="text-gray-300 text-center mb-6">{currentStep.description}</p>
                  )}

                  {/* ✅ TERMÔMETRO ADAPTADO */}
                  {currentStep?.elements?.thermometer && (
                    <div className="mb-6">
                      <div className="flex justify-between text-gray-300 text-sm mb-2">
                        <span>Ainda pesquisando</span>
                        <span>Muito motivada</span>
                      </div>
                      <div className="bg-gray-700 rounded-full h-3">
                        <motion.div
                          className="bg-gradient-to-r from-pink-500 to-rose-600 h-full rounded-full"
                          initial={{ width: "0%" }}
                          animate={{ width: selectedAnswer ? "100%" : "0%" }}
                          transition={{ duration: 0.3 }}
                        />
                      </div>
                    </div>
                  )}

                  {/* ✅ OPÇÕES ADAPTADAS PARA SOBRANCELHAS */}
                  {getPersonalizedOptions().length > 0 && (
                    <div className="space-y-3">
                      {getPersonalizedOptions().map((option, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05, duration: 0.3 }}
                        >
                          <button
                            onClick={() => handleAnswerSelect(option)}
                            data-option={option}
                            className={`w-full p-4 text-left rounded-lg border transition-all duration-200 ${
                              selectedAnswer === option
                                ? "bg-gradient-to-r from-pink-600 to-rose-600 text-white border-pink-500"
                                : "bg-gray-800 text-white border-gray-600 hover:bg-gray-700 hover:border-pink-400"
                            }`}
                          >
                            <div className="flex items-center">
                              <div className={`mr-3 ${selectedAnswer === option ? "text-white" : "text-pink-400"}`}>
                                {getStepIcon(step, index)}
                              </div>

                              <div
                                className={`w-4 h-4 rounded-full border-2 mr-3 flex items-center justify-center ${
                                  selectedAnswer === option ? "border-white bg-white" : "border-gray-400"
                                }`}
                              >
                                {selectedAnswer === option && <Check className="w-2 h-2 text-pink-600" />}
                              </div>
                              <span className="font-medium">{option}</span>
                            </div>
                          </button>
                        </motion.div>
                      ))}
                    </div>
                  )}

                  {currentStep.note && (
                    <div className="mt-4 text-center text-amber-300 bg-amber-900/20 p-3 rounded-lg border border-amber-600">
                      <p className="text-sm">{currentStep.note}</p>
                    </div>
                  )}

                  {selectedAnswer && getPersonalizedOptions().length > 0 && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-6 text-center"
                    >
                      <Button
                        onClick={handleNext}
                        className="bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg"
                      >
                        {step === 12 ? "Ver Meu Perfil" : "Próxima Pergunta"}
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </motion.div>
                  )}
                </>
              )}
            </CardContent>
          </Card>
        </motion.div>

        {/* ✅ PROVA SOCIAL ADAPTADA PARA SOBRANCELHAS */}
        {step > 3 && !currentStep?.autoAdvance && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-center mt-4"
          >
                        {/* Apenas UM elemento de prova social por vez */}
            {step > 5 ? (
              <p className="text-gray-400 text-sm">
                �� {peopleCount} mulheres completaram hoje
              </p>
            ) : currentStep?.elements?.counter ? (
              <p className="text-gray-400 text-sm">
                👩‍💼 {peopleCount} {currentStep.elements.counter}
              </p>
            ) : null}
          </motion.div>
        )}

        {/* ✅ CONTADOR DE PESSOAS AJUDADAS - ADAPTADO */}
        {currentStep?.elements?.helpedCounter && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-center mt-4"
          >
            <div className="bg-pink-900/30 border border-pink-500 rounded-lg p-3 inline-block">
              <p className="text-pink-300 text-sm font-semibold">
                ✨ {currentStep.elements.helpedCounter}
              </p>
            </div>
          </motion.div>
        )}
      </div>

      {/* ✅ MODAIS MANTIDOS E ADAPTADOS */}
      <AnimatePresence>
        {showAnalysis && (
          <LoadingAnalysis
            message={
              currentStep?.elements?.analysisText ||
              currentStep?.elements?.profileAnalysis ||
              "Analisando suas respostas..."
            }
            successMessage={currentStep?.elements?.successRate}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showBonusUnlock && newBonus && <BonusUnlock bonus={newBonus} onComplete={handleBonusUnlockComplete} />}
      </AnimatePresence>

      {/* ✅ ESTILOS ADICIONAIS PARA SOBRANCELHAS */}
      <style jsx global>{`
        .scale-102 {
          transform: scale(1.02) !important;
          transition: transform 0.15s ease !important;
        }
        
        /* Gradientes específicos para sobrancelhas */
        .bg-sobrancelha-gradient {
          background: linear-gradient(135deg, #ec4899 0%, #f43f5e 100%) !important;
        }
        
        /* Animações específicas */
        @keyframes sparkle {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.1); }
        }
        
        .sparkle-animation {
          animation: sparkle 2s ease-in-out infinite;
        }
        
        /* Hover effects para botões de sobrancelhas */
        .sobrancelha-button:hover {
          background: linear-gradient(135deg, #f43f5e 0%, #e11d48 100%) !important;
          box-shadow: 0 8px 25px rgba(244, 63, 94, 0.3) !important;
          transform: translateY(-2px) !important;
        }
        
        /* Efeitos de borda para cards */
        .sobrancelha-card {
          border: 1px solid rgba(244, 63, 94, 0.3) !important;
          box-shadow: 0 4px 15px rgba(244, 63, 94, 0.1) !important;
        }
        
        .sobrancelha-card:hover {
          border-color: rgba(244, 63, 94, 0.6) !important;
          box-shadow: 0 8px 25px rgba(244, 63, 94, 0.2) !important;
        }
        
        /* Responsividade específica */
        @media (max-width: 768px) {
          .sobrancelha-text {
            font-size: 0.875rem !important;
            line-height: 1.25rem !important;
          }
          
          .sobrancelha-title {
            font-size: 1.25rem !important;
            line-height: 1.75rem !important;
          }
        }
        
        @media (max-width: 480px) {
          .sobrancelha-text {
            font-size: 0.75rem !important;
            line-height: 1rem !important;
          }
          
          .sobrancelha-title {
            font-size: 1.125rem !important;
            line-height: 1.5rem !important;
          }
        }
      `}</style>
    </div>
  )
}