'use client';

import ConfirmDialog from "@/app/(DashboardLayout)/components/shared/ConfirmDialog";
import { deleteMovieByIdAction } from "@/app/lib/actions/movieAction";
import { Button } from "@mui/material";
import { use, useState } from "react";

interface DeleteButtonProps {
    movieId: string;
}

export default function DeleteMovieButton({ movieId }: DeleteButtonProps) {
    const [openConfirm, setOpenConfirm] = useState(false);
    function onOkHandler() {
        console.log('Ok Handler');
        deleteMovieByIdAction(movieId);
        setOpenConfirm(false);
    }
    function onCancelHandler() {
        console.log('Cancel Handler');
        setOpenConfirm(false);
    }
    return (<>
        <ConfirmDialog message="Are you sure you want to delete movie?"
            dlgOpen={openConfirm}
            onOk={onOkHandler}
            onCancel={onCancelHandler}
            setOpen={setOpenConfirm}
        />
        <Button variant="contained" onClick={() => setOpenConfirm(true)} >Delete</Button>
    </>);
}