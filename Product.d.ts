import { type } from "os"
export interface Product{
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