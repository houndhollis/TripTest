import Image from 'next/image';
import styled from '@emotion/styled'

interface DetailItem {
    content:string,
    country:string,
    date:string,
    day:string,
    id:string,
    title:string,
}

const CommuDetail = ({ props }: { props: DetailItem }) => {

    return (
        <Profile_Container>
          <Profile_Top>
            <Image src={'/profile.png'} width={38} height={38} alt='profile'/>
            <div>
                <div>
                    <span className='user'>원쿠라짱</span>
                    <span>{props.country}</span>
                </div>
                <span>{props.date}</span>
            </div>
          </Profile_Top>
          <Profile_Bottom>
            <span>{props.content}</span>
          </Profile_Bottom>
        </Profile_Container>
    )
}

export default CommuDetail

const Profile_Container = styled.div`
    margin-top: 20px;
`
const Profile_Top = styled.div`
    display: flex;
    & div {
        width: 100%;
        display: flex;
        justify-content: space-between;
        white-space: nowrap;
        & div {
            display: flex;
            flex-direction: column;
            & .user {
                font-size: 14px;
                font-weight: 500;
            }
            & span:last-child {
                color: #2864FF;
                font-size: 13px;
            }
        }
    }
`
const Profile_Bottom = styled.div`
    margin-top: 10px;
    font-size: 18px;
    font-weight: 600;
    border-bottom: 1px solid #EEE;
    padding-bottom: 10px;
`