import Header from "../components/Header"
import styled from "@emotion/styled"
import Layout from "../components/Layout"
import React, { useState } from "react"
import uuid from "react-uuid"
import { db } from "../firebase"
import { collection , addDoc } from "firebase/firestore"
import { useRouter } from "next/router"
import moment from 'moment';

// interface Value {
//     contry:string
// }

const CommuAsk = () => {

const router = useRouter()

const [country ,setCountry] = useState('# 일본')
const [title,setTitle] = useState('')
const [content , setContent] = useState('')

const SubmitHandler = async (e:React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault
    try {
        const res = await addDoc(collection(db,'CommuPost'),{
            id:uuid(),
            country:country,
            title:title,
            content:content,
            day:moment().format('hh:mm:ss'),
            date:new Date().toLocaleDateString()
        })
        router.push('/community')
    } catch (e) {
        console.log(e)
    }
}

    return (
        <Layout>
            <Container>
                <Header/>
                <AskContainer>
                    <h3>글쓰기</h3>
                    <div>
                        <select onChange={(e)=>setCountry(e.target.value)}>
                            <option># 일본</option>
                            <option># 한국</option>
                        </select>
                        <input onChange={(e)=>setTitle(e.target.value)}/>
                        <textarea onChange={(e)=>setContent(e.target.value)}/>
                    </div>
                </AskContainer>
                <button onClick={SubmitHandler}>등록하기</button>
            </Container>
        </Layout>
    )
}
export default CommuAsk

const Container = styled.div`
    padding: 10px;
    max-width: 720px;
    margin: 0 auto;
    padding-top: 30px;
`

const AskContainer = styled.div`
    margin-top: 30px;
    & div {
        display: flex;
        flex-direction: column;
        gap: 20px;
        margin-top: 10px;
        & select , input , textarea {
            background-color: #EFEFEF;
            border: none;
            border-radius: 10px;
        }
        & select {
            color: #2864FF;
            width: 90px;
            margin-right: 10px;
            padding: 3px 15px;
        }
        & input {
            height: 30px;
            text-indent: 10px;
        }
        & textarea {
            height: 500px;
            resize: none;
            padding: 10px;
        }
    }
`