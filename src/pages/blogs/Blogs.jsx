import { useEffect, useState } from "react"
import axios from "axios"
import { NavLink } from "react-router-dom";
import './Blogs.scss'

export const Blogs = (props) => {

    const [apiData, setApiData] = useState()

    useEffect(() => {
        const getData = async () => {
            const url = 'http://localhost:1336/api/catagories?populate=*'
            const result = await axios.get(url)
            setApiData(result.data.data)
        }
        getData()
    }, [setApiData])


    return (
        <section id="Blogs">
            <h1>{props.title}</h1>


            {apiData ? apiData.map((item, index) => {

                return (
                    <figure key={index}>


                        <NavLink to={item.attributes.Name}>
                            <h3>{item.attributes.blogs.data[0].attributes.Title}</h3>
                            <img src="" alt="" />
                            <p>By {item.attributes.blogs.data[0].attributes.Author}</p>
                            <p>From {item.attributes.blogs.data[0].attributes.Date}</p>

                        </NavLink>
                    </figure>
                )
            }) : null
            }
        </section>

    )
}