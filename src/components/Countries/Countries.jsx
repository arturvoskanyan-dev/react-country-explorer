import React from 'react'

export default function Countries({flag, name, population, region, capital}) {
  return (
    <section className='p-3 bg-white rounded-2xl hover:scale-110 duration-200'>
        <img src={flag} className='w-[240px] h-[150px] object-contain cursor-pointer' />
        <div className='text-center card-info'>
            <h1 className='max-w-xs text-2xl font-medium'>{name}</h1>
            <p><span>Population : </span>{population}</p>
            <p><span>Region : </span>{region}</p>
            <p><span>Capital :</span> {capital}</p>
        </div>
    </section>
  )
}
