export const quizSteps = [
  {
    id: 1,
    question: "Quer descobrir seu verdadeiro potencial de faturamento com sobrancelhas?",
    description: "Avaliação personalizada de 2 minutos para conhecer seu perfil de sobrancelhista",
    subtext: "Primeiro, qual sua situação profissional atual?",
    options: [
      "Trabalho CLT e quero uma renda extra", 
      "Desempregada buscando nova profissão",
      "Já trabalho com estética mas quero me especializar",
      "Dona de casa querendo independência financeira"
    ],
    note: "Mais de 127.000 mulheres já descobriram seu potencial",
    elements: {
      heartbeat: true,
      timer: "Avaliação de 2 minutos",
    },
  },
  {
    id: 2,
    question: "QUAL SUA EXPERIÊNCIA COM SOBRANCELHAS?",
    description: "(Esta informação é crucial para personalizar seu plano de capacitação)",
    options: [
      "18-25 anos - Iniciando na vida profissional",
      "26-35 anos - Buscando estabilidade financeira", 
      "36-45 anos - Querendo mudar de carreira",
      "45+ anos - Buscando independência e realização"
    ],
    elements: {
      ageIcons: true,
      counter: "mulheres que já fizeram o teste hoje",
    },
  },
  {
    id: 3,
    question: "QUANTO TEMPO VOCÊ TEM DISPONÍVEL POR DIA?",
    description: "(O tempo disponível determina seu potencial de faturamento)",
    options: [
      "1-2 horas (tenho pouco tempo)",
      "3-4 horas (tempo moderado)", 
      "5-6 horas (bastante tempo)",
      "Tempo integral (quero viver disso)"
    ],
    bonusUnlock: {
      id: 1,
      title: "Kit Iniciante Completo",
      value: 197,
      description: "Incluído na sua avaliação personalizada",
    },
  },
  {
    id: 4,
    question: "QUAL SUA EXPERIÊNCIA ATUAL COM SOBRANCELHAS?",
    description: "(Seu nível atual define sua estratégia de crescimento)",
    options: [
      "Zero - nunca fiz nem nas minhas",
      "Só faço as minhas mesmo", 
      "Já fiz em algumas amigas",
      "Tenho experiência básica com clientes"
    ],
    elements: {
      analysisText: "Calculando seu potencial de faturamento...",
      successRate: "Seu perfil mostra grande potencial de sucesso",
    },
  },
  {
    id: 5,
    question: "QUAL SUA META DE FATURAMENTO MENSAL?",
    description: "(Seu objetivo financeiro define nossa estratégia)",
    options: [
      "R\$ 1.000 - R\$ 3.000 (renda extra)", 
      "R\$ 3.000 - R\$ 6.000 (complementar renda)",
      "R\$ 6.000 - R\$ 10.000 (renda principal)", 
      "R\$ 10.000+ (quero ser referência)"
    ],
  },
  {
    id: 6,
    question: "QUAL SEU MAIOR MEDO EM RELAÇÃO A TRABALHAR COM SOBRANCELHAS?",
    description: "(Identificar suas objeções é essencial para seu plano de sucesso)",
    options: [
      "😰 Não conseguir clientes",
      "😱 Fazer algo errado e estragar",
      "💰 Não saber como precificar", 
      "😤 Concorrência muito forte",
      "🤔 Não ter conhecimento técnico suficiente",
      "✓ Outro"
    ],
    elements: {
      profileAnalysis: "Personalizando sua estratégia ideal...",
      profileComplete: "46%",
    },
  },
  {
    id: 7,
    question: "ONDE VOCÊ PRETENDE ATENDER?",
    description: "(Seu local de trabalho influencia sua estratégia de marketing)",
    options: [
      "🏠 Na minha casa",
      "🚗 Na casa das clientes", 
      "�� Alugar um espaço próprio",
      "🏪 Trabalhar em salão parceiro",
      "🚀 Montar meu próprio salão",
      "🤔 Ainda não sei",
      "✓ Outro local"
    ],
    elements: {
      profileComplete: "62%",
      testimonialDisplay: true,
      testimonialName: "Maria C.",
      testimonialText: "Em 3 meses já estava faturando R\$ 4.000/mês trabalhando de casa",
      testimonialImage: "https://amandateixeiraoficial.com.br/wp-content/uploads/2025/09/Generated-Image-September-17-2025-5_31PM.jpeg",
    },
  },
  {
    id: 8,
    question: "QUANTO VOCÊ PODE INVESTIR HOJE NA SUA NOVA PROFISSÃO?",
    description: "(Sua capacidade de investimento determina qual método é ideal para você)",
    options: [
      "💰 Até R\$ 100 (investimento mínimo)",
      "💰 R\$ 100 - R\$ 300 (investimento moderado)",
      "💰 R\$ 300 - R\$ 500 (investimento sério)", 
      "💎 R\$ 500+ (investimento premium)",
      "🤔 Preciso saber mais antes de investir"
    ],
    bonusUnlock: {
      id: 2,
      title: "Agenda Otimizada Premium",
      value: 147,
      description: "Incluído na sua estratégia personalizada",
    },
    elements: {
      profileComplete: "77%",
      testimonialDisplay: true,
      testimonialName: "Ana S.",
      testimonialText: "Estava perdida sem rumo. O método me deu direção e confiança. Hoje faturo mais que no meu emprego anterior",
      testimonialImage: "https://amandateixeiraoficial.com.br/wp-content/uploads/2025/09/Generated-Image-September-17-2025-5_34PM.jpeg",
    },
  },
  {
    id: 9,
    question: "O QUE MAIS TE MOTIVA A COMEÇAR?",
    description: "(Sua motivação principal define seu perfil empreendedor)",
    subtext: "Sua motivação nos ajuda a personalizar melhor sua estratégia",
    options: [
      "💪 Independência financeira total", 
      "🚀 Sair do emprego atual", 
      "💄 Ajudar mulheres a se sentirem bonitas", 
      "👑 Ter meu próprio negócio",
      "🏠 Trabalhar de casa com flexibilidade",
      "💰 Ganhar mais dinheiro",
      "🌟 Ser reconhecida como especialista",
      "✓ Outro motivo"
    ],
    note: "Trabalho com mulheres decididas a transformar sua situação financeira. O método foi desenvolvido para quem está preparada para agir.",
    elements: {
      thermometer: true,
      profileComplete: "85%",
    },
  },
  {
    id: 10,
    question: "ESPECIALISTA ANALISANDO SEU PERFIL...",
    description: "Aguarde enquanto analiso suas respostas para criar sua estratégia personalizada de sobrancelhas.",
    options: [],
    autoAdvance: true,
    elements: {
      expertPhoto: true,
      expertImage: "https://comprarplanseguro.shop/wp-content/uploads/2025/09/Generated-Image-September-07_-2025-12_00AM-_1_-e1757389439336.webp",
      autoMessage: "Baseando-me em 7 anos de experiência ajudando mulheres como você...",
      profileComplete: "90%",
    },
  },
  {
    id: 11,
    question: "Perfeito. Analisei suas respostas e você tem TUDO para ser uma sobrancelhista de sucesso.",
    description: "Baseando-me no seu perfil específico, você pode faturar entre R\$ 3.000 - R\$ 8.000/mês nos próximos 90 dias.",
    options: ["QUERO VER MEU PERFIL"],
    note: "Estou aqui para te guiar pessoalmente nesta jornada empreendedora. Nos últimos 7 anos, ajudei mais de 3.847 mulheres a construir seus negócios de sobrancelhas usando este método exclusivo.",
    elements: {
      expertPhoto: true,
      expertImage: "https://comprarplanseguro.shop/wp-content/uploads/2025/09/Generated-Image-September-07_-2025-12_00AM-_1_-e1757389439336.webp",
      profileComplete: "95%",
      helpedCounter: "Mulheres ajudadas hoje: 17",
      compatibilityCalc: "92,8%",
    },
  },
  {
    id: 12,
    question: "SEU PERFIL DE SOBRANCELHISTA ESTÁ PRONTO",
    description: "Baseado nas suas respostas, identifiquei seu perfil exato e a estratégia ideal para seu sucesso.",
    options: ["QUERO VER MEU PERFIL AGORA"],
    note: "Prepare-se para descobrir seu potencial real de faturamento.",
    elements: {
      finalReveal: true,
      profileComplete: "100%",
    },
  }
]

export const bonuses = [
  {
    id: 1,
    title: "Kit Iniciante Completo",
    value: 197,
    description: "Tudo que você precisa para começar: ferramentas, produtos e técnicas.",
    details: ["✓ Lista de Materiais Essenciais", "✓ Fornecedores Confiáveis", "✓ Técnicas Básicas Fundamentais"],
  },
  {
    id: 2,
    title: "Agenda Otimizada Premium",
    value: 147,
    description: "Como organizar seu tempo para maximizar ganhos trabalhando poucas horas.",
    details: ["✓ Planejamento Semanal Estratégico", "✓ Gestão Inteligente de Clientes", "✓ Otimização de Horários"],
  },
]

export const testimonials = [
  {
    name: "Maria C., 29 anos",
    text: "Em 3 meses já estava faturando R\$ 4.000/mês trabalhando de casa",
    rating: 5,
  },
  {
    name: "Ana S., 35 anos", 
    text: "Estava perdida sem rumo. O método me deu direção e confiança. Hoje faturo mais que no meu emprego anterior",
    rating: 5,
  },
  {
    name: "Carmen L., 28 anos",
    text: "Em apenas 2 semanas seguindo o método, consegui minhas primeiras 5 clientes. As técnicas funcionaram perfeitamente",
    rating: 5,
  },
  {
    name: "Isabel R., 41 anos",
    text: "Depois de anos como dona de casa, pensei que não tinha mais chance. No dia 15 já tinha agenda lotada",
    rating: 5,
  },
  {
    name: "Fernanda M., 26 anos",
    text: "Saí do zero total para R\$ 6.000/mês em 4 meses. Hoje sou referência na minha cidade",
    rating: 5,
  },
  {
    name: "Juliana P., 33 anos",
    text: "Consegui sair do CLT e hoje ganho 3x mais trabalhando com sobrancelhas. Melhor decisão da minha vida",
    rating: 5,
  },
]

export const socialProofMessages = [
  "Você está entre as 17% mais decididas a empreender",
  "Seu perfil mostra potencial de faturamento alto", 
  "Bonificação incluída na sua avaliação",
  "Você desbloqueou os 2 bônus - valor total de R\$ 344",
  "87% das mulheres na sua situação conseguiram resultados em menos de 30 dias",
  "Você está mais comprometida que 73% das pessoas que fizeram este teste",
  "Seu caso tem características muito promissoras para sobrancelhas",
  "Avaliação personalizada sendo finalizada",
  "Estratégia adaptada à sua situação específica", 
  "Plano de ação personalizado sendo gerado",
  "Seu potencial de faturamento está sendo calculado",
  "Perfil de sobrancelhista sendo definido",
  "Método ideal para seu perfil sendo selecionado",
  "Oferta personalizada sendo preparada",
  "Estratégia de crescimento sendo customizada"
]

// Função utilitária para personalizar textos baseados no perfil
export function getPersonalizedContent(content, userProfile) {
  if (typeof content === "string") {
    return content
  }

  if (typeof content === "object" && content !== null) {
    if (content.iniciante && content.avancada) {
      return userProfile === "INICIANTE" ? content.iniciante : content.avancada
    }
    return content
  }

  return content
}

// Sistema de pontuação para definir perfis
export function calculateProfile(answers) {
  let score = 0
  let experience = 0
  let timeAvailable = 0
  let investment = 0
  let motivation = 0

  // Análise das respostas para definir perfil
  answers.forEach((answer, index) => {
    switch(index) {
      case 0: // Situação atual
        if (answer.includes("CLT")) score += 1
        if (answer.includes("Desempregada")) score += 3
        if (answer.includes("estética")) score += 2
        if (answer.includes("casa")) score += 1
        break
      
      case 2: // Tempo disponível
        if (answer.includes("1-2")) timeAvailable = 1
        if (answer.includes("3-4")) timeAvailable = 2
        if (answer.includes("5-6")) timeAvailable = 3
        if (answer.includes("integral")) timeAvailable = 4
        break
      
      case 3: // Experiência
        if (answer.includes("Zero")) experience = 1
        if (answer.includes("minhas")) experience = 2
        if (answer.includes("amigas")) experience = 3
        if (answer.includes("básica")) experience = 4
        break
      
      case 4: // Meta financeira
        if (answer.includes("1.000")) score += 1
        if (answer.includes("3.000")) score += 2
        if (answer.includes("6.000")) score += 3
        if (answer.includes("10.000")) score += 4
        break
      
      case 7: // Investimento
        if (answer.includes("100")) investment = 1
        if (answer.includes("300")) investment = 2
        if (answer.includes("500")) investment = 3
        if (answer.includes("500+")) investment = 4
        break
      
      case 8: // Motivação
        if (answer.includes("Independência")) motivation = 4
        if (answer.includes("Sair")) motivation = 3
        if (answer.includes("bonitas")) motivation = 2
        if (answer.includes("negócio")) motivation = 4
        break
    }
  })

  // Definir perfil baseado na pontuação
  const totalScore = score + timeAvailable + experience + investment + motivation

  if (totalScore >= 16 && timeAvailable >= 3 && investment >= 3) {
    return "EMPREENDEDORA_NATA"
  } else if (totalScore >= 12 && experience <= 2 && motivation >= 3) {
    return "INICIANTE_DETERMINADA"  
  } else if (totalScore >= 8 && timeAvailable <= 2) {
    return "RENDA_EXTRA_INTELIGENTE"
  } else {
    return "PESQUISADORA_CAUTELOSA"
  }
}

// Perfis de resultado
export const profiles = {
  INICIANTE_DETERMINADA: {
    title: "INICIANTE DETERMINADA",
    subtitle: "Potencial de Faturamento: R\$ 3.000 - R\$ 6.000/mês",
    description: "Você tem TUDO para ser uma sobrancelhista de sucesso!",
    characteristics: [
      "✅ Seu perfil mostra determinação e foco",
      "✅ Com o método certo, pode faturar R\$ 6.000/mês em 90 dias",
      "✅ Tem perfil ideal para crescimento rápido"
    ],
    challenge: "Falta de conhecimento técnico",
    solution: "MÉTODO SOBRANCELHA ZERO AO SUCESSO",
    offer: {
      price: 97,
      originalPrice: 397,
      bonus: "Kit Iniciante Completo"
    }
  },
  
  EMPREENDEDORA_NATA: {
    title: "EMPREENDEDORA NATA", 
    subtitle: "Potencial de Faturamento: R\$ 8.000 - R\$ 15.000/mês",
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
      bonus: "Mentoria Grupo VIP"
    }
  },
  
  RENDA_EXTRA_INTELIGENTE: {
    title: "RENDA EXTRA INTELIGENTE",
    subtitle: "Potencial de Faturamento: R\$ 2.000 - R\$ 4.000/mês", 
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
      bonus: "Agenda Otimizada"
    }
  },
  
  PESQUISADORA_CAUTELOSA: {
    title: "PESQUISADORA CAUTELOSA",
    subtitle: "Potencial de Faturamento: R\$ 1.000 - R\$ 3.000/mês",
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
      bonus: "Teste por 7 dias + Garantia estendida"
    }
  }
}