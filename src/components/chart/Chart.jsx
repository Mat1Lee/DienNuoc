import "./chart.scss";
import { useEffect,useState } from "react";
import { GIA_DIEN,GIA_NUOC } from "../../context/redux/types/QuanLyDienNuocTye";
import { QuanLyDienNuocAction } from "../../context/redux/actions/QuanLyDienNuocAction";
import {
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";


const generateOption =(data)=>{
  
}

const Chart = ({props,aspect, title }) => {     
  // const [reportType,setReportType] = useState('all')
  
  const data1=[]
   
  props?.map((data,index)=>{
    
    data1?.push({'name':data?.key , 'Total':(data?.data.Dien*GIA_DIEN)+(data?.data.Nuoc*GIA_NUOC)})
  
  
  })
  // props.Data?.map((data,index)=>{
    
  //   data1?.push({'name':data?.key , 'Total':(data?.data.ToTal.Dien*GIA_DIEN)+(data?.data.ToTal.Nuoc*GIA_NUOC)})
  
  
  // })
  // useEffect(()=>{
  //   let customData =[];
  //   switch (reportType) {
  //     case 'all':
  //       customData = data1
  //       break;  
  //     case '7':
  //       customData = data1.slice(Math.max(data1.length -7, 1));
  //       break;  
  //     case '30':
  //       customData = data1.slice(Math.max(data1.length -30, 1));
  //       break;  
    
  //     default:
  //       customData = data1;
  //       break;
  //   }
  //   setReportType(generateOption(customData))
  // },[data1,reportType])
 
  return (
    <div className="chart"> 
      <div className="title">{title}</div>
      {/* <button color={reportType === '30' ? 'secondary' : ''}
          onClick={() => setReportType('30')}
      >30 ngay</button>
      <button color={reportType === '7' ? 'secondary' : ''}
          onClick={() => setReportType('7')}
      >7 ngay</button> */}
      <ResponsiveContainer width="100%" aspect={aspect}>
        <AreaChart
          width={730}
          height={250}
          data={data1}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }} 
        >
          <defs>
            <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" stroke="gray" />
          <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="Total"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#total)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
