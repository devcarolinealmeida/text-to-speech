const chooseLanguage = document.querySelector("select")

let voices = []

speechSynthesis.addEventListener("voiceschanged", () => {
    voices = speechSynthesis.getVoices()

    voices.forEach(({ name, lang }) => {
        const option = document.createElement("option")

        option.value = name
        option.textContent = `${lang} | ${name}`
        chooseLanguage.appendChild(option)
    })
})