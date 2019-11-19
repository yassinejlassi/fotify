import React from 'react'
import{Link} from 'react-router-dom';


export default function Discover() {
    return (
        <div className="discover-join">
            
    <div className="photo-gallery">
        <div className="container">
            <div className="intro">
            <span>  <img src="https://image.flaticon.com/icons/svg/291/291205.svg" width="200" height="200" alt="Star free icon" title="Star free icon"></img></span>
                <h1 className="text-center">Editor's favorite photos</h1>

              
            </div>
            <div className="row-photos">
                <div className="editor-photo"><img className="img" src="https://web.500px.com/static/media/editors_choice_1.fba141c2.png" /></div>
                <div className="editor-photo"><img className="img" src="https://web.500px.com/static/media/editors_choice_2.7fa14543.png" /></div>
                <div className="editor-photo"><img className="img" src="https://web.500px.com/static/media/editors_choice_6.0e438657.png" /></div>
                <div className="editor-photo"><img className="img" src="https://web.500px.com/static/media/editors_choice_5.a369457a.png" /></div>
                <div className="editor-photo"><img className="img" src="https://drscdn.500px.org/photo/220206123/q%3D80_h%3D450/v2?sig=992ee64f10074712a80542779dfdbaccea9a1b339b9f8c6dd6b476e6a54813ef" /></div>
                <div className="editor-photo"><img className="img" src="https://drscdn.500px.org/photo/298978893/q%3D80_h%3D450/v2?sig=f08193e67b7d3b4c50a5fbf90a06c56c3572f75874b419d78d1d601e38017c17" /></div>
            </div>
        </div>
    </div>
    <div className="join">
        <h1 className="join-us">Join our photography community today</h1>
        <span className="join-arg">We want fresh, creative talent like you. Join our global
         network of like-minded creators to be inspired by incredible photos daily, and get
          rewarded for your talents.</span>
        <Link to="/inscription"><button className="sign-up-btn">Sign up </button></Link>
    </div>

        </div>
    )
}
