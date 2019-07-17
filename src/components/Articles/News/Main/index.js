import React from 'react';

import NewsSlider from '../../../widgets/NewsSlider/slider'

const NewsMain = () =>{
    return(
        <div>
            <NewsSlider 
                type="featured"
                settings={{dots:false}}
                start={0}
                amount={3} />
            
        </div>
    )
}

export default NewsMain