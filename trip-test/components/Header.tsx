import styled from "@emotion/styled"
import { useState } from "react"
import { useRouter } from "next/router"
import { auth } from '../firebase'; 
import Image from "next/image";

const Header = () => {
    const router = useRouter()
    const [isOpen,setIsOpen] = useState(false)
    const Singout = () => {
      auth.signOut();
      router.push('/')
    }

    return (
        <Inner_Container>
            <span onClick={()=>router.push('/main')}>Trip Buddy</span>
            <Image onClick={()=>setIsOpen(!isOpen)} src={'/hambuger.png'} width={20} height={20} alt='버거바'/>
            <ul className={isOpen? "active" : 'close'}>
                <li onClick={Singout}>로그아웃</li>
            </ul>
        </Inner_Container>
    )
}

export default Header

const Inner_Container = styled.div`
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