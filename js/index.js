(function() {
	console.log('hello world');

	$('span').on('click', function() {

		if ($(this).attr('class') === 'number') {
			var value = $(this).text()
			$('#screen').append(value)
		}

		if ($(this).attr('class') === 'operator') {
			var value = $(this).text()
			$('#screen').append(value)
		}

		if ($(this).attr('id') === 'equals') {
			// console.log('working');
			var screenText = $('#screen').text()
			if
			console.log(screenText);
			var x = eval(screenText)
			console.log(x);
			// $('#screen').empty;


		}

		if ($(this).attr('id') === 'clear') {
			console.log('working');
			$('#screen').empty()
		}





	})

}())
