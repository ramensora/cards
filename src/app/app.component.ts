import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  posts = [
    {
      title: "Voedselbank Amsterdam",
      imageUrl:
        "https://amsterdam.voedselbank.org/wp-content/uploads/2019/11/Archangelkade-11.jpg",
      username: "Kenneth",
      content:
        "Bijna 90.000 mensen in Amsterdam leven onder de armoedegrens. De 400 onbetaalde vrijwilligers bij Voedselbank Amsterdam delen elke week eten uit aan ongeveer 3800 mensen (1800 kinderen). Door de coronacrisis hebben we op dit moment een toename in klanten van maar liefst 30%! Jouw financiële hulp is daarbij hard nodig.",
    },
    {
      title: "Angular",
      username: "Kenneth",
      imageUrl:
        "https://angular.io/generated/images/marketing/home/responsive-framework.svg",
      content:
        "Section 3: Building Components",
    },
    {
      title: "Angular",
      username: "Amay",
      imageUrl:
        "https://angular.io/generated/images/marketing/home/responsive-framework.svg",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.",
    },
    {
      title: "Voedselbank Amsterdam",
      imageUrl:
        "https://amsterdam.voedselbank.org/wp-content/uploads/2019/11/Archangelkade-11.jpg",
      username: "Kenneth",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.",
    },
    {
      title: "Angular",
      username: "Kenneth",
      imageUrl:
        "https://angular.io/generated/images/marketing/home/responsive-framework.svg",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.",
    },
    {
      title: "Angular",
      username: "Amay",
      imageUrl:
        "https://angular.io/generated/images/marketing/home/responsive-framework.svg",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.",
    },
    {
      title: "Voedselbank Amsterdam",
      imageUrl:
        "https://amsterdam.voedselbank.org/wp-content/uploads/2019/11/Archangelkade-11.jpg",
      username: "Kenneth",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.",
    },
    {
      title: "Angular",
      username: "Kenneth",
      imageUrl:
        "https://angular.io/generated/images/marketing/home/responsive-framework.svg",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.",
    },
    {
      title: "Angular",
      username: "Amay",
      imageUrl:
        "https://angular.io/generated/images/marketing/home/responsive-framework.svg",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.",
    },
  ];
}
