describe('approval response service test', () => {
    beforeEach(angular.mock.module('approvalResponse'));
    beforeEach(inject(function (approvalResponseService) {
        this.approvalResponse = approvalResponseService;
    }));

    it('should have a default value of false', function () {
        expect(this.approvalResponse.getShouldShowApprovalResponse()).toBe(false);
    });

    it('should have a value of true after showApprovalResponse() is called', function () {
        this.approvalResponse.showApprovalResponse();
        expect(this.approvalResponse.getShouldShowApprovalResponse()).toBe(true);
    });

    it('should set the value to false', function () {
        this.approvalResponse.setShouldShowApprovalResponse(false);
        expect(this.approvalResponse.getShouldShowApprovalResponse()).toBe(false);
    });
});
