
// shim
if (typeof unsafeWindow === 'undefined') {
	var unsafeWindow = window
}

// shim for string methods
if (typeof String.prototype.contains !== 'function') {
	String.prototype.contains = String.prototype.includes
}

