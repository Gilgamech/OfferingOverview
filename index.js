var sites;
var search_terms = new Array();

function autocompleteMatch(input) {
  if (input == '') {
    return [];
  }
  var reg = new RegExp(input.toLowerCase())
  return search_terms.filter(function(term) {
	  if (term.toLowerCase().match(reg)) {
  	  return term;
	  }
  });
}

function showResults(val) {
	deleteElement("result")
	addElement("searchSpan","","searchResult","","","","","","","","","result")
	let list = '';
	let terms = autocompleteMatch(val);
	var outerUL = addElement("result","","","ul");
	for (i=0; i<terms.length; i++) {
		var outerHref = addElement(outerUL,"","","a","",terms[i]);
		addElement(outerHref,terms[i],"","li");
	}
}

window.onload = function(){
	webRequest("get","https://www.offeringoverview.com/Services.json",function(data){
		sites = data;
		//console.log(sites)
		// sort by name
		sites.sort(function(a, b) {
		  const nameA = a.name.toUpperCase(); // ignore upper and lowercase
		  const nameB = b.name.toUpperCase(); // ignore upper and lowercase
		  if (nameA < nameB) {
			return -1;
		  }
		  if (nameA > nameB) {
			return 1;
		  }

		  // names must be equal
		  return 0;
		});
		
		for (let site of sites) {
			search_terms.push(site.name)
		}
		search_terms = search_terms.sort();

		var pathname = decodeURIComponent(window.location.pathname).replace("/","")
		buildPage(pathname,sites);
	},"JSON"); //end webRequest
}; //end window.onload

function buildPage(name,sites) {
	deleteElement("wrapper")
	addElement("content","","","br");
	addElement("content","","grid-container","","","","","","","","","wrapper");
	if (name == "") {
		buildGridPage("wrapper",sites);
	} else {
		for (let site of sites) {
			if (site.name == name) {
				buildInfoPage("wrapper",site);
			}
		}
	};// end if name
}


