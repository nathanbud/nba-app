import React from 'react';
import styles from '../videosList.module.css';
import VideoListTemplate from '../videosListTemplate';


const videosRelated = (props) =>(
    <div className={styles.relatedWrapper}>
        <VideoListTemplate
        data={props.data}
        teams={props.teams}
        />
        realted
    </div>
)

export default videosRelated;