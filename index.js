 
let score =0;
let wicket =0;
let ballWise =[]
let hit = 0
let inputRef = React.createRef()
function addScore (num){
 hit =num
rea.render(<App></App>)
   
}
function addWicket(){
   
  hit="W"
  rea.render(<App></App>)
  
  
}
const Score =()=>(
    <div>
        <button onClick={()=>addScore(0)} >0</button>
    <button onClick={()=>addScore(1)} >1</button>
    <button onClick={()=>addScore(2)} >2</button>
    <button onClick={()=>addScore(3)} >3</button>
    <button onClick={()=>addScore(4)} >4</button>
    <button onClick={()=>addScore(5)} >5</button>
    <button onClick={()=>addScore(6)} >6</button>
    <button onClick={addWicket} >wicket</button>
 </div>
)
const Result = () => (
    <div>
      {ballWise.map((res, index) => (
        <React.Fragment key={index}>
          {index % 6 === 0 ? <br /> : null}
          <span>{res === 0 ? <strong>.</strong> : res}</span>&nbsp;&nbsp;
        </React.Fragment>
      ))}
    </div>
  );
  function handleSubmit(event){
    event.preventDefault()
   
     if(hit =="W"){
      wicket +=1
     }else{
      score += hit
     }

     ballWise.unshift(<span>{hit}{","}{inputRef.current.value}</span>)
    rea.render(<App></App>)
  }
   const Form = ()=>(
    <>
    <form onSubmit={handleSubmit}>
    <input value={hit}/>
    <input ref={inputRef}/>
    <button>submit</button>
    </form>
    </>
   )
const App =()=>{
    return(
        <>
        <h1>score keeper</h1>
        <h2>score:{score}/{wicket}</h2>
      <Score/>
      <br/>
      <Form/>
      <hr></hr>
      {ballWise.map((res)=><h1>{res}</h1>)}
        </>
    )
}



const rea = ReactDOM.createRoot(document.getElementById("root"))
rea.render(<App></App>)
