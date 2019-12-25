import approvalResponse from './approval-response.html';

function approvalResponseController($scope, $timeout, approvalResponseService) {
    $scope.transactionSuccess = false;

    $scope.$watch(() => approvalResponseService.getShouldShowApprovalResponse(), () => {
        if ($scope.transactionSuccess !== approvalResponseService.getShouldShowApprovalResponse()) {
            $scope.transactionSuccess = true;
        }
        $timeout(() => {
            $scope.transactionSuccess = false;
            approvalResponseService.setShouldShowApprovalResponse(false);
        }, 5000);
    });
}

export default {
    template: approvalResponse,
    controller: approvalResponseController,
};
