import React from 'react'
import Data from '../../assets/data/data'
import JobCard from './JobCard'

const JobListing = () => {
  return (
    <div className='job_container'>
      {Data.map(data => (
        <JobCard 
          key = {data.id}
          company = {data.company}
          logo = {data.logo}
          new = {data.new}
          featured = {data.featured}
          position = {data.position}
          role = {data.role}
          level = {data.level}
          postedAt = {data.postedAt}
          contract = {data.contract}
          location = {data.location}
          languages = {data.languages}
          tools = {data.tools}
        />
      ))}
    </div>
  )
}

export default JobListing