# Converts a text to camel case

Code:
```javascript
const {toCamelCase} = require('@popovmp@camel-case')

toCamelCase(     'foo') // => foo
toCamelCase(    '-foo') // => foo
toCamelCase(   '--foo') // => foo
toCamelCase('-foo-bar') // => fooBar
toCamelCase('_foo_bar') // => fooBar
toCamelCase('_foo bar') // => fooBar
toCamelCase(' Foo barBaz') // => fooBarBaz

```
