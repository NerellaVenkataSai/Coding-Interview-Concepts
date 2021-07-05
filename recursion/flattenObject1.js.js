var flattenObject = function(ob) {
	var toReturn = {};
	
	for (var i in ob) {

    console.log(i)
		if (!ob.hasOwnProperty(i)) continue;
		
		if ((typeof ob[i]) == 'object') {
      // console.log(i)
      console.log(flattenObject(ob[i]))
      var flatObject = flattenObject(ob[i]);
			for (var x in flatObject) {
				if (!flatObject.hasOwnProperty(x)) continue;
				
				toReturn[i + '.' + x] = flatObject[x];
      }
      console.log(toReturn)
		} else {
			toReturn[i] = ob[i];
		}
	}
	return toReturn;
};

console.log(flattenObject({ 'a':{ 
  'b':{ 'b2':2 }, 
  'c':{ 'c2':2, 
        'c3':3 
      } },
  'd': '1'     
  }))

  /**
   * a
   *   
   */
 
    