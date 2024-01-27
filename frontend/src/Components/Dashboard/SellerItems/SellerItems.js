import Item from "./SellerItem/SellerItem.js";
import Grid from '@mui/material/Grid';

export default function Items(){
    return (
        <div className="Items">
            <Grid container spacing={2} justifyContent='center'>
                <Grid item xs={12} md={6} sm={6} lg={5} xl={2}>
                    <Item name="Indomie" price="2" imglink="https://shorturl.at/cdwCQ" stock="5" />
                </Grid>
                <Grid item xs={12} md={6} sm={6} lg={5} xl={2}>
                    <Item name="Salad Chips" price="1" imglink="https://shorturl.at/gmwBM" stock="3" />
                </Grid>
                <Grid item xs={12} md={6} sm={6} lg={5} xl={2}>
                    <Item name="Salad Chips" price="1" imglink="https://shorturl.at/gmwBM" stock="3" />
                </Grid>
                <Grid item xs={12} md={6} sm={6} lg={5} xl={2}>
                    <Item name="Salad Chips" price="1" imglink="https://shorturl.at/gmwBM" stock="3" />
                </Grid>
            </Grid> 
        </div>
    )
}