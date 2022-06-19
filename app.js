const quiz = [
  {
    Quwetion: "通信プロトコルに関する記述のうち、適切なものはどれ？",
    answers: [
      "アナログ通信で用いられる通信プロトコルはない",
      "国際機関が制定したのもだけで、メーカーが独自に定められたものは通信プロトコルと呼ばない",
      "通信プロトコルは正常時の動作手順だけが定義されている",
      "メーカやOSが異なる機械同士でも、同じ通信プロトコルを使えば互いに通信することができる",
    ],
    correct:
      "メーカやOSが異なる機械同士でも、同じ通信プロトコルを使えば互いに通信することができる",
  },
  {
    Quwetion: "OSSであるメールソフトはどれ？",
    answers: ["Android", "Firefox", "MySQL", "Thunderbird"],
    correct: "Firefox",
  },
  {
    Quwetion:
      "通常使用される主系と、その主系の故障に備えて待機しつつ他の処理を実行している従系の二つから待機されているコンピューターシステムは？",
    answers: [
      "クライアントサーバーシステム",
      "ピアツーピアシステム",
      "デュプレックスシステム",
      "デュアルシステム",
    ],
    correct: "デュアルシステム",
  },
  {
    Quwetion:
      "A~Zの26種類の文字を表現する文字コードに最小限必要なビット数はいくつ？",
    answers: ["4", "5", "6", "7"],
    correct: "5",
  },
  {
    Quwetion:
      "知的財産権のうち、権利の発生のために申請や登録の手順を必要としないのは？",
    answers: ["意匠権", "実用財産権", "著作権", "特許権"],
    correct: "著作権",
  },
];

const quizlength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName("button");
const buttonLength = $button.length;
//クイズの問題文、選択肢の定義
const setupQuiz = (e) => {
  document.getElementById("js-question").textContent = quiz[quizIndex].Quwetion;
  let buttonIndex = 0;
  while (buttonIndex < buttonLength) {
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
};

setupQuiz();

const clickHandler = (e) => {
  if (quiz[quizIndex].correct === e.target.textContent) {
    window.alert("正解");
    score++;
  } else {
    window.alert("不正解です。" + " 正解は" + quiz[quizIndex].correct);
  }
  quizIndex++;

  if (quizIndex < quizlength) {
    setupQuiz();
  } else {
    window.alert(
      "終了!" +
        "\nあなたの正解数は\n" +
        score +
        "/" +
        quizlength +
        "です" +
        "\n[はじめからスタート]をクリックして再挑戦しましょう!\n"
    );
  }
};

// ボタンをクリックしたら正誤判定を行う
let handleIndex = 0;
while (handleIndex < buttonLength) {
  $button[handleIndex].addEventListener("click", (e) => {
    clickHandler(e);
  });
  handleIndex++;
}
