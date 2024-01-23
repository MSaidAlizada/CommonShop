import Item from '../Item/Item.js';
import Grid from '@mui/material/Grid';

function Home(){
    return(
        <div className='Home'>
            <Grid container spacing={4}>
                <Grid item xs={12} md={2}>
                    <Item name="Indomie" price="2" imglink="https://shorturl.at/cdwCQ" stock="5" />
                </Grid>
                <Grid item xs={12} md={2}>
                    <Item name="Salad Chips" price="1" imglink="https://shorturl.at/diX38" stock="3" />
                </Grid>
                <Grid item xs={12} md={2}>
                    <Item name="Salad Chips" price="1" imglink="https://shorturl.at/diX38" stock="3" />
                </Grid>
                <Grid item xs={12} md={2}>
                    <Item name="Salad Chips" price="1" imglink="https://shorturl.at/diX38" stock="3" />
                </Grid>
            </Grid> 
        </div>
    )
}
    
export default Home;