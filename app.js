// ========================================
// APP.JS - SISTEMA PRINCIPAL
// Propriedades Periódicas Interativas
// ========================================

// Estado Global da Aplicação
const appState = {
    currentProperty: null,
    currentChallenge: null,
    currentQuestion: 0,
    lives: 3,
    score: 0,
    progress: {
        raioAtomico: { stars: 0, points: 0, completed: [] },
        eletronegatividade: { stars: 0, points: 0, completed: [] },
        energiaIonizacao: { stars: 0, points: 0, completed: [] },
        afinidadeEletronica: { stars: 0, points: 0, completed: [] },
        caracterMetalico: { stars: 0, points: 0, completed: [] },
        reatividade: { stars: 0, points: 0, completed: [] },
        densidade: { stars: 0, points: 0, completed: [] }
    },
    totalPoints: 0,
    totalStars: 0
};

// ========================================
// INICIALIZAÇÃO
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 Sistema iniciando...');
    loadProgress();
    initPropertyCards();
    initEventListeners();
    updateStatsDisplay();
    console.log('✅ Sistema pronto!');
});

// ========================================
// GERENCIAMENTO DE PROGRESSO
// ========================================

function loadProgress() {
    const saved = localStorage.getItem('propriedadesProgress');
    if (saved) {
        try {
            const data = JSON.parse(saved);
            Object.assign(appState, data);
            console.log('📊 Progresso carregado:', appState);
        } catch (e) {
            console.error('❌ Erro ao carregar progresso:', e);
        }
    }
}

function saveProgress() {
    try {
        localStorage.setItem('propriedadesProgress', JSON.stringify(appState));
        console.log('💾 Progresso salvo!');
    } catch (e) {
        console.error('❌ Erro ao salvar progresso:', e);
    }
}

function updateStatsDisplay() {
    // Stats globais
    const totalPointsEl = document.getElementById('totalPoints');
    const totalStarsEl = document.getElementById('totalStars');
    const totalChallengesEl = document.getElementById('totalChallenges');
    
    if (totalPointsEl) totalPointsEl.textContent = appState.totalPoints;
    if (totalStarsEl) totalStarsEl.textContent = `${appState.totalStars}/35`;
    if (totalChallengesEl) totalChallengesEl.textContent = `${getTotalCompleted()}/35`;
    
    // Atualizar cards de propriedades
    updatePropertyCardsProgress();
}

function getTotalCompleted() {
    let total = 0;
    Object.values(appState.progress).forEach(prop => {
        total += prop.completed.length;
    });
    return total;
}

function updatePropertyCardsProgress() {
    Object.keys(appState.progress).forEach(propName => {
        const card = document.querySelector(`[data-property="${propName}"]`);
        if (!card) return;
        
        const progress = appState.progress[propName];
        const starsEl = card.querySelector('.progress-stars');
        const fillEl = card.querySelector('.progress-fill-mini');
        
        if (starsEl) starsEl.textContent = `⭐ ${progress.stars}/5`;
        if (fillEl) fillEl.style.width = `${(progress.stars / 5) * 100}%`;
    });
}

// ========================================
// NAVEGAÇÃO ENTRE TELAS
// ========================================

function showScreen(screenId) {
    console.log('📺 Mudando para tela:', screenId);
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    
    const targetScreen = document.getElementById(screenId);
    if (targetScreen) {
        targetScreen.classList.add('active');
    } else {
        console.error('❌ Tela não encontrada:', screenId);
    }
}

// ========================================
// INICIALIZAÇÃO DOS CARDS DE PROPRIEDADES
// ========================================

function initPropertyCards() {
    const cards = document.querySelectorAll('.property-card');
    console.log(`🎴 Inicializando ${cards.length} cards de propriedades`);
    
    if (cards.length === 0) {
        console.error('❌ NENHUM CARD ENCONTRADO! Verifique se o HTML tem elements com classe .property-card');
        return;
    }
    
    cards.forEach((card, index) => {
        const propName = card.dataset.property;
        console.log(`  Card ${index + 1}: ${propName}`);
        
        if (!propName) {
            console.error('❌ Card sem data-property:', card);
            return;
        }
        
        const btn = card.querySelector('.btn-property');
        
        if (btn) {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                console.log(`🔬 BOTÃO CLICADO! Explorando propriedade: ${propName}`);
                exploreProperty(propName);
            });
        } else {
            console.warn('⚠️ Botão não encontrado no card:', propName);
        }
        
        // Também permite clicar no card inteiro
        card.addEventListener('click', () => {
            console.log(`🔬 CARD CLICADO! Explorando propriedade: ${propName}`);
            exploreProperty(propName);
        });
    });
    
    console.log('✅ Todos os cards inicializados!');
}

// ========================================
// EXPLORAÇÃO DE PROPRIEDADE
// ========================================

function exploreProperty(propName) {
    console.log('🎯 === EXPLORANDO PROPRIEDADE ===');
    console.log('Nome da propriedade:', propName);
    console.log('propriedadesInfo existe?', typeof propriedadesInfo !== 'undefined');
    console.log('propriedadesInfo[propName] existe?', propriedadesInfo ? propriedadesInfo[propName] : 'propriedadesInfo não definido');
    
    if (!propriedadesInfo) {
        console.error('❌ ERRO CRÍTICO: propriedadesInfo não está definido!');
        console.error('Verifique se propriedades-data.js foi carregado corretamente');
        alert('Erro: Dados não carregados. Verifique o console (F12)');
        return;
    }
    
    if (!propriedadesInfo[propName]) {
        console.error('❌ Propriedade não encontrada:', propName);
        console.error('Propriedades disponíveis:', Object.keys(propriedadesInfo));
        alert(`Erro: Propriedade "${propName}" não encontrada!`);
        return;
    }
    
    appState.currentProperty = propName;
    const info = propriedadesInfo[propName];
    
    console.log('✅ Info da propriedade:', info.title);
    
    // Atualizar header
    const titleEl = document.getElementById('propertyTitle');
    const descEl = document.getElementById('propertyDescription');
    const pointsEl = document.getElementById('propertyPoints');
    const starsEl = document.getElementById('propertyStars');
    
    console.log('Elementos do DOM:');
    console.log('  propertyTitle:', titleEl ? 'OK' : 'NÃO ENCONTRADO');
    console.log('  propertyDescription:', descEl ? 'OK' : 'NÃO ENCONTRADO');
    console.log('  propertyPoints:', pointsEl ? 'OK' : 'NÃO ENCONTRADO');
    console.log('  propertyStars:', starsEl ? 'OK' : 'NÃO ENCONTRADO');
    
    if (titleEl) titleEl.textContent = `${info.icon} ${info.title}`;
    if (descEl) descEl.textContent = info.description;
    
    const progress = appState.progress[propName];
    if (pointsEl) pointsEl.textContent = progress.points;
    if (starsEl) starsEl.textContent = `${progress.stars}/5`;
    
    console.log('📊 Criando mapa de calor...');
    // Criar mapa de calor
    createHeatmap(propName);
    
    console.log('🎮 Criando lista de desafios...');
    // Criar lista de desafios
    createChallengesList(propName);
    
    console.log('📺 Mostrando tela de exploração...');
    // Mostrar tela de exploração
    showScreen('exploreScreen');
    
    console.log('✅ === EXPLORAÇÃO COMPLETA ===');
}

// ========================================
// CRIAÇÃO DO MAPA DE CALOR
// ========================================

function createHeatmap(propName) {
    const heatmapDiv = document.getElementById('heatmapTable');
    if (!heatmapDiv) {
        console.error('❌ Elemento heatmapTable não encontrado');
        return;
    }
    
    heatmapDiv.innerHTML = '';
    
    const data = propriedadesData[propName];
    if (!data) {
        console.error('❌ Dados não encontrados para:', propName);
        return;
    }
    
    // Calcular min/max para normalização
    // Filtrar valores válidos (números diferentes de 0 e não-nulos)
    const values = Object.values(data).filter(v => typeof v === 'number' && !isNaN(v));
    
    if (values.length === 0) {
        console.error('❌ Nenhum valor válido encontrado para:', propName);
        heatmapDiv.innerHTML = '<p style="text-align:center; padding:20px;">Sem dados disponíveis</p>';
        return;
    }
    
    const min = Math.min(...values);
    const max = Math.max(...values);
    
    console.log(`📊 Criando mapa de calor: min=${min}, max=${max}`);
    
    // Estrutura simplificada da tabela periódica
    // 18 grupos x 7 períodos = 126 células
    const layout = [
        // Período 1
        ['H', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 'He'],
        // Período 2
        ['Li', 'Be', null, null, null, null, null, null, null, null, null, null, 'B', 'C', 'N', 'O', 'F', 'Ne'],
        // Período 3
        ['Na', 'Mg', null, null, null, null, null, null, null, null, null, null, 'Al', 'Si', 'P', 'S', 'Cl', 'Ar'],
        // Período 4
        ['K', 'Ca', 'Sc', 'Ti', 'V', 'Cr', 'Mn', 'Fe', 'Co', 'Ni', 'Cu', 'Zn', 'Ga', 'Ge', 'As', 'Se', 'Br', 'Kr'],
        // Período 5
        ['Rb', 'Sr', 'Y', 'Zr', 'Nb', 'Mo', 'Tc', 'Ru', 'Rh', 'Pd', 'Ag', 'Cd', 'In', 'Sn', 'Sb', 'Te', 'I', 'Xe'],
        // Período 6
        ['Cs', 'Ba', 'La', 'Hf', 'Ta', 'W', 'Re', 'Os', 'Ir', 'Pt', 'Au', 'Hg', 'Tl', 'Pb', 'Bi', 'Po', 'At', 'Rn'],
        // Período 7
        ['Fr', 'Ra', 'Ac', 'Rf', 'Db', 'Sg', 'Bh', 'Hs', 'Mt', 'Ds', 'Rg', 'Cn', 'Nh', 'Fl', 'Mc', 'Lv', 'Ts', 'Og']
    ];
    
    layout.forEach(period => {
        period.forEach(symbol => {
            const cell = document.createElement('div');
            cell.className = 'heatmap-cell';
            
            if (symbol && data[symbol] !== undefined) {
                const value = data[symbol];
                
                // Normalizar o valor (0 a 1)
                let normalized;
                if (min === max) {
                    normalized = 0.5; // Todos iguais = meio termo
                } else {
                    normalized = (value - min) / (max - min);
                }
                
                // Definir cor baseada no valor normalizado
                const color = getHeatColor(normalized);
                cell.style.background = color;
                
                // Conteúdo da célula
                const unit = propriedadesInfo[propName].unidade || '';
                cell.innerHTML = `
                    <div class="symbol">${symbol}</div>
                    <div class="value">${formatValue(value)}${unit}</div>
                `;
                
                // Adicionar tooltip
                cell.title = `${symbol}: ${value}${unit}`;
                
                // Click para ver detalhes
                cell.addEventListener('click', () => {
                    showElementInfo(symbol, propName);
                });
                
            } else {
                cell.classList.add('empty');
            }
            
            heatmapDiv.appendChild(cell);
        });
    });
    
    console.log('✅ Mapa de calor criado!');
}

function formatValue(value) {
    if (value < 0.01) {
        return value.toExponential(1);
    } else if (value < 1) {
        return value.toFixed(3);
    } else if (value < 10) {
        return value.toFixed(1);
    } else {
        return Math.round(value);
    }
}

function getHeatColor(normalized) {
    // Gradiente: Azul (baixo) -> Amarelo (médio) -> Vermelho (alto)
    if (normalized < 0.5) {
        // Azul -> Amarelo
        const t = normalized * 2;
        const r = Math.floor(68 + (255 - 68) * t);
        const g = Math.floor(68 + (170 - 68) * t);
        const b = Math.floor(255 - 255 * t);
        return `rgb(${r}, ${g}, ${b})`;
    } else {
        // Amarelo -> Vermelho
        const t = (normalized - 0.5) * 2;
        const r = 255;
        const g = Math.floor(170 - (170 - 68) * t);
        const b = Math.floor(68 * (1 - t));
        return `rgb(${r}, ${g}, ${b})`;
    }
}

// ========================================
// MODAL DE INFORMAÇÕES DO ELEMENTO
// ========================================

function showElementInfo(symbol, propName) {
    const modal = document.getElementById('elementModal');
    const infoDiv = document.getElementById('elementInfo');
    
    if (!modal || !infoDiv) return;
    
    // Buscar informações básicas (simplificado)
    const basicInfo = { symbol, name: symbol, number: 0 };
    
    const value = propriedadesData[propName][symbol];
    const unit = propriedadesInfo[propName].unidade || '';
    const info = propriedadesInfo[propName];
    
    infoDiv.innerHTML = `
        <div style="text-align: center;">
            <h2 style="color: var(--primary-color); margin-bottom: 20px;">
                ${basicInfo.name} (${symbol})
            </h2>
            
            <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                        color: white; padding: 30px; border-radius: 15px; margin: 20px 0;">
                <div style="font-size: 1rem; opacity: 0.9; margin-bottom: 10px;">
                    ${info.title}
                </div>
                <div style="font-size: 3rem; font-weight: bold;">
                    ${value}${unit ? ' ' + unit : ''}
                </div>
            </div>
            
            <div style="background: #f5f5f5; padding: 20px; border-radius: 10px; margin-top: 20px;">
                <h3 style="color: var(--primary-color); margin-bottom: 10px;">
                    ${info.icon} Sobre ${info.title}
                </h3>
                <p style="line-height: 1.6; color: #555;">
                    ${info.explicacao}
                </p>
                
                <div style="margin-top: 15px; padding-top: 15px; border-top: 2px solid #ddd;">
                    <p><strong>Tendência no grupo:</strong> ${info.tendenciaGrupo}</p>
                    <p><strong>Tendência no período:</strong> ${info.tendenciaPeriodo}</p>
                </div>
            </div>
        </div>
    `;
    
    modal.classList.add('show');
}

// ========================================
// LISTA DE DESAFIOS
// ========================================

function createChallengesList(propName) {
    const grid = document.getElementById('challengesGrid');
    if (!grid) return;
    
    grid.innerHTML = '';
    
    const difficulties = [
        { level: 1, name: 'Fácil', class: 'facil', reward: 100 },
        { level: 2, name: 'Médio', class: 'medio', reward: 150 },
        { level: 3, name: 'Difícil', class: 'dificil', reward: 200 },
        { level: 4, name: 'Expert', class: 'dificil', reward: 250 },
        { level: 5, name: 'Mestre', class: 'dificil', reward: 300 }
    ];
    
    const progress = appState.progress[propName];
    
    difficulties.forEach(diff => {
        const card = document.createElement('div');
        card.className = 'challenge-card';
        
        const isCompleted = progress.completed.includes(diff.level);
        if (isCompleted) {
            card.classList.add('completed');
        }
        
        card.innerHTML = `
            <div class="challenge-number">${diff.level}</div>
            <h4>Desafio ${diff.level}</h4>
            <p>Teste seus conhecimentos sobre ${propriedadesInfo[propName].title}</p>
            <span class="challenge-difficulty difficulty-${diff.class}">${diff.name}</span>
            <div class="challenge-reward">
                ${isCompleted ? '✅ Completo!' : `⭐ 1 Estrela | 🏆 ${diff.reward} pontos`}
            </div>
        `;
        
        card.addEventListener('click', () => {
            startChallenge(propName, diff.level);
        });
        
        grid.appendChild(card);
    });
}

// ========================================
// INICIAR DESAFIO
// ========================================

function startChallenge(propName, level) {
    console.log(`🎮 Iniciando desafio: ${propName} - Nível ${level}`);
    
    appState.currentChallenge = { 
        property: propName, 
        level,
        correctAnswers: 0,
        totalQuestions: 5
    };
    appState.lives = 3;
    appState.score = 0;
    appState.currentQuestion = 0;
    
    // Atualizar header do desafio
    const titleEl = document.getElementById('challengeTitle');
    if (titleEl) {
        titleEl.textContent = `${propriedadesInfo[propName].title} - Nível ${level}`;
    }
    
    updateChallengeStats();
    
    // Criar primeira questão
    createComparisonQuestion();
    
    // Mostrar tela de desafio
    showScreen('challengeScreen');
}

function updateChallengeStats() {
    const livesEl = document.getElementById('lives');
    const scoreEl = document.getElementById('challengeScore');
    const timerEl = document.getElementById('challengeTimer');
    
    if (livesEl) livesEl.textContent = appState.lives;
    if (scoreEl) scoreEl.textContent = appState.score;
    // Timer pode ser implementado depois
}

// ========================================
// CRIAR QUESTÃO DE COMPARAÇÃO
// ========================================

function createComparisonQuestion() {
    const content = document.getElementById('challengeContent');
    if (!content) return;
    
    const propName = appState.currentChallenge.property;
    const data = propriedadesData[propName];
    const info = propriedadesInfo[propName];
    
    // Pegar 2 elementos aleatórios diferentes
    const symbols = Object.keys(data).filter(s => data[s] !== undefined && data[s] !== null);
    const elem1 = symbols[Math.floor(Math.random() * symbols.length)];
    let elem2 = symbols[Math.floor(Math.random() * symbols.length)];
    
    // Garantir que são diferentes e têm valores diferentes
    let attempts = 0;
    while ((elem2 === elem1 || data[elem1] === data[elem2]) && attempts < 20) {
        elem2 = symbols[Math.floor(Math.random() * symbols.length)];
        attempts++;
    }
    
    // Pergunta especial para afinidade eletrônica
    let questionText = `Qual elemento tem MAIOR ${info.title}?`;
    let hint = '';
    
    if (propName === 'afinidadeEletronica') {
        questionText = `Qual elemento tem MAIOR Afinidade Eletrônica?`;
        hint = '<p style="color: #666; font-size: 0.9rem; margin-top: 10px;">💡 Dica: Valores mais NEGATIVOS = MAIOR afinidade!</p>';
    }
    
    content.innerHTML = `
        <div class="comparison-challenge">
            <h3 class="comparison-question">
                ${questionText}
            </h3>
            ${hint}
            <p style="text-align: center; color: #666; margin-bottom: 30px;">
                Questão ${appState.currentQuestion + 1} de ${appState.currentChallenge.totalQuestions}
            </p>
            <div class="comparison-elements">
                <div class="element-option" data-symbol="${elem1}">
                    <div class="symbol">${elem1}</div>
                    <div class="name">${elem1}</div>
                </div>
                <div class="element-option" data-symbol="${elem2}">
                    <div class="symbol">${elem2}</div>
                    <div class="name">${elem2}</div>
                </div>
            </div>
            <button class="btn-submit" id="btnSubmitAnswer" disabled>
                Confirmar Resposta
            </button>
        </div>
    `;
    
    // Limpar feedback anterior
    const feedbackDiv = document.getElementById('challengeFeedback');
    if (feedbackDiv) {
        feedbackDiv.classList.remove('show');
    }
    
    // Event listeners
    let selected = null;
    document.querySelectorAll('.element-option').forEach(option => {
        option.addEventListener('click', () => {
            document.querySelectorAll('.element-option').forEach(o => 
                o.classList.remove('selected')
            );
            option.classList.add('selected');
            selected = option.dataset.symbol;
            document.getElementById('btnSubmitAnswer').disabled = false;
        });
    });
    
    document.getElementById('btnSubmitAnswer').addEventListener('click', () => {
        checkAnswer(selected, elem1, elem2);
    });
}

// ========================================
// VERIFICAR RESPOSTA
// ========================================

function checkAnswer(selected, elem1, elem2) {
    const propName = appState.currentChallenge.property;
    const data = propriedadesData[propName];
    const info = propriedadesInfo[propName];
    
    const value1 = data[elem1];
    const value2 = data[elem2];
    
    // Para afinidade eletrônica, valores mais NEGATIVOS são MAIORES
    // (liberam mais energia, portanto são mais favoráveis)
    let correct;
    if (propName === 'afinidadeEletronica') {
        // Mais negativo = maior afinidade
        correct = value1 < value2 ? elem1 : elem2;
    } else {
        // Para outras propriedades, valores maiores são maiores
        correct = value1 > value2 ? elem1 : elem2;
    }
    
    const isCorrect = selected === correct;
    
    const feedbackDiv = document.getElementById('challengeFeedback');
    if (!feedbackDiv) return;
    
    feedbackDiv.className = 'challenge-feedback show ';
    feedbackDiv.classList.add(isCorrect ? 'feedback-correct' : 'feedback-incorrect');
    
    if (isCorrect) {
        appState.score += 100;
        appState.currentChallenge.correctAnswers++;
    } else {
        appState.lives--;
    }
    
    updateChallengeStats();
    
    const unit = info.unidade || '';
    
    // Explicação especial para afinidade eletrônica
    let explanation = info.tendenciaPeriodo;
    if (propName === 'afinidadeEletronica') {
        explanation = `📌 Atenção: Valores mais NEGATIVOS = MAIOR afinidade eletrônica!<br>
                       Quanto mais negativo, mais energia é liberada ao ganhar elétron.<br><br>
                       ${info.tendenciaPeriodo}`;
    }
    
    feedbackDiv.innerHTML = `
        <div class="feedback-icon">${isCorrect ? '✅' : '❌'}</div>
        <div class="feedback-message">
            ${isCorrect ? 'Parabéns! Resposta Correta!' : 'Ops! Resposta Incorreta!'}
        </div>
        <div class="feedback-explanation">
            <strong>Valores:</strong><br>
            ${elem1}: ${value1}${unit}<br>
            ${elem2}: ${value2}${unit}<br>
            <br>
            <strong>Correto:</strong> ${correct}<br>
            ${propName === 'afinidadeEletronica' ? 
              `<strong>Por quê?</strong> ${correct} tem valor mais negativo (${Math.min(value1, value2)}${unit})` :
              `<strong>Por quê?</strong> ${correct} tem valor maior (${Math.max(value1, value2)}${unit})`
            }<br>
            <br>
            ${explanation}
        </div>
        <button class="btn-next" onclick="nextQuestion()">
            ${appState.lives <= 0 ? 'Ver Resultado' : 
              appState.currentQuestion >= appState.currentChallenge.totalQuestions - 1 ? 
              'Ver Resultado' : 'Próxima Questão →'}
        </button>
    `;
}

// ========================================
// PRÓXIMA QUESTÃO
// ========================================

function nextQuestion() {
    appState.currentQuestion++;
    
    // Verificar se acabou
    if (appState.currentQuestion >= appState.currentChallenge.totalQuestions || 
        appState.lives <= 0) {
        finishChallenge();
        return;
    }
    
    // Criar nova questão
    createComparisonQuestion();
}

// ========================================
// FINALIZAR DESAFIO
// ========================================

function finishChallenge() {
    const { property, level, correctAnswers, totalQuestions } = appState.currentChallenge;
    const percentage = (correctAnswers / totalQuestions) * 100;
    const passed = percentage >= 60; // 60% para passar
    
    console.log(`🏁 Desafio finalizado: ${correctAnswers}/${totalQuestions} (${percentage}%)`);
    
    if (passed) {
        // Adicionar estrela se não completou antes
        if (!appState.progress[property].completed.includes(level)) {
            appState.progress[property].completed.push(level);
            appState.progress[property].stars++;
            appState.totalStars++;
        }
        
        appState.progress[property].points += appState.score;
        appState.totalPoints += appState.score;
        
        saveProgress();
        updateStatsDisplay();
        
        // Mostrar conquista
        showAchievement(
            passed ? '🎉 Desafio Completo!' : '😔 Tente Novamente',
            `Você acertou ${correctAnswers} de ${totalQuestions} questões!<br>
             ${passed ? `Ganhou ⭐ 1 Estrela e 🏆 ${appState.score} pontos!` : 
                        'Você precisa de 60% para passar.'}`
        );
    } else {
        showAchievement(
            '😔 Quase lá!',
            `Você acertou ${correctAnswers} de ${totalQuestions} questões.<br>
             Precisa de pelo menos ${Math.ceil(totalQuestions * 0.6)} acertos para passar.<br>
             Tente novamente!`
        );
    }
}

// ========================================
// MOSTRAR CONQUISTA
// ========================================

function showAchievement(title, message) {
    const modal = document.getElementById('achievementModal');
    const textEl = document.getElementById('achievementText');
    
    if (!modal || !textEl) return;
    
    // Atualizar título se houver
    const titleEl = modal.querySelector('h2');
    if (titleEl) titleEl.textContent = title;
    
    textEl.innerHTML = message;
    modal.classList.add('show');
}

// ========================================
// EVENT LISTENERS
// ========================================

function initEventListeners() {
    // Botão voltar da tela de exploração
    const btnBack = document.getElementById('btnBack');
    if (btnBack) {
        btnBack.addEventListener('click', () => {
            showScreen('menuScreen');
        });
    }
    
    // Botão voltar da tela de desafio
    const btnBackChallenge = document.getElementById('btnBackChallenge');
    if (btnBackChallenge) {
        btnBackChallenge.addEventListener('click', () => {
            exploreProperty(appState.currentProperty);
        });
    }
    
    // Fechar modal de conquista
    const btnCloseAchievement = document.getElementById('btnCloseAchievement');
    if (btnCloseAchievement) {
        btnCloseAchievement.addEventListener('click', () => {
            document.getElementById('achievementModal').classList.remove('show');
            // Voltar para exploração
            exploreProperty(appState.currentChallenge.property);
        });
    }
    
    // Fechar modal de elemento
    const btnCloseElement = document.getElementById('btnCloseElement');
    if (btnCloseElement) {
        btnCloseElement.addEventListener('click', () => {
            document.getElementById('elementModal').classList.remove('show');
        });
    }
    
    // Fechar modals clicando fora
    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
            e.target.classList.remove('show');
        }
    });
}

// ========================================
// FUNÇÕES GLOBAIS (chamadas pelo HTML)
// ========================================

window.nextQuestion = nextQuestion;

// ========================================
// LOG INICIAL
// ========================================

console.log('📚 App.js carregado!');
console.log('🔬 Propriedades disponíveis:', Object.keys(propriedadesInfo));
