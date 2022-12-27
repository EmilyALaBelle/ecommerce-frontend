import { Card, CardActionArea, CardContent, CardHeader, CardMedia, Typography } from "@mui/material"
import "../assets/ProductCard.css"

export default function DiscountedProductCard({ products, setProducts }) {
  return (
    <>
      <div className="div-box">
        <Card>
          <CardActionArea>
            <CardHeader
              title={products.title}
              subheader={products.brand}>
            </CardHeader>
            <CardMedia
              className="image"
              component="img"
              image={products.thumbnail}>
            </CardMedia>
            <CardContent>
              <Typography gutterBottom variant="h4" component="div">
                ${products.price}
              </Typography>
              <Typography varient="h6" >
                rating: {products.rating}
              </Typography>
              <Typography>
                discount: {products.discountPercentage}%
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </>
  )
}