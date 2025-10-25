let calculation=JSON.parse(localStorage.getItem('calculation') )|| '';
        function updateCalculation(symbol) {
            if(symbol!=='=' && symbol!=='Clear' && symbol!=='Back') {
                calculation+=`${symbol}`;
                printResult();
            }    
            else if(symbol==='=') {
                calculation=eval(calculation);
                printResult();
            }
            else if(symbol==='Clear') {
                calculation='';
                printResult();
            }
            else if(symbol==='Back') {
                calculation= calculation.slice(0, -1); 
                printResult();
            }
            localStorage.setItem('calculation',JSON.stringify(calculation));
        }

        function printResult() {
            document.querySelector('.js-result').innerHTML=`${calculation}`;
        }