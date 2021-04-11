import { Sections } from "./Sections";
import { Socialmedia } from "./SocialMedia";

export interface HomeSettings {
    _id?: string;
    contact_mail?: string;
    header?: string;
    sections?: Sections;
    socialmedia?: Socialmedia;
    title?: string;
}
