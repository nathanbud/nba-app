import React, { Component} from 'react'
import styles from './videosList.module.css'
import axios from 'axios';

import { URL } from '../../../helper';
import Button from '../Buttons/buttons'
import { threadId } from 'worker_threads';

class VideosList extends Component{

    state = {
        teams:[],
        videos:[],
        start: this.props.start,
        end:this.props.start + this.props.amount,
        amount:this.props.amount
    }

    renderTitle = () =>{
        return this.props.title ? 
        <h3><strong>NBA </strong>Videos</h3> : null
    }

    loadMore = () =>{
        
    }

    renderButton = () =>{
        return this.props.loadmore ?
        <Button type = "loadmore"
                loadMore = {()=> this.loadMore()}
                cta="Load More Videos"/>
        :
        <Button type="linkTo" cta="More Videos" linkTo = "/videos"/>
    }

    render(){
        return(
        <div className = {styles.videosList_wrapper}>
            {this.renderTitle()}
            {this.renderButton()}
        </div>
        )
        
    }
}

export default VideosList;