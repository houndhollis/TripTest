import MetaHead from "./Head"
import styled from '@emotion/styled'

interface Props {
   children : React.ReactNode
}

const Layout = (props:Props) => {
    return (
        <>
          <MetaHead/>
          <Container>{props.children}</Container>
        </>
    )
}
export default Layout

const Container = styled.div`
    /* 아직 추가항목 없음. */
`