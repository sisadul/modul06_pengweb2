const panggilan = 'sadul'
const N = 92
const gayaJudul = {color: '#1f3a5f', fontSize: '28px'}

function App(){
  const jam = 9
  return (
    <>
      <h1 className="judul" style={gayaJudul}>
        Kantin {panggilan}
      </h1>
      <p>{jam < 12 ? "Selamat pagi" : "Selamat siang"}</p>
      <p>Saldo awal kartu kantin: {N *1000}</p>
      <button disabled>Bayar</button>
    </>
  )
}

export default App