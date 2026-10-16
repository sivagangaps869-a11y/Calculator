// 1 display number in the text box
function displayNumber(num){
    result.value+=num

}

// 2 clear text box
function clearBox(){
    result.value=''
}

// 3 evaluate expression
function evaluteExp(){
    result.value=eval(result.value)
}

// 4 reomove last item from the textbox
function removeLastItem(){
    result.value=result.value.slice(0,-1)
}