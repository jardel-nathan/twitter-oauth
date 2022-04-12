import { destroyCookie } from "nookies";
import React from "react";
import styled from "styled-components"


export const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

p, h1{
  margin: 0px;
}

button{
  border:none;
  top: 0px;
  right: 0px;
  float: right;
  background: red;
  background: #484545;
  color: white;
  padding: 3px 14px;
  border-radius: 9px;
  cursor: pointer;

}

`


export const Profile = ({ user }: any) => {

  React.useEffect(() => {
    const s = document.createElement("script");
    s.setAttribute("src", "https://platform.twitter.com/widgets.js");
    s.setAttribute("async", "true");
    document.head.appendChild(s);
  }, []);

  const logout = () => {
    destroyCookie(null, "mytwiiter_accesstoken");
    window.location.reload();
  }

  return (
    <Container>


      <div className="imageProfile">
        <img src={user.profile_image_url} />
      </div>

      <div>
        <h1>{user.name}</h1>
        <p>@{user.screen_name}</p>

        <button onClick={()=>{ logout() }} >Logout</button>


      </div>

    </Container>
  )
}