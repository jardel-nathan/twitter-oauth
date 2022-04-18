import Authentication from "../../../oauth/Authentication";
import { ITwitterOauthRepository } from "../../../twitter/repositories/ITwitterOauthRepository";
import { promisify } from 'util';
import axios from "axios";

export default class TwitterRepository implements ITwitterOauthRepository {

 public async createRequestToken(): Promise<string> {

  const oauth = new Authentication().initOAuth();
  //*promisify: é usado para converter o callback em uma função async
  //*bind: é usado para passar o this para o contexto correto 
  const oauthExec = promisify(oauth.getOAuthRequestToken.bind(oauth)); //! entender melhor o bind
  const request_token = await oauthExec()
  const link = 'https://api.twitter.com/oauth/authenticate?oauth_token=' + request_token;
  console.log('request token generated');

  return link;

 }

 public async createAccessToken(oauth_token: string, oauth_verifier: string): Promise<string> {

  const access_token = await axios.post(`https://api.twitter.com/oauth/access_token?oauth_verifier=${oauth_verifier}&oauth_token=${oauth_token}`, {
   oauth_token: oauth_token,
   oauth_verifier: oauth_verifier
  })
  console.log('access token generated');
  return access_token.data

 }

}