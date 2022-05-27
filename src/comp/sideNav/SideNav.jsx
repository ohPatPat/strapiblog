import { useEffect, useState } from "react"
import axios from "axios"
import { NavLink } from "react-router-dom";
import './SideNav.scss'
export const SideNav = () => {

    const [apiData, setApiData] = useState()

    useEffect(() => {
        const getData = async () => {
            const url = 'http://localhost:1336/api/catagories'
            const result = await axios.get(url)
            setApiData(result.data.data)
        }
        getData()
    }, [setApiData])


    return (
        <nav id='SideNav'>

            <ul>
                <p> Catogories</p>
                {apiData ? apiData.map((item, index) => {
                        return (
                            <li key={index}>
                                <NavLink to={item.attributes.Name} ActiveClassName="active">{item.attributes.ShownText}</NavLink>
                            </li>
                        )
                    }) : null
                    }


            </ul>
        </nav>
    )
}