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
		document.getElementById('message').innerHTML = "THE WANTED WORD IS IN THE DICTIONARY";
	}else {
		document.getElementById('message').innerHTML = "Unfortunately, the word is not yet in the dictionary";
	}
	document.getElementById('search_word').value = "";
	return false;
}