const chooseLanguage = document.querySelector("select")
const enterText = document.querySelector("textarea")
const convertSpeech = document.getElementById("convert-speech")
const synth = speechSynthesis;


let voices

function loadVoices() {
    voices = synth.getVoices();
    voices.forEach(({ name, lang }) => {
        const option = document.createElement("option")

        option.value = name
        option.textContent = `${name} | ${lang}`
        chooseLanguage.appendChild(option)
    })
}
  
  // to load in Safari
if ('onvoiceschanged' in synth) {
    synth.onvoiceschanged = loadVoices;
  } else {
    loadVoices();
}


const speech = new SpeechSynthesisUtterance()
function setText(text){
    speech.text = text
}

const speakText = () => {
    speechSynthesis.speak(speech)
}

convertSpeech.addEventListener("click", () => {
    speech.lang = 'en-US';
    setText(enterText.value)
    speakText()
})


const selectVoice = event => {
    const choseVoice = voices.find(voice => voice.name === event.target.value)
    speech.voice = choseVoice
    console.log(choseVoice)
}

chooseLanguage.addEventListener("change", selectVoice)

//---------------------------------------------------
// add box-images

const main = document.querySelector("main")

const expressions = [
    { img: "/assets/img/angry.jpg", text: "I'm angry" },
    { img: "/assets/img/drink.jpg", text: "I'm thirsty" },
    { img: "/assets/img/food.jpg", text: "I'm hungry" },
    { img: "/assets/img/happy.jpg", text: "I'm happy" },
    { img: "/assets/img/home.jpg", text: "I want to go home" },
    { img: "/assets/img/hurt.jpg", text: "I'm hurt" },
    { img: "/assets/img/outside.jpg", text: "I want to go outside" },
    { img: "/assets/img/sad.jpg", text: "I'm sad" },
    { img: "/assets/img/scared.jpg", text: "I'm scared" },
    { img: "/assets/img/tired.jpg", text: "I'm tired" },
    { img: "/assets/img/school.jpg", text: "I want to go to school" },
    { img: "/assets/img/grandma.jpg", text: "I want to see grandma"}
]

function createExpressionsBox(expressions) {
    const div = document.createElement("div")
    div.classList.add("expression-box")
    div.innerHTML = `<img src="${expressions.img}" alt="${expressions.text}"> 
    <p class="info">${expressions.text}</p>`

    div.addEventListener("click", () => {
        setText(expressions.text)
        speech.lang = 'en-US';
        speakText()
    })

    main.appendChild(div)
}

expressions.forEach(createExpressionsBox)



//---------------------------------------------------

// DOES NOT WORK IN safari)
// const chooseLanguage = document.querySelector("select")
// const enterText = document.querySelector("textarea")
// const convertSpeech = document.getElementById("convert-speech")

// let voices = []

// speechSynthesis.addEventListener("voiceschanged", () => {
//     voices = speechSynthesis.getVoices()

//     voices.forEach(({ name, lang }) => {
//         const option = document.createElement("option")

//         option.value = name
//         option.textContent = `${lang} | ${name}`
//         chooseLanguage.appendChild(option)
//     })
// })

// const speech = new SpeechSynthesisUtterance()
// const setText = text => {
//     speech.text = enterText.value
// }

// const speakText = () => {
//     speechSynthesis.speak(speech)
// }

// convertSpeech.addEventListener("click", () => {
//     setText(enterText.value)
//     speakText()
// })

// const selectVoice = event => {
//     const choseVoice = voices.find(voice => voice.name === event.target.value)
//     speech.voice = choseVoice
//     console.log(choseVoice)
// }

// chooseLanguage.addEventListener("change", selectVoice)