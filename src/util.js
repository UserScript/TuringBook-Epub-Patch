app.styleElem = null

app.insertCSS = function (css) {
	// prepare css container
	var elem = app.styleElem
	if (!elem) {
		elem = app.styleElem = document.createElement('style')
		elem.id = 'userscript-css'
		document.head.appendChild(elem)
	}

	elem.innerHTML = css

	// log
	var prefix = app.SHORT_NAME ? '[' + app.SHORT_NAME + ']' : ''
	var msg = [prefix, 'css updated.'].join(' ')
	console.log(msg)

}
