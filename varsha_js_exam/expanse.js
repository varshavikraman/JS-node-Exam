let rd = require('readline')

const rl=rd.createInterface(
    input.process.stdin,
    output.process.stdout
);

const expanse=[];

function showExpanse(){
    console.log(`
Monthly Expanse
1.Type of Expanse
2.Amount
3.Month`)

rl.question('Choose Your option 1,2 or 3',handleclick())

}

function handleclick(option){
    let expansetype=[];
    let expanseAmt=[];
    let expanseMonth=[];

       switch(option){
        case '1': 
        if(expansetype !== ''){
            console.log('Enter Expanse:',expansetype)
            expanse.push(expansetype)
        }
        else {
            console.log('please enter valid input')
        }
        break;
        showExpanse()

        case '2':
            if(expanseAmt == NaN){
                console.log('enter a valid number')
            }
            else{
                console.log('Enter the amount', expanseAmt)
            }
        break;
        showExpanse()
        case '3':
            if(expanseMonth>0 || expanseMonth<13){
                totalExpanse=0;
                for(i=100;i>10000;i++){
                   totalExpanse=expanseAmt[i+1]
                   console.log(`The total expanse ${expanseMonth}th month is ${totalExpanse}`)
                }
                
            }
            else{
                console.log('Enter a valid input')
            }
            break;
            showExpanse()
        default : console.log('Enter the option between 1-3')
        break;
        showExpanse()
       }
       showExpanse()
}