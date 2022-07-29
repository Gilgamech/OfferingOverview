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
	// webRequest("get","https://45rgkt67agr5fty2oycvxqkmiu0ndjec.lambda-url.us-west-2.on.aws/",function(data){
	//var data = '[{ "cost": "", "encryption": "", "HaBcDr": "", "name": "AzureAD", "stockPriceOrOwnership": "Microsoft", "stack": "", "type": "SaaS", "useCase": "Serverless Active Directory", "notes":[] }, { "cost": "", "encryption": "", "HaBcDr": "", "name": "Windows 365", "stockPriceOrOwnership": "Microsoft", "stack": "", "type": "SaaS", "useCase": "Package sort for physical logistics throughput.", "notes":[] }, { "cost": "", "encryption": "", "HaBcDr": "", "name": "Excel Live", "stockPriceOrOwnership": "Microsoft", "stack": "", "type": "SaaS", "useCase": "Embed a live-edit Excel spreadsheet into your Teams meeting.", "notes":[] }]'
	webRequest("get","http://offeringoverview.s3-website-us-west-2.amazonaws.com/Services.json",function(data){
		//console.log(data)
		sites = JSON.parse(data)
		for (let site of sites) {
			search_terms.push(site.name)
		}
		search_terms = search_terms.sort();
		var pathname = decodeURIComponent(window.location.pathname).replace("/","")
		
		// if root make product grid
		if (pathname == "") {
			document.getElementById("content").classList.add("grid-container");
			for (let term of search_terms) {
				var content = divRef(term)
				document.getElementById("content").innerHTML += content;
			}
			
		// if any other page, load its data.
		} else if (search_terms.includes(pathname)) {
			for (let site of sites) {
					console.log("Checking "+JSON.stringify(site.name));
				if (site.name == pathname) {
					console.log(JSON.stringify(site));
					content = "<h2 style='text-align: center;'>"+site.name+"</h2>"
					document.getElementById("content").innerHTML += content;
					for (let key of getKeys(site)) {
						if (site[key] != "" && key != "name") {
							var content = div(key+" - "+site[key])
							document.getElementById("content").innerHTML += content;
						}
					}
				}
			}
		} else {
			console.log("bad request")
		}
	})
}

function liRef(term) {
	return '<li><a href="/' + term + '">' + term + '</li>';
}
function divRef(term) {
	return '<div class="grid-item mainGrid"><a href="/' + term + '">' + term + '</div>';
}function div(term) {
	return '<div>' + term + '</div>';
}