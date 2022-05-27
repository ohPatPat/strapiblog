import { useEffect, useState } from "react"
import axios from "axios"
import './Home.scss'
export const Home = (props) => {

    const [apiData, setApiData] = useState()

    useEffect(() => {
        const getData = async () => {
            const url = 'http://localhost:1336/api/blogs/'
            const result = await axios.get(url)
            setApiData(result.data.data)
        }
        getData()
    }, [setApiData])
    return (
        <section id="Home">
            <h1>{props.title}</h1>
        </section>

    )


}