let terminal = document.getElementById("home_terminal");
let closed = document.querySelector(".fa-xmark");
let commandDivision = document.querySelector(".commands");
let inputCommand = document.getElementById("command");
let terminal_result = document.getElementById("terminal_result");
let help_terminal = document.querySelector(".help");
// let command = document.getElementById("command");
let allCommands = ["home","about","skills","portfolio","blogs","contact","login"];

let executeCommands ={
  open:function(parameter1){
  window.location.href = "#"+parameter1
         },
  result:function(){
    commandDivision.innerHTML += `<p style="margin-left: 15px;font-size: 20px;color: green;"
    id="terminal_result">use of the following commands</p>`
  for(let i = 0;i < allCommands.length;i++){
      commandDivision.innerHTML += `<p style="margin-left: 15px;font-size: 20px;color: green;"id="terminal_result">~open ${allCommands[i]}</p>`
  }},
  append:function(){
   var p_message = document.createElement("p");
   p_message.innerHTML = "use one of the following commands";
   help_terminal.appendChild(p_message);
        for(let i = 0;i < allCommands.length;i++){
      var p = document.createElement("p");
      p.innerHTML = "open" + " " +allCommands[i];
      help_terminal.appendChild(p);
        }
  }
  
}; 
document.addEventListener("keydown", function(event) {
  if (event.keyCode === 13) { // 13 is the keyCode for the Enter key
    // window.alert("enter clicked");
    if(inputCommand.value.includes("open")){
    let commandHolder = inputCommand.value.split(" ");
    if(allCommands.includes(commandHolder[1])){
    executeCommands.open(commandHolder[1]);
    inputCommand.value = "";
    // checkTerminal();
  }}else if(inputCommand.value == "help"){
    // executeCommands.result();
    executeCommands.append();
  }
    else{
    terminal_result.innerHTML = "invalid command please try ~help to view more commands"
     }
     inputCommand.value = "";
}
});

closed.addEventListener('click', () => {
    document.querySelector(".terminal").style.display = "none";
    document.querySelector(".home_profile").style.display = "flex";
})
terminal.addEventListener('click', () => {
    // window.alert("button clicked ")
    document.querySelector(".terminal").style.display = "block";
    document.querySelector(".home_profile").style.display = "none";

})
