const { expect } = require('chai')
const { gradeResults, gradeResult, validateResults } = require('./')

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

describe('gradeResult function', () => {
    it('should grade properly', () => {
        expect(gradeResult(90)).to.eql('A');
        expect(gradeResult(75)).to.eql('B');
        expect(gradeResult(65)).to.eql('C');
        expect(gradeResult(55)).to.eql('D');
        expect(gradeResult(20)).to.eql('F');        
    })
   
})

describe('validateResults function', () => {
    it('should only accept arrays', () => {
        const sampleResults = 5
        expect(() => validateResults(sampleResults)).to.throw(Error)
    })
    it('should only validate numbers', () => {
        const sampleResults = [10, 'test', 83, {test: "test"}];
        const res = validateResults(sampleResults)
        expect(res).to.eql(true)
    })
    it('should only validate integers', () => {
        const sampleResults = [10, 'test', 83.5, {test: "test"}];
        const res = validateResults(sampleResults)
        expect(res).to.eql(true)
    })
    it('should only validate numbers 0-100', () => {
        const sampleResults = [10, -1, 300, 21];
        const res = validateResults(sampleResults);
        expect(res).to.eql(true)
    })
})

