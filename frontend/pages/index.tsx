import Authentication from '../components/authentication'
import MyTweets from '../components/mytweets';
import { Body } from '../styles/body'
import nookies from 'nookies';
import axios from 'axios';
import styled from 'styled-components';


export const getServerSideProps = async (context: any) => {

  // nookies is a library that helps us to get the cookies from the browser
  const cookies = nookies.get(context); //* get the cookies from the browser

  if (cookies.mytwiiter_accesstoken) {


    const authtokens = new URLSearchParams(cookies.mytwiiter_accesstoken) //* URLsearchParams is a class that helps us to parse the query string of a URL.

    const [validateAuthentication, userTimeline] = await Promise.all([ //* Promise.all is a function that allows us to run multiple async functions at the same time.
      axios.post('http://localhost:3000/verify_credentials', { //* get credentials
        token_key: authtokens.get('oauth_token'),
        token_secret: authtokens.get('oauth_token_secret'),
      }),
      axios.post(`http://localhost:3000/user_timeline`, { //* get user timeline
        token_key: authtokens.get('oauth_token'),
        token_secret: authtokens.get('oauth_token_secret'),
      })
    ]);

    const user = validateAuthentication.data;
    const tweets = userTimeline.data;

    return {
      props: {
        user: user,
        tweets: tweets,
      }
    }

  }

  return {
    props: {
      user: null,
    }
  }




}
export const Container = styled.div`
background: #0a95bf;
padding: 20px;
width:550px;
margin: 0 auto;
color:white;

`


export default function Home(props: any) {
  return (
    <Container>
      {(props.user) ?
        <MyTweets user={props.user} timeline={props.tweets}></MyTweets>
        :
        <Authentication></Authentication>
      }
    </Container>
  )
}


