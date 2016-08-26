var parseArray = function (array, type) {
    var result = "";
    
    if (type == "developers") {
        for (var i in array) {
            var append = " - ";
            
            if (array[i] == "Madgeek1450") {
                append += "TFM Creator";
            } else if (array[i] == "Prozza") {
                append += "Lead Developer";
            } else {
                append += "Developer";
            }
        
            result += "<li><a href=\"#\">" + array[i] + append + "</a></li>"
        }
    
    } else {
        for (var i in array) {
            result += "<li><a href=\"#\">" + array[i] + "</a></li>"
        }
    }
    return result;
};