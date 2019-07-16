import React, { Component} from 'react'
import axios from 'axios';
import { URL } from '../../../../helper'

import styles from '../../articles.module.css';
import Header from './header'
import VideosRelated from '../../../widgets/VideosList/videosRelated/videosRelated'

class VideoArticle extends Component {

    state ={
        article: [],
        team: [],
        teams:[],
        related:[]
    }

    componentWillMount(){
        axios.get(`${URL}/videos?id=${this.props.match.params.id}`)
        .then ( response =>{
            let article = response.data[0];

            axios.get(`${URL}/teams?id=${article.team}`)
            .then (response => {
                this.setState({
                    article,
                    team:response.data
                })
            })
        })
    }

    getRelated = ()=>{
       axios.get(`${URL}/teams`)
       .then( response =>{
           let teams = response.data

           axios.get(`${URL}/videos?q=${this.team[0].city}&_limit=3`)
           .then(response =>{
               this.setState({
                   teams,
                   related:response.data
               })
           })
       }

       ) 
    }

    render(){
        const article = this.state.article;
        const team = this.state.team;

        return(
            <div>
                <Header 
                teamData={team[0]}
            />
            <div className = {styles.videoWrapper}>
                <h1>{article.title}</h1>
                <iframe title="videoplayer"
                        width="100%"
                        height="300px"
                        src={`https://www.youtube.com/embed/${article.url}`}>
                </iframe>
            </div>
            <VideosRelated 
            data ={this.state.related}
            teams ={this.state.teams}
            />
            </div>
        )
    }
}

export default VideoArticle;





