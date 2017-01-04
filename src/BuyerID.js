function BuyerID() {
    return {
        'Get': _get,
        'Set': _set
    };

    function _get() {
        return $cookies.get(appname + '.buyerID');
    }

    function _set(value) {
        $cookies.put(appname + '.buyerID', value);
    }
}