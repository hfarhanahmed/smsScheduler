export declare const typeormConfiguration: {
    type: string;
    host: string;
    port: string;
    username: string;
    password: string;
    database: string;
    synchronize: boolean;
    logging: boolean;
    keepConnectionAlive: boolean;
}, rootUserDetails: {
    firstname: string;
    lastname: string;
    username: string;
    email: string;
    password: string;
}, debug = false, saltRounds = 10, port = 3000, globalApiPrefix = "graphql", autoSchemaFile = "schema.gpl", jwt: {
    secret: string;
    tokenExpiry: string;
    refreshExpiry: string;
    forgotPasswordLinkExpiry: string;
}, passwordConfiguration: {
    minimumLength: number;
    maximumLength: number;
}, forgotPasswordExpiryLinkTemplatePath = "/templates/forgot-password.ejs", forgotPasswordBaseURL = "http://localhost:3000/set-password?token=", facebookBaseURL = "https://graph.facebook.com/v13.0/", facebookClientId = "", facebookClientSecret = "", emailCredentials: {
    username: string;
    password: string;
    port: number;
    host: string;
};
