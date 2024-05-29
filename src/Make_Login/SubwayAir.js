import sarea from './sarea.json';
import { useState, useEffect, useRef } from 'react';

export default function SubwayAir() {
  const [tdata, setTdata] = useState();
  const [ops, setOps] = useState();

  // 데이터 가져오기 (GET)
  const getFatchData = async(url) => {
    console.log("url:",url);
    const resp = await fetch(url);
    const data = await resp.json();
    setTdata(data)
  };
   
  // 컴포넌트 생성시
  useEffect(() => {
    // let url = `https://apis.data.go.kr/6260000/IndoorAirQuality/getIndoorAirQualityByStation?`;
    // url = url + `serviceKey=${process.env.REACT_APP_API_KEY}`;
    // url = url + `&pageNo=4&numOfRows=4&resultType=JSON&controlnumber=2024052818`;
    let url = "http://localhost:3000/Login";

    getFatchData(url);
  }, []);


// 

  return (
    <div className="w-full h-full 
                    flex flex-col justify-start items-start">
        <form className="w-full flex justify-center items-center">
            <div className="w-4/5 grid grid-cols-1 md:grid-cols-2 my-5">
                <label htmlFor="op" 
                       className="text-xl font-bold
                                  inline-flex 
                                  justify-start items-center 
                                text-emerald-900 dark:text-emerald-900">
                    부산 지하철 실내공기질
                </label>
                <select id="op"
                        onChange=""
                        className='bg-emerald-50 border border-emerald-300
                        text-emerald-900 text-sm rounded-lg
                        focus:ring-blue-500 focus:border-blue-500
                          block w-full p-2.5'/>
                    <option defaultValue={''}>

                    </option>
            </div>
        </form>
        <div className="w-full grid grid-cols-1 
                        md:grid-cols-2 lg:grid-cols-3
                        gap-2">
            {}
        </div>
    </div>
  )
}
