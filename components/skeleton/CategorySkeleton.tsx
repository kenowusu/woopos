import styled from 'styled-components';
import Skeleton from "react-loading-skeleton";

const SkeletonContainer = styled.div`
 &>span{
    display:flex;
 }
`
export const CategorySkeleton = ()=>{

    return(
        <>
         <SkeletonContainer>
            <Skeleton width={134} height={49} count={4}  className="mr-4"/>
        </SkeletonContainer>
        
        </>
        
    )
}

