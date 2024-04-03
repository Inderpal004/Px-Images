import React from 'react';
import Spinner from '../../Components/Spinner/Spinner';
import toast, { Toaster } from 'react-hot-toast';
import { Link } from 'react-scroll';

export default function Home({ data, loading, setSaved, saved }) {

    const saveImage = (img) => {
        let flag = true;
        if (saved != null && saved.length > 0) {
            for (let i = 0; i < saved.length; i++) {
                if (saved[i].id === img.id) {
                    flag = false;
                    toast.error("Image already exist");
                    break;
                }
            }
        }
        if (flag) {
            setSaved([...saved, img]);
            toast.success("Image Saved")
        }

    }

    return (
        <>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />

            <section className="gallery">
                {
                    loading ? <Spinner/> : <ul className="images">
                    {
                        loading === true ? null : <>
                         {
                            data.map((image)=>{
                                return  <li className="card" key={image.id}>
                                <img src={image.src.medium} alt={image.photographer} />
                                <div className="details">
                                    <div className="photographer">
                                        <i className="uil uil-camera"></i>
                                        <span>{image.photographer}</span>
                                    </div>
                                    <button className='download' onClick={() => saveImage(image)}>
                                        <i className="uil uil-import"></i>
                                    </button>
                                </div>
                            </li>
                            })
                        }
                        </>
                    }
                    </ul>
    
                }                {
                    data.length !== 0 && <Link to="top"  spy={true}  smooth={true}   offset={50}  duration={500}  className="load-more">Back to Top</Link>
                }
            </section>

        </>
    )
}
