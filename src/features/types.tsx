
export interface Image{
    id:number,
    img:string
}
interface ItemVariationType{
        id:number,
       value:string   
}
export interface VariationType{ 
       id:number,
       name:string,
       item_variations:ItemVariationType[] | undefined
   
}
export interface ProductStateType{
    products:{
        id:number,
        name:string,
        category:string,
        description:string,
        rating:any,
        brand:string,
        image:string,         
        numReviews:number,     
        price:number,
        countInstock:number,  
        createdAt:string,
        user:number 
        
    }[],
    isLoading:boolean,
    error:string |null,
    
}

export interface ProductType{
    products:{
        id:number,
        name:string,
        category:string,
        description:string,
        rating:any,
        brand:string,
        image:string,         
        numReviews:number,     
        price:number,
        countInstock:number,  
        createdAt:string,
        user:number 
        
    }[],
    isLoading:boolean,
    error:string |null,
    
}





export interface ProductDetailState{
    product:{
        id:number,
        name:string,
        image:string,
        description:string,
        rating:any,
        numReviews:number,
        brand:string,
        category:string,
        price:number,
        countInstock:number,  
        thumbnails:Image[],
        variations:VariationType[]
        
    },
    status:boolean,
    error:string |null
    
}
export interface AuthError{
    errorMessage:string,
    field_errors:Record<string, string>
}
export interface cartError{
    errorMessage:string,
    
}
export interface SignUpData{
    first_name:string,
    last_name:string,
    email:string,
    password:string,
    phone:string | number

}
export interface AuthInputData{
    email:string,
    password:string
}

export interface PasswordResetInput{
    email:string
}

export interface cartInputType{
    prod_id:number,
    variation:number[],
    qty:number
}


export interface VType{ 
   id:number,
   name:string,

}
export interface ItemType{
    id:number,
    name:string,
    category:string,
    description:string,
    rating:any,
    brand:string,
    image:string,         
    numReviews:number,     
    price:number,
    countInstock:number,  
    createdAt:string,
    user:number 
    
}


export interface ItemVType{
    id:number,
    value:string,
    variation: VType  
}
export interface ItemVaType{
    id:number,
    value:string,
    variation: VType  
}[]


export interface orderItemType{
     id:number,
     item:ItemType
     quantity:number,
     item_variations:ItemVType[],
     final_price:number

}
export interface CartReturnType{
    id:number,
    order_items:orderItemType[],
    total:number
}
export interface AddressType{
    country:string,
    city:string,
    postal_code:string,
    address:string,
    default_add:boolean
  }


export interface PaymentActionType{
    processing:boolean,
    succeeded:boolean,
    error:string |null,
    
  }

export type PaymentIntentResponseType={
    clientSecret:string,
    error:string | null |undefined
}

export type TransactionType={
    id:number,
    amount:number,
    timestamp:string
}