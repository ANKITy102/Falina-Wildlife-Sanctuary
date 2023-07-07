import React ,{useEffect, useState} from 'react'
import mr from './GalleryStyle.module.css';
import WhiteNavbar from '../../components/navbar/WhiteNavbar';

export default function Gallery() {

  const [track,setTrack] = useState(document.getElementById('image-track'));
  useEffect(()=>{
    const elements = document.getElementById("image-track");
    setTrack(elements);
  },[])
  // const [dataset,setDataset] = "";

  // const track = document.getElementById("image-track");

  const handleOnDown = e => track.dataset.mouseDownAt = e.clientX;
  const handleOnUp = () => {
    track.dataset.mouseDownAt = "0";  
    track.dataset.prevPercentage = track.dataset.percentage;
  }
  
  const handleOnMove = e => {
    
    // if(track.dataset===null) return;
    if(track.dataset.mouseDownAt === "0") return;
    console.log(e.clientX)
    console.log(track.dataset.mouseDownAt)
    
    const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
          maxDelta = window.innerWidth / 4;
    
    const percentage = (mouseDelta / maxDelta) * -100,
          nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage,
          nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -250);
    
    track.dataset.percentage = nextPercentage;
    
  
    track.animate({
      transform: `translate(${nextPercentage}%, -50%)`
    }, { duration: 1200, fill: "forwards" },);
    
    for(const image of track.getElementsByClassName("image")) {
      image.animate({
        objectPosition: `${100 + nextPercentage}% center`
      }, { duration: 500, fill: "forwards" });
    }
  }
  
  
  
  
  
  
  
  
  /* -- Had to add extra lines for touch events -- */
  
  window.onmousedown = e => handleOnDown(e);
  
  window.ontouchstart = e => handleOnDown(e.touches[0]);
  
  window.onmouseup = e => handleOnUp(e);
  
  window.ontouchend = e => handleOnUp(e.touches[0]);
  
  window.onmousemove = e => handleOnMove(e);
  
  window.ontouchmove = e => handleOnMove(e.touches[0]);
  


  return (
    <div id="container" className={mr.container_gallery}>
      <WhiteNavbar/>
      



<div id="gallery_heading" className={mr.gallery_heading}>  GALLERY </div>
<div id="animals-heading" className={mr.animals_heading}>  ANIMALS </div>
<div id="scenery-heading" className={mr.scenery_heading}>  SCENERY </div>
<div id="safari-heading" className={mr.safari_heading}>  SAFARI </div>

      <div id="image-track" className={mr.image_track} data-mouse-down-at="0" data-prev-percentage="0">
     <div>
    <div id="animals" className={mr.animals}>ANIMALS</div> 
    <img className={mr.image} id="img1" src="https://images.unsplash.com/photo-1534759846116-5799c33ce22a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2lsZGxpZmUlMjBzY2NjZW5lcnl8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60" draggable="false" />
    <img className={mr.image} id="img2" src="https://images.unsplash.com/photo-1503656142023-618e7d1f435a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8d2lsZGxpZmUlMjBzY2NjZW5lcnl8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60" draggable="false" />
    <img className={mr.image} id="img3" src="https://images.unsplash.com/photo-1516934024742-b461fba47600?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d2lsZGxpZmUlMjBzY2NjZW5lcnl8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60" draggable="false" />
    <img className={mr.image} id="img4" src="https://images.unsplash.com/photo-1541414779316-956a5084c0d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8d2lsZGxpZmUlMjBzY2NjZW5lcnl8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60" draggable="false" />
    <img className={mr.image} id="img5" src="https://images.unsplash.com/photo-1575550959106-5a7defe28b56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHdpbGRsaWZlJTIwc2NjY2VuZXJ5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60" draggable="false" />
    <img className={mr.image} id="img6" src="https://images.unsplash.com/photo-1543946207-39bd91e70ca7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTl8fHdpbGRsaWZlJTIwc2NjY2VuZXJ5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60" draggable="false" />
    <img className={mr.image} id="img7" src="https://images.unsplash.com/photo-1533621541721-fa6d97bb0048?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTUwfHx3aWxkbGlmZSUyMHNjY2NlbmVyeXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60" draggable="false" />
    <img className={mr.image} id="img8" src="https://images.unsplash.com/photo-1536607043666-458456307176?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njl8fHdpbGRsaWZlJTIwc2NjY2VuZXJ5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60" draggable="false" />
    </div> 
    <div>
    <div id="scenery" className={mr.scenery}>SCENERY</div> 
    <img className={mr.image} id="img1" src="https://images.unsplash.com/photo-1563824458370-ffcdb1cdf372?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2532&q=80" draggable="false" />
    <img className={mr.image} id="img2" src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3174&q=80" draggable="false" />
    <img className={mr.image} id="img3" src="https://images.unsplash.com/photo-1478466406421-ff7174ac07f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2532&q=80" draggable="false" />
    <img className={mr.image} id="img4" src="https://images.unsplash.com/photo-1500964757637-c85e8a162699?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2103&q=80" draggable="false" />
    <img className={mr.image} id="img5" src="https://images.unsplash.com/photo-1477346611705-65d1883cee1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" draggable="false" />
    <img className={mr.image} id="img6" src="https://images.unsplash.com/photo-1520181934446-42566c322a18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" draggable="false" />
    <img className={mr.image} id="img7" src="https://images.unsplash.com/photo-1637081108269-5dd3c97250f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fHNjZW5lcnklMjBtb3VudGFpbnN8ZW58MHwwfDB8fHww&auto=format&fit=crop&w=800&q=60" draggable="false" />
    <img className={mr.image} id="img8" src="https://images.unsplash.com/photo-1606663967575-8ca32425b97b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80" draggable="false" />
    </div>  
    
    <div>
    <div id="safari" className={mr.safari}>SAFARI</div> 
    <img className={mr.image} id="img1" src="https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2068&q=80" draggable="false" />
    <img className={mr.image} id="img2" src="https://images.unsplash.com/photo-1535082623926-b39352a03fb7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2091&q=80" draggable="false" />
    <img className={mr.image} id="img3" src="https://images.unsplash.com/photo-1655397043415-1e963a14d320?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" draggable="false" />
    <img className={mr.image} id="img4" src="https://images.unsplash.com/photo-1513956641271-ade32a45470f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80" draggable="false" />
    <img className={mr.image} id="img5" src="https://images.unsplash.com/photo-1614315555724-92f81a62bc2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80" draggable="false" />
    <img className={mr.image} id="img6" src="https://images.unsplash.com/photo-1527436298911-9b95bb614f43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80" draggable="false" />
    <img className={mr.image} id="img7" src="https://images.unsplash.com/photo-1489493887464-892be6d1daae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2067&q=80" draggable="false" />
    <img className={mr.image} id="img8" src="https://images.unsplash.com/photo-1617938544737-cf7b41829226?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" draggable="false" />
    </div>  
  </div>
  <hr id="gallery-line" className={mr.gallery_line} />
  <div id="laster" className={mr.laster}>
            <div >
                <p id="gallery-last" className={mr.gallery_last}>©2023 Falina Wildlife Sanctuary. All right reserved.</p>
            </div>
            <div id="gallery-last-links" className={mr.gallery_last_links}>
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Service</a>
                <a href="#">Cookies Settings</a>
            </div>
        </div>
        
    </div>
  )
}
