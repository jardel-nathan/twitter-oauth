import { CreateRequestTokenService } from './createRequestToken.service';
import { FakeOAuth } from './twitter/repositories/fakes/fakeOauth';


it('should request token', async () => {

  const fakeOAuth = new FakeOAuth();
  const createRequestTokenService = new CreateRequestTokenService(fakeOAuth);

  const requestToken = await createRequestTokenService.execute();

  expect(requestToken).toBe('string');

});

