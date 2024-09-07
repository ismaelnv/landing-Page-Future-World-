import { ProductsWrapper } from "app/components/Store/ProductsWrapper"
import { getCollectionProducts, getCollections } from "app/services/shopify/collections"
import { getProducts } from "app/services/shopify/products" 

interface CategoryProps{

    params:{

        categories: string[],
        searhParams?: string
    }
}

export default async function Category(props:CategoryProps){
    
    const {categories} = props.params

    let products = []
    
    const collections = await getCollections()

    if(categories?.length > 0){

        const selectdCollectionId = collections.find((collection) => collection.handle === categories[0]).id
        products = await getCollectionProducts(selectdCollectionId);

    }else{

        products = await getProducts();
    }
    
    return(
        
       <ProductsWrapper products={products}/>
    )
}