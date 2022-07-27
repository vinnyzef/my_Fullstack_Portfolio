import React from 'react'

import { BsGithub, BsLinkedin} from 'react-icons/bs'
import {FaFacebookF} from 'react-icons/fa'

const SocialMedia = () => {
  return (
    <div className='app__social'>

        <div>
          <a href="https://www.linkedin.com/in/vincent-zefran-8568551b3/">
           <BsLinkedin/>
           </a>
        </div>
        <div>
        <a href="https://github.com/vinnyzef">
            <BsGithub/>
            </a>
        </div>
    </div>
  )
}

export default SocialMedia