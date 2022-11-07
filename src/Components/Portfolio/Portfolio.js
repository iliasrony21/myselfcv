import React from 'react'
import './Portfolio.css'

import project1 from '../../img/project1.png'
import project2 from '../../img/project2.png'
import project3 from '../../img/project3.png'
import project4 from '../../img/project4.png'
import project5 from '../../img/project5.png'
import project6 from '../../img/project6.png'
import project7 from '../../img/project7.png'

const Portfolio = () => {
  return (
    <div>
      <div>
        <div className='portfolio mb-0'>
          <span className='mt-30 text-5xl text-center font-bold flex items-center justify-center '>
            Recent projects
          </span>

          <span className='text-5xl text-primary text-center font-bold  flex items-center justify-center mb-[-36px] '>
            Portfolio
          </span>
          <div className='projects'>
            <div className='carousel w-full  '>
              <div id='slide1' className='carousel-item relative w-full'>
                <img
                  src={project1}
                  className='w-full rounded-lg shadow-2xl mt-[-96px]'
                  alt='project'
                />
                <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
                  <a href='#slide4' className='btn btn-circle'>
                    ❮
                  </a>
                  <a href='#slide2' className='btn btn-circle'>
                    ❯
                  </a>
                </div>
              </div>
              <div id='slide2' className='carousel-item relative w-full'>
                <img
                  src={project2}
                  className='w-full mt-[-96px] rounded-lg shadow-2xl'
                  alt='project'
                />
                <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
                  <a href='#slide1' className='btn btn-circle'>
                    ❮
                  </a>
                  <a href='#slide3' className='btn btn-circle'>
                    ❯
                  </a>
                </div>
              </div>
              <div id='slide3' className='carousel-item relative w-full'>
                <img
                  src={project3}
                  className='w-full rounded-lg shadow-2xl mt-[-96px]'
                  alt='project'
                />
                <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
                  <a href='#slide2' className='btn btn-circle'>
                    ❮
                  </a>
                  <a href='#slide4' className='btn btn-circle'>
                    ❯
                  </a>
                </div>
              </div>
              <div id='slide4' className='carousel-item relative w-full'>
                <img
                  src={project4}
                  className='w-full rounded-lg shadow-2xl mt-[-96px]'
                  alt='project'
                />
                <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
                  <a href='#slide3' className='btn btn-circle'>
                    ❮
                  </a>
                  <a href='#slide5' className='btn btn-circle'>
                    ❯
                  </a>
                </div>
              </div>
              <div id='slide5' className='carousel-item relative w-full'>
                <img
                  src={project5}
                  className='w-full rounded-lg shadow-2xl mt-[-96px]'
                  alt='project'
                />
                <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
                  <a href='#slide4' className='btn btn-circle'>
                    ❮
                  </a>
                  <a href='#slide6' className='btn btn-circle'>
                    ❯
                  </a>
                </div>
              </div>
              <div id='slide6' className='carousel-item relative w-full'>
                <img
                  src={project6}
                  className='w-full rounded-lg shadow-2xl mt-[-96px]'
                  alt='project'
                />
                <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
                  <a href='#slide5' className='btn btn-circle'>
                    ❮
                  </a>
                  <a href='#slide7' className='btn btn-circle'>
                    ❯
                  </a>
                </div>
              </div>
              <div id='slide7' className='carousel-item relative w-full'>
                <img
                  src={project7}
                  className='w-full rounded-lg shadow-2xl mt-[-96px]'
                  alt='project'
                />
                <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
                  <a href='#slide6' className='btn btn-circle'>
                    ❮
                  </a>
                  <a href='#slide1' className='btn btn-circle'>
                    ❯
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
