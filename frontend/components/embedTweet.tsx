import { useEffect } from "react";
import TweetEmbed from 'react-tweet-embed'
import styled from "styled-components";

const TweetEmbedComponent = styled.div`
.twitter-tweet-rendered {
  width: 800px!important;
}
`

export const EmbedTweet = ({ tweetId }: any) => {
 useEffect(() => {
  console.log(tweetId)
 }, [tweetId])
 return (
  <TweetEmbedComponent>
   
  </TweetEmbedComponent>
 )
}



