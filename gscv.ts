const sites = await gsc.sites.list();
const verified = sites.data.siteEntry?.some(
  site => site.siteUrl.includes(domain)
);
