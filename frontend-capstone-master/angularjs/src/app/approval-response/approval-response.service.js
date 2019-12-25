export default class approvalResponseService {
    constructor() {
        this.newValue = false;
    }

    showApprovalResponse() {
        this.setShouldShowApprovalResponse(true);
    }

    getShouldShowApprovalResponse() {
        return this.newValue;
    }

    setShouldShowApprovalResponse(val) {
        this.newValue = val;
    }
}
