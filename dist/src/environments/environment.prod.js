"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.emailCredentials = exports.facebookClientSecret = exports.facebookClientId = exports.facebookBaseURL = exports.forgotPasswordBaseURL = exports.forgotPasswordExpiryLinkTemplatePath = exports.passwordConfiguration = exports.jwt = exports.autoSchemaFile = exports.globalApiPrefix = exports.port = exports.saltRounds = exports.debug = exports.playground = exports.rootUserDetails = exports.typeormConfiguration = void 0;
exports.typeormConfiguration = {
    type: 'mysql',
    host: process.env.HOST,
    port: process.env.PORT,
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    synchronize: true,
    logging: true,
    keepConnectionAlive: true
}, exports.rootUserDetails = {
    firstname: 'root',
    lastname: 'root',
    username: 'root',
    email: 'root@project.com',
    password: 'root@123'
}, exports.playground = true, exports.debug = false, exports.saltRounds = 10, exports.port = 3000, exports.globalApiPrefix = 'graphql', exports.autoSchemaFile = 'schema.gpl', exports.jwt = {
    secret: 'secret',
    tokenExpiry: '72000s',
    refreshExpiry: '3600000s',
    forgotPasswordLinkExpiry: '10800s'
}, exports.passwordConfiguration = {
    minimumLength: 8,
    maximumLength: 16
}, exports.forgotPasswordExpiryLinkTemplatePath = '/templates/forgot-password.ejs', exports.forgotPasswordBaseURL = 'http://localhost:3333/set-password?token=', exports.facebookBaseURL = 'https://graph.facebook.com/v13.0/', exports.facebookClientId = '', exports.facebookClientSecret = '', exports.emailCredentials = {
    username: 'appname@gmail.com',
    password: 'password',
    port: 587,
    host: 'smtp.live.com'
};
//# sourceMappingURL=environment.prod.js.map