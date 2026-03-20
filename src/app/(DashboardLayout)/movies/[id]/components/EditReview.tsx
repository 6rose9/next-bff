'use client';

import {useState} from "react";
import Button from "@mui/material/Button";
import ReviewDialog from "./ReviewDialog";
import { Review } from "@/app/lib/types";
import ConfirmDialog from "@/app/(DashboardLayout)/components/shared/ConfirmDialog";
import {deleteReviewAction} from "@/app/lib/actions/reviewAction";


interface EditReviewProps {
    review:Review;
}
export default function EditReview({review}: EditReviewProps)
{
    const [open, setOpen] = useState(false);
    const handleClickOpen = ()=>{
        setOpen(true);
    }
    
    return (<>
        <Button variant="contained" onClick={handleClickOpen} >Edit</Button>
        <ReviewDialog open={open} setOpen={setOpen} movieId={review._id} reviewToEdit={review} />
    </>);
}