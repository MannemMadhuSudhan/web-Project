let counterElement = document.getElementById("countervalue");


function onIncrement(){
    let PreviousCounterValue = counterElement.textContent;
    // console.log(typeof(PreviousCounterValue));
    let UpdatedCounterValue = parseInt(PreviousCounterValue) + 1;
    // console.log(typeof(UpdatedCounterValue));
    // console.log(UpdatedCounterValue)
    counterElement.textContent=UpdatedCounterValue;


    
    if (UpdatedCounterValue > 0) {
        counterElement.style.color = "green"
        
    }

    else if(UpdatedCounterValue < 0){
        counterElement.style.color = "red"
    }

    else{
        counterElement.style.color = "black"

    }

}

function onDecrement(){
    let PreviousCounterValue = counterElement.textContent;
    // console.log(typeof(PreviousCounterValue));
    let UpdatedCounterValue = parseInt(PreviousCounterValue) - 1;
    // console.log(typeof(UpdatedCounterValue));
    // console.log(UpdatedCounterValue)
    counterElement.textContent=UpdatedCounterValue;


    
    if (UpdatedCounterValue > 0) {
        counterElement.style.color = "green"
        
    }

    else if(UpdatedCounterValue < 0){
        counterElement.style.color = "red"
    }

    else{
        counterElement.style.color = "black"

    }
}

function onReset(){
    UpdatedCounterValue=0;
    counterElement.textContent=UpdatedCounterValue;
    counterElement.style.color = "black"

    
}