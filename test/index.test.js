'use strict'

const {strictEqual}  = require('assert')
const {describe, it} = require('@popovmp/mocha-tiny')
const {toCamelCase}  = require('../index.js')

describe('camel-case', () => {

	describe('toCamelCase', () => {
		it('foo -> foo', () => {
			strictEqual(toCamelCase('foo'), 'foo')
		})

		it('-foo -> foo', () => {
			strictEqual(toCamelCase('-foo'), 'foo')
		})

		it('--foo -> foo', () => {
			strictEqual(toCamelCase('--foo'), 'foo')
		})

		it('-foo-bar -> fooBar', () => {
			strictEqual(toCamelCase('-foo-bar'), 'fooBar')
		})

		it('_foo_bar -> fooBar', () => {
			strictEqual(toCamelCase('_foo_bar'), 'fooBar')
		})

		it('_foo bar -> fooBar', () => {
			strictEqual(toCamelCase('_foo bar'), 'fooBar')
		})

		it(' Foo barBaz -> fooBarBaz', () => {
			strictEqual(toCamelCase(' Foo barBaz'), 'fooBarBaz')
		})
	})
})
