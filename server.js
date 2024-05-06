const express = require('express');
const path = require('path');
const app = express();

app.get('/', (req, res) => {
    shuffledHiragana = shuffleArray([...hiragana]);
    currentIndex = 0;
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/api/randomHiragana', (req, res) => {
    res.send(`<p>${getNextHiragana()}</p>`);
});

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

const hiragana = [
    "あ", "い", "う", "え", "お",
    "か", "き", "く", "け", "こ",
    "さ", "し", "す", "せ", "そ",
    "た", "ち", "つ", "て", "と",
    "な", "に", "ぬ", "ね", "の",
    "は", "ひ", "ふ", "へ", "ほ",
    "ま", "み", "む", "め", "も",
    "や",      "ゆ",      "よ",
    "ら", "り", "る", "れ", "ろ",
    "わ",                      "を",
                 "ん",
    "が", "ぎ", "ぐ", "げ", "ご",
    "ざ", "じ", "ず", "ぜ", "ぞ",
    "だ", "ぢ", "づ", "で", "ど",
    "ば", "び", "ぶ", "べ", "ぼ",
    "ぱ", "ぴ", "ぷ", "ぺ", "ぽ",
    "きゃ", "きゅ", "きょ",
    "しゃ", "しゅ", "しょ",
    "ちゃ", "ちゅ", "ちょ",
    "にゃ", "にゅ", "にょ",
    "ひゃ", "ひゅ", "ひょ",
    "みゃ", "みゅ", "みょ",
    "りゃ", "りゅ", "りょ",
    "ぎゃ", "ぎゅ", "ぎょ",
    "じゃ", "じゅ", "じょ",
    "びゃ", "びゅ", "びょ",
    "ぴゃ", "ぴゅ", "ぴょ"
];

let shuffledHiragana = shuffleArray([...hiragana]);
let currentIndex = 0;

function getNextHiragana() {
    if (currentIndex >= shuffledHiragana.length) {
        shuffledHiragana = shuffleArray([...hiragana]);
        currentIndex = 0;
    }
    const nextHiragana = shuffledHiragana[currentIndex];
    currentIndex++;
    return nextHiragana;
}

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
