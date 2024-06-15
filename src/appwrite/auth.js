import conf from '../conf/conf.js';
import { Client, Account, ID } from "appwrite";


export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
            
    }

    async createAccount({email, password, name}) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                // call another method
                return this.login({email, password});
            } else {
               return  userAccount;
            }
        } catch (error) {
            throw error;
        }
    }

    async login({email, password}) {
        try {
            return await this.account.createEmailSession(email, password);
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
            // console.log()
        } catch (error) {
            console.log("Appwrite serive :: getCurrentUser :: error", error);
        }

        return null;
    }

    async logout() {

        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite serive :: logout :: error", error);
        }
    }


    //for name update
    async updateName(NAME){
        try {
            return await this.account.updateName(NAME)
        } catch (error) {
            console.log("Appwrite serive :: updateName :: error",error);
            
        }
    }

    //for email  update and password for confirmation
    async updateEmail(email,password){
        try {
            const response = await this.account.updateEmail(email,password)
            return response
        } catch (error) {
            console.log("Appwrite serive :: updateEmail :: error",error);
            // throw error
        }
    }

    //for password recovery
    async recovery1(email){
        try {
            const response = await this.account.createRecovery(email,'http://localhost:5173/reset') //**********take care here if port changes than here port will have to change */
            return response
        } catch (error) {
            console.log("Appwrite serive :: recovery1 :: error",error);
            console.log("also check for port changed or not!");
        }
    }
    //for reset password
    async resetPassword(userId,secret,newPassword){
        try {
            const response = await this.account.updateRecovery(userId,secret,newPassword,newPassword)
            return response
        } catch (error) {
            console.log("Appwrite service :: resetPassword :: error",error);
            throw error
        }
    }




}

const authService = new AuthService();

export default authService

