// expose our config directly to our application using module.exports
module.exports = {

	'facebookAuth' : {
		'clientID' 		: '360506330766828', // your App ID
		'clientSecret' 	: 'f3b2b5ab180b950359a72806546fa331', // your App Secret
		'callbackURL' 	: 'http://localhost:1337/auth/facebook/callback'
	},

	'twitterAuth' : {
		'consumerKey' 		: 'gEkMLH6ZmXLNEsv7pBb5cYfuh',
		'consumerSecret' 	: 'Ty5S0piP17ZiEPuXDdlLH5rAHm1Qv45kGSItm5GohnkEHBtvfz',
		'callbackURL' 		: 'http://localhost:1337/auth/twitter/callback'
	},

	'googleAuth' : {
		'clientID' 		: '939772347329-jls4r8fbs5eqcn7afjgpubnsp5eo8qcv.apps.googleusercontent.com',
		'clientSecret' 	: 'n4MoeYHw4yqVeXKxkwDzxGyH',
		'callbackURL' 	: 'http://localhost:1337/auth/google/callback'
	}

};
