import React, { useContext } from 'react'
import Context from './context'
import DivList from './divList'

function DropMenu(){
    const {menu_flag, show_menu, hide_menu, curr_links, changeLinks} = useContext(Context);
    function getHeight(){
        let max = 0;
        curr_links.forEach(element => {
            max = element[1].length > max ? element[1].length : max;
        });
        return 48.5 + max * 44.8;
    }
    return(
        <div className="DopMenu" style={{display: menu_flag===true?'flex':'none', height: `${getHeight()}px`}} 
        onMouseOver={()=>{show_menu()}} onMouseLeave={()=>{hide_menu()}}
        >
                <DivList/>
        </div>
    );
}

export default DropMenu;