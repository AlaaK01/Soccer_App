// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Competition, Match, Team } = initSchema(schema);

export {
  Competition,
  Match,
  Team
};