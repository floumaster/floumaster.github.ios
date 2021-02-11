import Reac, { useContext } from 'react'
import Context from './context'

function DivList(){
    const {curr_links, changeLinks} = useContext(Context);
    return (
        curr_links.map((currval, index, arr)=>{
            let classn = index!==arr.length-1 ? 'default-link-div':'left-link-div'
            return (<div className={classn} key={index} style={{width: `${100/arr.length}%`}}>
                <h4>{currval[0]}</h4>
                <ul>
                    {currval[1].map((curr, id, arr2)=>{
                    return (<li key={id}><a>{curr}</a></li>)
                })}
                </ul>
            </div>)
        })
    );
}

export default DivList;