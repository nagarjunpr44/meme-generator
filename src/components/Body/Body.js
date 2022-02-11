import React,{useState} from 'react';
import "./Body.css"

const Body = () => {
  const [memeImage,setmemeImage]=useState("https://i.imgflip.com/1g8my4.jpg");

  const [meme,setmeme]=useState({
    topText:"",
    bottomText:"",
    randomImage:"https://i.imgflip.com/1g8my4.jpg"
  })
  
  const[allMemeImages,setallMemeImages]=useState([])

  React.useEffect(()=> {
    fetch("https://api.imgflip.com/get_memes")
    .then(res=>res.json())
    .then(data => setallMemeImages(data.data.memes))
  },[])

  function getMemeImage(){
    const randomNumber=Math.floor(Math.random()* allMemeImages.length);
  const url=allMemeImages[randomNumber].url
  setmeme(prevmeme=>({
    ...prevmeme,
    randomImage:url
  }))
}
function handleChange(event)
{
  const {name,value}=event.target
  setmeme(prevmeme => ({
    ...prevmeme,
    [name]:value
  }))
}

  return (

        <>
    <div className='form'>
        <input type="text"  name='topText' value={meme.topText} onChange={handleChange}/>
        <input type="text" name="bottomText" value={meme.bottomText} onChange={handleChange} /> <br />
        <input type="button" value="Get a new meme" className='buttonf' onClick={getMemeImage}/>
    </div>
    <div className="meme">
                <img src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
    </>
  )
};

export default Body;
