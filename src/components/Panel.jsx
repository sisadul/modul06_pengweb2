function Panel({judul, children}){
    return (
        <div className="panel">
            {judul && <h2>{judul}</h2>}
            {children}
        </div>
    )
}

export default Panel