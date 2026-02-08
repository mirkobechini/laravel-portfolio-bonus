import ProjectCard from "../components/ProjectCard"

import { useParams } from "react-router-dom"
import { useEffect, useState, useContext } from "react"
import GlobalContext from "../context/GlobalContext"

import axios from "axios"


export default function ShowPage() {

    const { id } = useParams()

    const [project, setProject] = useState({})
    const { API_URL } = useContext(GlobalContext)

    function fetchData() {
        axios.get(`${API_URL}/${id}`)
            .then(res => {
                console.log(res.data.data);

                setProject(res.data.data)
            })
            .catch(err => {
                console.log(err.message);
            })
    }

    useEffect(fetchData, [])


    return (
        <>
            <h1>{project.title}</h1>
            <span className={`badge`} style={{ backgroundColor: project.type?.color || "#000" }}>{project.type?.name}</span>
            <div className="my-2">
                <img className="img-fluid d-block my-3" src={project.cover_image} alt={project.title} />

                {
                    project?.technologies?.map((technology) => (
                        <span className="badge bg-secondary me-2" key={technology.id}>{technology.name}</span>
                    ))
                }
            </div>
            <p className="my-2">{project.description}</p>
        </>
    )
}