const { expect } = require('chai')
const { gradeResults } = require('./')

describe('Grade Results Function', () => {
    it('should accept only arrays', () => {
        const sampleResults = 67
        const res = gradeResults(sampleResults)
        expect(res).to.eql('Please enter an array with scores of data type number between 0 - 100')
    })
    it('should accept only arrays with numbers', () => {
        const sampleResults = ['pass', 57, 'nope']
        const res = gradeResults(sampleResults)
        expect(res).to.eql('Please enter an array with scores of data type number between 0 - 100')
    })
    it('should accept only arrays with numbers between 0 - 100', () => {
        const sampleResults = [-23, 57, 87]
        const res = gradeResults(sampleResults)
        expect(res).to.eql('Please enter an array with scores of data type number between 0 - 100')
    })
    it('should compute grades correctly', () => {
        const sampleResults = [23, 57, 87, 77]
        const res = gradeResults(sampleResults)
        expect(res).to.eql(['F', 'D', 'A', 'B'])
    })
})