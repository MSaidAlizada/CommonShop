import { Grid } from '@mui/material';
import ItemCreator from './ItemCreator/ItemCreator.js';
import SellerItems from "./SellerItems/SellerItems.js";

export default function Dashboard(){
    return (
        <div className="Dashboard">
            <Grid container spacing={4}>
                <Grid item sm={12} md={8} lg={6} xl={8}>
                    <SellerItems/>
                </Grid>
                <Grid item sm={12} md={4} lg={6} xl={4}>
                    <ItemCreator/>
                </Grid>
            </Grid>
        </div>
    )
}