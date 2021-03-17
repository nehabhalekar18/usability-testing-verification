import ArcTriomphe from "../assets/arcTriomphe.jpg";
import AvenueChamps from "../assets/avenueChamps.jpg";
import BoulevardsCafe from "../assets/boulevardsCafes.jpg";
import CathedraleNotreDame from "../assets/cathedraleNotreDame.jpg";
import EiffelTowerImg from "../assets/eiffelTower.jpg";
import LesInvalides from "../assets/lesInvalides.jpg";
import Montmartre from "../assets/montmartre.jpg";
import Orsay from "../assets/musedOrsay.jpg";
import LouvreImg from "../assets/museDuLouvre.jpg";
import PalaisGarnier from "../assets/palaisGarnier.jpg";
import PlaceConcorde from "../assets/placeConcorde.jpg";
import SacreCoeur from "../assets/sacreCoeur.jpg";
import SeineRiverCruises from "../assets/seineRiverCruises.jpg";

const placesToVisit = {
  topsights: [
    {
      id: 1,
      name: "Eiffel Tower",
      subData: "Champ de Mars, 5 Avenue Anatole France",
      description:
        "The iconic tower was designed by Alexandre-Gustave Eiffel for the Paris Exhibition of 1889.",
      img: EiffelTowerImg,
      state: false,
    },
    {
      id: 2,
      name: "Musée du Louvre",
      subData: "Rue de Rivoli, 75001 Paris, France",
      description:
        "A sumptuous palace that was once the home of France's Kings.",
      img: LouvreImg,
      state: false,
    },
    {
      id: 3,
      name: "Cathédrale Notre-Dame de",
      subData: "6 Parvis Notre-Dame - Pl. Jean-Paul II, France",
      description:
        "A triumph of Gothic architecture, the Notre-Dame stands in the heart of Paris.",
      img: CathedraleNotreDame,
      state: false,
    },

    {
      id: 4,
      name: "Avenue des Champs-Élysées",
      subData: "Avenue in Paris, France",
      description:
        "The Champs-Elysées is famous for its prestigious establishments, such as Maison Ladurée",
      img: AvenueChamps,
      state: false,
    },
  ],
  monuments: [
    {
      id: 5,
      name: "Palais Garnier",
      subData: "Place de l'Opéra, France",
      description:
        "The Palais Garnier Opera House was designed by Charles Garnier in an exuberant Baroque style.",
      img: PalaisGarnier,
      state: false,
    },
    {
      id: 6,
      name: "Place de la Concorde",
      subData: "75008 Paris, France",
      description:
        "The impressive octagonal square is at the heart of 18th-century Paris.",
      img: PlaceConcorde,
      state: false,
    },
    {
      id: 7,
      name: "Arc de Triomphe",
      subData: "Place Charles de Gaulle, France",
      description:
        "Dedicated to the soldiers who fought in the French armies of the Revolution and the First Empire.",
      img: ArcTriomphe,
      state: false,
    },
    {
      id: 8,
      name: "Sacré-Coeur",
      subData: "35 Rue du Chevalier de la Barre, France",
      description:
        "The striking mosaic of Christ with a flaming heart gives the sanctuary an emotional and spiritual intensity.",
      img: SacreCoeur,
      state: false,
    },
  ],
  museums: [
    {
      id: 9,
      name: "Musée du Louvre",
      subData: "Rue de Rivoli, 75001 Paris, France",
      description:
        "A sumptuous palace that was once the home of France's Kings.",
      img: LouvreImg,
      state: false,
    },
    {
      id: 10,
      name: "Musée d'Orsay",
      subData: "1 Rue de la Légion d'Honneur, Paris, France",
      description:
        "The museum holds mainly French art dating from 1848 to 1914, including paintings and photography.",
      img: Orsay,
      state: false,
    },
    {
      id: 11,
      name: "Les Invalides",
      subData: "129 Rue de Grenelle, France",
      description:
        "Les Invalides has an Army Museum, which occupies the wings around the courtyard.",
      img: LesInvalides,
      state: false,
    },
    {
      id: 12,
      name: "Musée du Montmartre",
      subData: "12 Rue Cortot, France",
      description:
        "The buildings were formerly the home of several famous artists.",
      img: Montmartre,
      state: false,
    },
  ],
  thingsToDo: [
    {
      id: 13,
      name: "La Coupole",
      subData: "102 Boulevard Montparnasse",
      description:
        "Classic French brasserie with a mythical past; since the 1920s",
      img: BoulevardsCafe,
      state: false,
    },
    {
      id: 14,
      name: "Seine River Cruises",
      subData: "Port de la Bourdonnais",
      description:
        "Parisians flock to the banks along the Seine River for a mini holiday experience.",
      img: SeineRiverCruises,
      state: false,
    },
    {
      id: 15,
      name: "Parc des Buttes-Chaumont",
      subData: "1 Rue Botzaris, France",
      description:
        "A peaceful little oasis of nature that is treasured by locals, the Parc des Buttes-Chaumont.",
      img: Montmartre,
      state: false,
    },
    {
      id: 16,
      name: "Tour Saint-Jacques",
      subData: "Square de la Tour Saint-Jacques, France",
      description:
        "The Place du Châtelet stands at the very center of Paris in the 1st arrondissement, overlooking the Seine River.",
      img: SeineRiverCruises,
      state: false,
    },
  ],
};
export default placesToVisit;
