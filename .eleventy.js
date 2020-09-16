// @ts-check
const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
const yaml = require('js-yaml');
const {XmlEntities} = require('html-entities');
const xmlFiltersPlugin = require('eleventy-xml-plugin');
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
    '_ robots.txt favicon.ico *.png'
        .split(' ')
        .forEach(file => eleventyConfig.addPassthroughCopy(file));

    eleventyConfig.addPlugin(syntaxHighlight);
    eleventyConfig.addFilter('date_to_long_string', dateToLongString);
    eleventyConfig.addFilter('to_date', toDate);
    eleventyConfig.addPlugin(xmlFiltersPlugin);
    eleventyConfig.liquidFilters['xml_escape'] = function (args) {
        // fix broken filter
        return XmlEntities.encode(args);
    }
    eleventyConfig.addDataExtension('yml', contents => yaml.safeLoad(contents));
    eleventyConfig.setDataDeepMerge(true);
    eleventyConfig.addCollection('posts', collectionApi => collectionApi
        .getFilteredByGlob(POSTS)
        .filter(isPublished)
        .reverse());
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
 * @param {Date|'now'} date 
 */
const toDate = date => {
    if (date === 'now') date = new Date();
    return date;
}

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
