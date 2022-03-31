import React from 'react'

const JobCard = (props) => {
  return (
    <div className='job_card'>
        <img src={props.logo} alt='logo' />
        <div className='job_details'>
            <div className='company'>
                <span className='company_name'>
                    {props.company}
                </span>
                <span className='company_new'>
                    {props.new ? "NEW!" : ""}
                </span>
                <span className='company_featured'>
                    {props.featured ? "FEATURED" : ""}
                </span>
            </div>

            <div className='job_title'>
                <h3>{props.position}</h3>
            </div>

            <div className='job_attributes'>
                <span>{props.postedAt}</span>
                <span className='dot'></span>
                <span>{props.contract}</span>
                <span className='dot'></span>
                <span>{props.location}</span>
            </div>

            <hr className="line_break"></hr>

            <div className='job_languages'>
                <span className='choice'>{props.role}</span>
                <span className='choice'>{props.level}</span>
                <span className='choice'>{props.languages}</span>
                <span className='choice'>{props.tools}</span>
            </div>
        </div>
    </div>
  )
}

export default JobCard