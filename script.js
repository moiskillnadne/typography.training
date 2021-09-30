

console.log('some 1')
setTimeout(() => Promise.resolve(5).then((res) => console.log('some 2')))
setTimeout(() => console.log('some 3'))
Promise.resolve(5).then((res) => console.log('some 4'))
console.log('some 5')