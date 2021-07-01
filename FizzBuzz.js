for(const ans = 1; ans<=100; ans++){
    if(ans % 3 == 0 && ans % 5 == 0){
        console.log("FizzBuzz");
    }
    else if(ans % 3 == 0){
        console.log("Fizz");
    }
    else if(ans % 5 == 0){
        console.log("Buzz");
    }
    else{
        console.log(ans);
    }
}
  