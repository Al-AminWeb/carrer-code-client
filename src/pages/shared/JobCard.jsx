import React from 'react';

const JobCard = ({job}) => {
    const {title,location,jobType,category,description,company,company_logo} = job;
    return (
        <div className="card bg-base-100 w-96 shadow-sm border-2 border-red-400">
            <figure>
                <img
                    src={company_logo}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {title}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">{category}</div>
                    <div className="badge badge-outline">{jobType}</div>
                </div>
            </div>
        </div>
    );
};

export default JobCard;
