# Web scraping HTTP request summaries

This project was set up to programmatically scrape the web for quick summaries about HTTP request codes.

## The problem

I'm often looking for a quick summary of what a status code means. Usually this means context-switching ([which is not great for productivity](https://www.apa.org/research/action/multitask)) to go to the browser, open a new tab, type in a search term and so on. This doesn't seem like a huge deal for a single search query, but it adds up if you have to do it a few times a day over a few months (or years).

Also, if you're on a train or plane working, and want to know what a status code means - you need to wait for the internet before looking a status code up.

## The solution

The [stts npm package](https://www.npmjs.com/package/stts) is an offline status code checker that you can access in your terminal to get a quick summary of a status code you've just encountered. This hopefully helps someone out there save a few more seconds.
