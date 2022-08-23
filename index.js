'use strict'

/**
 * Converts to camel case
 *
 * @param text
 *
 * @return {string}
 */
function toCamelCase(text)
{
	let chars = []
	for (let i = 0, wordStart = false; i < text.length; i++) {
		const char = text[i]

		if ( [' ', '_', '-'].includes(char) ) {
			wordStart = true
			continue
		}

		if (chars.length === 0)
			chars.push( char.toLowerCase() )
		else
			chars.push( wordStart ? char.toUpperCase() : char)

		wordStart = false
	}

	return chars.join('')
}

module.exports = {
	toCamelCase
}
