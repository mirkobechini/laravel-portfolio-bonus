import { useEffect, useState } from "react"

import axios from "axios"
import ProjectCard from "../components/ProjectCard"
import { useContext } from "react"
import GlobalContext from "../context/GlobalContext"


export default function HomePage() {



    const [projects, setProjects] = useState([])
    const [errors, setError] = useState([])

    const { API_URL } = useContext(GlobalContext)

    function fetchData() {
        axios.get(`${API_URL}`)
            .then(res => {                
                
                setProjects(res.data.data)

            })
            .catch(err => {
                console.log(err.message);
                setError({ error: err.message });
            })
    }

    useEffect(fetchData, [])

    return (
        <>
            <div className="container">
                <h1 className="display-6 fw-bold"> Projects</h1>
                <p>Questi sono i miei progetti</p>
            </div>

            <div className="container">
                <div className="row row-cols-1 row-cols-md-3 gap-4">
                    {
                        projects.map((project) => (
                            <ProjectCard project={project} key={project.id}/>
                        ))
                    }
                </div>
            </div>

        </>
    )
}