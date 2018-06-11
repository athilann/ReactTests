import React from 'react';
import {childrensWithProps} from '../utils/reactUtils'

export default props =>(
    <div>
        <h1>Family!!</h1>
        {
            childrensWithProps(props.children, props)
        }
    </div>
);