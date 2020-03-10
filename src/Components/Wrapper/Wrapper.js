import React from 'react';
import BgImage from '../images/fondoApp3.png';

 function Wrapper(props){
    return <div className='BgContainer'>
              <img alt="" src={BgImage} width='100%'/>
      </div>
  }
export default Wrapper



// `url(require("path/image.ext"))` */
// <img alt="" styles={{ backgroundImage:`url(${BgImage})`}}/>
// function Wrapper(props) {
//   return <img alt="" styles={{ backgroundImage:`url(../images/fondoApp3.png)`}}/>
// };

// export default Wrapper
