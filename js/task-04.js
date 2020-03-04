'use strict'
const maxLength = 40;
const formatString = function(string) {
    if(string.length <= maxLength){
        return string
    }else{
        const croppedStr = string.slice(0,40);
        return croppedStr;
    }
  };
  

  console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
//   вернется оригинальная строка
  
  console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
  // вернется форматированная строка
  
  console.log(formatString('Curabitur ligula sapien.'));
  // вернется оригинальная строка
  
  console.log(
    formatString(
      'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
    ),
  );


