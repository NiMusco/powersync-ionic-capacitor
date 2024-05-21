import { column, Schema, TableV2 } from '@powersync/web';

const organizations = new TableV2({
  created: column.text,
  parent_id: column.text,
  active_billing_subscription_id: column.text,
  currency_id: column.text,
  country_id: column.text,
  active: column.integer,
  language_code: column.text,
  timezone: column.text,
  order: column.integer,
  membership_count: column.integer,
  type: column.integer,
  email: column.text,
  name: column.text,
  description: column.text,
  client_type: column.text,
  industry: column.text,
  countries: column.text,
  icon: column.integer,
  image: column.integer,
  is_premium: column.integer,
  modified: column.text,
});

export const AppSchema = new Schema({
  organizations,
});

export type Database = (typeof AppSchema)['types'];
export type Customer = Database['organizations'];
