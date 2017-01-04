function Refresh() {
    var service = {
        Set: _set,
        Get: _get,
        SetToken: _setToken,
        ReadToken: _readToken,
        GetToken: _getToken,
        RemoveToken: _removeToken
    };
    var remember;
    var scope = $injector.has('scope') ? $injector.get('scope') : null;
    var ocscope = $injector.has('ocscope') ? $injector.get('ocscope') : null;

    return service;
    ////

    function _set(value) {
        remember = value;
    }

    function _get() {
        return remember;
    }

    function _setToken(token) {
        return $cookies.put(appname + '.refresh_token', token);
    }

    function _readToken() {
        return $cookies.get(appname + '.refresh_token');
    }

    function _removeToken(){
        $cookies.remove(appname + '.refresh_token');
    }

    function _getToken(token) {
        var data = $.param({
            grant_type: 'refresh_token',
            scope: scope ? scope : ocscope,
            client_id: clientid,
            refresh_token: token
        });
        return $resource(authurl, {}, {refresh: {method: 'POST'}}).refresh(data).$promise;
    }

}