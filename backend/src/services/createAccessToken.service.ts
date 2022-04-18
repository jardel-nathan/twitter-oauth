import axios from 'axios';
import {IAccessTokenDTO} from './twitter/dtos/accessTokenDTO';
import { ITwitterOauthRepository } from './twitter/repositories/ITwitterOauthRepository';

export class CreateAccessTokenService{

  private oauthTwitterRepository: ITwitterOauthRepository;

  constructor(twitterOauthRepository: ITwitterOauthRepository) {
    this.oauthTwitterRepository = twitterOauthRepository;
  }

 public async execute({ oauth_token, oauth_verifier }: IAccessTokenDTO) {
  return await this.oauthTwitterRepository.createAccessToken(oauth_token, oauth_verifier)
 }

}

