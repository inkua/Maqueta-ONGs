import card from './cards.json';
import ong_logo from "assets/ong-logo.png";
import img_index from 'assets/img-index.png';
import img_volunteer_hero from 'assets/img-volunteers.png';
import img_volunteer_form from 'assets/img-volunteerForm-2.png';

const DATA = {
  name: "ONG'S NAME",
  /**
    * #TODO
    * description will likely to be in a `.txt` file or smth like that
    * and then parsed + saved into this string
    * we can also use yml or json to easily import the values
  */
  description: "ONG'S DESCRIPTION",
  email: "ONG'S EMAIL",
  phone: "ONG'S PHONE",
  address: "ONG'S ADDRESS",
  social: {
    facebook: "ONG'S FACEBOOK",
    instagram: "ONG'S INSTAGRAM",
  },
  logo: ong_logo,
  styles: {
    colors: {
      primary: '#D9D9D9', //color for navbar and footer
      card: '#5D5F60', //color for cards and accordion
      button: '#2A2A2A', //color for buttons and borders
      buttonLang: '#474849', //color for button to change languaje
      form: {
        container: '#E9E7E7', //color for form container
        input: '#CBC9C9', //color for inputs
      },
      fontColorPrimary: '#000000',
      fontColorSecondary: '#FFFFFF',
    }
  },
  pages: {
    indexPage: {
      dataHero: {
        title: "ONG'S NAME",
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labor',
        linkContent: 'Donate now',
        linkAction: '#',
        fillLinkButton: true,
        urlImage: img_index,
      },
      aboutUs: {
        title: 'About us',
        paragraphOne: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit',
        paragraphTwo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit',
      },
      dataSlides: [
        {
          title: 'Our partners',
          heightSlide: '350px',
          widthCards: 327,
          dataCards: [
            {
              id: 1,
              image: '',
              description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              buttonMore: true,
            },
            {
              id: 2,
              image: '',
              description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              buttonMore: true,
            },
            {
              id: 3,
              image: '',
              description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              buttonMore: true,
            },
            {
              id: 4,
              image: '',
              description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              buttonMore: true,
            },
          ]
        },
        {
          title: 'Our supporters',
          heightSlide: '300px',
          widthCards: 327,
          dataCards: [
            {
              id: 1,
              image: '',
              description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              buttonMore: true,
            },
            {
              id: 2,
              image: '',
              description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              buttonMore: true,
            },
            {
              id: 3,
              image: '',
              description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              buttonMore: true,
            },
            {
              id: 4,
              image: '',
              description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              buttonMore: true,
            },
          ]
        }
      ]
    },
    news: {
      dataHero: {
        title: 'Latest news',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labor',
        linkContent: 'Go to video',
        linkAction: 'https://www.youtube.com/embed/hlL9hcCNS6U',
        urlImage: '',
        urlVideo: 'https://www.youtube.com/embed/hlL9hcCNS6U'
      },
      dataSlides: [
        {
          title: 'Ukraine now',
          heightSlide: '330px',
          widthCards: 327,
          dataCards: [
            {
              id: 1,
              image: '',
              title: 'Titulo 1',
              buttonArrow: true
            },
            {
              id: 2,
              image: '',
              title: 'Titulo 2',
              buttonArrow: true
            },
            {
              id: 3,
              image: '',
              title: 'Titulo 3',
              buttonArrow: true
            },
            {
              id: 4,
              image: '',
              title: 'Titulo 4',
              buttonArrow: true
            },
            {
              id: 5,
              image: '',
              title: 'Titulo 5',
              buttonArrow: true
            },
          ]
        },
        {
          title: 'Stories and testimonies',
          heightSlide: '350px',
          widthCards: 300,
          dataCards: [
            {
              id: 1,
              image: '',
              description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              buttonMore: true
            },
            {
              id: 2,
              image: '',
              description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              buttonMore: true
            },
            {
              id: 3,
              image: '',
              description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              buttonMore: true
            },
            {
              id: 4,
              image: '',
              description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              buttonMore: true
            },
            {
              id: 5,
              image: '',
              description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              buttonMore: true
            },
          ]
        }
      ]
    },
    volunteerForm: {
      imageForm: img_volunteer_form,
      dataHero: {
        title: "Want to join us",
        description: 'BECOME A VOLUNTEER \n Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labor',
        linkContent: 'Complete the form',
        linkAction: '#volunteer_form',
        urlImage: img_volunteer_hero,
      },
    },
    getHelp: {
      dataHero: {
        title: "I NEED HELP",
        description: 'DO YOU NEED SHELTER? CLOTHES? FOOD? \n Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labor',
        linkContent: 'GET HELP',
        linkAction: '/get-help',
        urlImage: img_volunteer_hero,
      },
      accordions: [
        {
          title: 'ONG #1', //title that the accordion will receive
          description: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enimd minim. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor“', //description that the accordion will receive
          isOpen: true, //an optional parameter that sets the accordion open or close, depends on value
        },
        {
          title: 'ONG #2',
          description: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enimd minim. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor“',
          isOpen: true,
        },
        {
          title: 'ONG #3',
          description: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enimd minim. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor“',
          isOpen: true,
        },
        {
          title: 'ONG #4',
          description: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enimd minim. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor“',
          isOpen: true,
        },
        {
          title: 'ONG #5',
          description: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enimd minim. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor“',
          isOpen: true,
        },
        {
          title: 'ONG #6',
          description: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enimd minim. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor“',
          isOpen: true,
        },
      ]
    }
  },
  about_us: card["about-us"],
  requeriments: card.volunteer.requirements,
  experiences: card.volunteer.experiences
}

export default DATA;
