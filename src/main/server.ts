import 'module-alias/register'
import app from './config/app'
import env from '@/main/config/env'

app.listen(env.PORT, () => console.log(`Listening in ${ env.PORT } port`))
