var set = new Set();

function add() {
	let word_add = document.getElementById('ad_word').value;		
	set.add(word_add);
	document.getElementById('ad_word').value = "";
    return false;
}

function search () {
	let word_search = document.getElementById('search_word').value;
	let finder = set.has(word_search); 
	if (finder) {
		document.getElementById('message').innerHTML = "THE WORD '" + word_search + "' IS IN THE DICTIONARY";
	}else {
		document.getElementById('message').innerHTML = "Unfortunately, the word  '"  + word_search + "' is not yet in the dictionary";
	}
	document.getElementById('search_word').value = "";
	return false;
}

function dictionary() {
	let list = 'The list of words in the dictionary is: ';
	if(set.size == 0) {
		list += "emty";
	} else {
		set.forEach(word => {
	  		list += word + ", ";
		});
	}	
	document.getElementById('dictionary').innerHTML = list;
	return false; 
}
