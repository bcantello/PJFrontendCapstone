describe('Capitalize Filter Test', () => {
   beforeEach(angular.mock.module('transactionList'));

   beforeEach(inject(function ($filter) {
       this.capitalize = $filter('capitalize');
   }));

    it('should capitalize the first name', function () {
        const output = this.capitalize('bobby');

        expect(output).toBe('Bobby');
    });
});
