import { Button } from '@/components/ui/button'
import React from 'react'

function UsageTrack() {
  return (
    <div className='m-5'>
        <div className='bg-primary p-3 text-white rounded-lg'>
            <h2>Credits</h2>
            <div className='h-2 bg-[#9981f9] w-full rounded-full mt-3'>
                <div className='h-2 bg-white rounded-full' style={{width:'35%'}}>

                </div>

            </div>
            <h2 className='text-sm my-2'>350/10,000 credit used</h2>
        </div>
        <Button variant={'secondary'} className='w-full my-3 text-primary'>Upgrade</Button>
    </div>
  )
}

export default UsageTrack