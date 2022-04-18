import { Router } from "express"; // Router: é usado para criar rotas 
import Authentication from "../../services/oauth/Authentication";
import { IAccessToken } from "../../services/oauth/Authentication";
import { CreateRequestTokenService } from "../../services/createRequestToken.service";
import { CreateAccessTokenService } from "../../services/createAccessToken.service";
import { GetUserTimelineService } from "../../services/getUserTimeline.service";
import { VerifyCredentialsService } from "../../services/verifyCredentials.service";
import TwitterRepository from "../../services/infra/twitter/repository/twitterRepository";
const routes = Router()
// id: 'bEQtV1NCNjZnOHV1SmJuZnBQdUU6MTpjaQ',
// secret: '8uBPX10n0JObgtZqEgMXTxa2wFrIPXAtU3VtZ5Hm07ZOb3aVDd'

const auth = new Authentication();

routes.post('/request_token', async (req, res) => { // rota do tipo get

    try {
        const reateRequestTokenService = new CreateRequestTokenService(new TwitterRepository())
        const link = await reateRequestTokenService.execute(); // link de autenticação
        return res.json(link)
    } catch (e: any) {
        return res.status(400).json(e.message);
    }

})


routes.post('/access_token', async (req, res) => { // rota do tipo get
    const oauth_token = req.body.oauth_token as string;
    const oauth_verifier = req.body.oauth_verifier as string;
    const param: IAccessToken = { oauth_token, oauth_verifier }
    try {
        const createAccessTokenService = new CreateAccessTokenService(new TwitterRepository())
        const access_token = await createAccessTokenService.execute(param); // link de autenticação
        return res.json({ access_token })
    } catch (e: any) {
        return res.status(400).json(e.message);
    }
})


routes.post('/verify_credentials', async (req, res) => { // rota do tipo get
    const token_key = req.body.token_key as string;
    const token_secret = req.body.token_secret as string;
    try {
        const verifyCredentialsService = new VerifyCredentialsService()
        const user = await verifyCredentialsService.execute({
            token_key,
            token_secret
        });
        return res.json(JSON.parse(user as string))
    } catch (e: any) {
        return res.status(400).json(e.message);
    }
})




routes.post('/user_timeline', async (req, res) => { 
    const token_key = req.body.token_key as string;
    const token_secret = req.body.token_secret as string;
    try {
        const getUserTimelineService = new GetUserTimelineService()
        const user = await getUserTimelineService.execute({
            token_key,
            token_secret
        });
        return res.json(JSON.parse(user as string))
    } catch (e: any) {
        return res.status(400).json(e.message);
    }
})

export default routes;