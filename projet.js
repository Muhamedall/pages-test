
function validateInput() {
    const input = document.getElementById("ItemName");
    input.value = input.value.replace(/[^0-9-%,-,*,+,/,=]/g, "");
  
}
function ik(val){
  const input = document.getElementById("ItemName");
  input.value += val;
}
function delet() {
  const input = document.getElementById("ItemName");
  input.value = input.value.slice(0, -1);
}

function equal() {
  const input = document.getElementById("ItemName");
  const expression = input.value;

  try {
    const result = eval(expression); 
    input.value = result;
  } catch (error) {
    input.value = "Error";
    console.error(error);
  }
}

function clearEvry(){
  const input = document.getElementById("ItemName");
  input.value="";
 
}