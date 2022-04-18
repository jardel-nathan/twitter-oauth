import { ITwitterOauthRepository } from './twitter/repositories/ITwitterOauthRepository';

export class CreateRequestTokenService {

 constructor(private oauthTwitterRepository: ITwitterOauthRepository) { // injetando o repositório de autenticação do twitter
 }

 public async execute() {
  return await this.oauthTwitterRepository.createRequestToken()
 }

}