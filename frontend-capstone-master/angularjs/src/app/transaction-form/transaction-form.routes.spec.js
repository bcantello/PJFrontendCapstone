describe('transaction form routes test', () => {
    beforeEach(angular.mock.module('root'));
    beforeEach(angular.mock.module('ui.router'));

    beforeEach(inject(function ($compile, $rootScope, $state) {
        this.state = $state;
        this.rootScope = $rootScope;
        this.compile = $compile;

        this.element = this.compile('<root></root>')(this.rootScope.$new());
        this.state.go('transactionForm');
        $rootScope.$apply();
    }));

    it('should contain transaction form', function () {
        const formData = this.element[0].querySelector('main page-header:nth-of-type(1)');
        expect(formData.innerText.trim()).toBe('New transactions');
    });
});
