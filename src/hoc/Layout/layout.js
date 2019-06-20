import React, {Component} from 'react'
import './layout.css'

import Header from '../../Component/Header/header';
import Footer from '../../Component/Footer/footer'

class Layout extends Component{
    state = {

    }

    render(){
        return(
            <div>
                <Header/>
            {this.props.children}
            <Footer/>
            </div>
        )
    }
}

export default Layout