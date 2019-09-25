import React, { Component } from 'react';
import * as $ from 'jquery';
import {menuList} from '../../Services/master'


class Navbar extends Component {
  constructor(props){
    super(props);
    this.state = {
      isMenu: true,
      menuWrapperClass: 'side_menu_wrapper_hide',
      p1: "", 
      p2: "", 
      p3: "" ,
      menuList: []
    };
    loadScript();
  }

  componentDidMount(){
    menuList().then((res) => {
      this.setState({
        menuList:res.data.adminMenu
      })
    })
  }

  logOut=() => {
    localStorage.clear();
    window.location.href = "/Login";
  };

  toggleMenu = () => {
    if(this.state.menuWrapperClass === 'side_menu_wrapper_hide'){
      this.setState({
        menuWrapperClass: '',
        p1: "toogle-btn-p1", 
        p2: "toogle-btn-p2", 
        p3: "toogle-btn-p3" 
      })
    }
    else{
      this.setState({
        menuWrapperClass: 'side_menu_wrapper_hide',
        p1: "", 
        p2: "", 
        p3: "" 
      })
    }
  }

render() {

  // const getChild = (id, MenuList) => {
  //   return MenuList.filter(M => M.parentId === id);
  // }

  // const renderForecastsTable = (forecasts, childMenu) => {
  // return (
  //     <ul className="side_menu" >
  //         {forecasts.map(M =>
  //             <li key={M._id}>

  //                 {M.url === 'null' ? <span><i className={M.icon}></i> {M.Name}</span>
  //                     : <Link to={M.url}><i className={M.icon}></i> {M.Name}</Link>}

  //                 <ul className="sub_menu">
  //                     {getChild(M._id, childMenu).map(C =>
  //                         <li key={C._id}>
  //                             {C.url === 'null' ? <span><i className={C.icon}></i> {C.Name}</span> : 
  //                             <Link to={C.url}><i className={C.icon}></i> {C.Name}</Link>}
                            
  //                         </li>
  //                     )}
  //                 </ul>
  //             </li>
  //         )}

  //     </ul>


  // );}

  // var parentMenu = this.state.menuList.filter(M => M.parentId === "null");

  // let contents = this.state.loading
  //   ? <p><em>Loading...</em></p>
  //   : renderForecastsTable(parentMenu, this.state.menuList);  

    return (
      <React.Fragment>
      {this.state.isMenu ? 
        <div className={"side_menu_wrapper " + this.state.menuWrapperClass}>

            {/* <ul className="side_menu">
              <li>
                <Link to='/AdminHome'><i className='fas fa-home'></i> Home</Link>
              </li>

              <li>
                <span><i className='fas fa-cog'></i> Master</span>
                <ul className="sub_menu">
                  <li>
                    <Link to='/StateMaster'><i></i> State</Link>
                  </li>
                  <li>
                    <Link to='/CityMaster'><i></i> City</Link>
                  </li>
                </ul>
              </li>
              
            </ul> */}
            {/* {contents} */}

            <div className="toogle-btn" onClick={this.toggleMenu}>
              <p className={this.state.p1}></p>
              <p className={this.state.p2}></p>
              <p className={this.state.p3}></p>
            </div>

        </div> : null
      }
      
      </React.Fragment>
      
      
    );
  }
}
export default Navbar;

function loadScript(){

  $(document).ready(function(){
    $(".has_child").click(function(){
      $(this).children('.sub_menu').toggle(500);
    });

  });

}
