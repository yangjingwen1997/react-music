import aixin from "../../assets/img/aixin.png";
import zhuan from "../../assets/img/zhuan.png";
import './tool.css'
import React from "react";

export const Tools=()=>{

        return (
            <div className="foot-btn">
                <ul>
                    <li className="say"><a >
                        <i style={{background:"url(/images/zan.png) no-repeat 0 0", "backgroundSize":"100%"}}></i><span>1598</span>
                    </a></li>
                    <li
                        className="zan"
                    ><a >
                        <i style={{background:"url(/images/cai.png) no-repeat 0 0", "backgroundSize":"100%"}}></i><span>15</span>
                    </a></li>
                    <li className="xing"><a >
                        <i><img src={aixin} alt=""/></i>
                    </a></li>
                    <li className="fx"><a>
                        <i><img src={zhuan} alt=""/></i>
                    </a></li>
                </ul>
            </div>
        )

}

