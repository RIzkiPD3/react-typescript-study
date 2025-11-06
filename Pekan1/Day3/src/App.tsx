import './App.css'
import Button from './component/Button';
import Greeting from './component/Greeting'
import ProductCard from './component/ProductCard'
import CommentText from './component/CommentText';

function App() {

  const user = {
    name: "Rizky",
    avatarUrl: "https://img.utdstc.com/icon/3ec/007/3ec007225598dc5e66b5f478673f9cf6a13dd28a1ad48b24b21a32e7714bbb3d:200"
  }

  const products = [
    { productName: "Laptop", price: 10000000, stock: 20, isAvailable: true },
    { productName: "Tablet", price: 5599999, stock: 35, isAvailable: true },
    { productName: "TV", price: 7000000, stock: 15, isAvailable: true },
    { productName: "Desire Driver", price: 1000000000, stock: 0, isAvailable: false },
    { productName: "SmartPhone", price: 5000000, stock: 50, isAvailable: true },
    { productName: "SmartWatch", price: 2599999, stock: 0, isAvailable: false },
  ];
  return (
    <>
    {/* jawaban nomor 1 */}
    <Greeting 
    name= "Rizky"
    welcome="hello"
    greeting="selamat datang di pelajaran react dengan typescript, typescript biasanya digunakan oleh perusaahaan terutama perusahaan besar saat pengembangan web mereka." />
   {/* jawaban nomor 2 */}
   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6">
        {products.map((p) => (
          <ProductCard key={p.productName} {...p} />
        ))}
      </div>
      {/* jawaban nomor 3 */}
      <Button 
      label= "Appuyez sur moi"
      message= "Félicitations, vous m'avez convaincu !" />

      {/* jawaban nomor 4 */}
      <CommentText
      author={user}
      text="React Typescript itu bagus banget ya"
      date={new Date()} />
    </>
  )
}

export default App
