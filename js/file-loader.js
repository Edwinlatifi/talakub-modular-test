async function loadFile(elementId, filePath) {
    try {
        const response = await fetch(filePath);
        if (!response.ok) throw new Error(`خطا در لود فایل: ${filePath}`);
        const content = await response.text();
        document.getElementById(elementId).innerHTML = content;
    } catch (error) {
        console.error('خطا:', error);
    }
}

loadFile('security-container', 'components/security/security.html');
loadFile('navbar-container', 'components/navbar/navbar.html');
loadFile('header-container', 'components/header/header.html');
loadFile('rotating-logo-container', 'components/rotating-logo/rotating-logo.html');
loadFile('price-table-container', 'components/price-table/price-table.html');
loadFile('news-box-container', 'components/news-box/news-box.html');
loadFile('articles-box-container', 'components/articles-box/articles-box.html');
loadFile('blog-box-container', 'components/blog-box/blog-box.html');
loadFile('other-domains-container', 'components/other-domains/other-domains.html');
loadFile('stats-box-container', 'components/stats-box/stats-box.html');