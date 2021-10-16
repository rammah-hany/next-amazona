import {
  Button,
  Card,
  Grid,
  Link,
  List,
  ListItem,
  Typography,
} from '@material-ui/core';
import NextLink from 'next/link';
import { useRouter } from 'next/dist/client/router';
import React from 'react';
import Layout from '../../components/layout';
import data from '../../utils/data';
import useStyles from '../../utils/styles';
import Image from 'next/image';
import { typography } from '@mui/system';
export default function ProductScreen() {
  const classes = useStyles();

  const router = useRouter();
  const { slug } = router.query;
  const product = data.products.find((el) => el.slug === slug);
  if (!product) {
    return <div className={classes.pageHolder}> Product Not Found</div>;
  }
  return (
    <Layout title={product.name} description={product.description}>
      <div className={classes.section}>
        <NextLink href='/' passHref>
          <Link>
            <typography>back to products </typography>{' '}
          </Link>
        </NextLink>
      </div>
      <Grid container spacing={1}>
        <Grid item md={6} xs={12}>
          <Image
            src={product.image}
            alt={product.name}
            width={640}
            height={640}
            layout='responsive'
          ></Image>
        </Grid>
        <Grid item md={3} xs={12}>
          <List>
            <ListItem>
              <Typography component='h1' variant='h1'>
                {product.name}
              </Typography>
            </ListItem>
            <ListItem>
              Category: <Typography> {product.category}</Typography>
            </ListItem>
            <ListItem>
              Brand: <Typography>{product.brand} </Typography>{' '}
            </ListItem>
            <ListItem>
              Rating:{' '}
              <Typography>
                {product.rating} stars ({product.numReviews} reviews){' '}
              </Typography>
            </ListItem>
            <ListItem>
              Description: <Typography>{product.description} </Typography>{' '}
            </ListItem>
          </List>
        </Grid>
        <Grid item md={3} xs={12}>
          <Card>
            <List>
              <ListItem>
                {' '}
                <Grid container>
                  <Grid item xs={6}>
                    {' '}
                    <Typography>Price</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    {' '}
                    <Typography>${product.price}</Typography>
                  </Grid>
                </Grid>
              </ListItem>
              <ListItem>
                {' '}
                <Grid container>
                  <Grid item xs={6}>
                    {' '}
                    <Typography>Status</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    {' '}
                    <Typography>
                      {product.counrInStock > 0 ? 'in Stock' : 'unavailable'}
                    </Typography>
                  </Grid>
                </Grid>
              </ListItem>
              <ListItem>
                <Button fullWidth variant='contained' color='primary'>
                  {' '}
                  Add to cart
                </Button>
              </ListItem>
            </List>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  );
}
