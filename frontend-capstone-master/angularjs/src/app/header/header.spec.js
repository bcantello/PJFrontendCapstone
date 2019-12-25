describe('page header component test', () => {
    beforeEach(angular.mock.module('pageHeader'));

    beforeEach(inject(function ($compile, $rootScope) {
        this.element = $compile('<page-header text="My header text"></page-header>')($rootScope);
        $rootScope.$apply();
    }));

    it('displays text correctly', function () {
        expect(this.element[0].innerText.trim()).toBe('My header text');
    });
});
