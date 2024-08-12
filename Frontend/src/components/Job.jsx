import React from 'react'
import { Button } from './ui/button'
import { Bookmark } from 'lucide-react'
import { Avatar, AvatarImage } from './ui/avatar'
import { Badge } from './ui/badge'

const Job = () => {
  return (
    <div className='p-5 rounded-md shadow-xl bg-white border border-gray-300'>
      <div className='flex items-center justify-between '>

        <p className='text-sm text-gray-500 '>2days ago</p>
        <Button variant="outline" className="rounded-full" size='icon'><Bookmark /></Button>
      </div>
      <div className='flex items-center gap-2 my-2'>
        <Button className='p-6' variant="outline" size="icon">
          <Avatar>
            <AvatarImage src="https://st3.depositphotos.com/43745012/44906/i/450/depositphotos_449066958-stock-photo-financial-accounting-logo-financial-logo.jpg"></AvatarImage>
          </Avatar>
        </Button>
        <div>
          <h1 className='font-medium text-lg'>Company Name</h1>
          <p className='text-sm text-gray-500'>India</p>
        </div>
      </div>
      <div>
        <h1 className="font-bold text-lg my-2">Title</h1>
        <p className='text-sm text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero ipsam molestiae officia ullam magni cupiditate delectus dolore neque ut maxime!</p>
      </div>
      <div className='flex items-center gap-2 mt-4'>
        <Badge className={'text-blue-700 font-bold'} variant="ghost">12 Positions</Badge>
        <Badge className={'text-[#f83002] font-bold'} variant="ghost"> Part Time</Badge>
        <Badge className={'text-[#c88bf0] font-bold'} variant="ghost"> 24</Badge>
      </div>
      <div className='flex items-center gap-4 mt-4'>
        <Button variant="outline" className="bg-[#9beb06] font-bold">Details</Button>
        <Button className="bg-[#650ca1] ">Save for Later</Button>
      </div>
    </div>
  )
}

export default Job