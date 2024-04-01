// import React from "react";



const Homecontent = () => {
    return ( 
        <div  className="homeContent">
            <div className="heroSection bg-slate-900 text-white">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <div className="content1">
                        <div className="textContent">
                          <h1 className="text-2xl md:text-4xl font-semibold ">GET THE HEALTHY BODY WITH THE PERFECT EXERCISES</h1>
                          <p className="text-xl">Welcome to <span className="text-semibold">GymFit</span> where we believe that fitness is not just a destination but a transformative journey</p>
                        </div>
                        <div className="buttonContent flex gap-3 mb-3 items-center">
                            <button className="btn1 px-2 text-center rounded-md py-2 text-md w-44 bg-teal-400 hover:bg-teal-500">Join Membership</button>
                            <button className="w-44 py-2 px-2 text-center border-2 border-teal-400 rounded-md hover:border-teal-500">Request a demo</button>
                        </div>
                        </div>
                        <div className="content2">
                            <div className="image-content">
                                <img src="./images/image3.png" width={'90%'} alt="" />
                            </div>
                        </div>
                        
                        
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Homecontent;