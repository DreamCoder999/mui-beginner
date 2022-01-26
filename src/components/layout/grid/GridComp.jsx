import React from "react";
import Grid from "@mui/material/Grid";
import {Box, Container, Paper, styled} from "@mui/material";

export default function GridComp() {

    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.grey.A100,
        backgroundColor: theme.palette.grey["900"],
    }));

    return (
        <Container xs={"sm"} sx={{m: "12px auto", textAlign: "center"}}>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={8}>
                        <Item>xs=8</Item>
                    </Grid>
                    <Grid item xs={4}>
                        <Item>xs=4</Item>
                    </Grid>
                    <Grid item xs={4}>
                        <Item>xs=4</Item>
                    </Grid>
                    <Grid item xs={8}>
                        <Item>xs=8</Item>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    )
}