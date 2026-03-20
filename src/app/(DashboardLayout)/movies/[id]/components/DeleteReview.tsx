'use client';

import {useState} from "react";
import Button from "@mui/material/Button";
import { Review } from "@/app/lib/types";
import ConfirmDialog from "@/app/(DashboardLayout)/components/shared/ConfirmDialog";
import {deleteReviewAction} from "@/app/lib/actions/reviewAction";


interface DeleteReviewProps {
    review:Review
}
export default function DeleteReview({review}: DeleteReviewProps)
{
    const [openConfirm, setOpenConfirm] = useState(false);
    
    const onOkHandler = ()=>{
        console.log('Ok Handler');
        deleteReviewAction(review)  
        .then((response)=>{
            console.log(response);
        })
       .finally(()=>{
           setOpenConfirm(false);
       })

    }
    const onCancelHandler = ()=>{
        console.log('Cancel Handler');
    }
    return (<>
        <Button variant="contained" onClick={()=>setOpenConfirm(true)}  >Delete</Button>
        <ConfirmDialog message="Are you sure you want to delete review?"
                       dlgOpen={openConfirm}
                       onOk={onOkHandler}
                       onCancel={onCancelHandler}
                       setOpen={setOpenConfirm}
        />
    </>);
}