import Head from 'next/head'

import styles from '../../styles/Home.module.css'

import NavBar from '../../componenets/NavBar.tsx'
import { Heading, Text, Box, Image, Link, Button,  Center,
    useColorModeValue,
    Stack, } from '@chakra-ui/react'
import ProductCard from '../../componenets/Categories'
import { getMashcineCategoryName, getCategoryMashcinen } from '../../services/index'
import SideCategories from '../../componenets/SideCategories'
import Categories from '../../componenets/Categories'
import { useRouter } from 'next/router'


export default function CategoryP({mashcinen, categories}) {
 
 const router = useRouter();
  return (
    <div >
      

{mashcinen.slice(0,1).map((mashcinen) => (
        <div key={mashcinen.slug} >{mashcinen.node.mashinenCategory.slice(0,1).map((mashinenCategory) =>(
          <>
          <Head>
            <title>{mashinenCategory.name} || Kaffee-Service Berlin Peter Ganss GmbH</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          </>
        ) )}</div>

        ))}    


      <main className={styles.main}>
       
        <SideCategories  />
        
            
          <Box
           boxShadow={'dark-lg'}
           borderRadius={10}
           p={14} 
           pl={'90px'}
           mt={4}
           w={'90%'}

          >

        {mashcinen.slice(0,1).map((mashcinen) => (
        <div key={mashcinen.slug} >{mashcinen.node.mashinenCategory.slice(0,1).map((mashinenCategory) =>(
          <h1 className={styles.shopTitle} key={mashinenCategory.slug} >{mashinenCategory.name} </h1>
        ) )}</div>

        ))}

       
        
        <div  className={styles.productgrid} >
          {mashcinen.map((mashcinen , index) => (
              
            <>
           
           

        <Center py={12}  key={mashcinen.node.slug}>
      <Box
       key={index}
        role={'group'}
        p={6} 
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'lg'}
        pos={'relative'}
        zIndex={1}>

        <Link href={`/maschine/${mashcinen.node.slug}`} >

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
            backgroundImage: `url(${mashcinen.node.image.url})`,
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
            width={382}
            objectFit={'contain'}
            src={mashcinen.node.image.url}
          />
        </Box>

        </Link>
        <Stack pt={10} align={'center'}>
          
          <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
          {mashcinen.node.title}
          </Heading>
           
          <Button 
           onClick={async () => { 
            router.push(`/maschine/${mashcinen.node.slug}`);
  
            }}
          colorScheme='blue'>Mehr Info </Button>
        </Stack>
      </Box>
    </Center>
            </>
          ))}
        </div>

     
        </Box>

         
    
      </main>
 
    </div>
  )
}


// Fetch data at build time
export async function getStaticProps({ params }) {
    const mashcinen = await getCategoryMashcinen(params.slug);
  
    return {
      props: { mashcinen },
    };
  }

  export async function getStaticPaths() {
    const categories = await getMashcineCategoryName();
    return {
      paths: categories.map(({ slug }) => ({ params: { slug } })),
      fallback: false,
    };
  }  

 