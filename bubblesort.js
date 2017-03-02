function bubbleSort(array, comparison) {

	for (var i=0; i<array.length; i++) {
		if(comparison(arr[i], arr[i+1])) {
			swap(arr[i], arr[i+1]);
		}
	}


function swap(elem1, elem2) {
	var idx1 = array.indexOf(elem1);
	var idx2 = array.indexOf(elem2);
	array[idx1] = elem2;
	array[idx2] = elem1;
}	

return array;

}



