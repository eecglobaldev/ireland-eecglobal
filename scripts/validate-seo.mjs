#!/usr/bin/env node
/**
 * SEO validation script for CI/local.
 * Checks sitemap.xml and optional homepage JSON-LD.
 * Usage: BASE_URL=https://ireland.eecglobal.com node scripts/validate-seo.mjs
 *        Or: npm run seo:validate (uses BASE_URL or default production URL)
 */

const BASE_URL = process.env.BASE_URL || "https://ireland.eecglobal.com";

const EXPECTED_SITEMAP_PATHS = [
  "/",
  "/money",
  "/cities",
  "/apply",
  "/visa",
  "/pay",
  "/family",
  "/stay",
];

async function fetchText(url) {
  const res = await fetch(url, { redirect: "follow" });
  if (!res.ok) throw new Error(`${url} ${res.status}`);
  return res.text();
}

async function validateSitemap() {
  const url = `${BASE_URL}/sitemap.xml`;
  console.log("Checking sitemap:", url);
  const xml = await fetchText(url);
  const hasXml = xml.includes('<?xml') && xml.includes('<urlset');
  const missing = EXPECTED_SITEMAP_PATHS.filter((path) => {
    const loc = path === "/" ? `${BASE_URL}/` : `${BASE_URL}${path}`;
    return !xml.includes("<loc>" + loc + "</loc>");
  });
  if (!hasXml) throw new Error("Sitemap is not valid XML or missing urlset");
  if (missing.length > 0) throw new Error(`Sitemap missing URLs: ${missing.join(", ")}`);
  console.log("  Sitemap OK: all expected URLs present");
}

async function validateRobots() {
  const url = `${BASE_URL}/robots.txt`;
  console.log("Checking robots:", url);
  const text = await fetchText(url);
  if (!text.includes("Sitemap:") && !text.includes("sitemap.xml"))
    throw new Error("robots.txt missing Sitemap directive");
  if (!text.includes("Allow:") && !text.includes("allow:"))
    console.warn("  Warning: robots.txt has no Allow rule");
  console.log("  Robots OK");
}

async function validateHomepageSchema() {
  const url = BASE_URL;
  console.log("Checking homepage JSON-LD:", url);
  const html = await fetchText(url);
  const hasJsonLd =
    html.includes('application/ld+json') && html.includes('"@type"');
  if (!hasJsonLd) throw new Error("Homepage has no application/ld+json script");
  console.log("  Homepage schema OK");
}

async function main() {
  console.log("SEO validation base URL:", BASE_URL);
  try {
    await validateSitemap();
    await validateRobots();
    await validateHomepageSchema();
    console.log("\nAll SEO checks passed.");
    process.exit(0);
  } catch (err) {
    console.error("\nSEO validation failed:", err.message);
    process.exit(1);
  }
}

main();
