import React, {useEffect, useState} from 'react';
import JobCard from "../shared/JobCard.jsx";

const HotJobs = () => {
    const [jobs, setJobs] = useState([])
    useEffect(() => {
        fetch("http://localhost:3000/jobs")
            .then(res => res.json())
            .then(data => {
                setJobs(data)
            })
    }, [])
    return (
        <div>
            <h1 className='text-4xl text-center py-4'>Hot job off the day</h1>
            <div className='flex justify-center items-center min-h-screen'>

                <div className='grid grid-cols-1 lg:grid-cols-3 gap-3 md:grid-cols-2 '>

                    {
                        jobs.map(job=> <JobCard key={job._id} job={job}></JobCard>)
                    }
                </div>
            </div>

        </div>
    );
};

export default HotJobs;
