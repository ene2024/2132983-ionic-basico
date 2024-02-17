var aux = document.getElementsByClassName("search-result");
var inputList = document.getElementsByClassName("text-search");


function searchResult(){
    let search_result = aux[0];
    let input = inputList[0];

    if (input.value === ""){
        search_result.style.display = "none";
    }
    else{
        search_result.style.display = "flex";
    }
    console.log(input.value);
    
}