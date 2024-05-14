import { createContext, useState } from "react";

export const PostContext = createContext();

export const PostProvider = (props) => {

  const [posts, setPosts] = useState([
    {
      title: "En dag i skogen",
      author: "Jane Doe",
      text: "Idag tog jag en härlig promenad i skogen. Naturen var så vacker och lugnande."
    },
    {
      title: "Recept: Vegetarisk pastarätt",
      author: "John Smith",
      text: "Här är mitt favoritrecept på en läcker vegetarisk pastarätt med färsk basilika och parmesan."
    },
    {
      title: "Vilken dag!",
      author: "Jane Smith",
      text: "Idag satt jag ute i solen och tog en kopp kaffe. Sen åt jag en glass. Gott!"
    },
    {
      title: "Sportigt värre!",
      author: "John Doe",
      text: "Jag är helt slut! Idag har det sportats hela dagen. Vi sprang ner till badet, sprang hem och tog en cykeltur senare."
    }
  ]);
    return (
    <PostContext.Provider value={{ posts }}>
      {props.children}
    </PostContext.Provider>  
    );
  };
