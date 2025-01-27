
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.2.1
 * Query Engine version: 4123509d24aa4dede1e864b46351bf2790323b69
 */
Prisma.prismaVersion = {
  client: "6.2.1",
  engine: "4123509d24aa4dede1e864b46351bf2790323b69"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.AccountScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  type: 'type',
  provider: 'provider',
  providerAccountId: 'providerAccountId',
  refresh_token: 'refresh_token',
  access_token: 'access_token',
  expires_at: 'expires_at',
  token_type: 'token_type',
  scope: 'scope',
  id_token: 'id_token',
  session_state: 'session_state'
};

exports.Prisma.SessionScalarFieldEnum = {
  id: 'id',
  sessionToken: 'sessionToken',
  userId: 'userId',
  expires: 'expires'
};

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  name: 'name',
  email: 'email',
  emailVerified: 'emailVerified',
  image: 'image',
  updated_on: 'updated_on',
  role: 'role'
};

exports.Prisma.VerificationTokenScalarFieldEnum = {
  identifier: 'identifier',
  token: 'token',
  expires: 'expires'
};

exports.Prisma.EventPublishProviderScalarFieldEnum = {
  id: 'id',
  provider: 'provider',
  url: 'url',
  campaign_id: 'campaign_id'
};

exports.Prisma.CampaignScalarFieldEnum = {
  campaign_id: 'campaign_id',
  title: 'title',
  description: 'description',
  image: 'image',
  header_image: 'header_image',
  allow_ai_events: 'allow_ai_events',
  overview_map_id: 'overview_map_id',
  created_on: 'created_on'
};

exports.Prisma.UserCampaignScalarFieldEnum = {
  user_campaign_id: 'user_campaign_id',
  user_id: 'user_id',
  campaign_id: 'campaign_id',
  created_on: 'created_on',
  updated_on: 'updated_on',
  last_visited_on: 'last_visited_on'
};

exports.Prisma.EventTemplateScalarFieldEnum = {
  event_template_id: 'event_template_id',
  title: 'title',
  description: 'description',
  type: 'type',
  icon_url: 'icon_url',
  rarity: 'rarity',
  relationship: 'relationship',
  compare: 'compare',
  exclude_from_random: 'exclude_from_random',
  results: 'results',
  campaign_id: 'campaign_id',
  node_references: 'node_references'
};

exports.Prisma.EventScalarFieldEnum = {
  event_id: 'event_id',
  name: 'name',
  description: 'description',
  type: 'type',
  rarity: 'rarity',
  created_on: 'created_on',
  updated_on: 'updated_on'
};

exports.Prisma.StaticMapScalarFieldEnum = {
  map_id: 'map_id',
  name: 'name',
  image_url: 'image_url',
  created_on: 'created_on',
  updated_on: 'updated_on',
  campaign_id: 'campaign_id'
};

exports.Prisma.NodeTypeScalarFieldEnum = {
  node_type_id: 'node_type_id',
  name: 'name',
  allowed_attributes: 'allowed_attributes',
  campaign_id: 'campaign_id'
};

exports.Prisma.AttributeScalarFieldEnum = {
  attribute_id: 'attribute_id',
  title: 'title',
  value: 'value',
  node_id: 'node_id'
};

exports.Prisma.NodeScalarFieldEnum = {
  node_id: 'node_id',
  name: 'name',
  description: 'description',
  long_description: 'long_description',
  image_url: 'image_url',
  created_on: 'created_on',
  updated_on: 'updated_on',
  base_culture: 'base_culture',
  profession: 'profession',
  given_name_style: 'given_name_style',
  family_name_style: 'family_name_style',
  name_shape: 'name_shape',
  campaign_id: 'campaign_id',
  node_type_id: 'node_type_id',
  exclude_from_events: 'exclude_from_events'
};

exports.Prisma.MapNodeScalarFieldEnum = {
  map_node_id: 'map_node_id',
  coordinates: 'coordinates',
  moveable: 'moveable',
  title: 'title',
  description: 'description',
  icon_url: 'icon_url',
  icon: 'icon',
  created_on: 'created_on',
  updated_on: 'updated_on',
  map_id: 'map_id',
  node_id: 'node_id'
};

exports.Prisma.NodeRelationshipScalarFieldEnum = {
  node_relationship_id: 'node_relationship_id',
  self_id: 'self_id',
  relation_title: 'relation_title',
  target_id: 'target_id',
  relationship_score: 'relationship_score',
  is_in_range: 'is_in_range',
  updated_on: 'updated_on'
};

exports.Prisma.SessionRecapScalarFieldEnum = {
  session_recap_id: 'session_recap_id',
  title: 'title',
  description: 'description',
  play_date: 'play_date',
  created_on: 'created_on',
  updated_on: 'updated_on',
  campaign_id: 'campaign_id',
  published_on: 'published_on'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.JsonNullValueInput = {
  JsonNull: Prisma.JsonNull
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.AccountOrderByRelevanceFieldEnum = {
  id: 'id',
  userId: 'userId',
  type: 'type',
  provider: 'provider',
  providerAccountId: 'providerAccountId',
  refresh_token: 'refresh_token',
  access_token: 'access_token',
  token_type: 'token_type',
  scope: 'scope',
  id_token: 'id_token',
  session_state: 'session_state'
};

exports.Prisma.SessionOrderByRelevanceFieldEnum = {
  id: 'id',
  sessionToken: 'sessionToken',
  userId: 'userId'
};

exports.Prisma.UserOrderByRelevanceFieldEnum = {
  id: 'id',
  name: 'name',
  email: 'email',
  image: 'image',
  role: 'role'
};

exports.Prisma.VerificationTokenOrderByRelevanceFieldEnum = {
  identifier: 'identifier',
  token: 'token'
};

exports.Prisma.EventPublishProviderOrderByRelevanceFieldEnum = {
  id: 'id',
  provider: 'provider',
  url: 'url',
  campaign_id: 'campaign_id'
};

exports.Prisma.CampaignOrderByRelevanceFieldEnum = {
  campaign_id: 'campaign_id',
  title: 'title',
  description: 'description',
  image: 'image',
  header_image: 'header_image',
  overview_map_id: 'overview_map_id'
};

exports.Prisma.UserCampaignOrderByRelevanceFieldEnum = {
  user_campaign_id: 'user_campaign_id',
  user_id: 'user_id',
  campaign_id: 'campaign_id'
};

exports.Prisma.JsonNullValueFilter = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
};

exports.Prisma.EventTemplateOrderByRelevanceFieldEnum = {
  event_template_id: 'event_template_id',
  title: 'title',
  description: 'description',
  type: 'type',
  icon_url: 'icon_url',
  relationship: 'relationship',
  compare: 'compare',
  campaign_id: 'campaign_id',
  node_references: 'node_references'
};

exports.Prisma.EventOrderByRelevanceFieldEnum = {
  event_id: 'event_id',
  name: 'name',
  description: 'description',
  type: 'type'
};

exports.Prisma.StaticMapOrderByRelevanceFieldEnum = {
  map_id: 'map_id',
  name: 'name',
  image_url: 'image_url',
  campaign_id: 'campaign_id'
};

exports.Prisma.NodeTypeOrderByRelevanceFieldEnum = {
  node_type_id: 'node_type_id',
  name: 'name',
  allowed_attributes: 'allowed_attributes',
  campaign_id: 'campaign_id'
};

exports.Prisma.AttributeOrderByRelevanceFieldEnum = {
  attribute_id: 'attribute_id',
  title: 'title',
  node_id: 'node_id'
};

exports.Prisma.NodeOrderByRelevanceFieldEnum = {
  node_id: 'node_id',
  name: 'name',
  description: 'description',
  long_description: 'long_description',
  image_url: 'image_url',
  base_culture: 'base_culture',
  profession: 'profession',
  given_name_style: 'given_name_style',
  family_name_style: 'family_name_style',
  name_shape: 'name_shape',
  campaign_id: 'campaign_id',
  node_type_id: 'node_type_id'
};

exports.Prisma.MapNodeOrderByRelevanceFieldEnum = {
  map_node_id: 'map_node_id',
  title: 'title',
  description: 'description',
  icon_url: 'icon_url',
  icon: 'icon',
  map_id: 'map_id',
  node_id: 'node_id'
};

exports.Prisma.NodeRelationshipOrderByRelevanceFieldEnum = {
  node_relationship_id: 'node_relationship_id',
  self_id: 'self_id',
  relation_title: 'relation_title',
  target_id: 'target_id'
};

exports.Prisma.SessionRecapOrderByRelevanceFieldEnum = {
  session_recap_id: 'session_recap_id',
  title: 'title',
  description: 'description',
  campaign_id: 'campaign_id'
};


exports.Prisma.ModelName = {
  Account: 'Account',
  Session: 'Session',
  User: 'User',
  VerificationToken: 'VerificationToken',
  EventPublishProvider: 'EventPublishProvider',
  Campaign: 'Campaign',
  UserCampaign: 'UserCampaign',
  EventTemplate: 'EventTemplate',
  Event: 'Event',
  StaticMap: 'StaticMap',
  NodeType: 'NodeType',
  Attribute: 'Attribute',
  Node: 'Node',
  MapNode: 'MapNode',
  NodeRelationship: 'NodeRelationship',
  SessionRecap: 'SessionRecap'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
