// @ts-check
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const yaml = require('js-yaml');

/**
 * 
 * @param {import('@11ty/eleventy/src/UserConfig')} eleventyConfig 
 */
module.exports = eleventyConfig => {
    eleventyConfig.addPassthroughCopy("_");

    eleventyConfig.addPlugin(syntaxHighlight);
    eleventyConfig.addFilter('date_to_long_string', dateToLongString);
    eleventyConfig.addDataExtension("yml", contents => yaml.safeLoad(contents));
    eleventyConfig.setDataDeepMerge(true);
    eleventyConfig.addCollection('posts', collectionApi =>  collectionApi
        .getFilteredByGlob('**/_posts/*.{md,html}')
        .filter(x => x.data.published !== false));
    return {
        dir: {
            includes: "_includes",
            layouts: "_layouts"
        },
    };
}


const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
]

/**
 * @param {Date} date 
 */
const dateToLongString = date => `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
