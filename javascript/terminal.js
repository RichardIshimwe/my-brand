let terminal = document.getElementById("home_terminal");
let closed = document.querySelector(".fa-xmark");
let commandDivision = document.querySelector(".commands");
let inputCommand = document.getElementById("command");
let terminal_result = document.getElementById("terminal_result");
let help_terminal = document.querySelector(".help");
let p_message = document.createElement("p");
let allCommands = ["home","about","skills","portfolio","blogs","contact","login"];

let executeCommands ={
  open:function(parameter1){
  help_terminal.innerHTML = ""
  window.location.href = "#"+parameter1
         },
  append:function(){
  inputCommand.value = ""
   p_message.innerHTML = "use one of the following commands";
   help_terminal.appendChild(p_message);
        for(let i = 0;i < allCommands.length;i++){
      var p = document.createElement("p");
      p.innerHTML = "open" + " " +allCommands[i];
      help_terminal.appendChild(p);
        }
  }
  
}; 
let invalidCommand = () =>{
  inputCommand.value = "";
  p_message.innerHTML = "invalid command please try ~help to view more commands";
  help_terminal.appendChild(p_message)
}
document.addEventListener("keydown", (event) => {
  if (event.keyCode === 13) {
    if(inputCommand.value.includes("open")){
    let commandHolder = inputCommand.value.split(" ");
    if(allCommands.includes(commandHolder[1])){
    executeCommands.open(commandHolder[1]);
    inputCommand.value = "";
  }else{
    return invalidCommand();
  }
}else if(inputCommand.value == "help"){
    executeCommands.append();
  }
    else{
   return invalidCommand();
  }
}
});

closed.addEventListener('click', () => {
    document.querySelector(".terminal").style.display = "none";
    document.querySelector(".home_profile").style.display = "flex";
})
terminal.addEventListener('click', () => {
    document.querySelector(".terminal").style.display = "block";
    document.querySelector(".home_profile").style.display = "none";

})
