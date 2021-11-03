import { Link } from "react-router-dom";
import NotFound404 from "./notfound404.png"

const notfound = () => {
    return (
        <div className="not-found">
            <h1>Sorry</h1>
            <p>That page cannot be found</p>
            <Link to="/">Back to the homepage...</Link>
            <div align="center">
                <img src={NotFound404} alt="not found 404" width='50%' height='50%' /> 
            </div>
        </div>
    )
}

export default notfound;