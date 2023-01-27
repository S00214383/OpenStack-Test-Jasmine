import {greet} from './greet';


describe('greet', () => {
    it('it should include the name in the message - Rudgery Lopes S00214383', () => {
        expect(greet('Frank')).toContain('Frank');
    })
})




    xit('it should fail cause t does not include the name in the message - Rudgery Lopes S00214383', () => {
        expect(greet('Frank')).toContain('Philip');
    })
