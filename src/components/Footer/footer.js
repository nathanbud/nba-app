import React from 'react';
import styles from './footer.module.css'
import {Link} from 'react-router-dom'

import { CURRENT_YEAR } from '../../helper'

const Footer = () =>(
        <div className = { styles.footer}>
            <Link to = "/" className = {styles.logo}>
            <img alt="nba logo" src="/images/nba_logo.png"/>
            </Link>
            <div className = { styles.right }>
                @NBA {CURRENT_YEAR} All Rights Reserved
            </div>
        </div>
    )


export default Footer