const {shuffleArray} = require('./utils')
const {bots} = require('./data')

describe('shuffleArray should', () => {
    test('return an array', () => {
        expect(shuffleArray(bots)).toBeInstanceOf(Array)
    })

    test('not alter the length of the array passed in', () => {
        expect(bots.length).toEqual(shuffleArray(bots).length)
    })
})