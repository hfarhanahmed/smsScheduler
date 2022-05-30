export const
	typeormConfiguration = {
		type: 'mysql',
		host: process.env.HOST,
		port: process.env.PORT,
		username: process.env.MYSQL_USER,
		password: process.env.MYSQL_PASSWORD,
		database: process.env.MYSQL_DATABASE,
		synchronize: true,
		logging: true,
		keepConnectionAlive: true
	},
	rootUserDetails = {
		firstname: 'root',
		lastname: 'root',
		username: 'root',
		email: 'root@project.com',
		password: 'root@123'
	},
	playground = true,
	debug = false,
	saltRounds = 10,
	port = 3000,
	globalApiPrefix = 'graphql',
	autoSchemaFile = 'schema.gpl',
	jwt = {
		secret: 'secret',
		tokenExpiry: '72000s',
		refreshExpiry: '3600000s',
		forgotPasswordLinkExpiry: '10800s'
	},
	passwordConfiguration = {
		minimumLength: 8,
		maximumLength: 16
	},
	forgotPasswordExpiryLinkTemplatePath = '/templates/forgot-password.ejs',
	forgotPasswordBaseURL = 'http://localhost:3333/set-password?token=',
	facebookBaseURL = 'https://graph.facebook.com/v13.0/',
	facebookClientId = '',
	facebookClientSecret = '',
	emailCredentials = {
		username: 'appname@gmail.com',
		password: 'password',
		port: 587,
		host: 'smtp.live.com'
	};