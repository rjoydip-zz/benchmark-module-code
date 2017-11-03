'use strict'
const Benchmark = require('benchmark')

const { One, Two, Three } = require('./index')

const suite = new Benchmark.Suite

// add tests
suite
	.add('One', {
		'defer': true,
		'fn': function (deferred) {
			const _one = new One()
			_one.test()
			deferred.resolve()
		}
	})
	.add('Two', {
		'defer': true,
		'fn': function (deferred) {
			const _two = new Two()
			_two.test()
			deferred.resolve()
		}
	})
	.add('Three', {
		'defer': true,
		'fn': function (deferred) {
			const _three = Three()
			_three.test()
			deferred.resolve()
		}
	})
	// add listeners
	.on('cycle', function (event) {
		console.log(String(event.target))
	})
	.on('complete', function () {
		console.log('Fastest is ' + this.filter('fastest').map('name'))
	})
	// run async
	.run({ 'async': true })