const projects =[
    { title: 'four-card', url: '/four-card/index.html' },
    { title: 'base-apparel-coming-soon', url: '/base-apparel-coming-soon/index.html' },
    { title: 'signup-form', url: '/signup-form/index.html' },
    { title: 'huddle-landing-page', url: '/huddle-landing-page/index.html' }
]

const list = document.getElementById('list');


projects.forEach(project => {

    const listItem = document.createElement('li');
    const link = document.createElement('a');
    const image = document.createElement('img');

    image.src = `/${ project.title }/design/desktop-design.jpg`;

    link.href = `${ project.url }`;
    link.innerText = `${ formatProjectName(project.title) }`
    link.prepend(image);

    listItem.appendChild(link);
    list.appendChild(listItem);
});

function formatProjectName(name) {
    return projectName = name.split('-')
                            .map(word => word[0].toUpperCase() + word.slice(1))
                            .join(' ');
               
}
