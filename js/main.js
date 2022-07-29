// Get the list of items
// var items;
// webRequest("GET","http://localhost/badURI",function(data){items = data;},"JSON");

// Product and corp pages: display all properties as a list.
// Indexes: display all products or corps in a grid
// for (let item of items) {
	//addElement("table",$innerText,$elementClass,$elementType,$elementStyle,$href,$onChange,$onClick,$contentEditable,$attributeType,$attributeAction,$elementId)
//  }

var search_terms = ['apple', 'orange', 'banana', 'carrot', 'kiwi', 'potato'];

function autocompleteMatch(input) {
  if (input == '') {
    return [];
  }
  var reg = new RegExp(input)
  return search_terms.filter(function(term) {
	  if (term.match(reg)) {
  	  return term;
	  }
  });
}

function showResults(val) {
	  var res = document.getElementById("result");
	  res.innerHTML = '';
	  let list = '';
	  let terms = autocompleteMatch(val);
	  for (i=0; i<terms.length; i++) {
			list += '<li><a href="/' + terms[i] + '">' + terms[i] + '</li>';
	  }
	  res.innerHTML = '<ul>' + list + '</ul>';
}


