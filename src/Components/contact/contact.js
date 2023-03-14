import React from 'react'
import './contact.css'

function contact() {
  return (
    <div className='mainContact'>
        <div className='Contact'>
            <h1 className='contact-Title'>Our Contact</h1>
            <div>
              <div className='OwnerImg'></div>
              <div className='OwnersDetail'>
                <p>  Wale Adenuga</p>
                <p><a href='/'> Adenuga@gmail.com</a></p>
                <p> +2348090832343</p>
              </div>
            </div>

            <div>
        <form>
        <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Name</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>

  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
 
  <div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Message</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>

  <button type="submit" class="btn btn-primary">Submit</button>
</form>
        </div>
        </div>

        {/* form */}
    
    </div>
  )
}

export default contact