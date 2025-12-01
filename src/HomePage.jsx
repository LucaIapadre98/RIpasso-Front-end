import { Link } from "react-router-dom";
import { programmations } from "../database/db";

export default function HomePage() {

    console.log("Database:", programmations);
    
    return (
        <>
            <div>
                <nav class="navbar navbar-expand-lg bg-body-tertiary">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#">Homepage</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                        </div>
                    </div>
                </nav>
            </div>
            <div className="title">
                <h1 style={{fontSize: "60px", color:"#1e9c02ff", fontFamily: "Arial"}}>Elenco Programmazione Front-End</h1>
            </div>
            <div className="table">
                <table style={{ width: '100%' }}>
                    <thead>
                        <tr>
                            <th scope="col">Titolo</th>
                            <th scope="col">Strumento</th>
                            <th scope="col">Categoria</th>
                        </tr>
                    </thead>
                    <tbody>
                        {programmations.map((programmation, index) => (
                            <tr key={index}>
                                <Link to={`/details/${programmation.id}`}>
                                    <td>{programmation.title}</td>
                                </Link>
                                <td>{programmation.strument}</td>
                                <td>{programmation.category}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}