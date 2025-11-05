import './App.css'
import GameList from './component/GameList'
import Greeting from './component/Greeting'
import ProfileCard from './component/ProfileCard'

function App() {
  const price: number = 100000
  const discount: number = 0.2

  function getDiscountedPrice(price: number, discount: number): number {
    return price - price * discount
  }

  const isLoggedIn = true
  return (
    <>
    {/*  jawaban nomor 1 */}
    <ProfileCard
      name="John Doe"
      image="https://i1.sndcdn.com/artworks-000113188666-uvm2rw-t500x500.jpg"
      bio= "seorang developer react typescript"
      skill={["React", "TypeScript", "JavaScript"]}
    />

    {/* jawaban nomor 2 */}
    <p>Harga setelah discount: {getDiscountedPrice(price, discount)}</p>

    {/* jawaban nomor 3 */}
    <Greeting isLoggedIn={isLoggedIn} />

     {/* jawaban nomor 4  */}
    <GameList />
    </>
  )
}

export default App