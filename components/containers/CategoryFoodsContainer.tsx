import React from "react"

export const CategoryFoodsContainer = ()=>{
    return(
      <>
        {React.Children.map(children,child=>{
          if(React.isValidElement(child)){
            return React.cloneElement(child,{something:"something"});
          }
          
          return child;

        })}
      </>
    )
}