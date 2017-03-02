describe('Bubble Sort', function(){
	it('handles an empty array', function(){
		expect( bubbleSort([]) ).toEqual( [] );
	});
	it('handles single items', function(){
		expect( bubbleSort('element') ).toEqual( 'element' );
	});
	it('handles multiple items', function(){
		expect( bubbleSort('elem1', 25, ['grace', 'hopper']) ).toEqual('elem1', 25, ['grace', 'hopper'])
	});
};