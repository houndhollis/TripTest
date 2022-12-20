import styled from "@emotion/styled"
import { useRouter } from "next/router"
import Header from "../components/Header";


const Community = () => {
    const router = useRouter()

    return (
        <Container>
            <Header/>
            <Seletion_Container>
                <h3>코뮤니티</h3>
                <div>
                    <div>
                        <select>
                            <option># 일본</option>
                            <option># 한국</option>
                        </select>
                        <select>
                            <option>최신순</option>
                            <option>죽순</option>
                        </select>
                    </div>
                    <button onClick={() => router.push('/commuask')}>글 쓰기</button>
                </div>
            </Seletion_Container>
        </Container>
    )
}

export default Community

const Container = styled.div`
    max-width: 720px;
    margin: 0 auto;
    padding: 10px;
    padding-top: 30px;
`

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
const Seletion_Container = styled.div`
    margin-top: 30px;
    & div {
        margin-top: 10px;
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        & select {
            color: #2864FF;
            border: none;
            border-radius: 10px;
            background-color: #EFEFEF;
            margin-right: 10px;
            padding: 3px 15px;
        }
        & button {
            width: 50px;
            height: 50px;
            border-radius: 100%;
            border: none;
            background-color: #EFEFEF;
        }
    }
`