import LabelHarga from './LabelHarga';
function KartuMenu({nama, harga, kategori = 'Makanan'}){
    return (
        <div className="kartu">
            <h3>{nama}</h3>
            <p>{kategori}</p>
            <LabelHarga harga={harga}/>
        </div>
    )
}

export default KartuMenu