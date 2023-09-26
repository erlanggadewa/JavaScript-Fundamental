/**
 * Represents an answer object.
 * @typedef {Object} Answer
 * @property {boolean} success - Indicates if the answer retrieval was successful.
 * @property {string} message - The message associated with the answer retrieval.
 * @property {Array<AnswerItem>} answers - An array of answer items.
 * @property {string} roomHash - The hash of the room.
 * @property {string} gameState - The state of the game.
 * @property {string} gameType - The type of the game.
 * @property {TimeInfo} time - Object representing time-related information.
 */

/**
 * Represents an answer item within the answers array.
 * @typedef {Object} AnswerItem
 * @property {string} id - The unique identifier for the answer.
 * @property {string} question - The question associated with the answer.
 * @property {Array<AnswerOption>} options - An array of answer options.
 * @property {?Object} media - The media associated with the answer (can be null).
 * @property {string} type - The type of the answer.
 * @property {boolean} ignoreAnswers - Indicates if answers should be ignored.
 */

/**
 * Represents an answer option within the options array.
 * @typedef {Object} AnswerOption
 * @property {?Object} media - The media associated with the answer option (can be null).
 * @property {string} text - The text of the answer option.
 * @property {Array<number>} answer - An array of indices representing the correct answer(s).
 */

/**
 * Represents time-related information.
 * @typedef {Object} TimeInfo
 * @property {number} start - The start time.
 * @property {number} end - The end time.
 * @property {string} timeTaken - The time taken in seconds.
 */
/** @type {Answer} */
const answer = {
  success: true,
  message: "Answers retrieved",
  answers: [
    {
      id: "65090d859c48e0a4d6cb86a1",
      question:
        "Elemen apa yang tepat untuk menghubungkan resource luar ke dokumen HTML?",
      options: [
        {
          media: null,
          text: "A. &lt;link&gt;",
        },
        {
          media: null,
          text: "B. &lt;style&gt;",
        },
        {
          media: null,
          text: "C. &lt;script&gt;",
        },
        {
          media: null,
          text: "D. &lt;meta&gt;",
        },
      ],
      answer: [0],
      media: null,
      type: "MCQ",
      ignoreAnswers: false,
    },
    {
      id: "65090ddf008714598a6740e6",
      question:
        "Dalam menghubungkan CSS ke HTML, ada satu atribut yang penting untuk mendeskripsikan berkas yang akan dihubungkan. Manakah jawaban yang tepat?",
      options: [
        {
          media: null,
          text: "A. href=styles.css",
        },
        {
          media: null,
          text: "B. referrerpolicy=origin",
        },
        {
          media: null,
          text: "C. rel=stylesheet",
        },
        {
          media: null,
          text: "D. type=stylesheet",
        },
      ],
      answer: [2],
      media: null,
      type: "MCQ",
      ignoreAnswers: false,
    },
    {
      id: "65090e571fb05f68dcffd1a4",
      question:
        "Ada empat konsep yang diadopsi pada CSS. Salah satunya adalah suatu elemen akan menerapkan CSS properti terakhir yang diterapkan padanya jika ada dua CSS rule dengan selector identik. Konsep manakah yang sesuai dengan pernyataan tersebut?",
      options: [
        {
          media: null,
          text: "A. Inheritance rule",
        },
        {
          media: null,
          text: "B. Rule order",
        },
        {
          media: null,
          text: "C. Specificity rule",
        },
        {
          media: null,
          text: "D. Group selector",
        },
      ],
      answer: [1],
      media: null,
      type: "MCQ",
      ignoreAnswers: false,
    },
    {
      id: "65090f611fb05f3805ffd225",
      question: "Manakah pernyataan yang benar terkait kode di atas?",
      options: [
        {
          media: null,
          text: "A. Kode CSS tidak berwarna sehingga tidak valid.",
        },
        {
          media: null,
          text: "B. Penulisan kode masih keliru karena seharusnya penulisan deklarasi style tidak ditulis tepat setelah kurung kurawal buka ({).",
        },
        {
          media: null,
          text: "C. Kode di atas sudah valid dan tidak ada kendala apa pun.",
        },
        {
          media: null,
          text: "D. Tidak valid karena tidak ada titik koma sebagai pemisah deklarasi style.",
        },
      ],
      answer: [3],
      media: [
        {
          type: "image",
          url: "https://media.quizizz.com/_mdserver/main/media/resource/gs/quizizz-media/quizzes/8fa7d29f-0dd6-4881-935e-51b31d367952-v2",
        },
      ],
      type: "MCQ",
      ignoreAnswers: false,
    },
    {
      id: "6509105e0087140dcb6742e1",
      question: "Manakah kode CSS yang tidak valid?",
      options: [
        {
          media: {
            type: "image",
            url: "https://media.quizizz.com/_mdserver/main/media/resource/gs/quizizz-media/quizzes/e5f6d048-15c7-495f-9608-db2d6b605286-v2",
          },
          text: "",
        },
        {
          media: {
            type: "image",
            url: "https://media.quizizz.com/_mdserver/main/media/resource/gs/quizizz-media/quizzes/51fa8033-0973-4daa-8a11-de50b0a19cef-v2",
          },
          text: "",
        },
        {
          media: {
            type: "image",
            url: "https://media.quizizz.com/_mdserver/main/media/resource/gs/quizizz-media/quizzes/ed46ec84-3300-43b5-8c3c-4be3de1e9e3f-v2",
          },
          text: "",
        },
        {
          media: {
            type: "image",
            url: "https://media.quizizz.com/_mdserver/main/media/resource/gs/quizizz-media/quizzes/bbe64a5b-7c15-417f-bbdf-ab2a9672ca86-v2",
          },
          text: "",
        },
      ],
      answer: [2],
      media: null,
      type: "MCQ",
      ignoreAnswers: false,
    },
  ],
  roomHash: "651227751a33a5970f6f9a75",
  gameState: "running",
  gameType: "live",
  time: {
    start: 1695692637666,
    end: 1695692637930,
    timeTaken: "0.264 seconds",
  },
};

function sanitize(text) {
  const span = document.createElement("span");
  // convertHTMLEntity
  return text
    .trim()
    .replace(/&[#A-Za-z0-9]+;/gi, (entity, position, text) => {
      span.innerHTML = entity;
      return span.innerText;
    })
    .toLowerCase();
}



function answerQuiz() {
  const questionText = Array.from(
    document.querySelectorAll("div#questionText > div > div > p")
  ).map((e) => sanitize(e.innerText))[0];
  console.log(questionText);



  const selectedData = answer.answers.find(
    (e) => e.question.toLowerCase() == questionText
  );
  const realAnswer = selectedData.options[selectedData.answer[0]];
  if (realAnswer.media) {
    const selectedImageAnswer = Array.from(document.querySelectorAll(".option-image")).find(e => e.style.backgroundImage.includes(realAnswer.media.url))
    selectedImageAnswer.click()
  } else {
    const listAnswer = Array.from(
      document.querySelectorAll("div#optionText.resizeable-text > div > div > p")
    );
    const selectedAnswer = listAnswer.find((e) => sanitize(e.innerText) == sanitize(realAnswer.text));
    console.log(selectedAnswer);

    selectedAnswer.click();
  }
}

// run answer
answerQuiz()
