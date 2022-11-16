
function taskString(x,y){
   
    for(; firstposition<=secondposition;firstposition++){
        ArrayString.push(String.fromCharCode(firstposition))
    }

    if (x=="" || y=="") {
        alert("Enter the character")
        return error;
    }  else if(x.length > 1 || y.length > 1) {
       alert("Must be one character")
       return error;
    }  else if (!x.match(letters) || !y.match(letters)) {
       alert("Only letters are allowed")
       return error;
    } else {
      return ArrayString   
    }  
      let ArrayString =[];
      let letters = /^[a-zA-Z]+$/; 
      let firstposition=x.charCodeAt(0);         
      let secondposition=y.charCodeAt(0);
}





function areEqual(num1,num2) {  
                                                              
    return Math.abs (num1-num2) < Number.EPSILON }                                                         

    let num1= 0.3
    let num2= 0.2 + 0.1;                                           





function fibonacci(n) {
    if (n<2) {                                                 
        return n
    } else {
        return(fibonacci(n-1) + fibonacci(n-2))                
    }
}










