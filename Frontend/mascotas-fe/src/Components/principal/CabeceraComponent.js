import React, { useEffect, useState } from "react";
import axios from "axios";
//import SesionComponent from "../sesion/SesionComponent";

const CabeceraComponent = () => {
    const url = "http://localhost:8000/mascotas";
    const [mascotas, setMascotas] = useState([]);
    const [filtro, setFiltro] = useState("");
    const [usuario, setUsuario] = useState("");
    const [clave, setClave] = useState("");


    useEffect(() => {
        getMascotas();
    }, []);

    const getMascotas = async () => {
        const respuesta = await axios.get(`${url}/buscar`);
        console.log(respuesta.data);
        setMascotas(respuesta.data);
    };


    const search = () => {

    }
    const searchChange = (e) => {
        setFiltro(e.target.value);
    }

    const login = () => {
        console.log("hola");
        //return <SesionComponent />
    }

    return (
        <div id="modalMascotas" className="modal fade" aria-hidden="true">
            <div className="container-fluid text-center">
                <div className="row justify-content-between align-items-center">
                    <div className="col-2">
                        <img className="logo-img" src={'imagenes/3.jpg'} alt="logo"></img>
                    </div>

                    <div className="col-6">
                        <div className="row justify-content-between">
                            <div className="col-10">
                                <input className="form-control" type="text" value={filtro} onChange={searchChange}></input>
                            </div>
                            <div className="col-2">
                                <button className="btn btn-info" onClick={search}>Buscar</button>
                            </div>

                        </div>

                    </div>

                    <div className="col-2">
                        <button
                            className="btn btn-primary"
                            type="button"
                            onClick={() => login()}
                        >
                            login
                        </button>
                    </div>
                </div>
            </div>
        </div>



    );
};

export default CabeceraComponent;


