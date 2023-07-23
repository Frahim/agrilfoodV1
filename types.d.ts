import { type } from "os"

type Banner = {
    "id": number,
    "brand_id": number,
    "name": string,
    "slug": string,
    "video_url": string,
    "video": string,
    "description": string,
    "other_description": string,
    "created_at": number,
    "updated_at": number
}


type Brand = {
    "id": number,
    "name": string,
    "slug": string,
    "logo": string,
    "about_brand": string,
    "description": string,
    "short_description": string,
    "bandr_image": string,
    "Vedio": string,
    "other_description": string,
    "address": string,
    "housenumber": string,
    "postalcode": string,
    "city": string,
    "phonenumber": number,
    "mobile": number,
    "email": string,
    "category": string,
    "meta_title": string,
    "meta_keyword": string,
    "meta_description": string,
    "created_at": string,
    "updated_at": string
}

type Myitem = {
    "id": number,
    "brand_id": number,
    "name": string,
    "slug": string,
    "type": string,
    "category": string,
    "description": string,
    "disease": string,
    "variety": string,
    "sorting": string,
    "pod": string,
    "plant": string,
    "orginal_price": number,
    "selling_price": number,
    "quantity": number,
    "meta_title": string,
    "meta_keyword": string,
    "meta_description": string,
    "created_at": number,
    "updated_at": number,
    "pf_image":string,
}
type ProductImg = {
    "id": number,
    "product_id": number,
    "image": "string",
    "created_at": "number",
    "updated_at": "number"
}

type Hilighter = [{
    "id": number,
    "title": string,
    "number": number,
    "dilog": string,
    "icon_image": string,
    "created_at": number,
    "updated_at": number,
}]
type Category = [{
    "id": number,
    "name": string,
    "slug": string,
    "description": string,
    "cat_image": string,
    "meta_title": string,
    "meta_keyword": string,
    "meta_description": string,
    "created_at": number,
    "updated_at": numbers    
}]

type Metadata=[{
    "title": string,
    "meta_title": string,
    "meta_keyword": string,
    "meta_description": string,
    "name": string,
}]