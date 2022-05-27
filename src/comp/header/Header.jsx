import { useEffect, useState } from "react"
import axios from "axios"
import Logo from '../../assets/icons/StrapiBlog.png'
import './Header.scss'
import { NavLink } from "react-router-dom";



export const Header = () => {


    // function CustomLink({ to, children, ...props }) {
    //     const resolvedPath = useResolvedPath(to)
    //     const isActive = useMatch({ path: resolvedPath.pathname, end: true })
    //     return (
    //         < li className={isActive ? "active" : ""}>
    //             < Link to={to} {...props}>
    //                 {children}
    //             </Link>
    //     </li >
    //     )}


const [apiData, setApiData] = useState()

useEffect(() => {
    const getData = async () => {
        const url = 'http://localhost:1336/api/header-components?populate=*'
        const result = await axios.get(url)
        setApiData(result.data.data[0].attributes.Header)
    }
    getData()
}, [setApiData])


return (
    <header>
        <nav>
            <img src={Logo} alt="StrapiBlog-Logo" />
            <ul>


                {apiData ? apiData.map((item, index) => {
                    return (
                        <li key={index}>
                            <NavLink to={item.Link} ActiveClassName="active">{item.ShownText}</NavLink>
                        </li>
                    )
                }) : null
                }


            </ul>
        </nav>
    </header >
)
}

