
    const indicate =document.getElementById("indicate");
    const result = document.getElementById("result");
    function writeResult(ele){
     indicate.value = indicate.value+ele.value
    }
    function calc(){
    if(indicate.value == ""){
            return
        }
        result.value = new function(return);
    }
    for(const indicate = 1; indicate<=100; indicate++){
    if(indicate.value = indicate % 3 == 0 && indicate % 5 == 0){
       result.value = "FizzBuzz";
    }
    else if(indicate % 3 == 0){
       resulr.value = "Fizz";
    }
    else if(indicate % 5 == 0){
        resulr.value = "Buzz";
    }else{
        indicate
    }
    paragraph.innerText = 'result';

}
  
