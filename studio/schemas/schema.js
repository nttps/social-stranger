import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'
import { userScheme } from './userScheme'
import { postScheme } from "./postScheme";


export default createSchema({
  name: 'default',
  types: schemaTypes.concat([userScheme, postScheme]),
})
