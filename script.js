// Smart Calculator Pro - JavaScript
let currentInput = '0';
let shouldResetDisplay = false;
let isScientificMode = false;
let angleMode = 'deg'; // 'deg' or 'rad'
let memory = 0;
let history = [];

// Display Functions
function updateDisplay() {
    document.getElementById('current').textContent = currentInput;
}

function appendToDisplay(value) {
    if (shouldResetDisplay) {
        currentInput = '';
        shouldResetDisplay = false;
    }
    if (currentInput === '0' && value !== '.') {
        currentInput = value;
    } else {
        currentInput += value;
    }
    updateDisplay();
    playSound();
}

// Clear Functions
function clearAll() {
    currentInput = '0';
    document.getElementById('history').textContent = '';
    updateDisplay();
    playSound();
}

function clearEntry() {
    currentInput = '0';
    updateDisplay();
    playSound();
}

function backspace() {
    if (currentInput.length > 1) {
        currentInput = currentInput.slice(0, -1);
    } else {
        currentInput = '0';
    }
    updateDisplay();
    playSound();
}

// Calculation Functions
function calculate() {
    try {
        const expression = currentInput
            .replace(/×/g, '*')
            .replace(/÷/g, '/')
            .replace(/π/g, Math.PI)
            .replace(/e/g, Math.E);
        
        const result = eval(expression);
        
        // Add to history
        const timestamp = new Date().toLocaleTimeString();
        history.push(`${timestamp}: ${currentInput} = ${result}`);
        document.getElementById('history').textContent = currentInput;
        
        currentInput = result.toString();
        updateDisplay();
        shouldResetDisplay = true;
        saveToStorage();
        playSound('result');
    } catch (error) {
        document.getElementById('current').textContent = 'Error';
        currentInput = '0';
        shouldResetDisplay = true;
        playSound('error');
    }
}

function calculateFunction(func) {
    try {
        const num = parseFloat(currentInput);
        let result;
        
        switch(func) {
            case 'sqrt':
                result = Math.sqrt(num);
                break;
            case 'square':
                result = num * num;
                break;
            case 'sin':
                result = angleMode === 'deg' ? Math.sin(num * Math.PI / 180) : Math.sin(num);
                break;
            case 'cos':
                result = angleMode === 'deg' ? Math.cos(num * Math.PI / 180) : Math.cos(num);
                break;
            case 'tan':
                result = angleMode === 'deg' ? Math.tan(num * Math.PI / 180) : Math.tan(num);
                break;
            case 'asin':
                result = angleMode === 'deg' ? Math.asin(num) * 180 / Math.PI : Math.asin(num);
                break;
            case 'acos':
                result = angleMode === 'deg' ? Math.acos(num) * 180 / Math.PI : Math.acos(num);
                break;
            case 'atan':
                result = angleMode === 'deg' ? Math.atan(num) * 180 / Math.PI : Math.atan(num);
                break;
            case 'log':
                result = Math.log10(num);
                break;
            case 'ln':
                result = Math.log(num);
                break;
            case 'factorial':
                result = factorial(Math.floor(num));
                break;
            case 'power':
                appendToDisplay('^');
                return;
        }
        
        const timestamp = new Date().toLocaleTimeString();
        history.push(`${timestamp}: ${func}(${num}) = ${result}`);
        document.getElementById('history').textContent = `${func}(${num})`;
        currentInput = result.toString();
        updateDisplay();
        shouldResetDisplay = true;
        saveToStorage();
        playSound('result');
    } catch (error) {
        document.getElementById('current').textContent = 'Error';
        currentInput = '0';
        shouldResetDisplay = true;
        playSound('error');
    }
}

function factorial(n) {
    if (n < 0) return NaN;
    if (n === 0 || n === 1) return 1;
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

function appendConstant(constant) {
    if (shouldResetDisplay) {
        currentInput = '';
        shouldResetDisplay = false;
    }
    if (currentInput === '0') {
        currentInput = '';
    }
    
    switch(constant) {
        case 'pi':
            currentInput += 'π';
            break;
        case 'e':
            currentInput += 'e';
            break;
    }
    updateDisplay();
    playSound();
}

// Mode Functions
function toggleMode() {
    isScientificMode = !isScientificMode;
    const scientificBtns = document.querySelectorAll('.calc-btn.scientific');
    const modeBtn = document.getElementById('modeBtn');
    
    scientificBtns.forEach(btn => {
        btn.style.display = isScientificMode ? 'block' : 'none';
    });
    
    modeBtn.textContent = isScientificMode ? 'Basic Mode' : 'Scientific Mode';
    playSound();
}

function toggleDegRad() {
    angleMode = angleMode === 'deg' ? 'rad' : 'deg';
    document.getElementById('angleBtn').textContent = angleMode.toUpperCase();
    playSound();
}

// Memory Functions
function memoryStore() {
    memory = parseFloat(currentInput) || 0;
    showNotification(`Stored ${memory} in memory`);
    saveToStorage();
    playSound('memory');
}

function memoryRecall() {
    currentInput = memory.toString();
    updateDisplay();
    playSound('memory');
}

function memoryClear() {
    memory = 0;
    showNotification('Memory cleared');
    saveToStorage();
    playSound('memory');
}

// History Functions
function showHistory() {
    if (history.length === 0) {
        showNotification('No calculation history');
        return;
    }
    const historyText = history.slice(-10).join('\n');
    showNotification('Recent Calculations:\n\n' + historyText, 'history');
}

// Utility Functions
function playSound(type = 'click') {
    // Audio feedback (optional)
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    switch(type) {
        case 'click':
            oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
            break;
        case 'result':
            oscillator.frequency.setValueAtTime(1000, audioContext.currentTime);
            break;
        case 'error':
            oscillator.frequency.setValueAtTime(300, audioContext.currentTime);
            break;
        case 'memory':
            oscillator.frequency.setValueAtTime(600, audioContext.currentTime);
            break;
    }
    
    gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.1);
}

function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #2c3e50;
        color: white;
        padding: 1rem 2rem;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        z-index: 1000;
        animation: slideIn 0.3s ease;
        max-width: 300px;
        word-wrap: break-word;
        white-space: pre-line;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Storage Functions
function saveToStorage() {
    const data = {
        memory: memory,
        history: history,
        angleMode: angleMode,
        isScientificMode: isScientificMode
    };
    localStorage.setItem('calculatorData', JSON.stringify(data));
}

function loadFromStorage() {
    const stored = localStorage.getItem('calculatorData');
    if (stored) {
        const data = JSON.parse(stored);
        memory = data.memory || 0;
        history = data.history || [];
        angleMode = data.angleMode || 'deg';
        isScientificMode = data.isScientificMode || false;
        
        // Update UI
        document.getElementById('angleBtn').textContent = angleMode.toUpperCase();
        if (isScientificMode) {
            toggleMode();
        }
    }
}

// Keyboard Support
document.addEventListener('keydown', function(event) {
    const key = event.key;
    
    if ('0123456789.+-*/()'.includes(key)) {
        event.preventDefault();
        if (key === '*') appendToDisplay('×');
        else if (key === '/') appendToDisplay('÷');
        else appendToDisplay(key);
    } else if (key === 'Enter' || key === '=') {
        event.preventDefault();
        calculate();
    } else if (key === 'Escape') {
        event.preventDefault();
        clearAll();
    } else if (key === 'Delete') {
        event.preventDefault();
        clearEntry();
    } else if (key === 'Backspace') {
        event.preventDefault();
        backspace();
    } else if (key === 's' && event.ctrlKey) {
        event.preventDefault();
        toggleMode();
    } else if (key === 'm' && event.ctrlKey) {
        event.preventDefault();
        memoryStore();
    } else if (key === 'r' && event.ctrlKey) {
        event.preventDefault();
        memoryRecall();
    } else if (key === 'h' && event.ctrlKey) {
        event.preventDefault();
        showHistory();
    }
});

// CSS Animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    updateDisplay();
    loadFromStorage();
    
    // Add service worker for PWA
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('sw.js').catch(console.error);
    }
});

// Export functions for testing
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        calculate,
        factorial,
        calculateFunction
    };
}

