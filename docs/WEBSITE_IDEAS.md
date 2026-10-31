# 72-item website implementation register

This file replaces the former idea backlog. The site implements the portions that can be published from public sources; items requiring a company decision, operational data, live monitoring, an approved contact route or user testing are explicitly marked unpublished or manual. No status below invents company or product facts.

**Scope decisions:** English only; no analytics; no duplicate developer documentation (link to <https://docs.gothwadtech.com/>); list only Pawan Gothwad (Founder), Yuvkesh Meena (CEO), and Vishnu (Co-founder); label unavailable information rather than guess. Public source visibility does not imply an app release, uptime, support promise, open-source licence or production readiness.

## Product detail and discovery

1. **Implemented** — The 26-entry portal catalogue links to 23 individual product reference pages; company resources route to About, Leadership or the separate docs portal.
2. **Not published** — No owner-approved lifecycle labels exist. Pages use “portal listing” / “repository listing” and state that maturity is not verified.
3. **Implemented as source links** — Product pages link to the relevant GitHub Releases pages. Release history is not copied or treated as proof of a live service.
4. **Partially implemented** — Platform labels are reproduced as discovery hints; a tested OS/device compatibility matrix is **not published**.
5. **Not published** — Product screenshots or videos were not added without verified, current captures and reuse/credit details.
6. **Implemented** — `/find-a-product/` filters the static catalogue by broad goal and platform, locally in the browser.
7. **Implemented** — Product catalogue compares public category/platform/site/repository references only; it does not score features, quality or security.
8. **Implemented with caveat** — `/integrations/` is a portfolio map, explicitly not a verified interoperability matrix.

## Documentation and technical learning

9. **Routed to the separate portal** — This site links to docs.gothwadtech.com and does not copy getting-started guides.
10. **Not duplicated here** — Guide freshness and source revisions remain the responsibility of the docs repository.
11. **Routed to the separate portal** — No local API index was created.
12. **Routed to the separate portal** — No local OAuth, webhook or client cookbook was created.
13. **Routed to the separate portal** — No local troubleshooting content was created.
14. **Routed to the separate portal** — No local architecture guides or technical diagrams were created.
15. **Implemented** — `/glossary/` explains public-listing, source, release and licensing terms in plain language.
16. **Implemented in scope** — Product search/category filters run locally; technical-guide search remains on the docs portal.

## Company story and leadership

17. **Not published** — No sufficiently sourced company-history timeline was provided; website changelog entries are clearly limited to this information hub.
18. **Implemented to confirmed scope** — Leadership page lists only the three confirmed names/roles and links to the CEO and co-founder profile sites. Additional bios and role dates are not published.
19. **Not published** — No decision-making or governance process was supplied.
20. **Not published** — No opt-in contributor directory/permissions were supplied; repository contribution activity is not used to infer identities.
21. **Implemented** — About and homepage distinguish the information hub, GothwadTech.com portal and separate docs site.
22. **Implemented with limits** — `/media-kit/` includes the available logo/social asset and neutral copy. Brand-use/trademark terms are not published.
23. **Not published** — No verified newsroom or company announcement archive was supplied.
24. **Not published** — Careers page says job listings are not published on this hub; it does not claim no jobs exist elsewhere.

## Trust, safety, privacy and legal clarity

25. **Partially implemented** — Security page links visitors to repository-specific private reporting options if present. A central route, response expectations and safe-harbor scope are not published.
26. **Partially implemented** — Privacy/legal index links known browser-policy repositories and states that a universal cross-product policy is not published here.
27. **Implemented as a dated snapshot** — Repository directory shows GitHub licence metadata for 54 public repos, marking “No licence listed” where metadata returned none. Fork/upstream notes remain visible; this is not a legal audit.
28. **Not published** — No maintainer-reviewed data-flow diagrams were supplied.
29. **Implemented with limits** — Accessibility page describes site practices and known limits; no independent WCAG audit/certification is claimed.
30. **Implemented as a clear unavailable state** — Status page states that no consolidated real-time feed, uptime history or SLA is published.
31. **Implemented** — Support page gives project-specific routes and explicitly avoids response-time/support commitments.
32. **Implemented** — Trust page brings together privacy, security, licensing and status boundaries without implying certification.

## Open source and community

33. **Implemented as routing** — `/contribute/` points visitors to the owning repository’s contribution rules rather than copying developer guides.
34. **Not published** — No verified maintainer/ownership map with consent was provided.
35. **Routed to the separate docs portal** — No local first-contribution setup instructions were created.
36. **Implemented as a live query link** — Contribution page links to GitHub’s current open “good first issue” search; it does not claim that results exist.
37. **Not published** — No approved community showcase submissions or permissions were supplied.
38. **Implemented as a live destination** — Contribution page links to organization discussions; actual availability is left to GitHub.
39. **Not published** — Events page states that no event schedule is published here.
40. **Not published** — No opt-in contributor recognition permissions were supplied.

## Search and content strategy

41. **Implemented** — Individual product pages, category views and the goal/platform finder cover product discovery intents without claiming availability.
42. **Not duplicated here** — Technical articles belong in the separate docs repository; no reviewed public-information articles were supplied.
43. **Manual after deployment** — Search Console inspection, query review and crawl diagnostics require the owner’s live property. Required Google verification meta tag is preserved in `index.html`.
44. **Manual after deployment** — Bing Webmaster Tools verification and sitemap submission require the site owner’s account.
45. **Implemented** — 23 product pages have separate 1200×630 social preview images.
46. **Implemented** — Product categories, portfolio map and public-language glossary form basic topic navigation.
47. **Not published** — No competitor-comparison claims or approved first-party alternatives data were supplied.
48. **Omitted by choice** — The user selected English-only content.

## Accessibility, performance and user experience

49. **Implemented in code; manual audit pending** — Keyboard-operable links, buttons, filters, native checkboxes, Escape-to-close navigation and visible focus styles are present. No external keyboard audit is claimed.
50. **Implemented in code; manual audit pending** — Semantic headings/landmarks, labels and live result counts are used. No screen-reader audit is claimed.
51. **Partially implemented** — Responsive styles and accessibility statement are present; WCAG 2.2 AA conformance is not certified.
52. **Not measured** — Production Core Web Vitals require deployment and real-device measurements.
53. **Partially implemented** — Product/source logos are stored locally and compressed; a full automated AVIF/WebP pipeline is intentionally absent from the build-free site.
54. **Implemented in CSS; manual test matrix pending** — Responsive layouts support narrow and wider viewports; no device lab results are claimed.
55. **Not implemented** — No user feedback justified adding a separate light/high-contrast theme.
56. **Not applicable to current scope** — No long-form technical documentation is hosted here; documentation remains separate.

## SEO engineering and site maintenance

57. **Manual after deployment** — Submit the generated sitemap in Google Search Console and verify live canonical/index status.
58. **Manual after deployment** — Confirm the preserved verification meta tag on the published HTTPS page.
59. **Implemented and checked locally** — Internal links/fragments are included in the static QA check; external destinations still require periodic review.
60. **Implemented and checked locally** — Sitemap is regenerated from canonical static pages, excluding the noindex 404 page.
61. **Implemented and checked locally** — JSON-LD is included where appropriate and parsed during QA; live rich-result validation remains manual.
62. **Not needed in this change** — Existing public product slugs were retained; no old route was removed or redirected.
63. **Implemented as a manual refresh process** — Review dates are displayed; GitHub Pages remains build-free.
64. **Implemented as a local QA check** — HTML structure, sitemap URLs, internal paths/fragments, JavaScript syntax and diff whitespace are checked before handoff.

## Measurement and sustainable publishing

65. **Omitted by choice** — No analytics or SEO tracking was requested. No ranking or traffic targets are asserted.
66. **Implemented by choice** — No third-party analytics, advertising pixels or tracking script is embedded.
67. **Manual and not enabled** — Search-query review can only happen after the owner uses Search Console; no analytics data is collected here.
68. **Not published** — No named editorial owner or announcement calendar was supplied.
69. **Not published by design** — No RSS feed is created for generic website changes; a feed should wait for verified product/company updates.
70. **Implemented** — `/updates/` records changes to this website only and is explicitly not a product changelog.
71. **Implemented as a low-data route** — Contact page links to existing public routes; there is no embedded form or analytics.
72. **Documented for manual review** — Recheck leadership links, product/source/licence snapshots and legal/status boundaries each quarter or after a relevant source change.
