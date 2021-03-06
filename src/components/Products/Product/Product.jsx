import React from 'react'
import {Card, CardMedia, CardContent, CardActions, Typography, IconButton} from '@material-ui/core'
import {AddShoppingCart} from '@material-ui/icons'
import useStyles from './styles'


const Product = ({ product, handleAddToCart }) => {

    const classes= useStyles();


    return (
        <Card className={classes.root}>

            <CardMedia className={classes.media} image={product.media.source} title={product.name}/>

            <CardContent>

                <div className={classes.CardContent}>

                    <Typography gutterBottom variant="h5" component="h2">

                       
                        

                        {product.name}

                    </Typography>

                    <Typography gutterBottom variant="h5" component="h2">

                    {product.price.formatted_with_symbol}
                        

                    </Typography>

                </div>

                <Typography variant="h6" color="textSecondary" component="p" dangerouslySetInnerHTML={{ __html: product.description }}></Typography>

            </CardContent>


            <CardActions disableSpacing className={classes.CardActions}>

                <IconButton aria-label="Add To Cart" onClick={ () => handleAddToCart(product.id, 1)}> 
                
                    <AddShoppingCart/>

                </IconButton>


            </CardActions>


        </Card>
    )
}

export default Product
