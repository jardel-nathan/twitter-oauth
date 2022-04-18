import { ITwitterOauthRepository } from "../ITwitterOauthRepository";

export class FakeOAuth implements ITwitterOauthRepository {


 async createAccessToken(oauth_token: string, oauth_verifier: string): Promise<string> {

  return 'string';

 }


 async createRequestToken(): Promise<string> {
  return 'string';
 }

}