function bubbleSort(array) {

	for (var i=0; i<array.length; i++) {
		if(array[i] > array[i+1]) {
			swap(array[i], array[i+1]);
		}
	}

return array;

}


function swap(elem1, elem2) {
	var idx1 = array.indexOf(elem1);
	var idx2 = array.indexOf(elem2);
	array[idx1] = elem2;
	array[idx2] = elem1;
}

function comparison(elem1, elem2)




