
const Pagination = ({nextPage,previusPage, residentsSearch}) => {
    
    // console.log("residentsSearch",residentsSearch)
    return(

        <div className="btn-toolbar m-4 justify-content-center" role="toolbar" aria-label="Toolbar with button groups">
            <div className="btn-group me-2" role="group" aria-label="First group">
                <button type="button" className="btn btn-outline-light" onClick={previusPage}>Previus</button>
                &nbsp;
                <button type="button" className="btn btn-outline-light" onClick={nextPage}>Next</button>
            </div>
        </div>

    )
}
export default Pagination;