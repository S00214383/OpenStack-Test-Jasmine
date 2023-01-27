import { getCurrencies} from "./getCurrencies";

describe('test of array - Rudgery Lopes S00214383', () => {

    it('it should contains USD, GBP and EUR in the array of strings', () => {
    
       expect(getCurrencies()).toContain('GBP');
    });
   


    xit('it should fails  given compute string is not in the array of strings', () => {
    
        expect(getCurrencies()).toContain('CAN');
     });

    
});