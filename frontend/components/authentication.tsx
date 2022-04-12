import {Container, AuthenticationButton} from './style'
import axios from 'axios';



export default function Authentication() {

  const getAuthenticationURI = async () => {
    const authenticationRequest = await axios.post('http://localhost:3000/request_token');
    const authenticationURI = authenticationRequest.data;
    console.log(authenticationURI)
    window.open(authenticationURI, '_self');
  }


  return (
    <Container>
      <h1>Entre com  <br /> sua conta</h1>
      <AuthenticationButton onClick={()=>{getAuthenticationURI()}} > Conectar </AuthenticationButton>
    </Container>
  );
}