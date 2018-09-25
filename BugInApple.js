function sc(apple){
    var location = [];
    for (var i = 0; i < apple.length; i++) {
    for (var j = 0; j < apple[i].length; j++) {
    if (apple[i][j] === "B") {
      location.push(i,j);
      
    }
    }
    }
     return location; 
    
    }