import { Link } from "react-router-dom";

export default function ProjectCard({ project,  }) {

    return (
        <>
            <div className="col">
                <div className="card" style={{ width: "100%", height: "100%" }}>
                    <div className="card-header">{project.title}</div>
                    <div className="card-body">
                        <Link to={`/projects/${project.id}`}>
                            <img className="card-img-top" src={project.cover_image} alt={project.title} />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}