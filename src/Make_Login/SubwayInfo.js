import sarea from './sarea.json';

export default function SubwayInfo({selOp, tdata}) {

    const selInfo = (selOp) => {
        if(!selOp ||!tdata) return {};

        let sData = tdata.filter(item => item.site === selOp);
        if(!sData) return {};

        let tm = sarea.filter(item => item.측정소 === selOp)
        console.log("측정소값:", tm);

        if(tm) {
            return {
                코드: tm ? tm.코드 : '',
                측정소: sData ? sData.site : '',
                호선: sData ? sData.city : '',
                이산화탄소: sData ? sData.co2 : '',
                초미세먼지: sData ? sData.pm25 : ''
              };
        }
    };

    const subwayInfo = selInfo(selOp)

    return (
            <table className="w-11/12 bg-emerald-100 text-left text-sm text-surface font-light">
                <thead
                    className="border-b border-neutral-200 font-medium">
                    <tr className='bg-emerald-600 text-emerald-200 text-center font-bold'>
                        <th scope="col" className="px-6 py-3">지역</th>
                        <th scope="col" className="px-6 py-3">호선</th>
                        <th scope="col" className="px-6 py-3">이산화탄소</th>
                        <th scope="col" className="px-6 py-3">초미세먼지</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="px-6 py-4 whitespace-nowrap">{subwayInfo.측정소}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{subwayInfo.호선}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{subwayInfo.이산화탄소}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{subwayInfo.초미세먼지}</td>
                    </tr>
                </tbody>
            </table>
    )
}
