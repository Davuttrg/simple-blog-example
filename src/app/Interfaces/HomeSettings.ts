import { Socialmedia } from './SocialMedia';

export interface HomeSettings {
  _id?: string;
  contact_mail?: string;
  header?: string;
  section1?: string;
  section2?: string;
  section3?: string;
  section4?: string;
  socialmedia?: Socialmedia;
  title?: string;
}
