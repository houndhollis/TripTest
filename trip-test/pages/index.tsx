import Layout from '../components/Layout'
import styled from '@emotion/styled'
import Link from 'next/link'
import { useRouter } from 'next/router';
import { auth } from '../firebase';
import { GoogleAuthProvider,signInWithPopup } from 'firebase/auth';

export default function Home() {
  const router = useRouter()
  function kakaoLogin(){
    const redirectUri = `${location.origin}/main`;
    window.Kakao.Auth.authorize({
      redirectUri,
      
    });
    const search = new URLSearchParams(location.search)
    const code = search.get("code");
    if(!code) {
      return(
        <Link href={'/'}></Link>
        )
      }
    }
    
    function googleLogin (){
      const provider = new GoogleAuthProvider(); // provider를 구글로 설정
      signInWithPopup(auth, provider) // popup을 이용한 signup
      .then((data) => {
        console.log(data) // console로 들어온 데이터 표시
        router.push('/main')
      })
      .catch((err) => {
        console.log(err);
      });
}

  return (
    <Layout>
      <LoginContainer>
        <LoginTop>
          <h2>Trip Buddy</h2>
          <span>간편한 여행 가이드</span>
        </LoginTop>
        <LoginBottom>
          <div>
            <button className='kakao' onClick={kakaoLogin}>카카오톡 로그인</button>
            <button className='face'>페이스북 로그인</button>
            <button className='naver' onClick={googleLogin}>구글 로그인</button>
          </div>
          <div>
            <Link href={'/main'}><button className='test'>테스트 계정으로 로그인</button></Link>
          </div>
        </LoginBottom>
      </LoginContainer>
    </Layout>
  )
}

const LoginContainer = styled.div`
  max-width: 720px;
  margin: 0 auto;
  background-color: #2864FF;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const LoginTop = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-family: GmarketSans;
  & h2 {
    font-size: 42px;
    font-weight: 700;
  }
  & span {
    margin-top: 15px;
    font-weight: 500;
  }
`
const LoginBottom = styled.div`
  flex: 1;
  background-color: #fff;
  border-radius: 40px 40px 0 0;
  padding: 30px;
  & div {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    & a > button{
      width: 100% ;
    }
    & button{
      padding: 17px;
      margin-bottom: 15px;
      border-radius: 5px;
      border: none;
    }
    .kakao {
      background-color: #FDE03D;
      color: black;
    }
    .face {
      background-color: #006DEA;
      color: #fff;
    }
    .naver {
      background-color: #ff7171;
      color: #ffffff;
    }
    .test {
      background-color:#fff;
      border :1px solid #006DEA ;
      color: #006DEA;
    }
  }
`

