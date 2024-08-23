import {Button} from '@repo/ui/button'
import {UserInputType} from 'common/src/index'
function App() {

  return (
    <>
    <div>
    <Button/>
    <button onClick={()=>{
      let userDetails:UserInputType = {
        email:'abhishek@gmail.com',
        password:'123455'
      }
      console.log(`this is the console value`,userDetails)
    }}>
      boop
    </button>
    </div>

    </>
    
    
  )
}

export default App
