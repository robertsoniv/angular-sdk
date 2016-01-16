function Credentials() {
    return {
        'Get': _get,
        'Delete': _delete
    };

    function _get(credentials) {
        var data = $.param({
            grant_type: 'password',
            scope: ocscope,
            client_id: clientid,
            username: credentials.Username,
            password: credentials.Password
        });
        return $resource(authurl, {}, { login: { method: 'POST'}}).login(data).$promise;
    }

    function _delete() {
        Auth.RemoveToken();
    }
}