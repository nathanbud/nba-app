import React, {Component} from 'react'
import { directive } from '@babel/types';

class Layout extends Component{
    state = {

    }

    render(){
        return(
            <div>
            {this.props.children}
            </div>
        )
    }
}

export default Layout