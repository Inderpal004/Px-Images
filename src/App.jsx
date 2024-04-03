import React, { useEffect, useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Saved from './Pages/Saved/Saved';

export default function App() {

  const apiKey = "d5lHaIxpT679swMAlL5acwRVAOq7uMxFfAkaoMEmKIdimzLwqusKbwmc";

  const [data, setData] = useState([]);
  const [search, setSearch] = useState("nature");
  const [loading, setLoading] = useState(true);
  const [saved, setSaved] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      const res = await axios.get(`https://api.pexels.com/v1/search?query=${search}&per_page=80`, {
        headers: {
          Authorization: apiKey,
        }
      });
      console.log("response", res.data.photos);
      setData(res.data.photos);
       setLoading(false);
    }

    const data = JSON.parse(localStorage.getItem("Images"));
    if(data){
      setSaved(data);
    }

    fetchImages();
  }, [search])

  useEffect(() => {
    if (saved.length !== 0) {
      const json = JSON.stringify(saved);
      localStorage.setItem("Images", json);
    }
  }, [saved]);

  return (
    <>
    <Router>
      <Navbar setSearch={setSearch} />
      <Routes>
        <Route path='/' element={<Home data={data} loading={loading} saved={saved} setSaved={setSaved} />} />
        <Route path='/saved' element={<Saved saved={saved} loading={loading} setSaved={setSaved}/>} />
      </Routes>
    </Router>
    </>
  )
}
