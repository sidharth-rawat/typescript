import { IEnv } from "../types"

const production_env_info: IEnv =  {
    stage: process.env.ENVIRONMENT || 'development',
    port: 8080,
    domain:'',
    apiPath: '/api',
    staticPath: '',
    db: {
        name: '',
        user:'',
        pw: '',
        account: '',
        uri: (user: string, pw :string, name :string, account: string) => {
            return 'mongodb://localhost:27017/db_name?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false'
            // return `mongodb+srv://${user}:${pw}${account}.vsche.mongodb.net/${name}?retryWrites=true&w=majority`;
        }
    }
}

export = { ...production_env_info }