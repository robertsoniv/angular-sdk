function Auth() {
    return {
        'GetToken': _getToken,
        'SetToken': _setToken,
        'RemoveToken': _removeToken,
        'SetImpersonationToken': _setImpersonationToken,
        'RemoveImpersonationToken': _removeImpersonationToken,
        'ReadToken': _readToken
    };

    function _getToken(credentials) {
        var params = {
            scope: ocscope,
            client_id: clientid
        };

        switch (typeof credentials) {
            case 'string':
                params.grant_type = 'client_credentials';
                params.client_secret = credentials;
                break;
            case 'object':
                params.grant_type = 'password';
                params.username = credentials.Username;
                params.password = credentials.Password;
                break;
            default:
                break;
        }

        return $resource(authurl, {}, { login: { method: 'POST'}}).login($.param(params)).$promise;
    }

    function _setToken(token) {
        $cookieStore.put(appname + '.token', token);
    }

    function _removeToken() {
        $cookieStore.remove(appname + '.token')
    }

    function _setImpersonationToken(token) {
        $cookieStore.put(appname + '.impersonation.token', token);
    }

    function _removeImpersonationToken() {
        $cookieStore.remove(appname + '.impersonation.token')
    }

    function _readToken() {
        return $cookieStore.get(appname + (impersonating ? '.impersonation' : '') + '.token');
    }

}