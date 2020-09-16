// @ts-check
const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
const yaml = require('js-yaml');
const POSTS = '**/_posts/*.{md,html}'

const categories = {
    comp: {
        lang: {
            javascript: {},
        },
    },
    sci: {
        lang: {},
    },
};

/**
 * 
 * @param {import('@11ty/eleventy/src/UserConfig')} eleventyConfig 
 */
module.exports = eleventyConfig => {
    '_ robots.txt favicon.ico *.png crossdomain.xml'
        .split(' ')
        .forEach(file => eleventyConfig.addPassthroughCopy(file));

    eleventyConfig.addPlugin(syntaxHighlight);
    eleventyConfig.addFilter('date_to_long_string', dateToLongString);
    eleventyConfig.addFilter('date_to_xmlschema', dateToIsoString);
    eleventyConfig.addDataExtension('yml', contents => yaml.safeLoad(contents));
    eleventyConfig.setDataDeepMerge(true);
    eleventyConfig.addCollection('posts', collectionApi => collectionApi
        .getFilteredByGlob(POSTS)
        .filter(isPublished));
    addCategories(categories);
    return {
        dir: {
            includes: '_includes',
            layouts: '_layouts'
        },
    };

    /**
     * @param {string} name 
     */
    function addCategory(name) {
        const glob = `${name.replace(/\./g, '/')}/${POSTS}`;
        eleventyConfig.addCollection(name, collectionApi => collectionApi
            .getFilteredByGlob(glob)
            .filter(isPublished)
            .reverse());
    }

    /**
     * @param {Object} categories 
     * @param {string=} parent 
     */
    function addCategories(categories, parent) {
        Object.entries(categories).forEach(([name, child]) => {
            const category = parent ? `${parent}.${name}` : name;
            addCategory(category);
            addCategories(child, category);
        })
    }
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

/**
 * @param {Date} date 
 */
const dateToIsoString = date => date.toISOString();

/**
 * 
 * @param {Object} post 
 * @param {Object} post.data
 * @param {boolean=} post.data.published
 * @return {boolean} whether a post is published
 */
function isPublished(post) {
    return post.data.published !== false;
}
