let express = require('express')

let app = express();

app.use(express.json())
import {UserInput} from 'common/src/index'

const port = 3002;

app.post('/',(req:any,res:any)=>{
    let parsedUser = UserInput.safeParse(req.body)

    if(!parsedUser.success)
    {
        res.send(
            `wrong input`
        )
        return
    }
    res.send(
    'correct input'
    )
})

app.listen(port,()=>{
    console.log(`Backend is up and running  at port ${port}`)
})