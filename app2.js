// 長文リスト（ここを書き換えるだけで簡単に編集・追加できます）
const texts = [
    "これはタイピング練習用の長文です。正確に入力できるか挑戦してみましょう。",
    "プログラミングを学ぶことで、論理的思考力や問題解決能力が身につきます。",
    "毎日少しずつ練習を続けることで、タイピングのスピードと正確さが向上します。",
    "新しい長文をここに追加できます。自分の好きな文章をどんどん増やしてみましょう！"
];

const selectText = document.getElementById('selectText');
const originalTextDiv = document.getElementById('originalText');
const typingArea = document.getElementById('typingArea');
const result = document.getElementById('result');
const timerBtn = document.getElementById('timerBtn');
const timerDisplay = document.getElementById('timerDisplay');
const checkBtn = document.getElementById('checkBtn');

const realTimerDisplay = document.createElement('span');
realTimerDisplay.id = "realTimerDisplay";
realTimerDisplay.style.marginLeft = "20px";
realTimerDisplay.style.fontSize = "1.1em";
realTimerDisplay.style.color = "#3b4cca";
timerDisplay.parentNode.insertBefore(realTimerDisplay, timerDisplay.nextSibling);

let timer = null;
let timeLeft = 600; // 10分=600秒
let timerRunning = false;
let typingStarted = false;
let realTimer = null;
let realTimeElapsed = 0;

// セレクトボックスを自動生成（長文追加時も自動反映）
function updateSelectOptions() {
    selectText.innerHTML = "";
    texts.forEach((text, idx) => {
        const option = document.createElement('option');
        option.value = idx;
        option.textContent = `長文${idx + 1}`;
        selectText.appendChild(option);
    });
}

updateSelectOptions();

// 初期表示
originalTextDiv.textContent = texts[0];

// 長文選択時の処理
selectText.onchange = function() {
    originalTextDiv.textContent = texts[selectText.value];
    typingArea.value = "";
    result.textContent = "";
    typingArea.disabled = false;
    checkBtn.disabled = true;
    typingStarted = false;
    typingArea.style.background = "#f5f8ff";
    stopTimer();
    stopRealTimer();
    timerDisplay.textContent = "";
    realTimerDisplay.textContent = "経過時間: 00:00";
};

// 判定ボタン
checkBtn.onclick = function() {
    showResult();
    stopTimer();
    stopRealTimer();
    typingArea.disabled = true;
    checkBtn.disabled = true;
};

// 判定処理
function showResult() {
    const original = originalTextDiv.textContent;
    const userInput = typingArea.value;
    let correctCount = 0;
    const minLen = Math.min(original.length, userInput.length);
    for (let i = 0; i < minLen; i++) {
        if (original[i] === userInput[i]) correctCount++;
    }
    const mistakeCount = original.length - correctCount;
    result.textContent = `正解文字数: ${correctCount} / ${original.length}　間違い文字数: ${mistakeCount}`;
}

// タイマー停止
function stopTimer() {
    if (timer) {
        clearInterval(timer);
        timer = null;
    }
    timerRunning = false;
}

// タイマー開始
function startTimer() {
    if (timerRunning) return;
    timeLeft = 600;
    timerRunning = true;
    timerDisplay.textContent = "10:00";
    timer = setInterval(() => {
        timeLeft--;
        const min = String(Math.floor(timeLeft / 60)).padStart(2, '0');
        const sec = String(timeLeft % 60).padStart(2, '0');
        timerDisplay.textContent = `${min}:${sec}`;
        if (timeLeft <= 0) {
            stopTimer();
            stopRealTimer();
            typingArea.disabled = true;
            checkBtn.disabled = true;
            showResult();
            alert("10分経過しました。タイピングを終了します。");
        }
    }, 1000);
}

// 実時間タイマー開始
function startRealTimer() {
    if (realTimer) return;
    realTimeElapsed = 0;
    realTimerDisplay.textContent = "経過時間: 00:00";
    realTimer = setInterval(() => {
        realTimeElapsed++;
        const min = String(Math.floor(realTimeElapsed / 60)).padStart(2, '0');
        const sec = String(realTimeElapsed % 60).padStart(2, '0');
        realTimerDisplay.textContent = `経過時間: ${min}:${sec}`;
    }, 1000);
}

// 実時間タイマー停止
function stopRealTimer() {
    if (realTimer) {
        clearInterval(realTimer);
        realTimer = null;
    }
}

// 「10分はかる」ボタン
timerBtn.onclick = function() {
    if (timerRunning) return;
    typingArea.disabled = false;
    typingArea.value = "";
    result.textContent = "";
    checkBtn.disabled = true;
    typingStarted = false;
    typingArea.style.background = "#f5f8ff";
    startTimer();
};

// 入力開始で判定ボタン有効化＆タイマー自動開始
typingArea.addEventListener('input', () => {
    if (typingArea.value.length > 0) {
        checkBtn.disabled = false;
        typingArea.style.background = "#e6ffe6";
        if (!typingStarted) {
            typingStarted = true;
            if (!timerRunning) startTimer();
            startRealTimer();
        }
    } else {
        checkBtn.disabled = true;
        typingArea.style.background = "#f5f8ff";
    }
});

// ページ読み込み時に初期化
window.onload = () => {
    selectText.value = 0;
    originalTextDiv.textContent = texts[0];
    typingArea.value = "";
    result.textContent = "";
    typingArea.disabled = false;
    checkBtn.disabled = true;
    typingStarted = false;
    typingArea.style.background = "#f5f8ff";
    stopTimer();
    stopRealTimer();
    timerDisplay.textContent = "";
    realTimerDisplay.textContent = "経過時間: 00:00";
};