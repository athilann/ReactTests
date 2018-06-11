import React from 'react';
import ReactDOM from 'react-dom';
import Family from './family';
import Member from './member';


ReactDOM.render(
    <Family lastName='Hell'>
        <Member name='João' />
        
    </Family>
, document.getElementById('app'));

