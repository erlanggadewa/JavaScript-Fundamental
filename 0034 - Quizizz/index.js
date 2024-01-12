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
  "success": true,
  "message": "Answers retrieved",
  "answers": [
    {
      "id": "651243af6db81716f3a46d48",
      "question": "Apa CSS selector yang tepat untuk menunjuk elemen yang memiliki class “container”?",
      "options": [
        {
          "media": null,
          "text": "A. #container"
        },
        {
          "media": null,
          "text": "B. container"
        },
        {
          "media": null,
          "text": "C. .container"
        },
        {
          "media": null,
          "text": ":container"
        }
      ],
      "answer": [2],
      "media": null,
      "type": "MCQ",
      "ignoreAnswers": false
    },
    {
      "id": "6512440984acd070d501bde9",
      "question": "Manakah properti yang berguna untuk menetapkan jenis font yang akan diterapkan pada target?",
      "options": [
        {
          "media": null,
          "text": "A. Font-family"
        },
        {
          "media": null,
          "text": "B. Font-size"
        },
        {
          "media": null,
          "text": "C. Font-weight"
        },
        {
          "media": null,
          "text": "D. Font-style"
        }
      ],
      "answer": [0],
      "media": null,
      "type": "MCQ",
      "ignoreAnswers": false
    },
    {
      "id": "6512447aa077c1ffd0d290f6",
      "question": "Selain menetapkan border pada elemen, kita juga bisa membuat rounded corner. Properti apa yang tepat untuk melakukannya?",
      "options": [
        {
          "media": null,
          "text": "A. rounded"
        },
        {
          "media": null,
          "text": "B. border-radius"
        },
        {
          "media": null,
          "text": "C. corner"
        },
        {
          "media": null,
          "text": "D. border-rounded"
        }
      ],
      "answer": [1],
      "media": null,
      "type": "MCQ",
      "ignoreAnswers": false
    },
    {
      "id": "651244ce84acd09ffe01be4e",
      "question": "Secara default, setiap element memiliki nilai position. Apa itu?",
      "options": [
        {
          "media": null,
          "text": "A. Static"
        },
        {
          "media": null,
          "text": "B. Relative"
        },
        {
          "media": null,
          "text": "C. Absolute"
        },
        {
          "media": null,
          "text": "D. Fixed"
        }
      ],
      "answer": [0],
      "media": null,
      "type": "MCQ",
      "ignoreAnswers": false
    },
    {
      "id": "6512451bce7ad92db081b172",
      "question": "Manakah kode warna yang tidak valid?",
      "options": [
        {
          "media": null,
          "text": "A. #3f3f3f"
        },
        {
          "media": null,
          "text": "B. #333"
        },
        {
          "media": null,
          "text": "C. rgb(255, 255, 255)"
        },
        {
          "media": null,
          "text": "hsl(120deg, 75% 25%)"
        }
      ],
      "answer": [3],
      "media": null,
      "type": "MCQ",
      "ignoreAnswers": false
    }
  ],
  "roomHash": "65129c9f158fe1fb6d0511b9",
  "gameState": "running",
  "gameType": "live",
  "time": {
    "start": 1695723063546,
    "end": 1695723063563,
    "timeTaken": "0.017 seconds"
  }
}


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
