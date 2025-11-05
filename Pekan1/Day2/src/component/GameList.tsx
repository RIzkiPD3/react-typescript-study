 interface GameListProps {
    id: number
    game: string
    price: number
 }

 export default function GameList() {
    const game: GameListProps[] = [
     { id: 1, game: "Call of Duty", price: 100000 },
     { id: 2, game: "FIFA", price: 50000 },
     { id: 3, game: "PUBG", price: 200000 }
    ]

    return (
     <div>
      <h1>Daftar Game</h1>
      <ul>
       {game.map((item) => (
        <li key={item.id}>
         {item.game} - Rp. {item.price}
        </li>
       ))}
      </ul>
     </div>
    )
 }