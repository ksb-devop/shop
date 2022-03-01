import Head from 'next/head'

import styles from '../styles/Home.module.css'
import Hero from '../componenets/Hero'
import NavBar from '../componenets/NavBar.tsx'
import { Heading, Text, Box, Image,Link  } from '@chakra-ui/react'
import Categories from '../componenets/Categories'
import SideCategories from '../componenets/SideCategories'
import { getCategories } from '../services'

export default function Shop({categories}) {

    console.log(categories);

  return (
    <div >
      <Head>
        <title>Shop || Kaffee-Service Berlin Peter Ganss GmbH</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <NavBar/>
        <div className={styles.cateArea} >
        <SideCategories  />
        
        <div className={styles.shopPage} >
            <h1 className={styles.shopTitle}>Nach Kategorien durchsuchen</h1>

            

     

        <div  className={styles.categrid}>
        {categories.map((categories, index) => (
            <>
             

              <Box
        as='button'
        maxH={250}
        maxW={250}
        >
        <Link href={`/category/${categories.node.slug}`} > 
        <Image 
        src={categories.node.image.url} 
        borderRadius={5}
        backgroundSize='cover'
        h={44}
        alt={''} />
        <Text
        textAlign={'center'}
        backgroundColor={'blue.400'}
        my={2}
        borderRadius={5}
        >{categories.node.name}</Text>
        </Link>   
        </Box>
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
export async function getStaticProps() {
    const  categories = (await getCategories()) || [];
    return {
      props: {  categories },
    };
  }