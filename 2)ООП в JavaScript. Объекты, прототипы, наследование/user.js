
let user = {
    'login': '',
    'password': '',
    'validetePassword': function () {
        if (this.password.length > 6) {
            return true;
        } else {
            return false;
        }
    }
};



