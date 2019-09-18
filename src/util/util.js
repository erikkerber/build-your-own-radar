export function capitalize(string) {
    return string.split(' ').map(part => {
        return part[0].toUpperCase() + part.substring(1).toLowerCase();
    }).join(' ');
}

export function extractDomainName(url) {
    let search = /.+:\/\/([^\\/]+)/;
    let match = search.exec(decodeURIComponent(url.replace(/\+/g, ' ')));
    return match == null ? null : match[1];
}

export function extractFileName(url) {
    let search = /([^\\/]+)$/;
    let match = search.exec(decodeURIComponent(url.replace(/\+/g, ' ')));
    if (match != null) {
        return match[1];
    }
    return url;
}

export function extractQueryParams(queryString) {
    let decode = function (s) {
        return decodeURIComponent(s.replace(/\+/g, ' '));
    };

    let search = /([^&=]+)=?([^&]*)/g;
    let queryParams = {};
    let match;

    while ((match = search.exec(queryString))) {
        queryParams[decode(match[1])] = decode(match[2]);
    }

    return queryParams;
}