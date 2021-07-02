const sentence = "hello there from lighthouse labs";
let timer = 50;
 const printSentence = function(sentence){
  for(let i=0; i<sentence.length; i++){
    setTimeout(() => {
      process.stdout.write(sentence[i]);
      
    }, timer);   
    timer+=50;
  }
};
printSentence(sentence);