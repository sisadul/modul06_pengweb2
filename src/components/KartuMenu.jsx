import LabelHarga from './LabelHarga';
import { useState } from 'react';
function KartuMenu({nama, harga, kategori = 'Makanan'}){
    const [jumlah, setJumlah] = useState(0)
    const [catatan, setCatatan] = useState('')

    const tambah = () => setJumlah(jumlah + 1)

    return (
        <div className="kartu">
            <h3>{nama}</h3>
            <p>{kategori}</p>
            <LabelHarga harga={harga}/>

            <div className="kontrol">
                <button onClick={() => setJumlah(jumlah - 1)} disabled = {jumlah === 0}>
                    -
                </button>
                <span>{jumlah}</span>
                <button onClick={tambah} >
                    +
                </button>
            </div>
            {jumlah === 0 ? (
                <p>Belum Dipesan</p>
            ):(
                <p>Subtotal : Rp {(harga * jumlah).toLocaleString('id-ID')}</p>
            )}
            {jumlah >= 5 && <span className="badge">Pesanan Banyak</span>}

            <label>
                Catatan pesanan{' '}
                <input value={catatan} onChange={(e) => setCatatan(e.target.value)} placeholder='isi disini'/>
            </label>
            {catatan !== '' && <p>Catatan: {catatan}</p>}
        </div>
    )
}

export default KartuMenu