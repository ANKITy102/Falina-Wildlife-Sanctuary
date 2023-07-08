import React, { useEffect } from 'react'
import rm from './Gallery.module.css'
import Navbar from '../../components/navbar/Navbar'
import { useLocation } from 'react-router-dom';

export default function Gallery() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div>
        <Navbar/>
       <div className={rm.container}>
    <div className={rm.heading}>
      <h3>PHOTO <span>Gallery</span></h3>
    </div>
    <div className={rm.box}>
      
      <div className={rm.col}>
        <a href="https://en.wikipedia.org/wiki/Cheetah"><img src="https://images.unsplash.com/photo-1534759846116-5799c33ce22a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2lsZGxpZmUlMjBzY2NjZW5lcnl8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"/></a>
         <a href="https://en.wikipedia.org/wiki/Zebra"><img src="https://images.unsplash.com/photo-1503656142023-618e7d1f435a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8d2lsZGxpZmUlMjBzY2NjZW5lcnl8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"/></a>
          <a href="https://en.wikipedia.org/wiki/Wolf"><img src="https://images.unsplash.com/photo-1516934024742-b461fba47600?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d2lsZGxpZmUlMjBzY2NjZW5lcnl8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"/></a>
           <a href="https://en.wikipedia.org/wiki/Elephant"><img src="https://images.unsplash.com/photo-1549366021-9f761d450615?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8d2lsZGxpZmUlMjBzY2NjZW5lcnl8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"/></a>
            <a href="https://en.wikipedia.org/wiki/Squirrel"><img src="https://images.unsplash.com/photo-1504006833117-8886a355efbf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8d2lsZGxpZmUlMjBzY2NjZW5lcnl8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"/></a>
            <a href="https://en.wikipedia.org/wiki/Hippopotamus"><img src="https://images.unsplash.com/photo-1541414779316-956a5084c0d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8d2lsZGxpZmUlMjBzY2NjZW5lcnl8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"/></a>
            <a href="https://en.wikipedia.org/wiki/Lion"><img src="https://images.unsplash.com/photo-1575550959106-5a7defe28b56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHdpbGRsaWZlJTIwc2NjY2VuZXJ5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"/></a>
           <a href="https://en.wikipedia.org/wiki/Wolf"> <img src="https://images.unsplash.com/photo-1500479694472-551d1fb6258d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8d2lsZGxpZmUlMjBzY2NjZW5lcnl8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"/></a>
            <a href="https://en.wikipedia.org/wiki/Wolf"><img src="https://images.unsplash.com/photo-1530090382228-7195e08d7a75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHdpbGRsaWZlJTIwc2NjY2VuZXJ5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"/></a>
           <a href="https://en.wikipedia.org/wiki/Sparrow"> <img src="https://images.unsplash.com/photo-1533388109040-cb6a0fa5006a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHdpbGRsaWZlJTIwc2NjY2VuZXJ5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"/></a>
            <a href="https://en.wikipedia.org/wiki/Deer"><img src="https://images.unsplash.com/photo-1543946207-39bd91e70ca7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTl8fHdpbGRsaWZlJTIwc2NjY2VuZXJ5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60" /></a>
            <a href="https://en.wikipedia.org/wiki/Tiger"><img src="https://images.unsplash.com/photo-1605092676920-8ac5ae40c7c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTUzfHx3aWxkbGlmZSUyMHNjY2NlbmVyeXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60"/></a>
      </div>

        <div className={rm.col}>
        <a href="https://en.wikipedia.org/wiki/Zebra"><img src="https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1625&q=80" /></a>
         <a href="https://en.wikipedia.org/wiki/Deer"><img src="https://images.unsplash.com/photo-1505297442708-165286308e1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHdpbGRsaWZlJTIwc2NjY2VuZXJ5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60" /></a>
         <a href="https://en.wikipedia.org/wiki/Bear"><img src="https://images.unsplash.com/photo-1525869916826-972885c91c1e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80" /></a>
          <a href="https://en.wikipedia.org/wiki/Flamingo"><img src="https://images.unsplash.com/photo-1470619549108-b85c56fe5be8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1049&q=80" /></a>
          <a href="https://en.wikipedia.org/wiki/Owl"><img src="https://images.unsplash.com/photo-1516233758813-a38d024919c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fHdpbGRsaWZlJTIwc2NjY2VuZXJ5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60" /></a>
            <a href="https://en.wikipedia.org/wiki/Cheetah"> <img src="https://images.unsplash.com/photo-1544979590-37e9b47eb705?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fHdpbGRsaWZlJTIwc2NjY2VuZXJ5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60" /></a>
            <a href="https://en.wikipedia.org/wiki/Deer"> <img src="https://images.unsplash.com/photo-1545063914-a1a6ec821c88?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fHdpbGRsaWZlJTIwc2NjY2VuZXJ5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60" /></a>
              <a href="https://en.wikipedia.org/wiki/Macaw"> <img src="https://images.unsplash.com/photo-1452570053594-1b985d6ea890?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fHdpbGRsaWZlJTIwc2NjY2VuZXJ5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60" /></a>
                <a href="https://en.wikipedia.org/wiki/Squirrel"><img src="https://images.unsplash.com/photo-1470130623320-9583a8d06241?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzd8fHdpbGRsaWZlJTIwc2NjY2VuZXJ5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60" /></a>
                  <a href="https://en.wikipedia.org/wiki/Wolf"><img src="https://images.unsplash.com/photo-1505259839540-04105fcd8ba3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fHdpbGRsaWZlJTIwc2NjY2VuZXJ5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60" /></a>
                    <a href="https://en.wikipedia.org/wiki/Peafowl"> <img src="https://images.unsplash.com/photo-1652643152582-8d90c40085fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjU0fHx3aWxkbGlmZSUyMHNjY2NlbmVyeXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60" /></a>
                <a href="https://en.wikipedia.org/wiki/Dragonfly"><img src="https://images.unsplash.com/photo-1507018757949-5259dcd9d5bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" /></a>
      </div>

        <div className={rm.col}>
        <a href="https://en.wikipedia.org/wiki/Redwing"><img src="https://images.unsplash.com/photo-1616906052146-f0ba7aa4fd5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTB8fHdpbGRsaWZlJTIwc2NjY2VuZXJ5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60"/></a>
        <a href="https://en.wikipedia.org/wiki/Kingfisher"> <img src="https://images.unsplash.com/photo-1618914070127-515cdf4e6afa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTJ8fHdpbGRsaWZlJTIwc2NjY2VuZXJ5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60"/></a>
          <a href="https://en.wikipedia.org/wiki/Cheetah"><img src="https://images.unsplash.com/photo-1544985361-b420d7a77043?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTd8fHdpbGRsaWZlJTIwc2NjY2VuZXJ5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60"/></a>
           <a href="https://en.wikipedia.org/wiki/Elephant"><img src="https://images.unsplash.com/photo-1531210156519-af875520c158?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTh8fHdpbGRsaWZlJTIwc2NjY2VuZXJ5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60"/></a>
           <a href="https://en.wikipedia.org/wiki/Wolf"> <img src="https://images.unsplash.com/photo-1478250205167-6965d29e47c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTl8fHdpbGRsaWZlJTIwc2NjY2VuZXJ5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60"/></a>
           <a href="https://en.wikipedia.org/wiki/Puffin"> <img src="https://images.unsplash.com/photo-1504618223053-559bdef9dd5a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjE5fHx3aWxkbGlmZSUyMHNjY2NlbmVyeXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60" /></a>
           <a href="https://en.wikipedia.org/wiki/Monkey"> <img src="https://images.unsplash.com/photo-1539606249016-c9d3f9bea580?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjV8fHdpbGRsaWZlJTIwc2NjY2VuZXJ5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60"/></a>
           <a href="https://en.wikipedia.org/wiki/Bull"> <img src="https://images.unsplash.com/photo-1536607043666-458456307176?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njl8fHdpbGRsaWZlJTIwc2NjY2VuZXJ5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60"/></a>
           <a href="https://en.wikipedia.org/wiki/Eagle"> <img src="https://images.unsplash.com/photo-1514730328399-788445ed8c22?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjM3fHx3aWxkbGlmZSUyMHNjY2NlbmVyeXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60"/></a>
            <a href="https://en.wikipedia.org/wiki/Grasshopper"><img src="https://images.unsplash.com/photo-1529973803407-d906b4a8432d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nzd8fHdpbGRsaWZlJTIwc2NjY2VuZXJ5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60"/></a>
            <a href="https://en.wikipedia.org/wiki/Elephant"><img src="https://images.unsplash.com/photo-1544211412-2a32426e7fd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODV8fHdpbGRsaWZlJTIwc2NjY2VuZXJ5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60"/></a>
            <a href="https://en.wikipedia.org/wiki/Raccoon"><img src="https://images.unsplash.com/photo-1497752531616-c3afd9760a11?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTJ8fHdpbGRsaWZlJTIwc2NjY2VuZXJ5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60"/></a>
            <a href="https://en.wikipedia.org/wiki/Horse"><img src="https://images.unsplash.com/photo-1533621541721-fa6d97bb0048?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTUwfHx3aWxkbGlmZSUyMHNjY2NlbmVyeXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60" /></a>
      </div>




    </div>
    <div className={rm.btn}>
      <a href="#">BACK TO TOP</a>
    </div>





  </div>

    </div>
  )
}
