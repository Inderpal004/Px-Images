import React from 'react';
import Spinner from '../../Components/Spinner/Spinner';
import toast, { Toaster } from 'react-hot-toast';
import { RxCross2 } from "react-icons/rx";

export default function Saved({ saved, loading,setSaved }) {

  const removeImage = (id) => {
    const updatedSaved = saved.filter(image => image.id !== id);
    setSaved(updatedSaved);
    toast.success("Image Removed");
  }

  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />

      <section className="gallery">
        {
          loading ? <Spinner /> : <ul className="images">
            {
              saved.length === 0 ? <div className='empty'>No Images to Display.</div> : <>
                {
                  saved.map((image) => {
                    return <li className="card" key={image.id}>
                      <img src={image.src.medium} alt={image.photographer} />
                      <div className="details">
                        <div className="photographer">
                          <i className="uil uil-camera"></i>
                          <span>{image.photographer}</span>
                        </div>
                        <button className='cross' onClick={() => removeImage(image.id)}>
                        <RxCross2 />
                        </button>
                      </div>
                    </li>
                  })
                }
              </>
            }
          </ul>
        }
        {
          saved.length > 9 && <button className="load-more">Back to Top</button>
        }
      </section>
    </>
  )
}
