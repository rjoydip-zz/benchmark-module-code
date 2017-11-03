'use strict'

class One {
	constructor() {}
	test() {
		return true
	}
}

function Two() {}

Two.prototype.test = function () {
	return true
}

const Three = function () {
	return {
		test: function () {
			return true
		}
	}
}

module.exports = Object.assign({}, { One, Two, Three })