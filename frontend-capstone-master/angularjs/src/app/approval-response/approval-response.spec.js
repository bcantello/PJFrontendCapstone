describe('approved transaction Success! banner', () => {
    beforeEach(angular.mock.module('approvalResponse'));

    beforeEach(inject(function ($compile, $rootScope, $httpBackend, $timeout,
        approvalResponseService) {
        this.scope = $rootScope;
        this.approvalResponse = approvalResponseService;
        this.timeout = $timeout;
        this.bannerElement = $compile('<approval-response></approval-response>')($rootScope.$new());
        this.isBannerShowing = function () {
            return !this.bannerElement[0].querySelector('.ng-hide');
        };

        $rootScope.$apply();
    }));

    it('should initially be hidden', function () {
        expect(this.isBannerShowing()).toBe(false);
    });

    it('should should display banner TEST', function () {
        this.approvalResponse.showApprovalResponse();

        this.scope.$apply();

        expect(this.isBannerShowing()).toBe(true);

        this.timeout.flush();

        expect(this.isBannerShowing()).toBe(false);
    });
});
