import profilePic from './assets/IMG_9035-Edit.jpg'

function Card(){

    return(
        <div className="card">
            <img className='card-image' src={profilePic} alt="profile-picture"></img>
            <h2 className='card-title'>Jaytee Omo werey</h2>
            <p className='card-text'>Software Engineer</p>
            <p className='card-text'>React and Django</p>
        </div>
    );
}

export default Card