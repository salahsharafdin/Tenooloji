// State Variables
let currentPhase = null;
let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let isAnswered = false;

// DOM Elements
const phaseScreen = document.getElementById('phase-selection-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultsScreen = document.getElementById('results-screen');
const phasesList = document.getElementById('phases-list');

const backBtn = document.getElementById('back-btn');
const nextBtn = document.getElementById('next-btn');
const restartBtn = document.getElementById('restart-btn');
const homeBtn = document.getElementById('home-btn');

const currentPhaseName = document.getElementById('current-phase-name');
const quizProgressText = document.getElementById('quiz-progress-text');
const progressBar = document.getElementById('progress-bar');
const questionDisplay = document.getElementById('question-display');
const optionsDisplay = document.getElementById('options-display');
const currentScoreVal = document.getElementById('current-score');

const resultsPhaseTitle = document.getElementById('results-phase-title');
const totalQuestionsStat = document.getElementById('total-questions-stat');
const correctAnswersStat = document.getElementById('correct-answers-stat');
const scorePercentage = document.getElementById('score-percentage');
const feedbackMessage = document.getElementById('feedback-message');

// Initialize App
window.addEventListener('DOMContentLoaded', () => {
    loadPhases();
    setupEventListeners();
});

// Setup Event Listeners
function setupEventListeners() {
    backBtn.addEventListener('click', exitQuiz);
    nextBtn.addEventListener('click', nextQuestion);
    restartBtn.addEventListener('click', restartQuiz);
    homeBtn.addEventListener('click', showHomeScreen);
}

// Local Storage Helpers
function saveProgress() {
    if (!currentPhase) return;
    const state = {
        phaseId: currentPhase.phase,
        currentQuestions: currentQuestions,
        currentQuestionIndex: currentQuestionIndex,
        score: score
    };
    localStorage.setItem('quizProgress', JSON.stringify(state));
}

function clearProgress() {
    localStorage.removeItem('quizProgress');
}

function checkSavedProgress() {
    const saved = localStorage.getItem('quizProgress');
    if (!saved) return null;
    try {
        const parsed = JSON.parse(saved);
        // Clean up old saved progress from the "fill-in-the-blank" version
        if (parsed.currentQuestions && parsed.currentQuestions.some(q => !q.options || q.options.length === 0)) {
            localStorage.removeItem('quizProgress');
            return null;
        }
        return parsed;
    } catch (e) {
        localStorage.removeItem('quizProgress');
        return null;
    }
}

function resumeQuiz(savedState) {
    currentPhase = quizData.find(p => p.phase === savedState.phaseId);
    currentQuestions = savedState.currentQuestions;
    currentQuestionIndex = savedState.currentQuestionIndex;
    score = savedState.score;
    isAnswered = false;
    currentScoreVal.textContent = score;

    showScreen(quizScreen);
    displayQuestion();
}

// Load Phases Grid
function loadPhases() {
    phasesList.innerHTML = '';
    
    const savedState = checkSavedProgress();
    if (savedState && savedState.currentQuestionIndex < savedState.currentQuestions.length) {
        const phaseObj = quizData.find(p => p.phase === savedState.phaseId);
        const resumeCard = document.createElement('div');
        resumeCard.className = 'phase-card resume-card';
        resumeCard.innerHTML = `
            <span class="phase-num">Sii wad Imtixaanka</span>
            <h3>${phaseObj ? phaseObj.name : 'Imtixaankii Hore'}</h3>
            <span class="chapters-info">Su'aasha ${savedState.currentQuestionIndex + 1} ee ${savedState.currentQuestions.length} | Dhibcaha: ${savedState.score}</span>
            <div class="resume-actions">
                <span class="action-hint">Sii wad &rarr;</span>
                <button class="reset-progress-btn">soo bilow su,aalaha oo dhan (Reset)</button>
            </div>
        `;
        resumeCard.addEventListener('click', () => resumeQuiz(savedState));
        
        const resetBtn = resumeCard.querySelector('.reset-progress-btn');
        resetBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            if (confirm("Ma hubtaa inaad rabto inaad tirtirto horumarkii hore oo aad ka bilowdo bilow?")) {
                clearProgress();
                loadPhases();
            }
        });
        
        phasesList.appendChild(resumeCard);
    }

    quizData.forEach(p => {
        // Count total questions in this phase
        let totalQ = 0;
        p.chapters.forEach(ch => {
            totalQ += ch.questions.length;
        });

        const card = document.createElement('div');
        card.className = 'phase-card';
        card.innerHTML = `
            <span class="phase-num">Phase ${p.phase}</span>
            <h3>${p.name}</h3>
            <span class="chapters-info">${p.chapters.map(c => c.title.split(':')[0].trim()).join(' & ')} (${totalQ} Su'aalood)</span>
            <span class="action-hint">Bilow Imtixaanka &rarr;</span>
        `;
        card.addEventListener('click', () => startQuiz(p));
        phasesList.appendChild(card);
    });
}

// Start Quiz for Selected Phase
function startQuiz(phaseObj) {
    currentPhase = phaseObj;
    
    currentQuestions = [];

    // Process each chapter separately to keep distractors relevant
    phaseObj.chapters.forEach(ch => {
        // Extract all unique answers in THIS chapter to use as a distractor pool
        const chapterAnswerPool = Array.from(new Set(ch.questions.map(q => q.a)));

        const chapterQuestions = ch.questions.map(qObj => {
            // Filter out correct answer to get distractors
            let distractors = chapterAnswerPool.filter(a => a !== qObj.a);
            
            // Shuffle distractors and pick 3
            shuffleArray(distractors);
            const selectedDistractors = distractors.slice(0, 3);
            
            // Combine correct answer + 3 distractors
            let options = [qObj.a, ...selectedDistractors];
            
            // In case there aren't enough distractors, add fallbacks
            while (options.length < 4) {
                options.push("Jawaab kale.");
            }

            // Shuffle the 4 options
            shuffleArray(options);

            return {
                q: qObj.q,
                a: qObj.a,
                options: options
            };
        });

        currentQuestions = [...currentQuestions, ...chapterQuestions];
    });

    // Shuffle the overall list of questions
    shuffleArray(currentQuestions);

    // Reset State
    currentQuestionIndex = 0;
    score = 0;
    isAnswered = false;
    currentScoreVal.textContent = '0';

    // Show Screen
    showScreen(quizScreen);
    saveProgress();
    displayQuestion();
}

// Display Current Question
function displayQuestion() {
    isAnswered = false;
    nextBtn.classList.add('hidden');
    
    const qObj = currentQuestions[currentQuestionIndex];
    
    // Update Header Meta
    currentPhaseName.textContent = currentPhase.name;
    quizProgressText.textContent = `Su'aasha ${currentQuestionIndex + 1}/${currentQuestions.length}`;
    
    // Update Progress Bar
    const progressPercent = ((currentQuestionIndex) / currentQuestions.length) * 100;
    progressBar.style.width = `${progressPercent}%`;

    // Set Question Text
    questionDisplay.textContent = qObj.q;

    // Load Options
    optionsDisplay.innerHTML = '';
    const optionBadges = ['A', 'B', 'C', 'D'];
    
    qObj.options.forEach((opt, idx) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerHTML = `
            <span class="option-badge">${optionBadges[idx]}</span>
            <span class="option-text">${opt}</span>
        `;
        btn.addEventListener('click', () => handleOptionClick(btn, opt, qObj.a));
        optionsDisplay.appendChild(btn);
    });
}

// Handle Option Selection
function handleOptionClick(selectedBtn, selectedOption, correctOption) {
    if (isAnswered) return;
    isAnswered = true;

    // Track user's answer
    currentQuestions[currentQuestionIndex].userAnswer = selectedOption;

    const allButtons = optionsDisplay.querySelectorAll('.option-btn');
    
    if (selectedOption === correctOption) {
        selectedBtn.classList.add('correct');
        score++;
        currentScoreVal.textContent = score;
    } else {
        selectedBtn.classList.add('wrong');
        // Highlight correct option
        allButtons.forEach(btn => {
            const btnText = btn.querySelector('.option-text').textContent;
            if (btnText === correctOption) {
                btn.classList.add('correct');
            }
        });
    }

    // Disable all options
    allButtons.forEach(btn => btn.classList.add('disabled'));
    
    // Show Next Button
    nextBtn.classList.remove('hidden');
}

// Navigate to Next Question or Results
function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < currentQuestions.length) {
        saveProgress();
        displayQuestion();
    } else {
        clearProgress();
        showResults();
    }
}

// Show Final Quiz Results
function showResults() {
    progressBar.style.width = '100%';
    resultsPhaseTitle.textContent = currentPhase.name;
    totalQuestionsStat.textContent = currentQuestions.length;
    correctAnswersStat.textContent = score;
    
    const percentage = Math.round((score / currentQuestions.length) * 100);
    scorePercentage.textContent = `${percentage}%`;

    // Somali Feedback Messages based on score
    if (percentage === 100) {
        feedbackMessage.textContent = "Guul Boqolkiiba Boqol ah! Aad iyo aad baad u fiicantahay! 🌟";
    } else if (percentage >= 80) {
        feedbackMessage.textContent = "Aad u fiican! Heer sare baad gaartay! 👍";
    } else if (percentage >= 50) {
        feedbackMessage.textContent = "Dhexdhexaad! Wax yar oo ku celis ah baad u baahantahay. Keep going!";
    } else {
        feedbackMessage.textContent = "Isku day kale! Fadlan dib u akhri Cutubyadan si aad dhibco fiican u hesho. 📚";
    }

    // Populate and show wrong answers if any
    const wrongAnswersContainer = document.getElementById('wrong-answers-container');
    const wrongAnswersList = document.getElementById('wrong-answers-list');
    
    // Filter out the incorrect ones
    const wrongQuestions = currentQuestions.filter(q => q.userAnswer && q.userAnswer !== q.a);
    
    if (wrongQuestions.length > 0) {
        wrongAnswersList.innerHTML = '';
        wrongQuestions.forEach((qObj) => {
            const originalIndex = currentQuestions.indexOf(qObj) + 1;
            const item = document.createElement('div');
            item.className = 'wrong-item';
            item.innerHTML = `
                <div class="wrong-q-header">
                    <span class="wrong-q-num">Su'aasha ${originalIndex}aad:</span>
                    <span class="wrong-q-text">${qObj.q}</span>
                </div>
                <div class="wrong-details">
                    <div class="wrong-ans"><span class="label">Jawaabtaada:</span> <span class="val">${qObj.userAnswer}</span> ❌</div>
                    <div class="correct-ans"><span class="label">Jawaabta Saxda ah:</span> <span class="val">${qObj.a}</span> ✅</div>
                </div>
            `;
            wrongAnswersList.appendChild(item);
        });
        wrongAnswersContainer.classList.remove('hidden');
    } else {
        wrongAnswersContainer.classList.add('hidden');
    }

    showScreen(resultsScreen);
}

// Restart Quiz
function restartQuiz() {
    startQuiz(currentPhase);
}

// Exit Quiz
function exitQuiz() {
    if (confirm("Ma hubtaa inaad rabto inaad ka baxdo imtixaanka?")) {
        showHomeScreen();
    }
}

// Show Home
function showHomeScreen() {
    showScreen(phaseScreen);
}

// Utility: Switch Active Screen
function showScreen(screenToShow) {
    [phaseScreen, quizScreen, resultsScreen].forEach(s => {
        s.classList.add('hidden');
        s.classList.remove('active');
    });
    screenToShow.classList.remove('hidden');
    screenToShow.classList.add('active');
}

// Utility: Fisher-Yates Shuffle Algorithm
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}


