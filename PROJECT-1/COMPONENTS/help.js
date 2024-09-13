const getVal = (className) => 
    {
  return document.querySelector(className).value;
    };
    
    export default getval;
    export const createTag = (tag, value) => {
  
    let tagName = document.createElement(tag);
  
    if (tag == "img") 
    {
    tagName.src = value;
    } 
    else 
    {
    tagName.innerHTML = value;
    }
  
    return tagName;
};
