interface Image{
    id:number,
    img:string
  }

interface Product{
    id:number,
    name:string,
    image:string,
    description:string,
    brand:string,
    category:string,
    price:number,
    instock:any,
    rating:any,
    numReviews:number 
    variation:string[],
    prodImage:Image[]


}







export const latest_products=[
    {
        'id':1,
        'name':' airforce one',
        'image':'/images/product-3.png',
        'description':'industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galle',
        'brand':'Nike',
        'category':'sneakers',
        'price':54.20,
        'instock':4,
        'rating':4.2,
        'numReviews':12
    },
    {
        'id':2,
        'name':' Gucci pam',
        'image':'/images/gucci.jpg',
        'description':'industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galle',
        'brand':'Gucci',
        'category':'pam',
        'price':25.20,
        'instock':3,
        'rating':4.6,
        'numReviews':9
    },
    {
        'id':3,
        'name':'corperate men shoe',
        'image':'/images/men-shoe-2.jpg',
        'description':'industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galle',
        'brand':'Loubutin',
        'category':'shoes',
        'price':80.00,
        'instock':4,
        'rating':4.2,
        'numReviews':10
    },
    {
        'id':4,
        'name':' air mask max',
        'image':'/images/product-1.png',
        'description':'industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galle',
        'brand':'Nike',
        'category':'sneakers',
        'price':52.20,
        'instock':4,
        'rating':4.2,
        'numReviews':12
    },
    {
        'id':5,
        'name':' easy  pam',
        'image':'/images/brow-pam.jpg',
        'description':'industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galle',
        'brand':'hermes',
        'category':'pam',
        'price':54.20,
        'instock':4,
        'rating':4.5,
        'numReviews':12
    },
    {
        'id':6,
        'name':' men corperate shoe',
        'image':'/images/louis.jpg',
        'description':'industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galle',
        'brand':'Louis Vuiton',
        'category':'corperate',
        'price':75.00,
        'instock':2,
        'rating':4.4,
        'numReviews':15
    },
    {
        'id':7,
        'name':' casual sport sneaker',
        'image':'/images/short-sneaker.jpg',
        'description':'industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galle',
        'brand':'fashionate',
        'category':'sneakers',
        'price':53.20,
        'instock':2,
        'rating':4.4,
        'numReviews':6
    },
    {
        'id':8,
        'name':' Dior pam',
        'image':'/images/dior.jpg',
        'description':'industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galle',
        'brand':'dior',
        'category':'pam',
        'price':54.20,
        'instock':2,
        'rating':4.6,
        'numReviews':6
    }
]

export const popular_product=[
    {
        'id':1,
        'name':' Camouflage hood',
        'image':'/images/Camouflage.jpg',
        'description':'industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galle',
        'brand':'Nike',
        'category':'sweater',
        'price':80.00,
        'discount_price':45.00,
        'instock':4,
        'rating':4.2,
        'numReviews':10
    },
    {
        'id':2,
        'name':' white hood',
        'image':'/images/white-hood.png',
        'description':'industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galle',
        'brand':'Nikehoodies',
        'category':'sweater',
        'price':70.99,
        'discount_price':48.00,
        'instock':4,
        'rating':4.6,
        'numReviews':10
    },
    {
        'id':3,
        'name':'Red hoodie',
        'image':'/images/hood.png',
        'description':'industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galle',
        'brand':'hoodies',
        'category':'sweater',
        'price':60.00,
        'discount_price':41.00,
        'instock':4,
        'rating':4.2,
        'numReviews':10
    },
    {
        'id':4,
        'name':'Blue hoodie',
        'image':'/images/blue-hood.jpg',
        'description':'industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galle',
        'brand':'hoodies',
        'category':'sweater',
        'price':50.00,
        'discount_price':35.00,
        'instock':4,
        'rating':3.6,
        'numReviews':6
    }
    
]