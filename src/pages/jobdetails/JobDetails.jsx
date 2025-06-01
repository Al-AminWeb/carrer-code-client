import React from 'react';
import {Link, useLoaderData} from "react-router";

const JobDetails = () => {
    const {_id,title,company} = useLoaderData();


    return (
        <div className="py-5">
            <h2 className='text-4xl '>Job details of:{title}</h2>
            <p>Company: {company}</p>
            <Link to={`/jobApply/${_id}`}>
                <button className='btn-primary btn'>Apply Now</button>
            </Link>
        </div>
    );
};

export default JobDetails;
