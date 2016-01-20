function As() {
    impersonating = true;

	switch (typeof arguments[0]) {
		case 'string':
			Auth().SetImpersonationToken(arguments[0]);
			break;
		case 'object':
			CreateToken(arguements[0]);
			break;
		default: 
			break;
	}
	return this; 

	function CreateToken(CredientialsObject) {
		if (CredientialsObject.UserID && CredientialsObject.ClientID) {
			Users().GetAccessToken(CredientialsObject.UserID, {ClientID: CredientialsObject.ClientID, Claims: CredientialsObject.Claims ? CredientialsObject.Claims : ["FullAccess"]})
				.then(function(token) {
					Auth().SetImpersonationToken(token);
				});
		}
	}
}
