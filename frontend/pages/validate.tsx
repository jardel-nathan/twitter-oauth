import type { NextPage } from 'next'
import styled from 'styled-components';
import { Body } from '../styles/body'
import Image from 'next/image';
import loading from '../public/static/loading.svg';
import nookies from 'nookies';
import axios from 'axios';

//* this page validate if oauth is valid
//* redirect to home page if oauth is valid else redirect to login page

export const getServerSideProps = async (context: any) => {

    const oauth_token = context.query.oauth_token;
    const oauth_verifier = context.query.oauth_verifier;

    if (oauth_token && oauth_verifier) {

        await axios.post('http://localhost:3000/access_token', {
            oauth_verifier: oauth_verifier,
            oauth_token: oauth_token,
        }).then(response => {
            nookies.set(context, 'mytwiiter_accesstoken', response.data.access_token, {
                maxAge: 30 * 24 * 60 * 60,
                path: '/',
            })
        })

        
    }

    return {
        redirect: {
            permanent: false,
            destination: '/'
        }
    }

}

const PageLoading = styled.div`

    height: 100vh;

    .title{
     background: white;
     width: 500px;
     height: 500px;
     padding: 50px;
     position: absolute;
     top: 50%;
     left: 50%;
     margin-right: -50%;
     transform: translate(-50%, -50%);
     border-radius: 10px;
    }

`

const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

`



const Validate: NextPage = () => {
    return (
        <Body>
            <PageLoading>
                <div className='title'>
                    <h1>Validando
                        <br />
                        acesso...
                    </h1>

                    <ImageContainer>
                        <Image src={loading} alt="loading" width={150} />
                    </ImageContainer>

                </div>
            </PageLoading>
        </Body>
    )
}

export default Validate
