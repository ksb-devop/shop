import Head from 'next/head'

import styles from '../../styles/Home.module.css'

import NavBar from '../../componenets/NavBar.tsx'
import { Heading, Text, Box, Image, Link, Button,  Center,
    useColorModeValue,
    Stack, } from '@chakra-ui/react'
import ProductCard from '../../componenets/Categories'
import { getCategoryName, getCategoryProduct } from '../../services/index'
import SideCategories from '../../componenets/SideCategories'
import Categories from '../../componenets/Categories'



export default function CategoryP({products, categories}) {

    console.log(categories)

  return (
    <div >
      <Head>
        <title>Shop || Kaffee-Service Berlin Peter Ganss GmbH</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <NavBar/> 
        <SideCategories  />
        <div className={styles.categoryPageGrid}>
          <Categories/>
        <div className={styles.shopPage} >

        {products.slice(0,1).map((products) => (
        <h1 className={styles.shopTitle} key='' >{products.node.category.name}</h1>

        ))}

       
        
        <div  className={styles.productgrid} >
          {products.map((products) => (
              
            <>
           
           

        <Center py={12} key={''} >
      <Box
      key={''}
        role={'group'}
        p={6}
        maxW={'420px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'lg'}
        pos={'relative'}
        zIndex={1}>

        <Link href={`/product/${products.node.slug}`} >

        <Box
          rounded={'lg'}
          mt={-12}
          pos={'relative'}
          height={'230px'}
          _after={{
            transition: 'all .3s ease',
            content: '""',
            w: 'full',
            h: 'full',
            pos: 'absolute',
            top: 5,
            left: 0,
            backgroundImage: `url(${products.node.image.url})`,
            filter: 'blur(15px)',
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: 'blur(20px)',
            },
          }}>
          <Image
            rounded={'lg'}
            height={230}
            width={282}
            objectFit={'contain'}
            src={products.node.image.url}
          />
        </Box>

        </Link>
        <Stack pt={10} align={'center'}>
          
          <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
          {products.node.title}
          </Heading>
           
          <Button colorScheme='blue'>Add to Kart</Button>
        </Stack>
      </Box>
    </Center>
            </>
          ))}
        </div>

        </div>


        </div>
    
      </main>

      <footer className={styles.footer}>
      Kaffee-Service Berlin Peter Ganss GmbH
      </footer>
    </div>
  )
}


// Fetch data at build time
export async function getStaticProps({ params }) {
    const products = await getCategoryProduct(params.slug);
  
    return {
      props: { products },
    };
  }

  export async function getStaticPaths() {
    const categories = await getCategoryName();
    return {
      paths: categories.map(({ slug }) => ({ params: { slug } })),
      fallback: false,
    };
  }  

 