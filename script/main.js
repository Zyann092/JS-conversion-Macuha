var input = document.getElementById('input')
var result = document.getElementById('result')
var inputType = document.getElementById('inputType')
var resultType = document.getElementById('resultType') 
var inputTypeValue,resultTypeValue

input.addEventListener("keyup",myResult)
inputType.addEventListener("change",myResult)
resultType.addEventListener("change",myResult)

inputTypeValue = inputType.value
resultTypeValue = resultType.value

function myResult() {
    inputTypeValue = inputType.value
    resultTypeValue = resultType.value

    if(inputTypeValue === "peso" && resultTypeValue === "dollar") {
        result.value = Number(input.value) * 0.018
    }
    else if(inputTypeValue === "peso" && resultTypeValue === "yen") {
        result.value = Number(input.value) * 2.57
    }
    else if(inputTypeValue === "peso" && resultTypeValue === "riyal") {
        result.value = Number(input.value) * 0.066
    }
    else if(inputTypeValue === "peso" && resultTypeValue === "peso") {
        result.value = input.value
    }


    if(inputTypeValue === "dollar" && resultTypeValue === "peso") {
        result.value = Number(input.value) * 54.92
    }
    else if(inputTypeValue === "dollar" && resultTypeValue === "yen") {
        result.value = Number(input.value) * 141.14
    }
    else if(inputTypeValue === "dollar" && resultTypeValue === "riyal") {
        result.value = Number(input.value) * 3.64
    }
    else if(inputTypeValue === "dollar" && resultTypeValue === "dollar") {
        result.value = input.value
    }


    if(inputTypeValue === "yen" && resultTypeValue === "dollar") {
        result.value = Number(input.value) * 0.0071
    }
    else if(inputTypeValue === "yen" && resultTypeValue === "peso") {
        result.value = Number(input.value) * 0.39
    }
    else if(inputTypeValue === "yen" && resultTypeValue === "riyal") {
        result.value = Number(input.value) * 0.026
    }
    else if(inputTypeValue === "yen" && resultTypeValue === "yen") {
        result.value = input.value
    }


    if(inputTypeValue === "riyal" && resultTypeValue === "dollar") {
        result.value = Number(input.value) * 0.27
    }
    else if(inputTypeValue === "riyal" && resultTypeValue === "yen") {
        result.value = Number(input.value) * 38.77
    }
    else if(inputTypeValue === "riyal" && resultTypeValue === "peso") {
        result.value = Number(input.value) * 15.08
    }
    else if(inputTypeValue === "riyal" && resultTypeValue === "riyal") {
        result.value = input.value
    }
}