
const quizData = [
    {
        question: "What symbol is used for single-line comments in JavaScript?",
        a: "/*",
        b: "//",
        c: "*",
        d: "/",
        correct: "b",
    },
    {
        question: "Which built-in function is typically used to display output directly in the web browser's console for debugging?",
        a: "alert()",
        b: "print()",
        c: "display()",
        d: "console.log()",
        correct: "d",
    },
    {
        question: "Which JavaScript data type is used to store text (e.g., 'Hello World')?",
        a: "Boolean",
        b: "Text",
        c: "String",
        d: "Number",
        correct: "c",
    },
    {
        question: "What does the if statement do in JavaScript?",
        a: "It defines a reusable block of code that performs a specific task",
        b: "It repeats a block of code until a condition is false",
        c: "It executes a block of code only if a specified condition is true",
        d: "It permanently stores a value that cannot be changed",
        correct: "c",
    },
    {
        question: "What is DOM Stands for?",
        a: "Document Object Model",
        b: "Digital Output Module",
        c: "Data Organization Method",
        d: "Desktop Orientation Management",
        correct: "a",
    }
];
let index = 0;
let correct = 0,
    incorrect = 0,
    total = quizData.length;
let questionBox = document.getElementById("questionBox");
let allInputs = document.querySelectorAll("input[type='radio']")
const loadQuestion = () => {
    if (total === index) {
        return quizEnd()
    }
    reset()
    const data = quizData[index]
    questionBox.innerHTML = `${index + 1}) ${data.question}`
    allInputs[0].nextElementSibling.innerText = data.a
    allInputs[1].nextElementSibling.innerText = data.b
    allInputs[2].nextElementSibling.innerText = data.c
    allInputs[3].nextElementSibling.innerText = data.d
}

document.querySelector("#submit").addEventListener(
    "click",
    function() {
        const data = quizData[index]
        const ans = getAnswer()
        if (ans === data.correct) {
            correct++;
        } else {
            incorrect++;
        }
        index++;
        loadQuestion()
    }
)

const getAnswer = () => {
    let ans;
    allInputs.forEach(
        (inputEl) => {
            if (inputEl.checked) {
                ans = inputEl.value;
            }
        }
    )
    return ans;
}

const reset = () => {
    allInputs.forEach(
        (inputEl) => {
            inputEl.checked = false;
        }
    )
}

const quizEnd = () => {
    // console.log(document.getElementsByClassName("container"));
    document.getElementsByClassName("container")[0].innerHTML = `
        <div class="col">
        <h3>Thanks for Playing Quiz!</h3>
            <h3 class="w-100"> Hii, you've scored ${correct} / ${total} </h3>
        </div>
    `
}
loadQuestion(index);
