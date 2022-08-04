// Get the list of items
// var items;
// webRequest("GET","http://localhost/badURI",function(data){items = data;},"JSON");

// Product and corp pages: display all properties as a list.
// Indexes: display all products or corps in a grid
//addElement($elementParent,$innerText,$elementClass,$elementType,$elementStyle,$href,$onChange,$onClick,$contentEditable,$attributeType,$attributeAction,$elementId)

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
	removeElement("result")
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
	webRequest("get","http://offeringoverview.s3-website-us-west-2.amazonaws.com/Services.json",function(data){
		//console.log(data)
		sites = JSON.parse(data)

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
		buildPage(pathname);
	}); //end webRequest
}; //end window.onload

function buildPage(name) {
	removeElement("wrapper")
	addElement("content","","","br");
	addElement("content","","grid-container","","","","","","","","","wrapper");
	if (name == "") {
		for (let site of sites) {
			var outerHref = addElement("wrapper","","","a","",site.name);
			addElement(outerHref,site.name,('grid grid-item '+site.Type));
		}
	} else {
		var currentSite;
		for (let site of sites) {
			if (site.name == name) {
				currentSite = site;
			}
		}

		addElement("wrapper","","grid-item "+currentSite.Type+"Page","","","","","","","","","innerWrapper");
		addElement("innerWrapper",name,"","h1","text-align: center");
		if (currentSite.useCase) {
			addElement("innerWrapper",currentSite.useCase,"","h3","text-align: center");
		}; //end if currentSite
		for (let key of getKeys(currentSite)) {
			if (currentSite[key] != "" && key != "name" && key != "useCase" && key != "video") {
				var outerPara = addElement("innerWrapper","","","p");
				addElement(outerPara,key+": ","","strong");

				if (typeof currentSite[key] == "object") {
					var innerUL = addElement(outerPara,"","","ul");
					for (let note of currentSite[key]) {
						addElement(innerUL,note,"","li");
					}
				} else if (typeof currentSite[key] == "string") {
					if (currentSite[key].substr(0,4) == "http") {
						addElement(outerPara,key,"","a","",currentSite[key]);
					} else {
						addElement(outerPara,currentSite[key],"","span");
					}; //end if currentSite key
				} else {
				}; //end if key

			}; //end if currentSite
		}; //end for let key
		if (currentSite.video) {
			document.getElementById("innerWrapper").innerHTML += currentSite.video;
		}; //end if currentSite
	};// end if name
}


