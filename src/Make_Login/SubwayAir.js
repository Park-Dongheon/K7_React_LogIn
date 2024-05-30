import SubwayInfo from './SubwayInfo';
import { useState, useEffect, useRef } from 'react';

export default function SubwayAir() {
  const [ops, setOps] = useState([]);
  const [tdata, setTdata] = useState();
  const [selOp, setSelOp] = useState("");

  const selRef = useRef();

  const handleSelect = (item) => {
    console.log("select 선택:", item)

    setSelOp(item.target.value);
  };

  // 데이터 가져오기 (GET)
  const getFetchData = (url) => {
    fetch(url)
      .then(resp => resp.json())
      .then(data => { setTdata(data.getIndoorAirQualityByStation.body.items.item) })
      .catch(err => console.err("Error URL:", err));

    console.log("getFetchData", url);
  };

  // 컴포넌트 생성시
  useEffect(() => {
    // https://apis.data.go.kr/6260000/IndoorAirQuality/getIndoorAirQualityByStation?serviceKey=y%2Bf1E6HyMydMYcuThvZqQ1aJdlC2JdR%2BnAKMW0MSzAlCb7bH252RGEQw0JRJNb8qi2QiEuY7wghxOLD8ACFe2A%3D%3D&pageNo=4&numOfRows=4&resultType=JSON&controlnumber=2024052818

    let url = `https://apis.data.go.kr/6260000/IndoorAirQuality/getIndoorAirQualityByStation?`;
    url = url + `serviceKey=${process.env.REACT_APP_API_KEY}`;
    url = url + `&pageNo=4&numOfRows=4&resultType=JSON&controlnumber=2024052818`;

    getFetchData(url);
  }, []);

  useEffect(() => {
    if(!tdata) return;
    // console.log("tdata", tdata)

    let tm = tdata.map(item => <option key={item} 
                                       value={item}>
                                {item.site}
                               </option>);

    console.log("역이름:", tm)
    setOps(tm);
  }, [tdata]);

  return (
    <div className="w-full h-full 
                    flex flex-col justify-start items-start">
        <div className="w-4/5 grid grid-cols-1 md:grid-cols-2 my-5">
          <label htmlFor="op"
            className="text-xl font-bold
                                  inline-flex 
                                  justify-start items-center 
                                text-emerald-900 dark:text-emerald-900">
            부산 지하철 실내공기질
          </label>
          <select id="sel"
                  value={selOp}
                  selRef={selRef}
                  onChange={handleSelect}
                  className='bg-emerald-50 border border-emerald-300
                        text-emerald-900 text-sm rounded-lg
                        focus:ring-blue-500 focus:border-blue-500
                          block w-full p-2.5'>
            <option defaultValue={''}>
              "---지역선택---"
            </option>
            {ops}
          </select>
        </div>
        <div>
          <SubwayInfo selOp={selOp} tdata={tdata}/>
        </div>
    </div>
  )
}
