function printQuote() {
    
    var string1 = "lorem ipsum 1"
    var string2 = "lorem ipsum 2"
    var string3 = "lorem ipsum 3"
    quotation = Math.floor(Math.random() * 3)
    
    if (quotation == 1) {
        print(string1)
    }

    if (quotation == 2) {
        print(string2)
    }

    else {
        print(string3)
    }
    
}


