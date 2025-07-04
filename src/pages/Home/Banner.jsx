import React from 'react';
import {motion} from "motion/react"
import team1 from '../../assets/team1.jpg'
import team2 from '../../assets/team2.jpg'

const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-96">
            <div className="hero-content flex-col lg:flex-row-reverse">
               <div className='flex-1'>
                   <motion.img
                       src={team1}
                       animate={{y: [100, 50, 100]}}
                       transition={{duration: 5, repeat: Infinity}}
                       className="max-w-sm border-blue-500 border-s-8 border-b-8 rounded-t-[40px] rounded-br-[40px] shadow-2xl"
                   />
                   <motion.img
                       src={team2}
                       animate={{x: [100, 150, 100]}}
                       transition={{duration: 10, delay:5, repeat: Infinity}}
                       className="max-w-sm border-blue-500 border-s-8 border-b-8 rounded-t-[40px] rounded-br-[40px] shadow-2xl"
                   />
               </div>
                <div className='flex-1'>
                    {/*<motion.h1*/}
                    {/*    animate={{*/}
                    {/*        rotate:180,*/}
                    {/*        transition:{duration:4},*/}
                    {/*    }}*/}
                    {/*    className="text-5xl font-bold">Latest Job For You!!</motion.h1>*/}

                    <motion.h1
                        initial={{scale: 0}}
                        animate={{scale: 1, transition: {duration: 4}}}
                        className="text-5xl font-bold">Remote <motion.span
                        animate={
                            {
                                color: ['#ff5733', '#33ff33', '#8a33ff'],
                                transition: {duration: 2, repeat: Infinity}
                            }}
                    >Jobs</motion.span> For you!
                    </motion.h1>

                    <p className="py-6">
                        "Foresighted desire for pleasure and so on. To demand it without taking exception, as if exercising. In division, one who disowns and one who is there at the boundary."
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
