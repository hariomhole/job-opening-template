import React from 'react'

const Card = (props) => {
  return (
    <div className='cards'>
<div className="top">
<img src={props.brandLogo} alt="img" />
<button>Save <i class="fa-regular fa-bookmark"></i></button>
</div>

<div className="middle">
<h2>{props.companyName}</h2>
<p>{props.datePosted}</p>
</div>

<div className='middle1'>
<h2>{props.post}</h2>
  <button>{props.tag1}</button> <button>{props.tag2}</button>
</div>
<hr />
<div className='bottom'>
<div className="bottom1">
<h2 style={{ color: '#000' }}>{props.pay}</h2>
<p style={{color:'gray'}}>{props.location}</p>
</div>

   <div className="bottom2">
   <button>Apply Now</button>
   </div>

</div>


 </div>
  )
}

export default Card
