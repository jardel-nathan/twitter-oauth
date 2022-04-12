import { Profile } from './profile';
import { useEffect } from 'react';





const MyTweets = ({ user, timeline }: any) => {


  //*useeffect in nextjs run in time of render
  useEffect(() => { //* useEffect is a hook that runs after the component is rendered.
    const s = document.createElement("script"); //* create a script element
    s.setAttribute("src", "https://platform.twitter.com/widgets.js"); //* set the src attribute
    s.setAttribute("async", "true"); //* set the async attribute
    document.head.appendChild(s); //* append the script element to the head of the document
  }, []);


  return (
    <>
      <h1>My Tweets</h1>
      {(user) ? <Profile user={user} /> : ''}
      {
        timeline.map((item: any) => {

          return <div key={item.id_str}><blockquote className='twitter-tweet' ><a href={`https://twitter.com/${user.screen_name}/status/${item.id_str}`}>{item.text}</a></blockquote></div>

        })
      }
    </>
  )
}




export default MyTweets
