// 初始化 AOS 动画库
AOS.init();

// 作品数据
const projects = [
    {
        id: 1,
        title: "项目名称1",
        description: "项目描述内容",
        image: "path-to-image1.jpg"
    },
    {
        id: 2,
        title: "项目名称2",
        description: "项目描述内容",
        image: "path-to-image2.jpg"
    },
    // 添加更多项目...
];

// 渲染作品集
function renderPortfolio() {
    const portfolioGrid = document.getElementById('portfolio-grid');
    
    projects.forEach(project => {
        const card = document.createElement('div');
        card.className = 'col-md-4';
        card.innerHTML = `
            <div class="portfolio-card" data-aos="fade-up">
                <img src="${project.image}" alt="${project.title}" class="portfolio-image">
                <div class="portfolio-info">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                </div>
            </div>
        `;
        portfolioGrid.appendChild(card);
    });
}

// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
    renderPortfolio();
}); 