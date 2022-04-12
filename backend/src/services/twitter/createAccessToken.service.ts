import axios from 'axios';
import {IAccessTokenDTO} from './dtos/accessTokenDTO';

export class CreateAccessTokenService{

 public async execute({ oauth_token, oauth_verifier }: IAccessTokenDTO) {
   const access_token = await axios.post(`https://api.twitter.com/oauth/access_token?oauth_verifier=${oauth_verifier}&oauth_token=${oauth_token}`, {
    oauth_token: oauth_token,
    oauth_verifier: oauth_verifier
   })
   console.log('access token generated');
   return access_token.data
 }
}

