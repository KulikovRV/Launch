module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('CVs', [{
      title: 'Junior Frontend Developer',
      elbrus: true,
      github: 'https://github.com/KulikovRV/',
      contact: '+777777777',
      body: 'react-master',
      awards: 'МС по кикеру',
      experience: '3 месяца жестких тренировок в Elbrus',
      education: 'ПТУ - сантехник',
      views: '10',
      user_id: 1,
    }, {
      title: 'Middle Frontend-разработчик',
      elbrus: false,
      github: 'https://github.com/KulikovRV/',
      contact: '+79473456789',
      body: 'unix, shell-script, nginx, git, nodejs, mongodb, redis ruby - eventmachine, thin, sinatra javascript - jquery, backbone,',
      awards: 'МС по сну',
      experience: 'Сентябрь 2022 — по настоящее время',
      education: 'Московский государственный технический университет им. Н.Э. Баумана, Москва',
      views: '190',
      user_id: 1,
    }, {
      title: 'Javascript junior',
      elbrus: false,
      github: 'https://github.com/Kulikov/',
      contact: '+79473263789',
      body: 'js html css ,',
      awards: 'МС по сну',
      experience: 'Сентябрь 2012 — по настоящее время',
      education: 'Московский государственный технический ',
      views: '130',
      user_id: 1,
    }, {
      title: 'Frontend-разработчик',
      elbrus: true,
      github: 'https://github.com/marat/',
      contact: '+79473236789',
      body: 'html css ,',
      awards: 'МС по сну',
      experience: 'Homefutures Сентябрь 2020 — по настоящее время',
      education: 'Казанский (Приволжский) федеральный университет, Казань',
      views: '99',
      user_id: 1,
    }, {
      title: 'Junior Frontend Developer',
      elbrus: true,
      github: 'https://github.com/KulikovRV/',
      contact: '+777777777',
      body: 'react-master',
      awards: 'МС по кикеру',
      experience: '3 месяца жестких тренировок в Elbrus',
      education: 'ПТУ - сантехник',
      views: '10',
      user_id: 1,
    }, {
      title: 'Middle Frontend-разработчик',
      elbrus: false,
      github: 'https://github.com/KulikovRV/',
      contact: '+79473456789',
      body: 'unix, shell-script, nginx, git, nodejs, mongodb, redis ruby - eventmachine, thin, sinatra javascript - jquery, backbone,',
      awards: 'МС по сну',
      experience: 'Сентябрь 2022 — по настоящее время',
      education: 'Московский государственный технический университет им. Н.Э. Баумана, Москва',
      views: '190',
      user_id: 1,
    }, {
      title: 'Javascript junior',
      elbrus: false,
      github: 'https://github.com/Kulikov/',
      contact: '+79473263789',
      body: 'js html css ,',
      awards: 'МС по сну',
      experience: 'Сентябрь 2012 — по настоящее время',
      education: 'Московский государственный технический ',
      views: '130',
      user_id: 1,
    }, {
      title: 'Frontend-разработчик',
      elbrus: true,
      github: 'https://github.com/marat/',
      contact: '+79473236789',
      body: 'html css ,',
      awards: 'МС по сну',
      experience: 'Homefutures Сентябрь 2020 — по настоящее время',
      education: 'Казанский (Приволжский) федеральный университет, Казань',
      views: '99',
      user_id: 1,
    }, {
      title: 'Junior Frontend Developer',
      elbrus: true,
      github: 'https://github.com/KulikovRV/',
      contact: '+777777777',
      body: 'react-master',
      awards: 'МС по кикеру',
      experience: '3 месяца жестких тренировок в Elbrus',
      education: 'ПТУ - сантехник',
      views: '10',
      user_id: 1,
    }, {
      title: 'Middle Frontend-разработчик',
      elbrus: false,
      github: 'https://github.com/KulikovRV/',
      contact: '+79473456789',
      body: 'unix, shell-script, nginx, git, nodejs, mongodb, redis ruby - eventmachine, thin, sinatra javascript - jquery, backbone,',
      awards: 'МС по сну',
      experience: 'Сентябрь 2022 — по настоящее время',
      education: 'Московский государственный технический университет им. Н.Э. Баумана, Москва',
      views: '190',
      user_id: 1,
    }, {
      title: 'Javascript junior',
      elbrus: false,
      github: 'https://github.com/Kulikov/',
      contact: '+79473263789',
      body: 'js html css ,',
      awards: 'МС по сну',
      experience: 'Сентябрь 2012 — по настоящее время',
      education: 'Московский государственный технический ',
      views: '130',
      user_id: 1,
    }, {
      title: 'Frontend-разработчик',
      elbrus: true,
      github: 'https://github.com/marat/',
      contact: '+79473236789',
      body: 'html css ,',
      awards: 'МС по сну',
      experience: 'Homefutures Сентябрь 2020 — по настоящее время',
      education: 'Казанский (Приволжский) федеральный университет, Казань',
      views: '99',
      user_id: 1,
    }, {
      title: 'Junior Frontend Developer',
      elbrus: true,
      github: 'https://github.com/KulikovRV/',
      contact: '+777777777',
      body: 'react-master',
      awards: 'МС по кикеру',
      experience: '3 месяца жестких тренировок в Elbrus',
      education: 'ПТУ - сантехник',
      views: '10',
      user_id: 1,
    }, {
      title: 'Middle Frontend-разработчик',
      elbrus: false,
      github: 'https://github.com/KulikovRV/',
      contact: '+79473456789',
      body: 'unix, shell-script, nginx, git, nodejs, mongodb, redis ruby - eventmachine, thin, sinatra javascript - jquery, backbone,',
      awards: 'МС по сну',
      experience: 'Сентябрь 2022 — по настоящее время',
      education: 'Московский государственный технический университет им. Н.Э. Баумана, Москва',
      views: '190',
      user_id: 1,
    }, {
      title: 'Javascript junior',
      elbrus: false,
      github: 'https://github.com/Kulikov/',
      contact: '+79473263789',
      body: 'js html css ,',
      awards: 'МС по сну',
      experience: 'Сентябрь 2012 — по настоящее время',
      education: 'Московский государственный технический ',
      views: '130',
      user_id: 1,
    }, {
      title: 'Frontend-разработчик',
      elbrus: true,
      github: 'https://github.com/marat/',
      contact: '+79473236789',
      body: 'html css ,',
      awards: 'МС по сну',
      experience: 'Homefutures Сентябрь 2020 — по настоящее время',
      education: 'Казанский (Приволжский) федеральный университет, Казань',
      views: '99',
      user_id: 1,
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('CVs', null, {});
  }
};