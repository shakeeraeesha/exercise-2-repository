function printQuote() {
    
    var string1 = "lorem ipsum 1"
    var string2 = "lorem ipsum 2"
    var string3 = "lorem ipsum 3"
    quotation = Math.floor(Math.random() * 3)
    
    if (quotation == 1) {
        console.log(string1)
    }

    if (quotation == 2) {
        console.log(string2)
    }

    else {
        console.log(string3)
    }
    
}




