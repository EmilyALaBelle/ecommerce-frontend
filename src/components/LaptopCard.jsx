import { Card, CardActionArea, CardContent, CardHeader, CardMedia, Typography } from "@mui/material"
import "../assets/ProductCard.css"

export default function LaptopCard({ laptop, setLaptop }) {
  return (

    <>
      <div className="div-box">
        <Card>
          <CardActionArea>
            <CardHeader
              title={laptop.title}
              subheader={laptop.brand}>
            </CardHeader>
            <CardMedia
              className="image"
              component="img"
              image={laptop.thumbnail}>
            </CardMedia>
            <CardContent>
              <Typography gutterBottom variant="h4" component="div">
                ${laptop.price}
              </Typography>
              <Typography varient="h6" >
                rating: {laptop.rating}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </>
  )


}