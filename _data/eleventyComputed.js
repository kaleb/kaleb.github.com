module.exports = {
    permalink: data => {
        if (!data.permalink && data.page.filePathStem.includes('/_posts/')) {
            return data.page.filePathStem.replace(/_posts\/([^\/]*$)/, '$1/index.html');
        }
        return data.permalink;
    },
};
