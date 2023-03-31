import React from 'react'
import styled from "styled-components"
import im1 from "./assets/bg-graph.png"
import im2 from "./assets/bg-texture.png"
import im3 from "./assets/card-bg-grid.png"
import im4 from "./assets/hero-image-1.png"
import im5 from "./assets/ww.PNG"
export default function App() {
    return (
        <Container>
            <div className="algo">
                <div className="first">
                    <div className="upper">

                        <h1 className="hy" >Be Better at DSA and CP</h1>
                        <p className="pp">Lorem ipsum dcing elit. Ut, porro cum. i am a coder i am a coder i am a coder iam a coder i am a coder</p>
                        <div className="buttons">
                            <button className="btn1">{"JOIN NOW"}</button>

                            <button className="btn2">{"view curriculum"}</button>
                        </div>
                        <div className="check">
                           <div className="n1"></div> <h1 className="t">check this box please</h1>
                           <div className="n2"></div> <h1 className="u">check this box please</h1>
                           <div className="n3"></div> <h1 className="v">check this box please</h1>
                           <div className="n4"></div>  <h1 className="w">check this box please</h1>
                             

                        </div>
                    </div>
                    <img className="hero" src={im4} alt="hero" />
                </div>

                <div className="second">

                    <div>
                        <img className="graph" src={im1} alt="graph" /> </div>

                    <div className="why1">
                        <p className="para">
                            Invest in skills,earn 10x of what you paid.
                        </p>
                        <p className="para2">sdowjrowe ro wir owri ouido fidfo asfdiaos fpaisdfo uasodif uasodfi sdf uasodfi uasfodia sdoifua sopdfiao sfdpiasfd uaisodf uasodfi uasodif uasdof asodif mu name is rohan and my name is vivek and my mother name is sshama i an a coder and i top in class 12 and i am best at work for ever</p>
                        <div className="check2">
                           <div className="n5"></div><div className="a"><h1>1.2Cr/year</h1></div>
                         
                           <div className="n6"></div> <div className="b"><h1>Multiple100ranks</h1></div>
                           
                           <div className="n7"></div> <div className="c"><h1>1000+offers</h1></div>
                           
                           <div className="n8"></div>
                           <div className="d"><h1>iitians</h1> </div>
                            
                          
                            

                             

                       
                    
                    </div>
                    <div className="why2">
                           {/* <div className="i"> */}
                                 <img className="yy" src={im5} alt="sdf" /> 
                                     {/* <div className="logo">
                                        <h1>price is like price</h1></div>                   */}
                           {/* </div>
                                 <div className="j">
                                     
                                     
                                    
                                    </div>                */}

                    </div>

                </div>







          </div>
            </div>
        </Container>
    )
}

const Container = styled.div`
.yy{
    
    height:120vh;
    width:40rem;
}

.i{
      
    height:30vh;
    top:20px;
    
}
.para2{
    font-size:15px;
}
.para{
    font-family: "Times New Roman", Times, serif;
    font-size:60px;
    font-weight:bold;
}
.why1{
    position: absolute;
width: 500px;
height: 803px;
left: 200px;
top: 200px;

}
.graph{
    position: absolute;
    width: 1120px;
    height: 1195px;
    left: 69px;
    
    top: 500px;
}
.why2{
    position: absolute;
    width: 615px;
    height: 1300px;
    left: 805px;
    top: 30px;
    
    filter: drop-shadow(0px 20px 75px rgba(5, 68, 94, 0.35));
      
}
.w{
    
position: absolute;
width: 292px;
height: 39.07px;
left: 708px;
top: 684px;

font-family: 'DM Sans';
font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 40px;
/* identical to box height, or 167% */

letter-spacing: -0.03em;

color: #FFFFFF;

}
.v{
    position: absolute;
width: 292px;
height: 39.07px;
left: 288px;
top: 684px;

font-family: 'DM Sans';
font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 40px;
/* identical to box height, or 167% */

letter-spacing: -0.03em;

color: #FFFFFF;
}
.u{
    position: absolute;
width: 292px;
height: 39.07px;
left: 708px;
top: 588px;

font-family: 'DM Sans';
font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 40px;
/* identical to box height, or 167% */

letter-spacing: -0.03em;

color: #FFFFFF;
}
.t{
    position: absolute;
width: 292px;
height: 39.07px;
left: 288px;
top: 588px;

font-family: 'DM Sans';
font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 40px;
/* identical to box height, or 167% */

letter-spacing: -0.03em;

color: #FFFFFF;
}

   
.n1{
    box-sizing: border-box;

position: absolute;
width: 64px;
height: 64px;
left: 200px;
top: 575px;
background: linear-gradient(270deg, #05445E 0%, #022534 100%);
border-radius: 7px;
border: 1px solid #FFFFFF;
}
.n2{
    box-sizing: border-box;

position: absolute;
width: 64px;
height: 64px;
left: 620px;
top: 575px;

background: linear-gradient(270deg, #05445E 0%, #022534 100%);
border-radius: 7px;
border: 1px solid #FFFFFF;
}
.n3{
    box-sizing: border-box;

position: absolute;
width: 64px;
height: 64px;
left: 200px;
top: 671px;
background: linear-gradient(270deg, #05445E 0%, #022534 100%);
border-radius: 7px;
border: 1px solid #FFFFFF;
}
.n4{box-sizing: border-box;

position: absolute;
width: 64px;
height: 64px;
left: 620px;
top: 671px;

background: linear-gradient(270deg, #05445E 0%, #022534 100%);
border-radius: 7px;
border: 1px solid #FFFFFF;}
.check{
    position: absolute;
width: 800px;
height: 160px;
left: 6px;
top: 55px;
}
.a{
    

    position: absolute;
    width: 64px;
    height: 1px;
    left: 265px;
    top: 550px;
 
}
.b{ position: absolute;
    width: 64px;
    height: 1px;
    left: 530px;
    top: 550px;}
.c{ position: absolute;
    width: 64px;
    height: 1px;
    left: 265px;
    top: 650px;}
.d{ position: absolute;
    width: 64px;
    height: 1px;
    left: 530px;
    top: 650px;}
.n5{
    box-sizing: border-box;

position: absolute;
width: 64px;
height: 64px;
left: 200px;
top: 575px;
background-color:#808080;
border-radius: 7px;
border: 1px solid #FFFFFF;
}
.n6{
    box-sizing: border-box;

position: absolute;
width: 64px;
height: 64px;
left: 460px;
top: 575px;
background-color:#808080;
border-radius: 7px;
border: 1px solid #FFFFFF;
}
.n7{
    box-sizing: border-box;

position: absolute;
width: 64px;
height: 64px;
left: 200px;
top: 671px;background-color:#808080;
border-radius: 7px;
border: 1px solid #FFFFFF;
}
.n8{box-sizing: border-box;

position: absolute;
width: 64px;
height: 64px;
left: 460px;
top: 671px;

background-color:#808080;
border-radius: 7px;
border: 1px solid #FFFFFF;}
.check2{
    position: absolute;
    width:60vw;
    height: 200px;
    left: -200px;
    top: 50px;
}
.algo{
    position: relative;
width: 100vw;
height: 100vh;

background: #FFFFFF;}
.pp{
    position: absolute;
wposition: absolute;
width: 744px;
height: 78.14px;
left: 200px;
top: 380px;

font-family: 'DM Sans';
font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 40px;
/* or 167% */

letter-spacing: -0.03em;

color: #FFFFFF;
}
.hy{
    position: absolute;
width: 759px;
height: 70.33px;
left: 200px;
top: 287px;

font-family: 'Rubik';
font-style: normal;
font-weight: 800;
font-size: 72px;
line-height: 72px;
/* or 100% */

letter-spacing: -0.03em;

color: #FFFFFF;
}  
.first{
    position: absolute;
    width: 1920px;
    height: 968px;
    left: 0px;
    top: 0px;
   
    background: linear-gradient(270deg, #05445E 0%, #022534 100%);}
    .uppper{
        position: absolute;
    width: 759px;
    height: 274.24px;
    left: 200px;
    top: 247px;
    
    } 
.hero{
    position: absolute;
width: 761px;
height: 763px;
left: 1083px;
top: 158px;

}
.btn1{position: absolute;
    width: 235px;
    height: 64px;
    left: 1px;
    top: 340px;
    font-size:22px;
     color:linear-gradient(270deg, #05445E 0%, #022534 100%);

    border-radius:20px;   
    
    filter: drop-shadow(0px 4px 200px #29539B) drop-shadow(0px 0px 200px rgba(255, 255, 255, 0.3));}
    .btn2{
position: absolute;
    width: 235px;
    height: 64px;
    left: 320px;
    top: 340px;
    font-size:22px;
   background:linear-gradient(270deg, #05445E 0%, #022534 100%);
    color:white;
    border-radius:20px;    
    filter: drop-shadow(0px 4px 200px #29539B) drop-shadow(0px 0px 200px rgba(255, 255, 255, 0.3));
    }
    
.second{

    position: absolute;
    width: 1920px;
    height: 100vh;
    left: 0px;
    top: 968px;
//     position: absolute;
// width: 1920px;
// height: 1248px;
// left: 0px;
// top: 968px;
   

}
.buttons{
    
    position: absolute;
left: 10.42%;
right: 63.44%;
top: 19.73%;
bottom: 77.51%;
}
.graph{
   position: absolute;
width: 1920px;
height: 1195px;
left: 0px;
top: 0px;

background: linear-gradient(180deg, #F7FAFF 0%, rgba(232, 240, 255, 0) 100%);
}
`;
