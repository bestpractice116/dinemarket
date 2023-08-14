import { type SchemaTypeDefinition } from 'sanity'
import {product} from './product'
import { herobanner } from './herobanner'
import { category } from './category'
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, herobanner,category],
}
