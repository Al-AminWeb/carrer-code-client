import React from 'react';
import {FaMapMarkerAlt} from "react-icons/fa";
import {Link} from "react-router";

const JobCard = ({job}) => {
    const {title, location, _id, description, company, company_logo, requirements} = job;
    return (
        <div className="card bg-base-100 w-96 shadow-sm border-2 border-red-400">
            <div className="flex ">
                <figure>
                    <img
                        src={company_logo}
                        alt="Shoes"/>
                </figure>
                <div className=''>
                    <h1 className='text-3xl'> {company}</h1>
                    <p className='flex items-center'><FaMapMarkerAlt/>{location}</p>
                </div>
            </div>
            <div className="card-body">
                <h2 className="card-title">
                    {title}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>{description}</p>
                <div className="card-actions">
                    {
                        requirements.map((skill, index) => <div className="badge badge-outline"
                                                                key={index}>{skill}</div>)
                    }
                </div>
                <div className='card-actions justify-end'>

                    <Link to={`/jobs/${_id}`}>
                        <button className='btn btn-primary'>Show Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default JobCard;
