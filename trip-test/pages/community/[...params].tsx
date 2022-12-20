import Header from "../../components/Header"
import Layout from "../../components/Layout"
import { useRouter } from "next/router"
import { collection ,getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import { useEffect , useState } from "react";

const CommuDeepDetail = () => {
    const detailPost = collection(db,'CommuPost')
    const router = useRouter()
    const [item,setItem] = useState<any>([])
    const [query]:any = router.query.params || []
    useEffect(()=>{
        const getList = async() => {
            const data = await getDocs(detailPost)
  
            const newData = data.docs.map((doc) => ({ ...doc.data() }));
            // new Date(2022.12.21) -> + 1231231244 -> number
            setItem(newData.filter((it)=>it.id === query))
        }
        getList()
      },[])

    return (
        <Layout>
            <Header/>
            <button onClick={()=>router.push('/community')}>뒤로갈텨?</button>
            {item && item.map((it:any)=>(
                <div key={it.id}>
                    <h3>{it.title}</h3>
                    <span>{it.content}</span>
                </div>
            ))}
        </Layout>
    )
}

export default CommuDeepDetail