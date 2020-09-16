module.exports = {
    permalink(data) {
        if (!data.permalink && data.page.filePathStem.includes('/_posts/')) {
            return data.page.filePathStem.replace(/_posts\/([^\/]*$)/, '$1/index.html');
        }
        return data.permalink;
    },
    categories(data) {
        if (!data.categories) {
            /** @type {string} */
            const match = data.page.inputPath.match(/\.\/(.*)\/_posts/);
            return match && match[1].split('/') || []
        }
        return data.categories;
    }
};
