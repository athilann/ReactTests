import React from 'react';

function childrensWithProps(childrens, props){
    return React.Children.map(
        childrens,
        child => React.cloneElement(child,{...props})
    )
}

export{childrensWithProps}