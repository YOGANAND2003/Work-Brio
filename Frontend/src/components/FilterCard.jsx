import React from 'react'
import { RadioGroup, RadioGroupItem } from './ui/radio-group'
import { Label } from './ui/label'


const  filterData = [
  {
    filterType:"Location",
    array:["Delhi NCR", "Banglore", "Hyderabad", "Pune", "Mumbai"]
  },
  {
    filterType:"Industry",
    array:["Frontend Developer", "Backend Developer", "Full Stack Developer", "Data Analyst", "Machine Learning"]
  },
  {
    filterType:"Salary",
    array:["0-40K/month", "42K-1L/month", "1L - 2L/month", "2L-2.5L/month", "3L/month"]
  },

]
const FilterCard = () => {
  return (
    <div className='w-full bg-white p-3 rounded-md'>
      <h1 className='font-bold text-lg'>Filter Jobs</h1>
      <hr className='mt-3'/>
      <RadioGroup>
        {
          filterData.map((data,index)=>(
            <div>
              <h1 className="font-bold text-lg">{data.filterType}</h1>
              {
                data.array.map((item,index)=>{
                  return (
                    <div className='flex items-center space-x-2 my-2'>
                      <RadioGroupItem value={item}/>
                      <Label>{item}</Label>
                    </div>
                  )
                })
              }
            </div>
          ))
        }
      </RadioGroup>
    </div>
    
  )
}

export default FilterCard