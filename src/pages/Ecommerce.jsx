import React from 'react';
import {BsCurrencyDollar} from 'react-icons/bs';
import {GoPrimitiveDot} from 'react-icons/go'
import { Stacked,Pie,Button,SparkLine } from '../components';
import { earningData, SparklineAreaData,ecomPieChartData } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';

const Ecommerce = () => {
  return (
    <div className='mt-24 '>
      <div className='flex flex-wrap lg:flex-nowrap justify-center'>
        <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3
        bg-hero-pattern bg-no-repeat bg-cover bg-center
        '>
          <div className='flex justify-between items-center'>
            <div>
              <p className='font-bold text-gray-200'>Earnings</p>
              <p className='text-2xl'>$56,657.65</p>
            </div>
          </div>
          <div className='mt-6'>
              <Button 
                color="white"
                bgColor="blue"
                text="Download"
                borderRadius="10px"
                size="md"
              />
          </div>
        </div>
        <div className='flex m-3 flex-wrap justify-center gap-1 items-center '>
          {
            earningData.map((item)=>(
              <div
                key={item.title}
                className='bg-white h-44 w-52 dark:text-gray-200 dark:bg-secondary-dark-bg  p-4 pt-9 rounded-2xl'
              >
                <button type='button' style={{color:item.iconColor,backgroundColor:item.iconBg}} className='text-2xl opacity-0.9 rounded-full p-4
                hover:drop-shadow-xl
                '>
                  {item.icon}
                </button>
                <p className='mt-3 '>
                  <span className='text-lg font-semibold'> 
                    {item.amount}
                  </span>
                  <span className={`text-sm text-${item.pcColor} ml-2`}>
                    {item.percentage}
                  </span>
                </p>
                <p className='text-sm text-gray-400 mt-1'>
                  {item.title}
                </p>
              </div>
            ))
          }
        </div>
        

      </div>
      <div className='flex gap-10 flex-wrap justify-center'>
            <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780'>
                <div className='flex justify-between'>
                  <p className='font-semibold text-xl'>Revenue Section</p>
                  <div className='flex items-center gap-4'>
                    <p className='flex items-center gap-2 hover:drop-shadow-xl text-gray-600'>
                      <span><GoPrimitiveDot/></span>
                      <span>Expenses</span>
                    </p>
                    <p className='flex items-center gap-2 hover:drop-shadow-xl text-green-400'>
                      <span><GoPrimitiveDot/></span>
                      <span>Budget</span>
                    </p>
                  </div>
                </div>
                <div className='flex mt-10 gap-10 justify-center flex-wrap' >
                  <div className='m-4 pr-10 border-r-1 border-color'>
                    
                    <div>
                      <p>
                        <span className='text-3xl font-semibold'>$45,675</span>
                        <span className='bg-green-400 rounded-full cursor-pointer  hover:drop-shadow-xl text-white p-1.5 text-xs ml-3'>23%</span>
                      </p>
                      <p className='text-gray-500 mt-1'>Budget</p>
                    </div>
                    
                    <div className='mt-8'>
                      <p>
                        <span className='text-3xl font-semibold'>$45,675</span>
                      </p>
                      <p className='text-gray-500 mt-1'>Expense</p>
                    </div>
                    
                    <div className='mt-5'>
                      <SparkLine 
                        currentColor="blue"
                        id="line-sparkline"
                        type="Line"
                        width="250px"
                        height="80px"
                        color="blue"
                        data={SparklineAreaData}
                      />
                    </div>
                    <div className='mt-10'>
                      <Button 
                        color="white"
                        bgColor="blue"
                        text="Download Report"
                        borderRadius="10px"
                      />
                    </div>
                  </div>
                  <div>
                    <Stacked 
                      width="320px"
                      height="360px"
                      
                    />
                  </div>
                </div>
            </div>
      </div>

    </div>
  )
}

export default Ecommerce