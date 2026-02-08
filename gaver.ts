const accounts = await analytics.management.accounts.list();
const properties = await analytics.management.webproperties.list({
  accountId
});

const verified = properties.data.items?.some(
  p => p.websiteUrl?.includes(domain)
);
