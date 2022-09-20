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
            <Skeleton width={100} height={25} count={4} borderRadius={42} className="mr-4"/>
        </SkeletonContainer>
        
        </>
        
    )
}

