(function() {

	console.log('loaded');

	var $numbers = $('span.number')
	var $screen = $('#screen')
	var $operators = $('span.operator')
	var $clear = $('#clear')
	var $equals = $('#equals')

	$numbers.click(appendNum)
	$operators.click(appendOperator)
	$clear.click(clearScreen)
	$equals.click(evaluate)

	function appendNum() {
		var $screenText = $screen.text()
		var $currentNumber = $(this).text()
		$screen.text($screenText + $currentNumber)
	}

	function appendOperator() {
		var $screenText = $screen.text()
		var $currentOperator = $(this).text()
		$screen.text($screenText + $currentOperator)
	}

	function clearScreen() {
		$screen.empty() // removes all HTML within the container it is applied on
	}

	function evaluate() {
		var $screenText = $screen.text()
		if ($screenText.includes('x')) {
			$screenText = $screenText.replace('x', '*')
		}
		if ($screenText.includes('÷')) {
			$screenText = $screenText.replace('÷', '/')
		}
		// catch errors
		try {
			eval($screenText)
		} catch (e) {
			$screen.text('ERROR')
		}
		$screen.text(eval($screenText))
	}

}())
