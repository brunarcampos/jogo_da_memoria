// Variaveis de estado do jogo
let flippedCards = []; // Array para armazenar as cartas viradas (sempre terá no máximo 2 cartas)
let matchedPairs = 0; // Contador de pares encontrados
let attempts = 0; // Contador de tentativas
let isChechingPair = false; // Trava o jogo enquanto verifica se as cartas viradas são iguais


// Array com todas as cartas do jogo
const cardItems = [
  {id: 1, content: "🚀", matched: false},
  {id: 2, content: "🚀", matched: false},
  {id: 3, content: "💻", matched: false},
  {id: 4, content: "💻", matched: false},
  {id: 5, content: "🎉", matched: false},
  {id: 6, content: "🎉", matched: false},
  {id: 7, content: "🎨", matched: false},
  {id: 8, content: "🎨", matched: false},
  {id: 9, content: "🧩", matched: false},
  {id: 10, content: "🧩", matched: false},
  {id: 11, content: "🎮", matched: false},
  {id: 12, content: "🎮", matched: false},
  {id: 13, content: "🎲", matched: false},
  {id: 14, content: "🎲", matched: false},
  {id: 15, content: "🎪", matched: false},
  {id: 16, content: "🎪", matched: false}
]