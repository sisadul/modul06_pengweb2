import Panel from './components/Panel'
import KartuMenu from './components/KartuMenu'

const panggilan = 'sadul'
const N = 92
const gayaJudul = {color: '#1f3a5f', fontSize: '28px'}

function App(){
  const jam = 9
  return (
    <Panel judul="Menu Hari ini">
      <KartuMenu nama="Nasi Ayam Geprek" harga={10000 + (N * 1000)}/>
      <KartuMenu nama="Mie tektek" harga={15000}/>
      <KartuMenu nama="Jus Jerus" harga={5000 + (N * 1000)} kategori="Minumas"/>
    </Panel>
  )
}

export default App