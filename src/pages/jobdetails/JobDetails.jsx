import React from 'react';
import {useLoaderData} from "react-router";

const JobDetails = () => {
    const {title,company} = useLoaderData();


    return (
        <div className="py-5">
            <h2 className='text-4xl '>Job details of:{title}</h2>
            <p>Company: {company}</p>
            <button className='btn-primary btn'>Apply Now</button>
        </div>
    );
};

export default JobDetails;
