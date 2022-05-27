import { useEffect, useState } from "react"
import axios from "axios"
import { NavLink } from "react-router-dom";
import './Blogs.scss'


export const PinkImg = (props) => {

    const [apiData, setApiData] = useState()

    useEffect(() => {
        const getData = async () => {
            const url = 'http://localhost:1336/api/blogs?populate=*'
            const result = await axios.get(url)
            setApiData(result.data.data[2].attributes.Image.data)
            console.log(result.data.data[2].attributes.Image.data);
        }
        getData()
    }, [setApiData])

    return (
        apiData ? apiData.map((item, index) => {
            console.log(item.attributes.name);
            return (
                <>
                    <img key={index} src={`http://localhost:1336${item.attributes.url}`} alt="" />
                </>
            )
        }) : null
    )
}

export const Pink = (props) => {

    const [apiData, setApiData] = useState()

    useEffect(() => {
        const getData = async () => {
            const url = 'http://localhost:1336/api/catagories?populate=*'
            const result = await axios.get(url)
            setApiData(result.data.data[2].attributes.blogs.data)
        }
        getData()
    }, [setApiData])

    return (

        apiData ? apiData.map((item, index) => {

            return (
                <section key={index} id="Blogz">
                    <h1 style={{ color: "pink",}}>{item.attributes.Title}</h1>
                    <h2>By - {item.attributes.Author}</h2>
                    <article>
                        <p>{item.attributes.Article}</p>
                    </article>
                    <div>
                        <PinkImg />
                    </div>
                    <small>Date - {item.attributes.Date}</small>
                </section>
            )
        }) : null
    )
}