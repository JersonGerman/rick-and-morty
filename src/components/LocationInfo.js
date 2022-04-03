const LocationInfo = ({ubication}) => {

    return(
        <div className="Ubication-Detail mt-5 p-3 d-flex align-items-center ">
            <h1 className="m-0 p-1 bd-highlight border border-secondary border-1 w-100 font-indie h-50 row align-items-center rounded-top justify-content-center">{ubication.name}</h1>
            <p className="m-0 p-1 bd-highlight border border-secondary border-1 p-3 font-indie h-50 " ><b>TYPE : </b>{ubication.type}</p>
            <p className="m-0 p-1 bd-highlight border border-secondary border-1 p-3 font-indie h-50 "><b>DIMENSION : </b>{ubication.dimension}</p>
            <p className="m-0 p-1 bd-highlight border border-secondary border-1 p-3 font-indie h-50"><b>POPULATION : </b>{ubication.residents?.length}</p>
        </div>
    )
}
export default LocationInfo;