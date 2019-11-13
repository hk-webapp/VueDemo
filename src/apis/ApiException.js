
export class ApiException {

    get Error() {
        return this._error;
    }
    // tslint:disable-next-line: variable-name
    _error;
    constructor(error) {
        this._error = error;
    }

}