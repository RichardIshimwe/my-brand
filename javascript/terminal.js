let terminal = document.getElementById("home_terminal");
let closed = document.querySelector(".fa-xmark");
let commandDivision = document.querySelector(".commands");
let inputCommand = document.getElementById("command");
// let command = document.getElementById("command");

let executeCommands ={
  open:function(parameter1){
    let hold = parameter1;
  window.location.href = "#"+parameter1
         }
}; 
document.addEventListener("keydown", function(event) {
  if (event.keyCode === 13) { // 13 is the keyCode for the Enter key
    let commandHolder = inputCommand.value.split(" ");
    executeCommands.open(commandHolder[1]);
    inputCommand.value = "";
    // checkTerminal();
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


// document.addEventListener('keydown', function(event) {
//   if (event.key === 'Enter') {
//     window.alert("enter is pressed");  
//   }
// });

// function terminal(){
//     window.alert(inputCommand.value);
// }

// document.addEventListener('keydown', function (event) {
//     window.alert();
//     if (event.key === 'Enter' && command.value != "") {
//     // if (event.key === 'Enter') {
//         // commandDivision.style.background = "green";
//         if (command.value === "login") {
//             window.location.href = '#login';
//             terminalResult.innerHTML = "";
//         }
//         else if (command.value === "help") {
//             terminalResult.innerHTML = "terminal is underconstruction";
//         }

//         else if (command.value === "d"){
//             commandDivision.innerHTML += `   <div class="cm1">
//             <div class="static">
//               <table>
//                 <tr>
//                   <td>
//                     <p style="font-size: 22px;">richard@portfolio-cl</p>
//                   </td>
//                   <td><i class="fa-solid fa-angle-right"></i></td>
//                 </tr>
//               </table>
//             </div>
//             <div class="command">
//               <input type="text" name="command" id="command" placeholder="type in a command">
//             </div>
//           </div>
//           <div class="help">
//         <p style="margin-left: 15px;font-size: 20px;color: rgb(247, 10, 10);" id="terminal_result"></p>
//           </div>
//         </div>`;
//             // terminalResult.innerHTML = "invalid command try -help- command";
//         }
//         command.value = "";
//     }
// });