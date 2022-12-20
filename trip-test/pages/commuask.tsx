import Header from "../components/Header"
import styled from "@emotion/styled"
import Layout from "../components/Layout"

const CommuAsk = () => {
    return (
        <Layout>
            <Container>
                <Header/>
                <AskContainer>
                    <h3>글쓰기</h3>
                    <div>
                        <select>
                            <option># 일본</option>
                            <option># 한국</option>
                        </select>
                        <input/>
                        <textarea/>
                    </div>
                </AskContainer>
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
            color: #2864FF;
            background-color: #EFEFEF;
            border: none;
            border-radius: 10px;
        }
        & select {
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
        }
    }
`