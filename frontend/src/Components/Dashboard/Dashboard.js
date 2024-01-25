import { Grid } from '@mui/material';
import ItemCreator from './ItemCreator/ItemCreator.js';
import Items from "../Items/Items.js";

export default function Dashboard(){
    return (
        <div className="Dashboard">
            <Grid container spacing={4}>
                <Grid item xs={8}>
                    <Items/>
                </Grid>
                <Grid item xs={4}>
                    <ItemCreator/>
                </Grid>
            </Grid>
        </div>
    )
}