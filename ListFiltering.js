function filter_list(l) {
    var int = [];
    for (var i = 0; i < l.length; i++) {
     if (Number.isInteger(l[i]) === true) {
      int.push(l[i])
     }
    }
    return int
  }