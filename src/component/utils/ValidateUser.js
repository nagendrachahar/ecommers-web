
export const User = {
    
  isAdmin : () => {
    let res = sessionStorage.getItem('userType') === 'Admin'
    return res;
  }
  

}
