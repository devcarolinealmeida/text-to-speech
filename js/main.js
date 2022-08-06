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
const setText = text => {
    speech.text = enterText.value
}

const speakText = () => {
    speechSynthesis.speak(speech)
}

convertSpeech.addEventListener("click", () => {
    setText(enterText.value)
    speakText()
})

const selectVoice = event => {
    const choseVoice = voices.find(voice => voice.name === event.target.value)
    speech.voice = choseVoice
    console.log(choseVoice)
}

chooseLanguage.addEventListener("change", selectVoice)

//------------
// add box-images



//-------------


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