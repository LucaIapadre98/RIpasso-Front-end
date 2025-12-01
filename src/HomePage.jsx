import { programmations } from '../database/db';
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';

export default function HomePage() {
    const [programmationsData, setProgrammationsData] =  useState([]);                               // Non uso il programmationsData in quanto i dati sono statici e non cambiano
    const [loading, setLoading] = useState(true);                                                    // Stato per gestire lo stato di caricamento
    const [filteredProgrammations, setFilteredProgrammations] = useState(programmations);            // Non uso il setFilteredProgrammations in quanto non ho una barra di ricerca per filtrare i dati

    useEffect(() => {                                                                                // UseEffect per simulare il caricamento dei dati dal database con un timeout e aggiornare lo stato di caricamento
        console.log("Caricamento dati...");
        setTimeout(() => {
            setProgrammationsData(programmations);
            setLoading(false);
            console.log("Db caricato:", programmations);
        }, 100); 
    }, []);
    
    const getBackgroundColor = (strument) => {                                                      // Funzione per restituire il colore di sfondo in base allo strumento
        switch (strument) {
            case "Database":
                return "#726a6aff"; // giallo chiaro
            case "React":
                return "#fd9292ff"; // rosso chiaro
            case "CSS":
                return "#9dffb4ff"; // verde chiaro
            case "Bootstrap":
                return "#b0a5f5ff"; // blu chiaro
            default:
                return "#fdfd7aff"; // giallo chiaro
        }
    };
 
    if (loading) {                                                                                // Se lo stato di caricamento è true, mostra il messaggio di caricamento
        return (
            <div style={{ 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center', 
                height: '100vh' 
            }}>
                <div>
                    <h2>Caricamento in corso...</h2>
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <>
            <div>
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">Homepage</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                        </div>
                    </div>
                </nav>
            </div>
            <div className="title">
                <h1 style={{fontSize: "70px", color:"black", fontFamily:"Arial"}}>Elenco Programmazione Front-End</h1>
            </div>
            <div className="table" style={{padding: "1.5px",  borderRadius: "5px"}}>
                <table style={{width: "100%"}}>
                    <thead>
                        <tr>
                            <th scope="col">Titolo</th>
                            <th scope="col">Strumento</th>
                            <th scope="col">Categoria</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredProgrammations.length === 0 ? (
                            <tr>
                                <td colSpan="3" style={{ textAlign: 'center', padding: '20px' }}>
                                    Nessun risultato trovato
                                </td>
                            </tr>
                        ) : (
                            filteredProgrammations.map((programmation) => (
                                <tr key={programmation.id} style={{ backgroundColor: getBackgroundColor(programmation.strument) }}>
                                    <Link to={`/details/${programmation.id}`}>
                                        <td >{programmation.title}</td>
                                    </Link>
                                    <td style={{ backgroundColor: getBackgroundColor(programmation.strument) }}>{programmation.strument}</td>
                                    <td>{programmation.category}</td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </>
    );
}