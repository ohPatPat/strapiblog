import { useEffect, useState } from "react"
import axios from "axios"
import './About.scss'
export const About = (props) => {


    return (
        <section id="About">
            <h1>{props.title}</h1>
        </section>

    )


}