import { request, gql } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getCategories = async () => {
    const query = gql`
    query getCategories {
        categoriesConnection {
          edges {
            node {
              name
              slug
              image {
                url
              }
              product {
                title
                topProduct
                slug
                image {
                  url
                }
                content {
                  raw
                }
              }
            }
          }
        }
      }
      
    `;
  
    const result = await request(graphqlAPI, query);
  
    return result.categoriesConnection.edges;
  };
  


  export const getCategoryProduct = async (slug) => {
    const query = gql`
      query getCategoryProduct($slug: String!) {
        productsConnection(where: {category: {slug: $slug}}) {
            edges {
                node {
                  excerpt
                  slug
                  title
                  image {
                    url
                  }
                  category {
                    name
                    slug
                  }
                }
              }
        }
      }
    `;
  
    const result = await request(graphqlAPI, query, { slug });
  
    return result.productsConnection.edges;
  };  


  export const getCategoryName = async () => {
    const query = gql`
      query getCategoryName {
          categories {
            name
            slug
          }
      }
    `;
  
    const result = await request(graphqlAPI, query);
  
    return result.categories;
  };



  export const getProducts = async () => {
    const query = gql`
      query getProducts {
        productsConnection {
          edges {
            cursor
            node {
              
            
              slug
              title
              excerpt
              image {
                url
              }
              category {
                name
                slug
              }
            }
          }
        }
      }
    `;
  
    const result = await request(graphqlAPI, query);
  
    return result.productsConnection.edges;
  };


  export const getProductDetails = async (slug) => {
    const query = gql`
      query getProductDetails($slug : String!) {
        product(where: {slug: $slug}) {
          title
          excerpt
          taste
          type
          texture
          size
          image {
            url
          } 
          slug
          content {
            raw
            
          }
          category {
            name
            slug
            product {
              title
              slug
        image {
          url
        }
            }
          }
        }
      }
    `;
  
    const result = await request(graphqlAPI, query, { slug });
  
    return result.product;
  };


  export const getMascinenCategories = async () => {
    const query = gql`
    query getCategories {
      mashinenCategoryConnection {
          edges {
            node {
              name
              slug
              image {
                url
              }
              mashine {
                title
                topProduct
                slug
                image {
                  url
                }
                content {
                  raw
                }
              }
            }
          }
        }
      }
      
    `;
  
    const result = await request(graphqlAPI, query);
  
    return result.mashinenCategoryConnection.edges;
  };
  

  export const getCategoryMashcinen = async (slug) => {
    const query = gql`
      query getCategoryMashcinen($slug: String!) {
        mashinenConnection(where: {mashinenCategory_some: {slug: $slug}}) {
            edges {
                node {
                  excerpt
                  slug
                  title
                  image {
                    url
                  }
                  mashinenCategory {
                    name
                    slug
                  }
                }
              }
        }
      }
    `;
  
    const result = await request(graphqlAPI, query, { slug });
  
    return result.mashinenConnection.edges;
  };  


  export const getMashcineCategoryName = async () => {
    const query = gql`
      query getMashcineCategoryName {
        mashinenCategory {
            name
            slug
          }
      }
    `;
  
    const result = await request(graphqlAPI, query);
  
    return result.mashinenCategory;
  };



  
  export const getMashcinen = async () => {
    const query = gql`
      query getMashcinen {
        mashinenConnection {
          edges {
            cursor
            node {
              
            
              slug
              title
              excerpt
              image {
                url
              }
              mashinenCategory {
                name
                slug
              }
            }
          }
        }
      }
    `;
  
    const result = await request(graphqlAPI, query);
  
    return result.mashinenConnection.edges;
  };


  export const getMaschineDetails = async (slug) => {
    const query = gql`
      query getMaschineDetails($slug : String!) {
        mashine(where: {slug: $slug}) {
          title
          excerpt
          image {
            url
          } 
          slug
          content {
            raw
            
          }
          mashinenCategory {
            name
            slug
          }
        }
      }
    `;
  
    const result = await request(graphqlAPI, query, { slug });
  
    return result.mashine;
  };




  export const getOrderForm = async () => {
    const query = gql`
    query getOrderForm {
      ordersConnection {
        edges {
          node {
            id
            orderInput {
              __typename
              name
              label
              placeholder
              required
              type
            }
            orderSelects {
              __typename
              name
              label
              orderOption {
                value
                option
              }
              required
            }
            orderCheckbox {
              __typename
              name
              label
              required
            }
            orderTextarea {
              __typename
              name
              label
              required
              placeholder
            }
          }
        }
      }
      }
      
    `;
  
    const result = await request(graphqlAPI, query);
  
    return result.ordersConnection.edges;
  };


  export const getSimilarProducts = async () => {
    const query = gql`
       
      query getSimilarProducts($slug: String!, $categories: [String!]) {
        products(where: {category: $category}) {
          id
          title
          slug
          category {
      id
      title
      slug
    }
        }
      
    `;
    const result = await request(graphqlAPI, query,  );
  
    return result.products;
  };