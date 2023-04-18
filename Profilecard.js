import ProfilePic from './Images/avatar.png';
const Profilecard = () =>{
    return(
        <div class="card profilepiccard" >
            <img src={ProfilePic} className='card-img-top' alt="Card image cap" />
            <div class="card-body">
            <p class="card-text">Dan Immanuel</p>
            <p class="card-text">DanImmanuel@gmail.com</p>
            </div>
            </div>
    )
}
export default Profilecard;