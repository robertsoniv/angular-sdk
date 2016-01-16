function Auth() {
    return {
        'GetToken': _getToken,
        'SetToken': _setToken,
        'SetImpToken': _setImpToken,
        'RemoveToken': _removeToken,
        'RemoveImpToken': _removeImpToken
    };

    function _getToken() {
        return $cookieStore.get(appname + (impersonating ? '.impersonation' : '') + '.token');
    }

    function _setToken(token) {
        $cookieStore.put(appname + '.token', token);
    }

    function _setImpToken(token) {
        $cookieStore.put(appname + '.impersonation.token', token);
    }

    function _removeToken() {
        $cookieStore.remove(appname + '.token')
    }

    function _removeImpToken() {
        $cookieStore.remove(appname + '.impersonation.token')
    }
}