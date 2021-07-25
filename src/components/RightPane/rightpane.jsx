import React from 'react';
import { Search, Verified } from '../icons';
import { Chelsea, Engineering, Skysports } from './images';
import './rightpane.scss';


const RightPane = () => {
    return ( 
        <div className="rightpane">
          <div className="container">
            <div class="input">
                <button type="submit">
                    <i>{Search}</i>
                </button>
              <input type="search"  placeholder="Search Twitter" />
             </div>


             <div className="mightLike">
                 <h2>You might like</h2>
                 <div className="accounts">
                     <button className="div">
                       <div className="photo">
                          <img 
                          src={Skysports}
                          alt="jetbrains"
                       />
                       </div>
                      
                       <div className="names">
                       <div className="name"><a href="/">Sky Sports News<span>{Verified}</span></a></div>
                       <div className="username">@SkySportsNews</div>
                       </div>
                       <div className="follow">
                           <button>Follow</button>
                       </div>
                     </button>

                     <button className="div">
                     <div className="photo">
                       <img 
                       src={Engineering}
                       alt="Chelsea"
                       />
                       </div>
                         <div className="names">
                            <div className="name"><a href="/">World of Engineering</a></div>
                            <div className="username">@engineers_feed</div>
                         </div>
                     
                       <div className="follow">
                           <button>Follow</button>
                       </div>
                     </button>

                     <button className="div">
                     <div className="photo">
                       <img 
                       src={Chelsea}
                       alt="chelsea_fc"
                       />
                       </div>
                       <div className="names">
                          <div className="name"><a href="/">Chelsea FC<span>{Verified}</span></a></div>
                          <div className="username">@chealseafc</div>
                       </div>
                       <div className="follow">
                           <button>Follow</button>
                       </div>
                     </button>
                     <button className="Div">
                       <h3>
                        Show more
                        </h3>
                     </button>
                 </div>
             </div>
         </div>
        </div>
     );
}
 
export default RightPane;