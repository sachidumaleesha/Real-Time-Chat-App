import React from 'react'

const GenderCheckbox = () => {
  return (
    <div className='flex'>

        {/* male */}
        <div className='form-control'>
            <label className='label gap-2 cursor-pointer'>
                <span>Male</span>
                <input type="checkbox" className="checkbox" name="gender" />
            </label>
        </div>

        {/* female */}
        <div className='form-control'>
            <label className='label gap-2 cursor-pointer'>
                <span>Female</span>
                <input type="checkbox" className="checkbox" name="gender"/>
            </label>
        </div>
    </div>
  )
}

export default GenderCheckbox