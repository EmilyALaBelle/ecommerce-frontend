import { Card, CardActionArea, CardContent, CardHeader, CardMedia, Typography } from "@mui/material"
import "../assets/ProductCard.css"

export default function SkincareCard({ skincare, setSkincare }) {
  return (

    <>
      <div className="div-box">
        <Card>
          <CardActionArea>
            <CardHeader
              title={skincare.title}
              subheader={skincare.brand}>
            </CardHeader>
            <CardMedia
              className="image"
              component="img"
              image={skincare.thumbnail}>
            </CardMedia>
            <CardContent>
              <Typography gutterBottom variant="h4" component="div">
                ${skincare.price}
              </Typography>
              <Typography varient="h6" >
                rating: {skincare.rating}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </>
  )


}