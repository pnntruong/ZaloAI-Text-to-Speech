var voice = document.getElementById("voice");
var input = document.getElementById("input-field");
var speechBtn = document.getElementById("speech-btn");
var stopBtn = document.getElementById("stop-btn");
var isPlaying = false;

speechBtn.onclick = (e) => {
  e.preventDefault();

  //Get input info
  let inputText = input.value ? input.value : "Bạn cần tớ nói gì ?";
  let choseVoice = document.querySelector("#voice-type").value;
  let speechSpeed = document.querySelector("#voice-speed").value;
  isPlaying = true;

  //Get speech
  fetch("https://api.zalo.ai/v1/tts/synthesize", {
    headers: {
      Apikey: "uxsZKaxrXpkl2eZjzz8CjkF0Bu5h8WOa",
    },
    body: `input=${inputText}&speaker_id=${choseVoice}&speed=${speechSpeed}`,
    method: "POST",
  }) 
    .then((res) => res.json())
    .then((data) => {
      let url = data.data.url;
      voice.src = url;
      voice.load();
      voice.play();

      // log input info
      console.log("Choose:" + choseVoice);
      console.log("Speed:" + speechSpeed);
      console.log(inputText);
      console.log(url);
    })
    .catch((err)=>{
        console.log("Vui lòng thử lại", err);
    });
};

stopBtn.onclick = (e) => {
  e.preventDefault();

  voice.pause();
  console.log("Đã dừng nói")
}