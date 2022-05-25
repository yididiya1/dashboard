import React from 'react'
import {SparklineComponent,SparklineTooltip,Inject} from '@syncfusion/ej2-react-charts';

const SparkLine = ({color,currentColor,width,height,id,type,data}) => {
  return (
    <SparklineComponent
      dataSource={data}
      width={width}
      height={height}
      id={id}
      lineWidth={1}
      fill={color}
      valueType="Numeric"
      border={{color:currentColor,width:2}}
      type={type}
      xName="x"
      yName="yval"
      tooltipSettings={
        {
          visible:true,
          format:'${x} : data ${yval}',
          trackLineSetting:{
            visible:true
          }
        }
      }
    >
      <Inject services={[SparklineTooltip]} />

    </SparklineComponent>
  )
}

export default SparkLine