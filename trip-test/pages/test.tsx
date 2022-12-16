import React from 'react'
import styled from '@emotion/styled';
import Image from 'next/image';


const Main = () => {
  return (
    <ContainerBox>
       <Common_inner>
         <Inner_header>
            <span>Trip Buddy</span>
            <Image src={'/hambuger.png'} width={30} height={30} alt='버거바'/>
         </Inner_header>
         <Inner_category>
            <div>
              <span>✈️ 항공권</span>
            </div>
            <div>
              <span>🗺 여행코스</span>
            </div>
            <div>
              <span>💬 커뮤니티</span>
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
  );
}

export default Main

const ContainerBox = styled.div`
  padding-top: 50px;
`
const Common_inner = styled.div`
  max-width: 720px;
  margin: 0 auto;
  padding: 10px;
`

const Inner_header = styled.div`
  display: flex;
  justify-content: space-between;
  & span {
    color: #2864FF;
    font-size: 30px;
    font-weight: 500;
    letter-spacing: -0.3px;
  }
`
const Inner_category = styled.div`
    display: flex;
    margin-top: 30px;
    justify-content: space-around;
    & div {
      border: 1px solid #EEEEEE;
      border-radius: 10px;
      padding: 10px 17px;
    }
    & span {
      color: #444444;
      font-weight: 600;
      font-size: 16px;
    }
`

const Inner_tripCourse = styled.div`
  & h3 {
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
