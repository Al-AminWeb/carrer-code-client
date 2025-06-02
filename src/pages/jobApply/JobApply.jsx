import React from 'react';
import UseAuth from "../../hooks/UseAuth.jsx";
import {Link, useParams} from "react-router";

const JobApply = () => {
    const {user} = UseAuth();
    const {id: jobId} = useParams();

    console.log(user);

    const handleApplyFormSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const linked = form.linked.value;
        const github = form.github.value;
        const resume = form.resume.value;



    }

    return (
        <div
            className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 text-white">
            <div className="w-full max-w-md p-6  rounded-lg shadow-lg ">
                <h2 className="text-3xl font-bold text-center mb-6">Apply for this Jobs:<Link to={`/jobs/${jobId}`}>Details</Link></h2>
                <form onSubmit={handleApplyFormSubmit}>
                    <fieldset className="flex flex-col gap-4 p-6  border border-gray-300 rounded-lg text-center">
                        <label className="font-semibold">LinkedIn Link</label>
                        <input type="url" className="input p-2 rounded-md border focus:ring-2 focus:ring-blue-400" name="linked"
                               placeholder="LinkedIn"/>

                        <label className="font-semibold">Github Link</label>
                        <input type="url" className="input p-2 rounded-md border focus:ring-2 focus:ring-blue-400" name="github"
                               placeholder="Github Link"/>

                        <label className="font-semibold">Resume Link</label>
                        <input type="url" className="input p-2 rounded-md border focus:ring-2 focus:ring-blue-400" name="resume"
                               placeholder="Resume Link"/>

                        <input type="submit" value="Apply"
                               className="btn bg-blue-500 text-white py-2 rounded-md hover:bg-blue-700 cursor-pointer"/>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default JobApply;