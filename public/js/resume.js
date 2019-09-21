const resume = [
    {
        year: 'November 2014 - November 2017',
        title: 'ISTANA CARWASH (Carwash Machine Distributor)',
        subtitle: 'IT SUPPORT AND ADMIN WEB',
        description: 'Maintenance Network and Handle Technical Problem about IT, Create company website with wordpress and maintenance it, Simple design product'
    },
    {
        year: 'Januari 2018 - Januari 2019',
        title: 'PT Ellen May Institute',
        subtitle: 'IT Staff',
        description: 'Maintenance Network and Handle Technical Problem about IT, Create company website with wordpress and maintenance it, Update database everyday'
    },
    {
        year: 'Juny 2019 - July 2019',
        title: 'OCBC NISP',
        subtitle: 'Front End Developer',
        description: 'Build scalable website for KTA(Kredit Tanpa Agunan)'
    }
]

// Create Container Utama
function createMainContainer(position) {
    const mainContainer = document.createElement('div');

    mainContainer.classList.add('container');
    return mainContainer;
}

// Create Container untuk Content
function createContainerContent(year, title, subtitle, description) {
    const content = document.createElement('div');
    const yearContent = document.createElement('h3');
    yearContent.innerHTML = year;
    const titleContent = document.createElement('h3');
    titleContent.innerHTML = title;
    const subtitleContent = document.createElement('p');
    subtitleContent.innerHTML = subtitle;
    const descriptionContent = document.createElement('p');
    descriptionContent.innerHTML = description;

    content.classList.add('content');
    content.appendChild(yearContent);
    content.appendChild(titleContent);
    content.appendChild(subtitleContent);
    content.appendChild(descriptionContent);
    return content;
}

const wrapper = document.getElementsByClassName('timeline')[0];

resume.forEach((element, index) => {
    const mainContainer = createMainContainer();
    mainContainer.appendChild(createContainerContent(element.year, element.title, element.subtitle, element.description));
    console.log(index + 1);
    if ((index + 1) % 2 === 0) {
        mainContainer.classList.add('right');
    } else {
        mainContainer.classList.add('left');
    }
    wrapper.appendChild(mainContainer);
});




