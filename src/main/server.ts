import app from './config/app'
import env from './config/env'

app.listen(env.port, () => console.log(`Listening in ${ env.port } port`))
