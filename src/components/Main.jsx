import React from 'react'
import './style.css';
function Main() {
    return (
        <>
        <div className='clouds'>
            <div> <marquee scrollamount={"20"}><img src='https://www.pngarts.com/files/10/Vector-Cloud-Outline-PNG-Picture.png' height={"100px"} /></marquee></div>
            <div> <marquee scrollamount={"30"}><img src='https://www.pngarts.com/files/10/Vector-Cloud-Outline-PNG-Picture.png' height={"150px"} /></marquee></div>
            <div> <marquee scrollamount={"15"}><img src='https://www.pngarts.com/files/10/Vector-Cloud-Outline-PNG-Picture.png' height={"120px"} /></marquee></div>
            <div> <marquee scrollamount={"35"}><img src='https://www.pngarts.com/files/10/Vector-Cloud-Outline-PNG-Picture.png' height={"150px"} /></marquee></div>
            <div> <marquee scrollamount={"18"}><img src='https://www.pngarts.com/files/10/Vector-Cloud-Outline-PNG-Picture.png' height={"70px"} /></marquee></div>
        </div>
        <div className="outer-box">
            <div className="wheel1">
                <div className="wheel-outer1"></div>
                <div className="wheel-outer2"></div>
                <div className="subWheel11">
                </div>
                <div className="subWheel12">
                </div>
                <div className="chain-1"></div>
                <div className="chain-2"></div>
                <div className="moving-wheel">
                </div>
                <div className="middle-wheel">

                    <div className="stick1"></div>
                    <div className="stick2"></div>
                    <div className="middle-sub-wheel"></div>
                    <div className="paddle"></div>
                    <div className="sub-paddle"></div>
                </div>
            </div>
            <div className="wheel2">
                <div className="wheel-outer1"></div>
                <div className="wheel-outer2"></div>
                <div className="subWheel11">
                </div>
                <div className="subWheel12">
                </div>
                <div className="moving-wheel">
                </div>
                <div className="stick3"></div>
            </div>
            <div className="stick4"></div>
            <div className="seat">
                <div></div>
                <div></div>
            </div>
            <div className="handle">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className='path'>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
        </>
    )
}

export default Main
