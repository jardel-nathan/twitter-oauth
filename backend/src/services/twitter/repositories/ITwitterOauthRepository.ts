
export interface ITwitterOauthRepository {
  createRequestToken(): Promise<string>;
  createAccessToken(oauth_token: string, oauth_verifier: string): Promise<string>;
}