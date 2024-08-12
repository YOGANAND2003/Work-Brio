import React from 'react'
import NavBar from './shared/Navbar'
import Job from './Job';


const randomJaobs = [1,2,3,4];
const Browse = () => {
    return (
        <div>
            <NavBar />
            <div className='max-w-7xl mx-auto my-10'>
                <h1 className='font-bold text-xl'>Search Results ({randomJaobs.length})</h1>
                <div className='grid grid-cols-3 gap-4 mt-5'>
                {
                    randomJaobs.map((item,inex)=>{
                        return (
                            <Job/>
                        )
                    })
                }
                </div>
            </div>
        </div>
    )
}

export default Browse