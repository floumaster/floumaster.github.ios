import React, { useState } from 'react';
import HomePage from './components/home'
import Context from './components/context'

function App() {
  const [menu_flag, setFlag] = useState(false);
  const [curr_links, setLinks] = useState([]);
  const shop = [
    ['Shop', ['Shop All Gifts', 'Most Popular', 'Gifts under $100', 'Limited Editions']],
    ['Design your own gift', ['Choose Your Layout!']],
    ['Occasions', ['Corporate & Client', 'Realtor & Housewarming', 'Wedding Party']]
  ]
  const corporate = [
    ['Work with your own design team', ['Corparate and business']],
    ['See your work', ['Case Study: Zendesk', 'Branding & Custom Packaging']],
  ]
  const custom = [
    ['Design your own gift', []],
  ]
  const about = [
    ['About', ['Meet the team', 'Contact us', 'Press', 'Learn from us: Product Businesses']],
  ]
  const links = {
    Shop: shop,
    Corporate: corporate,
    Custom: custom,
    About: about
  }
  function show_menu(){
    setFlag(true);
  }
  function hide_menu(){
    setFlag(false);
  }
  function changeLinks(name){
    setLinks(links[name]);
  }
  return (
    <Context.Provider value={{menu_flag, show_menu, hide_menu, curr_links, changeLinks}}>
      <div>
      <HomePage/>
    </div>
    </Context.Provider>
  );
}

export default App;
