import { useParams } from 'react-router-dom';
import { programmations } from '../database/db';

export default function Details() {
    const { id } = useParams();
    
    const programmation = programmations.find(prog => prog.id === parseInt(id));
    console.log(programmation);
    return (
        <>
            <div>
                <nav class="navbar navbar-expand-lg bg-body-tertiary">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#">Details</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="/">HomePage</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            <div className="details-container" style={{padding:"40px 10px", backgroundColor:"#ebebebff", minHeight:"94.1vh"}}>
                <div className="table-responsive">
                   <table className="table table-bordered" style={{width:"100%"}}>
                    <colgroup>
                        <col style={{width: "20%"}} />
                        <col style={{width: "80%"}} />
                    </colgroup>
                    <thead>
                        <tr>
                            <th colSpan="2" style={{textAlign:"center", fontSize:"35px", color:"#d20707ff", wordWrap:"break-word"}}>Dettagli su: {programmation.title}</th>
                        </tr>
                    </thead> 
                    <tbody>
                        <tr>
                            <td style={{ color:"#d20707ff", fontSize:"20px", wordWrap:"break-word"}}>Descrizione:</td>
                            <td style={{fontSize:"18px", wordWrap:"break-word", whiteSpace:"pre-wrap"}}>{programmation.description}</td>
                        </tr>
                        <tr>
                            <td style={{ color:"#d20707ff", fontSize:"20px", wordWrap:"break-word"}}>Quando usarlo ?</td>
                            <td style={{fontSize:"18px", wordWrap:"break-word", whiteSpace:"pre-wrap"}}>{programmation.utility}</td>
                        </tr>
                        <tr>
                            <td style={{ color:"#d20707ff", fontSize:"20px", wordWrap:"break-word"}}>Quando non usarlo ?</td>
                            <td style={{fontSize:"18px", wordWrap:"break-word", whiteSpace:"pre-wrap"}}>{programmation.notUtility}</td>
                        </tr>
                        <tr>
                            <td style={{ color:"#d20707ff", fontSize:"20px", wordWrap:"break-word"}}>Esempio di codice:</td>
                            <td style={{fontSize:"25px"}}>
                                {programmation.example.map((example, index) => (
                                    <div key={index} style={{marginBottom:"20px"}}>
                                        <h5 style={{fontSize:"18px", wordWrap:"break-word"}}>{example.title}</h5>
                                        <pre style={{backgroundColor:"#f4f4f4", padding:"10px", borderRadius:"5px", overflowX:"auto", width:"100%", fontSize:"18px", whiteSpace:"pre-wrap", wordWrap:"break-word"}}>
                                            <code>{example.code}</code>
                                        </pre>
                                    </div>
                                ))}
                            </td>
                        </tr>
                        <tr>
                            <td style={{ color:"#d20707ff", fontSize:"20px", wordWrap:"break-word"}}>Immagine di codice:</td>
                            <td>
                                <img src={programmation.image} alt={programmation.title} style={{maxWidth:"100%", height:"auto", display:"block"}} />
                            </td>
                        </tr>
                    </tbody>
                   </table>
                </div>
            </div>
        </>
    );
}