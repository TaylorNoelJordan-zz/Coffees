const express = require('express')
const app = express();
const cors = require('cors')

app.use(cors())
app.use(express.json())

app.set('port', process.env.PORT || 3001) 
app.locals.coffees = [
    { id: 1, type: 'Sumatra', intensity: 'bold', notes: 'chocolate and lemon'},
    { id: 2, type: 'Arabica', intensity: 'medium', notes: 'citrus'},
    { id: 1, type: 'Blonde', intensity: 'light', notes: 'caramel and vanilla'}
]

app.get('/api/v1/coffees/', (req, res) => {
    const { coffees } = app.locals;
    if(!coffees) {
        return res.status(404).json({ error: 'coffees not found' })
    } else {
        return res.status(200).json({ coffees })
    }
})

app.listen(app.get('port'), () => {
    console.log(`Listening on port ${app.get('port')}`)
})