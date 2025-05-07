import HelpBox from './HelpBox';
import './HelpArea.css';

const HELP_ITEMS = [
  {
    id: 'h1',
    title: 'Maikol pelaez?',
    text: 'Soy un devessssloper de software con experiencia en el desarrollo de aplicaciones web y móviles. Me apasiona aprender nuevas tecnologías y mejorar mis habilidades constantemente.',
  },
  {
    id: 'h2',
    title: 'What is GitHub?',
    text: 'GitHub is a ss and online offering, providing you with tons of Git-related services (e.g., cloud repositories).',
  },
  {
    id: 'h3',
    title: 'What is GitHub Actions?',
    text: 'GitHub Actions is an automation service (or CI / CD service) that helps you automate repository-related workflows and processes.',
  },
  {
    id: 'h1',
    title: 'este es mi comentario adicional',
    text: 'prueba de desarrollo de maikol',
  },
];

function HelpArea() {
  return (
    <section data-testid="help-area" id="help-area">
      {HELP_ITEMS.map((item) => (
        <HelpBox key={item.id} title={item.title} text={item.text} />
      ))}
    </section>
  );
}

export default HelpArea;
