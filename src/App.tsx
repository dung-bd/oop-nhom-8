import Layout from 'Components/Layout/Layout'
import {useState} from 'react'
import Products from 'Modals/Products'
import routes from 'routes'
import {Switch,Route} from 'react-router-dom'
import preload from 'Modals/preload'


const App:React.FC=()=> {


  const [state,setState]=useState(()=>{
    const data:Array<Products>=[]
   
    preload.forEach((e:any)=>{
      data.push(e)
    })

   
    return data
  })
  
  return (
    <>
     <Layout>
       <Switch>

      {
        routes.path.map(({path,Component}:any,i:number)=><Route  key={'routes'+i} path={path}><Component shop={state} handleShop={setState}/></Route>)
      }
       </Switch>
      
     </Layout>
    </>
  );
}
// JSX > javascript >> .js , typescript >> .tsx
export default App;
//hello world