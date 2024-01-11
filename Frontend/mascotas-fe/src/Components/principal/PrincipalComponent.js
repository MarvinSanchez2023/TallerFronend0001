import React from "react";
import CabeceraComponent from "./CabeceraComponent";
import ListadoComponent from "./ListadoComponent";
import PaginadorComponent from "./PaginadorComponent";
import MascotasComponent from "../admin/MascotasComponent";

const PrincipalComponent = () => {
    
    return(
        <div className="container-fluid">
            <CabeceraComponent></CabeceraComponent>
            <ListadoComponent></ListadoComponent>
            <PaginadorComponent></PaginadorComponent>
        </div>
    );

    
    


};
export default PrincipalComponent;