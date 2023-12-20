import "./Projects.scss"
import data from "../../helper/imageData"
import {useNavigate} from "react-router-dom"


const Projects = () => {
  const navigate = useNavigate()
  return (
    <>
      <div className="project-bgImg-container">

        <div className="projects__bio-image ">
          <h1>My Projects</h1>

        </div>
      </div>
      <div className="projects__items">
        {data.map(({ id, image }) => (
          <div key={id} className="projects__item"  onClick={() => navigate(`${id}`)}>
            <img src={image} alt="" />
          </div>
        ))}
      </div>
    </>
  )
}

export default Projects