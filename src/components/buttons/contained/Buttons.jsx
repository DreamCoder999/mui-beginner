import React from "react";
import {Button} from "@mui/material";


function Buttons() {
    return (
        <>
            <div>
                <Button variant="contained" color={"primary"}>Primary</Button>
                <Button variant="contained" color={"secondary"}>Secondary</Button>
                <Button variant="contained" color={"success"}>Success</Button>
                <Button variant="contained" color={"error"}>Error</Button>
                <Button variant="contained" color={"info"}>Info</Button>
                <Button variant="contained" color={"warning"}>Warning</Button>
                <Button variant="contained" color={"warning"} disabled>Disabled</Button>
            </div>

            <div>
                <Button variant="outlined" color={"primary"}>Primary</Button>
                <Button variant="outlined" color={"secondary"}>Secondary</Button>
                <Button variant="outlined" color={"success"}>Success</Button>
                <Button variant="outlined" color={"error"}>Error</Button>
                <Button variant="outlined" color={"info"}>Info</Button>
                <Button variant="outlined" color={"warning"}>Warning</Button>
                <Button variant="outlined" color={"warning"} disabled>Disabled</Button>
            </div>
        </>
    )
}

export default Buttons;