import Authentication from './oauth/Authentication';
import { promisify } from 'util';
import {IVerifyCredentialsDTO} from './twitter/dtos/verifyCredentialsDTO';


export class VerifyCredentialsService{
 public async execute({token_key, token_secret} : IVerifyCredentialsDTO) {
  const oauth = new Authentication().initOAuth();
  const oauthExec = promisify(oauth.getProtectedResource.bind(oauth));
  const verify_credentials = await oauthExec('https://api.twitter.com/1.1/account/verify_credentials.json', 'GET', token_key, token_secret)
  console.log('user credentials verified');
  return verify_credentials
 }
}