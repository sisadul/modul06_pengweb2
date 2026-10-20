import { useState } from "react";
function Ringkasan({nama, totalItem, totalHarga}){
    const [struk, setStruk] = useState(null)

    return (
        <div clasName="ringkasan">
            <p>Total item : {totalItem}</p>
            <p>Total harga: Rp {totalHarga.toLocaleString('id-ID')}</p>

            <button disabled={totalItem === 0} onClick={() => setStruk({total: totalHarga})}>
                Bayar
            </button>
            {struk && (
                <p>
                    Pesanan atas nama {nama} Sebesar Rp{' '}
                    {struk.total.toLocaleString('id-ID')} diterima
                </p>
            )}
        </div>
    )
}

export default Ringkasan