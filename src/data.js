export const API_KEY = 'AIzaSyACohDdj1VDp_rey3c7EFdFbXPSu3xcc9I';
const value_converter =(value)=>{
    if(value>=1000000)
    {
        return Math.floor(value/1000000)+"M"
    }
}