// Get the list of items
// var items;
// webRequest("GET","http://localhost/badURI",function(data){items = data;},"JSON");

// Product and corp pages: display all properties as a list.
// Indexes: display all products or corps in a grid
// for (let item of items) {
	//addElement("table",$innerText,$elementClass,$elementType,$elementStyle,$href,$onChange,$onClick,$contentEditable,$attributeType,$attributeAction,$elementId)
//  }

var sites;
var search_terms = new Array();

// If root, request all services, display page grid.
// If /company, request all services, display company grid. (Don't have this data separate yet.)
// if /pagename isin search_terms, load the services page with that info

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
	  var res = document.getElementById("result");
	  res.innerHTML = '';
	  let list = '';
	  let terms = autocompleteMatch(val);
	  for (i=0; i<terms.length; i++) {
			list += liRef(terms[i]);
	  }
	  res.innerHTML = '<ul>' + list + '</ul>';
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

		var currentSite;
		var pathname = decodeURIComponent(window.location.pathname).replace("/","")

		for (let site of sites) {
			search_terms.push(site.name)
			if (site.name == pathname) {
				currentSite = site;
			}
		}
		search_terms = search_terms.sort();
		
		// if root make product grid
		if (pathname == "") {
			document.getElementById("content").classList.add("grid-container");
			for (let site of sites) {
				var content = divRef(site.name,site.type)
				document.getElementById("content").innerHTML += content;
			}
			
		// if any other page, load its data.
		} else if (search_terms.includes(pathname)) {
			document.getElementById("content").classList.add("textBubbleBG");
			try {
				document.getElementById("content").classList.add(currentSite.type);
			} catch {}
			//console.log(JSON.stringify(currentSite));
			content = "<h1 style='text-align: center;'>"+currentSite.name+"</h1>"
			if (currentSite.useCase) {
				content += "<h3 style='text-align: center;'>"+currentSite.useCase+"</h3>"
			}; //end if currentSite
			document.getElementById("content").innerHTML += content;
			for (let key of getKeys(currentSite)) {
				if (currentSite[key] != "" && key != "name" && key != "useCase") {
					var content = div("<strong>"+key+":</strong> "+currentSite[key])
					if (key == "notes") {
						out = "<strong>"+key+":</strong><ul>";
						for (let note of currentSite[key]) {
							out +=  '<li>' + note + '</li>'
						}
						out +=  '</ul>'
						content = div(out)
					}; //end if currentSite
					document.getElementById("content").innerHTML += content;
				}; //end if currentSite
			}; //end for let key
		} else {
			console.log("bad request")
		}; //end if pagename
	}); //end webRequest
}; //end window.onload

function liRef(term) {
	return '<a href="/' + term + '"><li>' + term + '</li></a>';
}
function liRef(term) {
	return '<a href="/' + term + '"><li>' + term + '</li></a>';
}
function divRef(term,type) {
	return '<a href="/' + term + '"><div class="grid-item '+type+'">' + term + '</div></a>';
}
function div(term) {
	return '<p>' + term + '</p>';
}