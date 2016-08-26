
var log = function (message, level) {
    level = level || "INFO";
    var time = moment().format("DD MMM HH:mm:ss");
    console.log(time + " [" + level.toUpperCase() + "] " + message);
};

log("Scripts loaded");

var staticLoaded = 0;
var jsonLoaded = 0;
var playerCount = 0;
var errorMsg = "Error loading content!";

var loadStatic = function (contentArray) {
    for (var i = 0; i < contentArray.length; i++) {
        getStatic(contentArray[i], contentArray.length);
    }
    setTimeout(function() {
        log(staticLoaded + "/" + contentArray.length + " static items loaded");
        staticLoaded = 0;
    }, 3000);
};

var getStatic = function (contentPath, totalLength) {

    var name = "#" + contentPath.replace("statics/", "").replace(".html", "");

    // Async ajax request
    $.get(contentPath, function (data) {
        $(name).html(data);
        staticLoaded += 1;
        log("(STATIC " + staticLoaded + ") Loaded " + contentPath);
    })

    // Error handling
    .error(function() {
        log("Error loading " + contentPath + "!", "WARN");
        $(name).html(errorMsg);
    });

};

var loadJson = function(jsonUrl, jsonContent) {
    getJson(jsonUrl, function (data) {
		if (data["usingCachedData"]) {
			updateOnline(false);
		} else {
			updateOnline(true);
		}
        
        updateJsonItems(data);
        
        // If items are missing, don't store in cache
        if (jsonContent.length > data.length) {
            log("JSON data incomplete, not storing in cache!", "WARN");
            return;
        }
        
        $.cookies.set("jsondata", data, {expiresAt: moment().add('days', 15).toDate()});
        
        log("Updated JSON data cache");
        
    }, function (error) {
        updateOnline(false);
        
        log("Error loading " + jsonUrl + "!", "WARN");
        
        var data = $.cookies.get("jsondata");
        
        // No cache
        if (data == null) {        
            log("No cached JSON items found!", "WARN");
            
            for (var i in jsonContent) {
                $("#" + jsonContent[i]).html(errorMsg);
            }
            return;
        }
        
        log("Loading JSON items from cache...", "WARN");
        
        // Load from cache
        updateJsonItems(data);
    });
    
    setTimeout(function() {
        log(jsonLoaded + "/" + jsonContent.length + " JSON items loaded");
        jsonLoaded = 0;
    }, 3000);
};

var getJson = function (url, successHandler, errorHandler) { // http://mathiasbynens.be/notes/xhr-responsetype-json
    if (!url) {
        return;
    }
    
    successHandler = successHandler || function () {};
    errorHandler = errorHandler || function () {};

    var xhr = typeof XMLHttpRequest != 'undefined' ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
    
    xhr.open('get', url, true);
    
    xhr.onreadystatechange = function () {
        var data;
        
        if (xhr.readyState != 4) { // 4 = done
            return;
        }
        
        if (xhr.status != 200) {
            return;
        }
    
        data = JSON.parse (xhr.responseText);
        successHandler(data);
    };
    
    xhr.onerror = function () {
        errorHandler(9001);
    };
    
    xhr.timeout = 2500;
    xhr.ontimeout = function () {
        errorHandler(9001);
    };
    
    xhr.send();
};

var updateJsonItems = function (data) {

    for (var i in jsonContent) {
    
        var current = jsonContent[i];
        var names = data[current];

        if (names == null || names.length == 0) {
            log("Error loading " + current + "!", "WARN");
            $("#" + current).html(errorMsg);
            continue;
        }

        $("#" + current).html(parseArray(names, current));
        jsonLoaded += 1;
        log("(JSON " + jsonLoaded + ") Loaded " + current);
    }
};

var parseArray = function (array, type) {
    var result = "";
    
    if (type == "developers") {
        for (var i in array) {
            var append = " - ";
            
            if (array[i] == "Madgeek1450") {
                append += "TFM Creator";
            } else if (array[i] == "DarthSalamon") {
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

var updateOnline = function(online) {
    if(online) {
		$('#status').html("The server is <font color='Green'>Online</font>!");
	} else {
		$('#status').html("The server is <font color='Red'>Offline</font> :/");
	}
};
