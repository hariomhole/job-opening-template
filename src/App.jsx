import React from 'react'
import './App.css'
import Card from './Components/Card'
const App = () => {

const jobOpenings = [
  {
    brandLogo: "https://cdn.simpleicons.org/google",
    companyName: "Google",
    datePosted: "5 days ago",
    post: "Frontend Developer",
    tag1: "Full-time",
    tag2: "Junior Level",
    pay: "$35/hour",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCPjeZ-FjJ-FHOMlVO9c1ZtEPo8ypuNnRN1uCMugVyyA&s=10",
    companyName: "Amazon",
    datePosted: "1 week ago",
    post: "Software Engineer",
    tag1: "Full-time",
    tag2: "Junior Level",
    pay: "$32/hour",
    location: "Bengaluru, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStB4DxZ1tbaiFIsCHrQvU75hDYz_Zb3xxwHzirnEm7vQ&s=10",
    companyName: "Microsoft",
    datePosted: "3 days ago",
    post: "React Developer",
    tag1: "Full-time",
    tag2: "Mid Level",
    pay: "$38/hour",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://cdn.simpleicons.org/meta",
    companyName: "Meta",
    datePosted: "2 weeks ago",
    post: "Frontend Engineer",
    tag1: "Full-time",
    tag2: "Senior Level",
    pay: "$45/hour",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://cdn.simpleicons.org/apple",
    companyName: "Apple",
    datePosted: "10 weeks ago",
    post: "iOS Developer",
    tag1: "Full-time",
    tag2: "Senior Level",
    pay: "$48/hour",
    location: "Bengaluru, India"
  },
  {
    brandLogo: "https://cdn.simpleicons.org/netflix",
    companyName: "Netflix",
    datePosted: "4 days ago",
    post: "UI/UX Developer",
    tag1: "Part-time",
    tag2: "Mid Level",
    pay: "$40/hour",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://cdn.simpleicons.org/nvidia",
    companyName: "NVIDIA",
    datePosted: "3 weeks ago",
    post: "AI Software Engineer",
    tag1: "Full-time",
    tag2: "Senior Level",
    pay: "$50/hour",
    location: "Pune, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsRU8k5s2sFfPHovcao5kOVrd9qH7eblKbXc_MXt6WGg&s=10",
    companyName: "IBM",
    datePosted: "6 days ago",
    post: "Backend Developer",
    tag1: "Full-time",
    tag2: "Junior Level",
    pay: "$30/hour",
    location: "Pune, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBfhNjTPbynqq4rJ0OjnDzHMXu9zgcdhwSE41kCeSgRw&s=10",
    companyName: "Oracle",
    datePosted: "10 weeks ago",
    post: "Java Developer",
    tag1: "Full-time",
    tag2: "Mid Level",
    pay: "$34/hour",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvjYtVcich_XdbgLMVd1JDzdq9dzVY5jCGJJDLx7uX9A&s=10",
    companyName: "Adobe",
    datePosted: "1 month ago",
    post: "React Developer",
    tag1: "Part-time",
    tag2: "Junior Level",
    pay: "$33/hour",
    location: "Noida, India"
  }
];


  return (
    
 <div className="parent">

{jobOpenings.map((job, index) => {
  return <Card key={index} brandLogo={job.brandLogo} companyName={job.companyName} datePosted={job.datePosted} post={job.post} tag1={job.tag1} tag2={job.tag2} pay={job.pay} location={job.location} />
})}


 </div>
    
  )
}

export default App


