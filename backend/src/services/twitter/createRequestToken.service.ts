import {promisify} from 'util';
import Authentication from '../auth/Authentication';

export class CreateRequestTokenService {


 public async execute() {
  const oauth = new Authentication().initOAuth();
  //*promisify: é usado para converter o callback em uma função async
  //*bind: é usado para passar o this para o contexto correto 
  const oauthExec = promisify(oauth.getOAuthRequestToken.bind(oauth)); //! entender melhor o bind
  const request_token = await oauthExec()
  const link = 'https://api.twitter.com/oauth/authenticate?oauth_token=' + request_token;
  console.log('request token generated');
  return link;
 }

}