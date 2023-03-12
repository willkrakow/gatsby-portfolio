import {capitalized} from '../index';
describe('utils', () => {
    it('capitalized', () => {
        expect(capitalized("abc")).toBe('Abc')
    });
})