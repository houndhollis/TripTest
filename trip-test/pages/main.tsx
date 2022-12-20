import { useState } from 'react';
import styled from '@emotion/styled';
import Image from 'next/image';
import Layout from '../components/Layout';
import { auth } from '../firebase'; 
import { useRouter } from 'next/router';

const Main = () => {
  const router = useRouter()
  
  const [isOpen,setIsOpen] = useState(false)
  const Singout = () => {
    auth.signOut();
    router.push('/')
  }

  return (
    <Layout>
      <ContainerBox>
       <Common_inner>
         <Inner_header>
            <span>Trip Buddy</span>
            <Image onClick={()=>setIsOpen(!isOpen)} src={'/hambuger.png'} width={20} height={20} alt='버거바'/>
            <ul className={isOpen? "active" : 'close'}>
              <li onClick={Singout}>로그아웃</li>
            </ul>
         </Inner_header>
         <Inner_category>
            <div>
              <span>✈️</span>
              <span>항공권</span>
            </div>
            <div>
              <span>🗺</span>
              <span>여행코스</span>
            </div>
            <div>
              <span>💬</span>
              <span onClick={()=>router.push('/community')}>커뮤니티</span>
            </div>
         </Inner_category>
         <Inner_tripCourse>
           <h3>추천 여행코스</h3>
           <TripCourse_scroll_x>
             <ul>
               <li>
                 <div>
                   <Image src={'/picture1.jpeg'} width={297} height={191} alt='picture'/>
                   <p>나의 후쿠오카 온천여행</p>
                   <p>웅나카상</p>
                 </div>
               </li>
               <li>
                 <div>
                   <Image src={'/picture2.jpeg'} width={297} height={191} alt='picture'/>
                   <p>교토 여행 3박4일</p>
                   <p>원쿠라짱</p>
                 </div>
               </li>
             </ul>
           </TripCourse_scroll_x>
         </Inner_tripCourse>
       </Common_inner>
    </ContainerBox>
  </Layout> 
  );
}

export default Main

const ContainerBox = styled.div`
  padding-top: 20px;
`
const Common_inner = styled.div`
  max-width: 720px;
  margin: 0 auto;
  padding: 10px;
`

const Inner_header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  & span {
    color: #2864FF;
    font-family: 'GmarketSans';
    font-size: 30px;
    font-weight: 700;
    letter-spacing: -0.3px;
  }
  .close {
    display: none;
    background: #fff;
    border-radius: 8px;
    position: absolute;
    top: 100%;
    right: -1%;
    width: 120px;
    text-align: center;
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.3);
    opacity: 0;
    transition: 0.3s;
    padding: 10px;
    color: black;
  }
  .active {
    transition: 0.3s;
    position: absolute;
    top: 160%;
    right: -1%;
    width: 120px;
    text-align: center;
    border-radius: 8px;
    background-color: #fff;
    color: black;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
      rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    padding: 20px;
    font-size: 15px;
    opacity: 1;
    visibility: visible;
  }
`
const Inner_category = styled.div`
    display: flex;
    margin-top: 30px;
    justify-content: space-around;
    & div {
      border-radius: 10px;
      background-color: #F4F7FF;
      padding: 10px 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 10px;
    }
    & span {
      color: #444444;
      font-weight: 600;
      font-size: 13px;
    }
`

const Inner_tripCourse = styled.div`
  & h3 {
      padding: 0 20px;
      margin-top: 40px;
      color: #444;
  }
`
const TripCourse_scroll_x = styled.div`
    overflow-x:auto;
    overflow-y: hidden;
    white-space: nowrap;
    border-bottom: 5px solid #eee;
    padding-bottom: 10px;
    -webkit-overflow-scrolling:touch ;
    scrollbar-width: none;
    &::-webkit-scrollbar{
        display: none;
    }

    & ul {
      display: flex;
      list-style: none;
    }
    & li {
      box-sizing: content-box;
      padding: 0 16px;
      width: 297px;
      border-right:1px solid beige;
    }
    & img {
      border-radius: 10px;
    }
    & div {
      margin-top: 10px;
    }
`
