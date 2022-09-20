import styled from 'styled-components';
import Skeleton from "react-loading-skeleton";

const SkeletonContainer = styled.div`
 width:600px;

&>span{
    width:100%;
    display:grid;
    grid-template-columns: repeat(3,25%);
    grid-template-rows: repeat((auto,auto));S
    grid-column-gap:8%;
    grid-row-gap:20px;
    align-items:start;
    
}
`
const SkeltonFlexContainer = styled.div`

 

`
export const FoodSkeleton = ()=>{

    return(
        <>
         <SkeletonContainer>
           

           
            <Skeleton height={200}   count={6} borderRadius={9} />
         
        </SkeletonContainer>
        
        </>
        
    )
}

