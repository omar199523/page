
import './App.css'
import Page from './page1.svg'
function App() {
  const range =(start:number, end:number)=> {
    return Array.from({ length: end - start + 1 }, (_, i) => i)
  }
  return (
    <>
      <div className='page'>
        {
         range(1,149).map((num:number)=>{
          return(
            <div className='one-page' key={num}>
              <p>{num+1}</p>
              <img src={Page}/>
            </div>
          )
         })
        }
      </div>
    </>
  )
}

export default App
