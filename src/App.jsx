import Panel from './components/Panel'
import KartuMenu from './components/KartuMenu'
import Ringkasan from './components/Ringkasan'
import { useState} from 'react'

const panggilan = 'sadul'
const N = 92
const gayaJudul = {color: '#1f3a5f', fontSize: '28px'}

const dataAwal = [
  {id: 1, nama: "Nasi Ayam Geprek", harga: 6000, kategori: "Makanan"},
  {id: 2, nama: "Mie Tektek", harga: 15000, kategori: "Makanan"},
  {id: 3, nama: "Jus Jeruk", harga: 5000, kategori: "Minuman"},
  {id: 4, nama: "Es Teh", harga: 3000, kategori: "Minuman"},
]

function App(){
  const jam = 9


  const [daftarMenu, setDaftarMenu] = useState(dataAwal)
  const [pesanan, setPesanan] = useState({})

  const ubahJumlah = (id, selisih) => 
    setPesanan((lama) => ({
      ...lama,
      [id]: Math.max(0, (lama[id] || 0) + selisih)
    }))
  const hapusMenu= (id) => setDaftarMenu(daftarMenu.filter((m) => m.id !== id))

  const balikUrutan = () => setDaftarMenu([...daftarMenu].reverse())
  const totalItem = daftarMenu.reduce((s, m) => s + (pesanan[m.id] || 0), 0)
  const totalHarga = daftarMenu.reduce(
    (s,m) => s + m.harga * (pesanan[m.id] || 0),0
  )
  return (
    <>
    <Panel judul="Menu Hari ini">
     <button onClick={balikUrutan}>Balik Urutan</button>

     {daftarMenu.length === 0 ? (
      <p>Semua menu habis terjual</p>
     ):(
      <div className="daftar">
          {daftarMenu.map((m) => (
            <KartuMenu 
            key={m.id} 
            nama={m.nama} 
            harga={m.harga} 
            kategori={m.kategori}
            jumlah={pesanan[m.id] || 0}
            onTambah={() => ubahJumlah(m.id, 1)}
            onKurang={() => ubahJumlah(m.id, -1)}
            onHapus={() => hapusMenu(m.id)}/>
          ))}
      </div>
     )}
    </Panel>
    <Ringkasan 
      nama={panggilan}
      totalItem={totalItem}
      totalHarga={totalHarga}
    />
  </>
  )
}

export default App