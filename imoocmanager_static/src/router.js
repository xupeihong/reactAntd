import React from 'react'
import { HashRouter,Route,Switch} from 'react-router-dom'
import App from './App'
import Admin from './admin'
export default class IRouter extends React.Component{
    render(){
        return (
            <HashRouter>
                <App>
                    <Route path="/admin" render={()=>
                        <Admin>                            
                        </Admin>         
                    } />
                </App>
            </HashRouter>
        );
    }
}