import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Navbar({ setSearch }) {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <>
            <section className="search" id='top'>
                <img src="./bg.jpeg" alt="search-img" />
                <div className="content">
                    <h1>Px Images</h1>
                { location.pathname === "/" &&  <p>Search and Save any images within a second</p> }   
                    {
                        location.pathname === "/" && <div className="search-box">
                            <i className="uil uil-search"></i>
                            <input type="search" onChange={(e) => setSearch(e.target.value)} placeholder="Search images" />
                        </div> 
                    }
                    <span className='sm'>Trending : <span onClick={() => { setSearch("nature"); navigate("/") }}>nature</span>
                    <span onClick={() => { setSearch("tarvel"); navigate("/") }}>travel</span>
                    <span onClick={() => { setSearch("fashion"); navigate("/") }}>fashion</span>
                    <span onClick={() => { setSearch("animals"); navigate("/") }}>animals</span>
                    <span onClick={() => { setSearch("car"); navigate("/") }}>cars</span>
                    <span  onClick={() => { setSearch("city"); navigate("/") }}>city</span>
                    <span onClick={() => { setSearch("india"); navigate("/") }}>india</span>
                    </span>
                </div>

                <div className="saved-images">
                {
                    location.pathname == '/saved' ? (
                        <button onClick={() => navigate('/')} className="route-btn">Back to Home</button>
                    ) : (
                        <button onClick={() => navigate('/saved')} className="route-btn">Saved Images</button>
                    )
                }
                </div>
            </section>

                    </>
    )
}
