import axios from 'axios';
import OAuth from 'oauth';
import { promisify } from 'util'

export interface IAccessToken {
 oauth_token: string;
 oauth_verifier: string;
}

export interface ICredentials {
 token_key: string;
 token_secret: string;
}

export default class Authentication {
 public initOAuth(): OAuth.OAuth {
  return new OAuth.OAuth(
   'https://api.twitter.com/oauth/request_token',
   'https://api.twitter.com/oauth/access_token',
   process.env.TWITTER_CONSUMER_KEY as string,
   process.env.TWITTER_CONSUMER_SECRET as string,
   '1.0A',
   null,
   'HMAC-SHA1'
  );
 }
}