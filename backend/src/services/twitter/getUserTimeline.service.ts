import Authentication from '../auth/Authentication';
import { promisify } from 'util';
import { IGetUserTimelineDTO } from './dtos/getUserTimelineDTO';


export class GetUserTimelineService {
 public async execute({ token_key, token_secret }: IGetUserTimelineDTO) {
  const oauth = new Authentication().initOAuth();
  const oauthExec = promisify(oauth.getProtectedResource.bind(oauth));
  const verify_credentials = await oauthExec('https://api.twitter.com/1.1/statuses/user_timeline.json', 'GET', token_key, token_secret)
  console.log('user timeline generated');
  return verify_credentials;
 }
}