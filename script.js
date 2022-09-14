function initialize_app(){
  calculate_button=document.getElementById('calculate');
  calculate_button.addEventListener('click',math_calculate);
}

function input_symbol(s){
  expression=document.getElementById('expression').value;
  expression=expression+s;
  document.getElementById('expression').value=expression;
}

function clearExp() {
  document.getElementById('expression').value='';
}
function bkspace() {
  e=document.getElementById('expression');
  z=e.value;
  e.value=z.substr(0,z.length-1);
}

function addLog(msg){
  var ul=document.getElementById('log');
  var li=document.createElement('li');
  var msg_text_node=document.createTextNode(msg);
  li.appendChild(msg_text_node);
  ul.prepend(li);
}

function math_calculate(){
  expression = document.getElementById("expression").value;
  if(expression){
    try{
      answer= math.round((math.evaluate(expression)),7);
      document.getElementById('expression').value = answer;
      addLog(expression + " = " + answer);
    }catch(e){
      addLog(expression + " is Bad, please fix it.");
    }
  }
}