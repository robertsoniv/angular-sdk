function CatalogID() {
    return {
        'Get': _get,
        'Set': _set
    };

    function _get() {
        return $cookies.get(appname + '.catalogID');
    }

    function _set(value) {
        $cookies.put(appname + '.catalogID', value);
    }
}