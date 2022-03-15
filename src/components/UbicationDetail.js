const UbicationDetail = ({ubication}) => {


    return(
        <div className="Ubication-Detail mt-5 p-5 d-flex align-items-center ">
            {/* <h1 className="m-0 p-2 bd-highlight border border-1">{ubication.name}</h1> */}
            <p className="m-0 p-2 bd-highlight border border-secondary border-1 p-4 font-indie rounded-start" ><b>TYPE : </b>{ubication.type}</p>
            <p className="m-0 p-2 bd-highlight border border-secondary border-1 p-4 font-indie "><b>DIMENSION : </b>{ubication.dimension}</p>
            <p className="m-0 p-2 bd-highlight border border-secondary border-1 p-4 font-indie rounded-end"><b>POPULATION : </b>{ubication.residents?.length}</p>
        </div>
    )
}
export default UbicationDetail;