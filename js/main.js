let displey = document.getElementById('displey');

    let p = document.getElementById('p'); 

    const operators = {};
    
    let num  = ''; 
    let num1 = ''; 
    let oper = ''; 
    let num2 = ''; 
    let eve = '';


    operators.new = () => {
        switch(oper) {
                   case '+': 
                   num1 = parseFloat(num1) + parseFloat(num2);
                   break;

                  case '-': 
                  num1 = parseFloat(num1) - parseFloat(num2);
                  break; 
                 
                  case '*': 
                  num1 = parseFloat(num1) * parseFloat(num2);
                  break; 
                 
                  case '/': 
                  num1 = parseFloat(num1) / parseFloat(num2);
                  break;
               } 
               num2 = ''; 
               displey.innerHTML = num1;    
    }


    operators.num = () => {
        switch(eve) {
            case 48: 
                num = '0'; 
                break; 

            case 49: 
                num = '1'; 
                break;
            
            case 50: 
                num = '2'; 
                break;
            
            case 51: 
                num = '3'; 
                break;
            
            case 52: 
                num = '4'; 
                break; 
            
            case 53:
                num = '5'; 
                break; 
                
            case 54:
                num = '6'; 
                break; 

            case 55:
                num = '7'; 
                break; 

            case 56:
                num = '8'; 
                break; 
            
            case 57:
                num = '9'; 
                break; 
            
                case 96: 
                num = '0'; 
                break; 

            case 97: 
                num = '1'; 
                break;
            
            case 98: 
                num = '2'; 
                break;
            
            case 99: 
                num = '3'; 
                break;
            
            case 100: 
                num = '4'; 
                break; 
            
            case 101:
                num = '5'; 
                break; 
                
            case 102:
                num = '6'; 
                break; 

            case 103:
                num = '7'; 
                break; 

            case 104:
                num = '8'; 
                break; 
            
            case 105: 
                num = '9'; 
                break;
             
            case 13: 
               num = '=';
               break; 
            
            case 107:
                num = '+'; 
                break; 

            case 109: 
                num = '-'; 
                break; 
                
            case 106: 
                 num = '*';
                 break; 
            
            case 111: 
                 num = '/';
                 break;
           
            case 110: 
                 num = '.'; 
                 break; 
                
            case 27:
                num = 'C';
                break; 
        }
        eve = num; 
        return;
    } 

    operators.router = () => {
        if(eve >= 0 || eve <= 9 && oper === '' || eve === '.'){
            if(oper === '') {
                 if(num1.length < 6) {
                     num1 += eve;
                 }
                 displey.innerHTML = num1;
            } else {
                if(num2.length < 6){
                 num2 += eve;
                } 
                displey.innerHTML = num1 + oper + num2;           
            }
           } else if(eve === 'C') {
               num1 = ''; 
               num2 = ''; 
               oper = ''; 
               displey.innerHTML = '';
               
           } else if (eve === '+' || eve === '-' || eve === '*' || eve === '/') {
               oper = eve;

               if(num2 !== ''){
                   operators.new(); 
               }

               num2 = ''; 

           }else if (eve === '=' && num2 !== '') {
               operators.new(); 
           }
    }

    document.addEventListener('click', function(event){
        if(event.target.nodeName === "input" || event.target.nodeName === "INPUT") {
           eve = event.target.value; 
           operators.router(); 
        } 
    });

    document.addEventListener('keyup', function(event){
        eve = event.keyCode; 
        operators.num(); 
        operators.router(); 
    });