//Synthesis API
var synth = window.speechSynthesis

// DOM Elements
let select = document.getElementById("get_voice")
let input  = document.getElementById("input_field")
let pitch  = document.getElementById("pitch_field")
let volume = document.getElementById("volume_field")
let speed  = document.getElementById("speed_field");
let submit = document.getElementById("submit")

// voice lenguege array 
var voices = []

// catch voices lenguege
const catchVoice = () => {
  voices = synth.getVoices()
  voices.map(
    (voice,indx) => select.innerHTML += `<option value="${indx} " >${voice.name}</option>`)
  speaking(voices)
}
if (synth.onvoiceschanged !== undefined) synth.onvoiceschanged = catchVoice

// catch speak
  function speaking(allVoice){
    submit.addEventListener("click", e => {
      e.preventDefault()
      const speakText = new SpeechSynthesisUtterance()
      let sel = Math.floor(select.value)

      if (input.value != ""){  
        
        speakText.voice = allVoice[sel]
        speakText.text = input.value
        speakText.lang = allVoice[sel].lang
        speakText.rate = speed.value/10
        speakText.pitch = pitch.value
        speakText.volume = volume.value/10
        synth.speak(speakText)
      }else{
        speakText.voice = allVoice[2]
        speakText.text = "Please type something in the input box"
        synth.speak(speakText)
      }

})}