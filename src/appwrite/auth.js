import config from '../config/config';
import { Client, Account, ID} from 'appwrite';

export class AuthService{
    client = new Client();
    account;

    constructor(){
        this.client
            .setEndpoint(config.appUrl)
            .setProject(config.appProjectId);
        this.account = new Account(this.client);
    }

    async login({email, password}){
        try {
            return await this.account.createEmailPasswordSession(email, password);
        } catch (error) {
            throw error;
        }
    }

    async createAccount({email, password, name}){
        try {
            const userAccount = await this.account.create(
                ID.unique(),
                email,
                password,
                name
            );
            if(userAccount){
                return this.login({email, password});
            }else{
                return userAccount;
            }
        } catch (error) {
            throw error;
        }
    }

    async logout(){
        try {
            await this.account.deleteSession();
        } catch (error) {
            console.log("AuthService=> logout() :: ", error);
        }
    }
}
const authService = new AuthService();
export default authService;